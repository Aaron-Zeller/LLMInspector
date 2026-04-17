-- ============================================================
-- COLORCODE — schema.sql
-- Run this once in your Render PostgreSQL database to create
-- the responses table.
--
-- How to run:
--   1. Open your Render dashboard → PostgreSQL instance → Shell
--   2. Paste and execute the statements below.
--   Or use psql locally:
--   psql "$DATABASE_URL" -f schema.sql
-- ============================================================

CREATE TABLE IF NOT EXISTS responses (
  id             SERIAL PRIMARY KEY,
  session_id     UUID DEFAULT gen_random_uuid(),   -- anonymous session identifier
  total_score    INTEGER NOT NULL,                  -- 0–100
  domain_1_score INTEGER NOT NULL,                  -- Critical Evaluation, 0–35
  domain_2_score INTEGER NOT NULL,                  -- Data Privacy, 0–35
  domain_3_score INTEGER NOT NULL,                  -- Appropriate Delegation, 0–30
  grade          VARCHAR(20) NOT NULL,              -- Foundational / Developing / Proficient / Distinguished
  answers        JSONB,                             -- raw answer map { qid: boolean }
  submitted_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Index for time-series queries (e.g. "responses this month")
CREATE INDEX IF NOT EXISTS idx_responses_submitted_at ON responses (submitted_at);
