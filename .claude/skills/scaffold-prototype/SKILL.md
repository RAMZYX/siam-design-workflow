---
name: scaffold-prototype
description: Scaffold a new frontend prototype or app with the team's required stack and tooling from the first commit — TypeScript strict, React, Vite, Tailwind with design tokens, TanStack Router and Query, zustand, zod, react-hook-form, MSW, ESLint, Prettier, Vitest, Playwright, husky, size-limit. Use when the user asks to build, start or scaffold a prototype, demo or frontend app.
---

# Scaffold a prototype

Prototypes become products. Build on the production stack from commit one.

## Read first
- `CLAUDE.md`
- `04-development/PROTOTYPE-STACK.md` — the whole file; it is the authority for this skill
- `03-design-system/Design Foundation/` — colour, typography, spacing, radius files for the token block
- `02-foundation/memory.md` and `01-research/information-architecture.md` — screens and routes, if they exist

## Steps

1. **Confirm** the app name, target folder (outside this template repo unless the user says otherwise) and the first route/screen. Use Node and npm already installed; if they are missing, tell the user and stop.

2. **Scaffold** with the quickstart in `PROTOTYPE-STACK.md` §6 (Vite `react-ts` template, then the listed runtime and dev dependencies). Set `strict: true` in `tsconfig`.

3. **Wire everything in the scaffold commit** (§6 "Then wire"):
   - Tailwind entry with **one** token block (`@theme` / `:root`) — real values from the design-foundation files; `TBD` tokens become clearly named placeholders with a `TODO` comment.
   - TanStack Router with one lazy route; route-level error boundary.
   - `QueryClientProvider`; `src/api/<resource>/` with zod schema + typed fetcher + Query hooks.
   - MSW worker in dev with handlers that mirror `src/api/` and zod-validated fixtures. **No localStorage-as-database.**
   - Feature folders `src/features/<name>/`, shared UI in `src/components/ui/`.
   - Self-hosted fonts via `@fontsource/*`; no Google Fonts links.
   - ESLint (typescript-eslint, react-hooks, jsx-a11y as errors), Prettier, Vitest + RTL with one test, a Playwright smoke spec, husky + lint-staged, size-limit (≤ 250 kB gzip initial JS), CI workflow: typecheck → lint → unit → build → e2e.
   - README with run/build/test commands and a one-paragraph architecture map.

4. **Verify** — run `tsc --noEmit`, lint, unit tests and build; report real results. Fix failures before finishing.

5. Commit as "Scaffold prototype" only if the user wants it in git.

## Rules
- Don't swap libraries (e.g. react-router, Next.js, moment) unless `PROTOTYPE-STACK.md` allows it for the situation.
- Components consume tokens/utilities, never raw hex values.
- Interactive elements keyboard-reachable and labelled from the start.

## Finish
Show the folder, the commands to run it, check results, and the `PROTOTYPE-STACK.md` §5 definition-of-done items still open.
