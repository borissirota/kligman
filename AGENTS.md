# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single static marketing site for **Tennisschule Joseph Kligman** (React 19 + Vite 8 + Tailwind CSS 4). No backend, database, or environment variables. Content lives in `src/data/siteContent.js` and `content/`.

### Required service

| Service | Command | URL |
|---------|---------|-----|
| Vite dev server | `npm run dev` | http://localhost:5173 |

Only the Vite dev server is required for local development and end-to-end testing.

### Standard commands

See `package.json` scripts:

- **Install deps:** `npm install`
- **Dev server:** `npm run dev`
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Preview production build:** `npm run preview` (run `npm run build` first)

### Testing

No automated test suite is configured (no Vitest/Jest/Cypress/Playwright). Verify changes manually in the browser or via `npm run build`.

### Deployment (optional)

Production hosting uses Firebase (`firebase.json`, project `tennisschule-kligman`). Deploy is not needed for local dev: `npm run build` then `firebase deploy --only hosting`.

### Gotchas

- The contact form uses client-side `mailto:` links — there is no server-side email API to run locally.
- React Router uses `BrowserRouter`; deep links in dev are served by Vite. For production, Firebase rewrites all routes to `index.html` (configured in `firebase.json`).
