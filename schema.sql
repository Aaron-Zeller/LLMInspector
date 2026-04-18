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
