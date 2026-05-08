import 'dotenv/config';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import { sanitizeAnswers, summarizeStageResults } from './src/lib/assessment.js';
import { createDatabasePool, initializeDatabase } from './src/server/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3001);
const HOST = process.env.HOST || '0.0.0.0';
const databaseUrl = process.env.DATABASE_URL;
const exportToken = process.env.EXPORT_TOKEN;
const pool = createDatabasePool(databaseUrl);

app.use(cors());
app.use(express.json());

function isUuid(value) {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function parseExportFormat(value) {
  return value === 'json' ? 'json' : 'csv';
}

function escapeCsvCell(value) {
  const stringValue = value == null ? '' : String(value);
  if (!/[",\n]/.test(stringValue)) {
    return stringValue;
  }
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function rowsToCsv(rows) {
  if (!rows.length) {
    return '';
  }

  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set()),
  );

  const lines = [
    headers.map(escapeCsvCell).join(','),
    ...rows.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          if (typeof value === 'object' && value !== null) {
            return escapeCsvCell(JSON.stringify(value));
          }
          return escapeCsvCell(value);
        })
        .join(','),
    ),
  ];

  return lines.join('\n');
}

function sendExport(res, filename, format, rows) {
  if (format === 'json') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}.json"`);
    res.json(rows);
    return;
  }

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}.csv"`);
  res.send(rowsToCsv(rows));
}

function assertExportAllowed(req, res) {
  if (!exportToken) {
    res.status(503).json({ error: 'Export is not configured.' });
    return false;
  }

  if (!pool) {
    res.status(503).json({ error: 'Database is not configured.' });
    return false;
  }

  if (req.query?.token !== exportToken) {
    res.status(403).json({ error: 'Invalid export token.' });
    return false;
  }

  return true;
}

