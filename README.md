# COLORCODE — AI Literacy Assessment Tool

A scenario-based AI literacy assessment for business professionals, developed for the ETH Zurich AI Literacy Initiative. It measures three competency domains: Critical Evaluation, Data Privacy, and Appropriate Delegation.

---

## Project Overview

| File / Folder | Purpose |
|---|---|
| `index.html` | Main frontend — all pages and quiz content |
| `css/style.css` | All styles and design tokens |
| `js/script.js` | Assessment logic: navigation, scoring, results |
| `js/database.js` | Frontend API helper — posts results to the backend |
| `server.js` | Node.js/Express backend — receives results and writes to PostgreSQL |
| `schema.sql` | PostgreSQL table definition — run once to set up the database |
| `package.json` | Node dependencies |
| `.env.example` | Template for environment variables |

---

## Running Locally (Frontend Only)

No backend needed to view and test the assessment UI.

**Option A — VS Code Live Server**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Right-click `index.html` → **Open with Live Server**.

**Option B — Python**
```bash
python -m http.server 8080
# then open http://localhost:8080
```

**Option C — Node**
```bash
npx serve .
```

> Result submission will fail silently (logged to the browser console) if the backend is not running — the assessment itself works fully offline.

---

## Running Locally (With Backend)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Open `.env` and paste your Render **External Database URL** as `DATABASE_URL`.

3. **Create the database table** (first time only)
   ```bash
   psql "$DATABASE_URL" -f schema.sql
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   # API available at http://localhost:3001
   # Frontend served at http://localhost:3001/index.html
   ```

---

## Database Setup (for the Render teammate)

1. Log in to [render.com](https://render.com) and open your PostgreSQL instance.
2. Copy the **Internal Database URL** (use this in production) or **External Database URL** (use this for local dev).
3. Add it as `DATABASE_URL` in your `.env` file and in the Render Web Service's **Environment Variables** panel.
4. Run `schema.sql` once via the Render Shell tab or `psql`.

> **Security rule:** Never hardcode `DATABASE_URL` in any JavaScript file. Always use `.env` locally and Render's Environment Variables in production. The `.env` file is in `.gitignore` and must never be committed.

---

## Deploying to Render

1. Push the repository to GitHub.
2. In Render, create a new **Web Service** → connect your repo.
3. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add the `DATABASE_URL` environment variable (Internal URL).
5. Render assigns `PORT` automatically — `server.js` reads it from `process.env.PORT`.

---

## Contribution Guide

**Adding new questions**
- HTML: add a `.quiz-card` block in the relevant `<div class="page">` in `index.html`.
- Scoring: add an entry to the `SCORING` object in `js/script.js`.
- Feedback: add matching `c` (correct) and `w` (wrong) entries to the `FEEDBACK` object.

**Adding CSS**
- Add new rules to `css/style.css`.
- Use the CSS custom properties (`--navy`, `--gold`, etc.) defined in `:root` for colours — do not hardcode hex values.

**Adding JS utilities**
- Self-contained helpers that are not specific to the assessment logic belong in a new file under `js/` (e.g. `js/analytics.js`), loaded via a `<script>` tag before `js/script.js` in `index.html`.

**Adding API endpoints**
- New routes go in `server.js` following the existing pattern (`app.get` / `app.post`).
- Keep route handlers thin — extract any non-trivial DB logic into a separate function.
