---
name: update-memory
description: Record a designed or changed screen's functional logic in 02-foundation/memory.md — elements, user flow, interactions, validations, states, dependencies, acceptance criteria, status and change log. Use after a screen or flow is designed, changed or implemented, or when the user says "update memory", "document this screen" or "log this change".
---

# Update functional memory

`memory.md` is the project's functional truth and the input for the FRD later. Keep it accurate.

## Read first
- `CLAUDE.md`
- `02-foundation/memory.md` — whole file, especially §5 per-screen template and §10 operating procedure
- `02-foundation/ux-standards.md` — §10 Interaction specification format
- `02-foundation/content-and-microcopy.md` — §13 Microcopy specification
- `02-foundation/accessibility.md` — §9 Screen-reader notes (for complex screens)
- The source of the change: Figma link, screenshot, code, or the user's description

## Steps

1. **Identify affected IDs.** Find the screen(s) in §4 Screen inventory. New screen → add a row with the next `SCR-` ID.

2. **Fill or update the screen's §5 block** (duplicate the template block for a new screen):
   - A. Every element, including icons, menus, overlays and conditional controls — what it **does**, not only what it shows.
   - B. User flow: entry, action, success, failure, back/cancel/re-entry.
   - C. Interaction rules (`INT-`), including double-submit, disabled/hidden logic.
   - D. Fields and validations (`VAL-`) — exact rules only if confirmed; otherwise `TBD`.
   - E. States — mark irrelevant ones `N/A` with a reason.
   - F. Dependencies (`DEP-`), G. rules/permissions/edge cases, H. acceptance criteria (`AC-`, Given/When/Then).
   - I. Verification — record only what was actually checked.

3. **Set statuses honestly:** `Confirmed` only for approved behaviour; `Proposed` for your suggestions; `Open` for unknowns; `Implemented (verified)` only after checking the code/build. If design and code disagree, record both and add a §8 conflict.

4. **Log it.** Add a §9 change-log row (date, IDs, before → after, source, approval, FRD impact). Add §8 questions for every `TBD`. Update §1 `Last updated`.

5. **Cross-screen effects.** Update §6 journeys, §7 status transitions and §3 global rules if the change affects them.

## Rules
- Never invent thresholds, messages, permissions, timers, API behaviour or navigation.
- Never mark a screen FRD-ready while critical logic is unknown.
- Never generate the FRD here.

## Finish
List the IDs changed, new open questions, and whether each touched screen is FRD-ready (yes/no + reason).
