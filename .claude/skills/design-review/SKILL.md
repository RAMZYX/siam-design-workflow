---
name: design-review
description: Review a screen, flow, Figma frame, screenshot or built page against this repo's standards — design principles, UX standards, accessibility (WCAG 2.1 AA) and microcopy — and score it with the design-principles quality scorecard. Use when the user asks to review, critique, audit or check a design before handoff.
---

# Design review

Review against **this team's** standards, not general taste.

## Read first
- `CLAUDE.md`
- `02-foundation/design-principles.md` — §4 principles, §5–6 MUST/MUST NOT, §8 scorecard
- `02-foundation/ux-standards.md`
- `02-foundation/accessibility.md`
- `02-foundation/content-and-microcopy.md`
- `02-foundation/memory.md` — the entries for the screens under review
- Relevant `03-design-system/` files, if filled in

## Steps

1. **Get the target.** Figma link (use Figma tools for a screenshot and design context), image, URL, or code. Confirm the screen's purpose, role and platform — from `memory.md` if recorded.

2. **Review in this order** (functional problems before cosmetic ones):
   1. User goal, clarity, hierarchy, navigation.
   2. Interactions and states: loading, empty (first-use vs. filtered), error, success, disabled, permission — per `ux-standards.md` §7.
   3. Forms, tables, search, overlays, destructive actions — the relevant `ux-standards.md` sections.
   4. Accessibility: contrast (calculate where colours are known), non-colour cues, labels, focus, target size.
   5. Microcopy: buttons, errors, empty states against the formulas in `content-and-microcopy.md`.
   6. Consistency with the project's tokens and components.

3. **Score** every category in the `design-principles.md` §8 table: `0`, `1`, `2` or `N/A` (with reason). A `0` in user goal, clarity, navigation, functionality or applicable accessibility = **Not ready**. Do not inflate scores.

4. **Write findings** as a table: ID, severity (Critical / High / Medium / Low), location, issue, standard broken (file + section), recommendation.

## Rules
- Say what you could not check (e.g. keyboard behaviour from a static image) — never claim it passed.
- Don't recommend new components or patterns when an existing one fits.
- Don't edit the design or `memory.md` unless asked; offer `/update-memory` for logic gaps.

## Finish
Verdict (Ready / Ready with fixes / Not ready), the scorecard, the findings table, and what was not verifiable.
