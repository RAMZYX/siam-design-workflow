---
name: start-project
description: Set up a new design project from this workflow template. Use when the user starts a new product, release or client project, or asks to "start a project", "set up the project", or fill in the project profile. Fills the project profile in memory.md and the context section of information-architecture.md.
---

# Start a project

Set up the project's living records so every later phase has a shared source of truth.

## Read first
- `CLAUDE.md`
- `02-foundation/memory.md` — sections 1 (Project profile), 2 (Users and roles), 3 (Global business rules)
- `01-research/information-architecture.md` — section 1 (Context)
- `02-foundation/design-principles.md` — §7 Step 1 "Understand the context"

## Steps

1. **Collect the context.** Ask the user, in one message, only for what is missing:
   - Project name and release
   - Product purpose and target users
   - Platforms (web, mobile, admin, other) and input methods
   - User roles
   - Top user tasks
   - In scope / out of scope
   - Links: Figma, existing design system, requirements, decisions
   - Owner(s)
   Accept partial answers. Anything not given stays `TBD`.

2. **Fill `02-foundation/memory.md`:**
   - §1 Project profile — every row; `Last updated` = today; `FRD status` = `Not requested`.
   - §2 Users and roles — one `ROLE-00X` row per role. Leave screens/actions `TBD` unless the user stated them.
   - §3 Global business rules — add only rules the user explicitly confirmed, status `Confirmed`; anything mentioned but unconfirmed goes in as `Open`.
   - §8 Open questions — add a `Q-00X` row for every important unknown (e.g. roles' permissions, platforms, auth model).
   - §9 Change log — one row: "Project initialised".

3. **Fill `01-research/information-architecture.md` §1 Context** with the same facts. Update the front matter (`project`, `owner`, `last_updated`).

4. **Do not** invent roles, rules, screens or navigation. Do not start the sitemap here — that is `/map-ia`.

## Finish
Summarise what was filled, list the open questions created, and suggest the next step: `/map-ia` for structure, then `/user-flow` for each top task.
