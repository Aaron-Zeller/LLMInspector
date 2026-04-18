# COLORCODE

COLORCODE is a scenario-based AI literacy assessment for business professionals. The app now uses a modular React frontend, Zustand stores for assessment state and developer tooling, and an Express backend that can initialise and write to Render Postgres automatically.

## Architecture

The project is split into a few clear layers:

- `src/data/assessmentContent.js`: shared assessment content, page order, segment registry, and item definitions
- `src/lib/assessment.js`: shared scoring and answer sanitisation used by both frontend and backend
- `src/store/`: Zustand stores for the assessment flow and the developer segment overlay
- `src/components/`: modular UI pieces for pages, questions, scenarios, results, and developer helpers
- `src/styles/app.css`: the global interface styles
- `server.js` and `src/server/database.js`: API routes, schema bootstrap, and static asset serving for production

Two structural choices matter for maintainability:

1. Page composition is data-driven.
   Reordering a section is usually just a matter of moving segment IDs inside `PAGE_SEQUENCE`.
2. Every major UI container is wrapped in a segment component.
   In development, segment IDs can be shown as overlays so teammates can refer to exact parts of the UI quickly.

## Local Development

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Then start both processes:

```bash
npm run dev
```

That gives you:

- frontend on `http://localhost:3002`
- API on `http://localhost:3001`

The Vite dev server proxies `/api` to the backend automatically.

## Production Build

Build the frontend bundle:

```bash
npm run build
```

Then run the Node server:

```bash
npm start
```

In production, Express serves the built frontend from `dist/` and exposes the API from the same service.

## Render Setup

This repo includes a `render.yaml` blueprint that provisions:

- one Node web service
- one Render Postgres database

The web service receives `DATABASE_URL` from the Render database connection string and builds the frontend during deployment. On startup, the backend reads `schema.sql` and ensures the database schema exists.

Render notes:

- use the internal Postgres connection string in production
- set `VITE_SHOW_SEGMENT_IDS=false` in production builds
- keep `PORT` unmanaged on Render unless you need a custom local override

## Developer Segment Overlay

The interface includes a global segment overlay system for development. By default:

- local development shows segment IDs
- production builds hide them

You can change the default with `VITE_SHOW_SEGMENT_IDS`, and the in-browser toggle persists locally through Zustand.

## Data and Submission Flow

The frontend submits only the answer map. The backend recomputes totals and domain scores from the shared scoring rules before writing to Postgres. That keeps the stored results aligned with the canonical assessment logic.
