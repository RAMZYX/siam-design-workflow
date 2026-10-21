---
name: user-flow
description: Create or update a user flow for one user task — main path, decisions, alternate paths, errors, permissions, end states and a Mermaid diagram — from the 01-research/user-flow.md template. Use when the user asks to map a flow, journey or task (e.g. "flow for sign-up", "checkout flow").
---

# Map a user flow

One flow file = one user task.

## Read first
- `CLAUDE.md`
- `01-research/user-flow.md` — the template (do not overwrite it)
- `01-research/information-architecture.md` — screen IDs and navigation
- `02-foundation/memory.md` — roles, business rules, §6 Cross-screen journeys
- `02-foundation/ux-standards.md` — forms, navigation, states, destructive actions

## Steps

1. **Name the task.** Confirm the task, primary role and goal with the user. Pick the next free `FLOW-00X` ID (check `memory.md` §6 and existing flow files).

2. **Create the file** as `01-research/flow-[task-name].md` (kebab-case), copied from `user-flow.md`. Fill the front matter (`flow_id`, `feature_id` if known, `project`, `owner`, `last_updated`).

3. **Fill each section:**
   - §1 Overview and §2 Scope.
   - §3 Main path — every step: actor, action, system response, data change, next step. Use existing `SCR-` IDs from the IA.
   - §4 Decisions — every decision has **all** outcomes. Conditions the user didn't confirm are `TBD`.
   - §5 Alternate paths — back, cancel, edit, re-entry.
   - §6 Errors and recovery — validation, network, permission. Copy is `[COPY TBD]` unless approved.
   - §7 Permissions per role, §8 End states.
   - §9 Diagram — replace the example Mermaid chart so it matches the steps exactly.
   - §10 Open questions — `Q0X` for each `TBD`.

4. **Sync records.**
   - Add or update the journey in `memory.md` §6 (`FLOW-00X`) and any new screens in §4.
   - If the flow reveals new screens, add them to the IA page inventory too.

5. **Check** against the file's *Designer review* checklist.

## Rules
Never invent validation rules, timers, permissions or copy. One task per file — split if the flow grows into two goals.

## Finish
Give the file path, the checklist result, and the open questions.
