-- ============================================================
-- COLORCODE — schema.sql
-- ============================================================
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS assessment_submissions (
  id               SERIAL PRIMARY KEY,
  session_id       UUID NOT NULL,
  assessment_stage VARCHAR(10) NOT NULL CHECK (assessment_stage IN ('pre', 'post')),
  question_results JSONB NOT NULL,
  answered_count   INTEGER NOT NULL CHECK (answered_count BETWEEN 0 AND 13),
  correct_count    INTEGER NOT NULL CHECK (correct_count BETWEEN 0 AND 13),
  total_questions  INTEGER NOT NULL CHECK (total_questions = 13),
  app_version      VARCHAR(12) NOT NULL DEFAULT 'v3',
  submitted_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (session_id, assessment_stage)
);

CREATE TABLE IF NOT EXISTS experience_feedback (
  id           SERIAL PRIMARY KEY,
  session_id   UUID NOT NULL UNIQUE,
  responses    JSONB NOT NULL,
  comment      TEXT,
  app_version  VARCHAR(12) NOT NULL DEFAULT 'v3',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_assessment_submissions_submitted_at
  ON assessment_submissions (submitted_at);

CREATE INDEX IF NOT EXISTS idx_experience_feedback_submitted_at
  ON experience_feedback (submitted_at);

CREATE OR REPLACE VIEW participant_exports AS
WITH session_ids AS (
  SELECT session_id FROM assessment_submissions
  UNION
  SELECT session_id FROM experience_feedback
)
SELECT
  session_ids.session_id,

  pre.id AS pre_submission_id,
  pre.answered_count AS pre_answered_count,
  pre.correct_count AS pre_correct_count,
  pre.total_questions AS pre_total_questions,
  pre.question_results AS pre_question_results,
  pre.app_version AS pre_app_version,
  pre.submitted_at AS pre_submitted_at,

  post.id AS post_submission_id,
  post.answered_count AS post_answered_count,
  post.correct_count AS post_correct_count,
  post.total_questions AS post_total_questions,
  post.question_results AS post_question_results,
  post.app_version AS post_app_version,
  post.submitted_at AS post_submitted_at,

  feedback.id AS feedback_id,
  feedback.responses AS feedback_responses,
  feedback.comment AS feedback_comment,
  feedback.app_version AS feedback_app_version,
  feedback.submitted_at AS feedback_submitted_at,

  GREATEST(
    COALESCE(pre.submitted_at, TIMESTAMPTZ 'epoch'),
    COALESCE(post.submitted_at, TIMESTAMPTZ 'epoch'),
    COALESCE(feedback.submitted_at, TIMESTAMPTZ 'epoch')
  ) AS last_activity_at
FROM session_ids
LEFT JOIN assessment_submissions AS pre
  ON pre.session_id = session_ids.session_id
 AND pre.assessment_stage = 'pre'
LEFT JOIN assessment_submissions AS post
  ON post.session_id = session_ids.session_id
 AND post.assessment_stage = 'post'
LEFT JOIN experience_feedback AS feedback
  ON feedback.session_id = session_ids.session_id;
