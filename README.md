# COLORCODE

COLORCODE is a scenario-based AI literacy assessment for business professionals. The app now uses a modular React frontend, Zustand stores for assessment state and developer tooling, and an Express backend that can initialise and write to Render Postgres automatically.

Live URLs:
- Primary domain: [https://colorcode-ai.ch](https://colorcode-ai.ch)
- Render fallback: [https://colorcode-ypsp.onrender.com](https://colorcode-ypsp.onrender.com)

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

Minimal prompt for this step:

```text
Set up this project for local development. Install dependencies, create the local environment file if needed, start the development servers, and tell me which URLs to use for the frontend and API.
```

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

Minimal prompt for this step:

```text
Build this project for production, start the production server, and confirm how the built frontend and API are being served.
```

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

## Data Export

If you set an `EXPORT_TOKEN`, the backend exposes two protected export routes:

- `/api/assessment-export?token=YOUR_TOKEN&format=csv`
- `/api/feedback-export?token=YOUR_TOKEN&format=csv`

Both routes also support `format=json`.

Examples:

```text
https://colorcode-ai.ch/api/assessment-export?token=YOUR_TOKEN&format=csv
https://colorcode-ai.ch/api/feedback-export?token=YOUR_TOKEN&format=json
```

If `EXPORT_TOKEN` is not configured, these export routes return `503`.

## Working With AI Coding Tools

If you use ChatGPT, Claude, Codex, Cursor, or another AI coding tool on this repo, treat the current codebase as the source of truth. This project already went through a major refactor, and a few important design and structure choices are intentional.

**Important:** In a separate window unrelated to the current project, first set up `Uncodixfy` so the AI tool does not drift into generic frontend styling.

Use a prompt like this in that separate session:

```text
I want to use Uncodixfy as a skill for frontend work.

Please help me install or load the skill from:
https://github.com/cyxzdev/Uncodixfy

If installation is required, walk me through the exact steps for my AI tool.
If the skill can be added directly, add it and confirm that it is available for future frontend prompts.
After setup, briefly explain how I should reference or invoke the skill when I start working on a project.
```

Minimal prompt for this step:

```text
Help me install or load Uncodixfy from https://github.com/cyxzdev/Uncodixfy and confirm how I should invoke it in future frontend prompts.
```

### Starter Prompt

Use this as a starting prompt before asking an AI tool to change the code:

```text
Read the entire codebase before making changes.

This project uses a modular React frontend, Zustand stores, and an Express backend. Preserve the existing architecture and visual style unless I explicitly ask for a redesign.

Important project rules:
- Do not simplify or redesign the current website style.
- Do not replace the current UI with a generic AI-looking interface.
- Keep the current COLORCODE visual language, spacing, typography, and section pacing.
- Use the existing modular structure in src/components, src/store, src/data, and src/lib.
- Keep the frontend modular instead of reintroducing a monolithic page.
- Use Zustand for shared state where shared flow state is needed.
- Treat src/data/assessmentContent.js as the central content registry.
- Keep assessment flow and content structure intact unless asked otherwise.
- Respect the current developer segment overlay system.
- Preserve the current learner flow:
  Overview -> Pre Assessment -> Main Part -> Post Assessment -> Feedback -> Thank You
- Keep pre and post assessments structurally aligned unless a change explicitly requires divergence.
- Keep the assessment split into four internal parts with sub-progress:
  Baseline Knowledge Check, Identifying Unreliable AI Outputs, Safe Data Practices with AI Tools, and Real-World Decision Making
- Do not remove section intros, privacy/GDPR framing, simulation warning blocks, or other contextual assessment framing that exists on purpose.
- Keep the feedback page after the post assessment and the thank-you page after submission.
- Preserve anonymised database submissions for pre assessment, post assessment, and experience feedback.
- Do not remove anonymisation or start storing raw identifiable user data.
- Keep Render compatibility intact, including render.yaml, Express static serving, and schema bootstrapping.
- If you make frontend changes, use Uncodixfy as guidance: https://github.com/cyxzdev/Uncodixfy

Before editing:
- Read README.md
- Read src/data/assessmentContent.js
- Read src/store/useAssessmentStore.js
- Read src/components/layout/PageRenderer.jsx
- Read src/styles/app.css
- Read server.js and src/server/database.js if your work touches submission logic

When implementing:
- Reuse existing components where possible
- Add or adjust components instead of collapsing things back into one file
- Keep the current assessment split into internal parts with sub-progress
- Do not remove section intros, scenario framing, or contextual callouts
- Avoid changing copy, order, or labels unless the task requires it

After implementing:
- Build the project and check for regressions
- Summarise exactly what changed and what was intentionally preserved
```

### Minimal Prompts By Step

If you notice that your AI tool starts drifting away from the starter prompt or violating its constraints, add one of these shorter prompts to your current prompt to correct the issue for the specific step you are on.

Review the codebase first:

```text
Read README.md, src/data/assessmentContent.js, src/store/useAssessmentStore.js, src/components/layout/PageRenderer.jsx, src/components/assessment/AssessmentSections.jsx, src/styles/app.css, and if relevant server.js plus src/server/database.js. Summarise the current structure, flow, and constraints before making changes.
```

Implement a change safely:

```text
Implement the requested change without redesigning the site. Preserve the current COLORCODE style, modular React/Zustand architecture, assessment flow, sub-progress structure, developer overlay, anonymised submission flow, and Render compatibility. Reuse existing components where possible and do not remove contextual section framing.
```

Verify after implementation:

```text
Build the project, check for regressions, and summarise what changed, what was intentionally preserved, and any remaining risks or follow-up items.
```

### Project-Specific Guardrails

- Preserve the current style. The app should not drift into a generic AI-generated dashboard or landing-page aesthetic.
- Keep the frontend modular. New work should fit into the existing React component structure rather than reintroducing a monolithic page.
- Use Zustand for shared state. Assessment flow, feedback state, and developer toggles should continue to live in stores rather than being scattered across local component state.
- Treat `src/data/assessmentContent.js` as the central content registry. Page order, section order, segment configuration, and assessment items should stay data-driven.
- Keep the developer segment overlay. The visible segment IDs and toggle are intentional and help teams discuss exact parts of the interface during development.
- Preserve the current learner flow:
  `Overview` -> `Pre Assessment` -> `Main Part` -> `Post Assessment` -> `Feedback` -> `Thank You`
- Keep the pre and post assessments aligned. The post assessment is meant to mirror the pre assessment for before-and-after comparison.
- Keep the assessment split into four internal parts with sub-progress:
  `Baseline Knowledge Check`, `Identifying Unreliable AI Outputs`, `Safe Data Practices with AI Tools`, and `Real-World Decision Making`
- Preserve the richer assessment framing restored from the original branch, especially:
  critical-evaluation intros
  privacy/GDPR framing
  simulation warning/context blocks
- Do not remove anonymisation. Only per-question outcomes and feedback responses should be stored, not raw identifiable user data.
- Keep Render compatibility intact. The app is set up to deploy with `render.yaml`, Express static serving, and Render Postgres schema bootstrapping.

### Files AI Tools Should Understand First

- [README.md](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/README.md)
- [src/data/assessmentContent.js](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/data/assessmentContent.js)
- [src/store/useAssessmentStore.js](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/store/useAssessmentStore.js)
- [src/components/layout/PageRenderer.jsx](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/components/layout/PageRenderer.jsx)
- [src/components/assessment/AssessmentSections.jsx](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/components/assessment/AssessmentSections.jsx)
- [src/components/common/LikertFeedbackSection.jsx](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/components/common/LikertFeedbackSection.jsx)
- [src/styles/app.css](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/styles/app.css)
- [server.js](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/server.js)
- [src/server/database.js](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/src/server/database.js)
- [schema.sql](/Users/aaronzeller/Documents/FS26/Design%20in%20Educational%20Technology/Project/schema.sql)
