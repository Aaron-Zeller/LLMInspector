/* ============================================================
   COLORCODE — server.js
   Node.js / Express backend for assessment result storage.

   Requires environment variables (see .env.example):
     DATABASE_URL  — Render PostgreSQL Internal Database URL
     PORT          — defaults to 3001

   Run locally:
     npm install
     cp .env.example .env   # fill in your DATABASE_URL
     npm run dev
   ============================================================ */

require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const { Pool } = require('pg');

const app  = express();
const PORT = process.env.PORT || 3001;

/* ── Database connection ─────────────────────────────────────
   Uses the DATABASE_URL env var set on Render.
   ssl: rejectUnauthorized: false is required for Render's
   managed PostgreSQL instances.
   ──────────────────────────────────────────────────────────── */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

/* ── Middleware ──────────────────────────────────────────────*/
app.use(cors());                    // allow requests from the frontend origin
app.use(express.json());            // parse JSON request bodies
app.use(express.static('.'));       // serve index.html + css/js files from root

/* ── Health check ────────────────────────────────────────────
   GET /api/health
   Useful for Render's health-check ping and local smoke tests.
   ──────────────────────────────────────────────────────────── */
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/* ── Submit assessment result ────────────────────────────────
   POST /api/submit
   Body: { total, domain1, domain2, domain3, grade, answers }
   Inserts one row into the `responses` table and returns the
   new row's id.
   ──────────────────────────────────────────────────────────── */
app.post('/api/submit', async (req, res) => {
  const { total, domain1, domain2, domain3, grade, answers } = req.body;

  // Basic input validation — reject obviously malformed payloads
  if (
    typeof total   !== 'number' ||
    typeof domain1 !== 'number' ||
    typeof domain2 !== 'number' ||
    typeof domain3 !== 'number' ||
    typeof grade   !== 'string'
  ) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO responses
         (total_score, domain_1_score, domain_2_score, domain_3_score, grade, answers)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, submitted_at`,
      [total, domain1, domain2, domain3, grade, JSON.stringify(answers)]
    );

    res.status(201).json({
      success: true,
      id: result.rows[0].id,
      submitted_at: result.rows[0].submitted_at,
    });
  } catch (err) {
    console.error('DB insert error:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

/* ── Start server ────────────────────────────────────────────*/
app.listen(PORT, () => {
  console.log(`COLORCODE API running on port ${PORT}`);
});