app.get('/api/health', async (_req, res) => {
  if (!pool) {
    res.json({
      status: 'ok',
      database: 'not-configured',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  try {
    await pool.query('SELECT 1');
    res.json({
      status: 'ok',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({
      status: 'degraded',
      database: 'unavailable',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

app.post('/api/assessment-submissions', async (req, res) => {
  const sessionId = req.body?.sessionId;
  const assessmentStage = req.body?.assessmentStage;

  if (!isUuid(sessionId)) {
    res.status(400).json({ error: 'A valid anonymous session ID is required.' });
    return;
  }

  if (!['pre', 'post'].includes(assessmentStage)) {
    res.status(400).json({ error: 'Assessment stage must be `pre` or `post`.' });
    return;
  }

  if (!pool) {
    res.status(503).json({ error: 'Database is not configured.' });
    return;
  }

  const selectedAnswers = sanitizeAnswers(req.body?.answers);
  const summary = summarizeStageResults(assessmentStage, selectedAnswers);

  try {
    const queryResult = await pool.query(
      `INSERT INTO assessment_submissions (
        session_id,
        assessment_stage,
        question_results,
        selected_answers,
        answered_count,
        correct_count,
        total_questions,
        app_version
      )
      VALUES ($1::uuid, $2, $3::jsonb, $4::jsonb, $5, $6, $7, $8)
      ON CONFLICT (session_id, assessment_stage)
      DO UPDATE SET
        question_results = EXCLUDED.question_results,
        selected_answers = EXCLUDED.selected_answers,
        answered_count = EXCLUDED.answered_count,
        correct_count = EXCLUDED.correct_count,
        total_questions = EXCLUDED.total_questions,
        app_version = EXCLUDED.app_version,
        submitted_at = NOW()
      RETURNING id, submitted_at`,
      [
        sessionId,
        assessmentStage,
        JSON.stringify(summary.questionResults),
        JSON.stringify(selectedAnswers),
        summary.answeredCount,
        summary.correctCount,
        summary.totalQuestions,
        'v3',
      ],
    );

    res.status(201).json({
      success: true,
      id: queryResult.rows[0].id,
      submittedAt: queryResult.rows[0].submitted_at,
      assessmentStage,
      answeredCount: summary.answeredCount,
    });
  } catch (error) {
    console.error('Assessment submission failed:', error);
    res.status(500).json({ error: 'Unable to store the assessment submission.' });
  }
});

app.post('/api/experience-feedback', async (req, res) => {
  const sessionId = req.body?.sessionId;
  const responses = req.body?.responses;
  const comment = typeof req.body?.comment === 'string' ? req.body.comment.trim() : '';

  if (!isUuid(sessionId)) {
    res.status(400).json({ error: 'A valid anonymous session ID is required.' });
    return;
  }

  if (!responses || typeof responses !== 'object' || Array.isArray(responses)) {
    res.status(400).json({ error: 'Feedback responses are required.' });
    return;
  }

  const normalizedResponses = Object.entries(responses).reduce((accumulator, [questionId, value]) => {
    if (Number.isInteger(value) && value >= 1 && value <= 5) {
      accumulator[questionId] = value;
    }
    return accumulator;
  }, {});

  if (Object.keys(normalizedResponses).length !== 5) {
    res.status(400).json({ error: 'All five Likert feedback responses are required.' });
    return;
  }

  if (!pool) {
    res.status(503).json({ error: 'Database is not configured.' });
    return;
  }

  try {
    const queryResult = await pool.query(
      `INSERT INTO experience_feedback (
        session_id,
        responses,
        comment,
        app_version
      )
      VALUES ($1::uuid, $2::jsonb, $3, $4)
      ON CONFLICT (session_id)
      DO UPDATE SET
        responses = EXCLUDED.responses,
        comment = EXCLUDED.comment,
        app_version = EXCLUDED.app_version,
        submitted_at = NOW()
      RETURNING id, submitted_at`,
      [
        sessionId,
        JSON.stringify(normalizedResponses),
        comment || null,
        'v3',
      ],
    );

    res.status(201).json({
      success: true,
      id: queryResult.rows[0].id,
      submittedAt: queryResult.rows[0].submitted_at,
    });
  } catch (error) {
    console.error('Feedback submission failed:', error);
    res.status(500).json({ error: 'Unable to store the experience feedback.' });
  }
});

app.get('/api/assessment-export', async (req, res) => {
  if (!assertExportAllowed(req, res)) {
    return;
  }

  const format = parseExportFormat(req.query?.format);

  try {
    const queryResult = await pool.query(
      `SELECT
        id,
        session_id,
        assessment_stage,
        question_results,
        selected_answers,
        answered_count,
        correct_count,
        total_questions,
        app_version,
        submitted_at
      FROM assessment_submissions
      ORDER BY submitted_at DESC`,
    );

    sendExport(res, 'assessment-submissions', format, queryResult.rows);
  } catch (error) {
    console.error('Assessment export failed:', error);
    res.status(500).json({ error: 'Unable to export assessment submissions.' });
  }
});

app.get('/api/feedback-export', async (req, res) => {
  if (!assertExportAllowed(req, res)) {
    return;
  }

  const format = parseExportFormat(req.query?.format);

  try {
    const queryResult = await pool.query(
      `SELECT
        id,
        session_id,
        responses,
        comment,
        app_version,
        submitted_at
      FROM experience_feedback
      ORDER BY submitted_at DESC`,
    );

    sendExport(res, 'experience-feedback', format, queryResult.rows);
  } catch (error) {
    console.error('Feedback export failed:', error);
    res.status(500).json({ error: 'Unable to export feedback submissions.' });
  }
});

app.get('/api/participant-export', async (req, res) => {
  if (!assertExportAllowed(req, res)) {
    return;
  }

  const format = parseExportFormat(req.query?.format);

  try {
    const queryResult = await pool.query(
      `SELECT
        session_id,
        pre_submission_id,
        pre_answered_count,
        pre_correct_count,
        pre_total_questions,
        pre_question_results,
        pre_app_version,
        pre_submitted_at,
        post_submission_id,
        post_answered_count,
        post_correct_count,
        post_total_questions,
        post_question_results,
        post_app_version,
        post_submitted_at,
        feedback_id,
        feedback_responses,
        feedback_comment,
        feedback_app_version,
        feedback_submitted_at,
        last_activity_at,
        pre_selected_answers,
        post_selected_answers
      FROM participant_exports
      ORDER BY last_activity_at DESC`,
    );

    sendExport(res, 'participant-export', format, queryResult.rows);
  } catch (error) {
    console.error('Participant export failed:', error);
    res.status(500).json({ error: 'Unable to export participant records.' });
  }
});

const distDirectory = path.join(__dirname, 'dist');
const distIndex = path.join(distDirectory, 'index.html');

if (existsSync(distIndex)) {
  app.use(express.static(distDirectory));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(distIndex);
  });
} else {
  app.get('/', (_req, res) => {
    res.type('text/plain').send('Frontend build not found. Run `npm run dev` or `npm run build`.');
  });
}

async function startServer() {
  if (pool) {
    try {
      await initializeDatabase(pool);
    } catch (error) {
      console.error('Database initialisation failed:', error);
    }
  }

  app.listen(PORT, HOST, () => {
    console.log(`COLORCODE API running on http://${HOST}:${PORT}`);
  });
}

void startServer();
