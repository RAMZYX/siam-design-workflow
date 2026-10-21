# Frontend Stack Standard — for every new prototype

> **Instruction to Claude (and humans):** when creating a new frontend
> prototype or app for this team, scaffold it with the stack below from the
> very first commit. Do not "start simple and add later" — this project
> (ITS-RMS) proved that prototypes become the product: the plain-JS,
> no-router, localStorage prototype demoed beautifully and then cost an
> entire migration effort. A prototype built on this stack demos just as
> fast and is already on the road to production.

---

## 1. Required stack

| Concern | Use | Notes |
| --- | --- | --- |
| Language | **TypeScript, `strict: true`** | No plain-JS apps. Prototype speed comes from types, not from skipping them. |
| Framework | **React 18+** (functional components + hooks) | |
| Build | **Vite** (latest) | SPA build. No Next/Remix unless the project genuinely needs SSR/SEO. |
| Styling | **Tailwind (latest major)** + design tokens as CSS variables | Tokens in one `@theme` / `:root` block; components consume utilities, never raw hex. |
| Routing | **TanStack Router** | File/typed routes, route-level code-splitting from day one. `react-router` acceptable only when extending an app that already uses it. |
| Server state | **TanStack Query** | ALL data reads/writes go through Query — even against mocks. Never hand-rolled fetch-in-useEffect, never localStorage-as-database. |
| Client state | **zustand** | Small stores per domain. Client state ≠ server state; don't merge the jobs. |
| Validation | **zod** | Schema for every API payload and every form. Types are inferred FROM schemas (`z.infer`), not written twice. |
| Forms | **react-hook-form** + `@hookform/resolvers` (zod) | Controlled-input spaghetti is not acceptable past one field. |
| API mocking | **MSW** (Mock Service Worker) | THIS is how a prototype fakes its backend — a real HTTP layer with zod-validated fixtures, so swapping to the real API changes a base URL, not the app. |
| Icons | **lucide-react** | One icon set; inline SVGs only for brand/decorative art. |
| Dates | **date-fns** (or Temporal when stable) | No moment.js. Domain calendars (e.g. Hijri) live in one lib module with tests. |

## 2. Required tooling (same first commit)

| Concern | Use |
| --- | --- |
| Lint | **ESLint** (typescript-eslint, `react-hooks`, `jsx-a11y`) — CI-enforced |
| Format | **Prettier** — CI-enforced, no debates |
| Unit/component tests | **Vitest + React Testing Library** — colocated `*.test.ts(x)` |
| E2E tests | **Playwright** — smoke spec per primary user journey |
| Git hooks | **husky + lint-staged** — lint/format on commit |
| CI | Pipeline running typecheck → lint → unit → build → e2e on every PR |
| Bundle budget | **size-limit** (or CI Lighthouse) — initial JS ≤ 250 kB gzip; build fails past budget |

## 3. Performance rules (non-negotiable defaults)

1. **Route-level code-splitting from the first route** — `lazy()` per route;
   the shell stays small. Never ship one monolithic chunk.
2. **Self-hosted fonts** via `@fontsource/*`, subset, `font-display: swap`.
   No Google Fonts/Fontshare `<link>` tags.
3. **Virtualize any list that can exceed ~100 rows** (TanStack Virtual).
4. **Images**: explicit dimensions, `loading="lazy"` below the fold, modern
   formats (webp/avif).
5. **Memo discipline**: profile before shipping screens with heavy tables;
   `rollup-plugin-visualizer` stays in devDependencies and gets looked at.
6. **PWA** (vite-plugin-pwa) when the app is participant/field-facing.

## 4. Architecture rules

- **Data layer is swappable by construction**: `src/api/` holds one client
  module per resource — zod schema + typed fetcher + Query hooks. MSW
  handlers mirror it. Nothing else in the app touches the network or knows
  where data comes from.
- **Feature folders** (`src/features/<name>/`) with colocated components,
  hooks, tests. Shared UI in `src/components/ui/`.
- **No prop-drilling portals across features** — zustand store or router
  state, chosen deliberately.
- **Design tokens are the only source of color/spacing/type values.**
- **Accessibility floor**: every interactive element keyboard-reachable and
  labelled; forms use real `<label>`s; `jsx-a11y` warnings are errors.
- **Error boundaries** at route level; Query errors surface as designed
  states, not blank screens.

## 5. Definition of done — before a prototype is demoed

- [ ] `tsc --noEmit`, lint, and format pass clean
- [ ] Unit tests on all non-trivial derivation/business logic
- [ ] One Playwright smoke spec per primary journey (login → core flow)
- [ ] Initial bundle within budget; routes split; fonts self-hosted
- [ ] All mock data flows through MSW + zod (no localStorage-as-database)
- [ ] README: run/build/test commands + one-paragraph architecture map

## 6. Scaffold quickstart

```bash
npm create vite@latest <app> -- --template react-ts
cd <app>
npm i @tanstack/react-router @tanstack/react-query zustand zod \
      react-hook-form @hookform/resolvers lucide-react date-fns
npm i -D tailwindcss @tailwindcss/vite eslint prettier typescript-eslint \
      eslint-plugin-react-hooks eslint-plugin-jsx-a11y vitest \
      @testing-library/react @testing-library/jest-dom jsdom playwright \
      msw husky lint-staged size-limit rollup-plugin-visualizer
npx playwright install
npx msw init public/
```

Then wire: Tailwind entry with the token block · router with one lazy route ·
QueryClientProvider · MSW worker in dev · Vitest + a first test · a Playwright
smoke spec · husky hooks · CI workflow. All of this belongs in the scaffold
commit, before the first feature.

## 7. Why each choice (the ITS-RMS lessons)

- **TS + zod from day one** — the admin console's 152-field config schema in
  untyped JS meant every shape mismatch surfaced at runtime, and migration
  became its own project.
- **MSW instead of localStorage seeding** — ITS-RMS's browser-store-as-
  backend made two deployed apps unable to share state by construction, and
  the API retrofit touches every module. MSW keeps the same "works without
  a backend" demo superpower with none of the debt.
- **Router + code-splitting from the start** — the state-machine shell grew
  into a 2 MB single chunk; splitting later means untangling, splitting
  early means nothing to untangle.
- **Tailwind from the start** — converting ~76k lines of bespoke CSS to
  utilities pixel-perfectly is painstaking (see the ITS-RMS-tailwind repo);
  starting on Tailwind makes the whole class of work disappear.
