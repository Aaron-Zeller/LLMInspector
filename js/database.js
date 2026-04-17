/* ============================================================
   COLORCODE — database.js
   Handles posting assessment results to the backend API.

   The API endpoint is configurable via the API_BASE constant.
   In production, set this to your Render backend URL.
   In local development, the server runs on port 3001 by default.
   ============================================================ */

// Point this at your Render service URL in production,
// e.g. "https://colorcode-api.onrender.com"
const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : '';  // replace with your Render backend URL before deploying

/**
 * Submits a completed assessment result to the backend API.
 * Called automatically from computeAndShowResults() in script.js.
 *
 * @param {Object} payload
 * @param {number}  payload.total        - Overall score (0–100)
 * @param {number}  payload.domain1      - Critical Evaluation score (0–35)
 * @param {number}  payload.domain2      - Data Privacy score (0–35)
 * @param {number}  payload.domain3      - Appropriate Delegation score (0–30)
 * @param {string}  payload.grade        - Proficiency grade label
 * @param {Object}  payload.answers      - Raw answers map { qid: boolean }
 */
async function submitResults(payload) {
  try {
    const response = await fetch(`${API_BASE}/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Log silently — submission failure should never block the UI
      console.warn('Result submission failed:', response.status);
    }
  } catch (err) {
    // Network error (e.g. no backend in local dev) — fail silently
    console.warn('Result submission unavailable:', err.message);
  }
}
