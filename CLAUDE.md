# CLAUDE.md — Design Workflow Template

This repository is the design team's **reusable workflow template**. It holds standards and fill-in templates that take a product from research → foundation → design system → development → testing. It contains no product code.

Most files are **templates with `[PLACEHOLDER]` values**. When working on a real project, fill them with that project's approved information — never with values invented by you or copied from another product.

## Folder map — what to read for which task

| Folder | Files | Read when |
|---|---|---|
| `01-research/` | `information-architecture.md`, `user-flow.md` | Defining sitemap, navigation, roles, or a task flow. Duplicate `user-flow.md` once per user task. |
| `02-foundation/` | `design-principles.md` | **Every design or UI task.** Universal principles, MUST/MUST NOT rules, 7-step workflow, quality scorecard. |
| | `ux-standards.md` | Forms, navigation, tables, search, overlays, states, destructive actions. |
| | `accessibility.md` | Any UI work. Baseline is WCAG 2.1 AA. |
| | `content-and-microcopy.md` | Writing or changing any UI text, errors, empty states, buttons. |
| | `memory.md` | **Before changing any screen or flow, and after every confirmed change.** The project's living functional truth. |
| | `frd-template.md` | **Only** when the user explicitly asks to create the FRD. |
| `03-design-system/Design Foundation/` | `color-system.md`, `typography.md`, `spacing-and-grid.md`, `radius-and-elevation.md`, `02-iconography.md`, `03-responsiveness.md`, `motion.md` | Applying or documenting visual tokens. |
| | `_component-template.md` | Documenting a component. Duplicate as `[component-name].md`; do not edit the template itself. |
| `04-development/` | `PROTOTYPE-STACK.md` | **Before scaffolding any prototype or frontend app.** Required stack and tooling from the first commit. |
| | `dev-handoff.md` | Preparing a developer handoff for a release. |
| `05-testing/` | `ui-qa-checklist.md` | Checking built UI against the design, FRD and standards. |
| `.claude/skills/` | 10 skills | Project skills for this workflow — see *Skills* below. |

Files refer to each other by bare filename (e.g. `memory.md`). Resolve them using the table above. Note: `dev-handoff.md` mentions `01-flows/`; in this repo those files live in `01-research/`.

## Order of authority

When instructions conflict, apply them in this order (from `design-principles.md` §3):

1. Explicit task requirements and approved product decisions
2. The project's existing design system, brand, architecture and patterns
3. Platform conventions and the specialist files in this repo
4. Universal principles in `design-principles.md`
5. Personal preference or trends

If two sources disagree, record the conflict in `memory.md` → *Open questions and conflicts*. Never resolve it silently.

## Non-negotiable rules

- **Never invent product rules.** No made-up validation limits, password policies, timers, page sizes, permissions, API paths, error copy, fees or navigation. Write `TBD`, `[COPY TBD]` or `TBD — Decision Required` and log an open question.
- **`memory.md` workflow:** read the relevant entries before touching a screen or flow; after a confirmed change, update elements, flows, validations, states, dependencies, acceptance criteria, status and the change log.
- **No FRD until asked.** Only when the user says something like "Create the FRD" — then read `frd-template.md` and all of `memory.md` and follow that process.
- **Preserve and extend before replacing.** Reuse existing components, tokens and patterns. A new component or pattern needs justification and approval.
- **Design every relevant state:** loading, empty (first use vs. filtered), error, success, disabled, permission-denied, partial success.
- **Accessibility is a requirement, not polish:** contrast 4.5:1 / 3:1, keyboard access, visible focus, labels, never colour alone.
- **Prototypes use the required stack** in `PROTOTYPE-STACK.md` (TypeScript strict, React, Vite, Tailwind tokens, TanStack Router/Query, zod, MSW). No localStorage-as-database.
- **Report honestly.** Never mark something tested, accessible, user-validated or `Pass` without evidence. Separate what was verified from what was not.

## Shared vocabulary

**IDs** — keep stable across revisions so files stay traceable:

| Prefix | Meaning | Prefix | Meaning |
|---|---|---|---|
| `SCR-` | Screen / overlay | `FLOW-` | Cross-screen journey |
| `NAV-` | Navigation group | `ROLE-` | User role |
| `INT-` | Interaction rule | `VAL-` | Field validation |
| `BR-` | Business rule | `DEP-` | Data / API dependency |
| `AC-` | Acceptance criterion | `CMP-` | Component |
| `AST-` | Asset | `UI-` | QA defect |
| `Q-` / `IA-Q` / `H-` | Open question (memory / IA / handoff) | `S01`, `D01`, `ALT-`, `ERR-` | Flow steps, decisions, alternates, errors |

**Requirement status** (in `memory.md`): `Confirmed`, `Proposed`, `Open`, `Implemented (verified)`, `Deprecated`.
**QA status:** `Pass`, `Fail`, `Not tested`, `N/A` (with reason), `Blocked`.

## Working on a task

1. Understand the user goal, platform and constraints; ask only when the answer changes the outcome.
2. Read `design-principles.md` plus the specialist files for the task (table above) and the relevant `memory.md` entries.
3. Define the flow and states before styling; use project tokens and components.
4. Implement or document; flag unknowns as `TBD`.
5. Check the work against the relevant checklist (`design-principles.md` §8 scorecard, `ux-standards.md` §11, `accessibility.md` §11, `content-and-microcopy.md` §14).
6. Update `memory.md` and say what was verified and what was not.

## Skills

Use the matching skill when a task fits it:

| Phase | Skill | Purpose |
|---|---|---|
| Setup | `/start-project` | Fill the project profile, roles and context |
| Research | `/map-ia` | Sitemap, page inventory, navigation, role visibility |
| Research | `/user-flow` | One flow file per user task |
| Foundation | `/update-memory` | Record screen logic in `memory.md` after each change |
| Design system | `/document-tokens` | Fill colour, type, spacing, radius, icon, responsive, motion files |
| Design system | `/document-component` | Component spec from `_component-template.md` |
| Review | `/design-review` | Review and score against this repo's standards |
| Development | `/scaffold-prototype` | New prototype on the required stack |
| Development | `/dev-handoff` | Release handoff index |
| Testing | `/ui-qa` | Test a build and log defects |

There is no FRD skill by design: follow *No FRD until asked* above.

## Editing this template repo

- Keep files generic and reusable. Do not put one project's data into the templates on `main`.
- Keep placeholder style consistent: `` `[UPPERCASE PLACEHOLDER]` ``.
- When a standard changes, update its own file; do not duplicate rules across files.
