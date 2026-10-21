---
title: UX Standards
version: 1.0
scope: Reusable interaction standards across products
applies_to: Web, mobile, dashboards, admin portals, and responsive interfaces
---

# UX Standards (`ux-standards.md`)

## Purpose and authority

Use this file to define **repeatable, predictable interaction patterns** across a product. It guides Claude Code when designing, implementing, reviewing, and documenting UI behavior. Apply it alongside the project's approved design system, functional requirements, `memory.md`, and accessibility standards.

**MUST:** Reuse approved project components and interaction conventions before introducing new ones. Preserve confirmed business rules. Document exceptions and screen-specific logic in `memory.md`.

**MUST NOT:** Infer product-specific rules (e.g., password length, maximum upload size, page size, debounce interval, session timeout) from this generic guide. Ask for decisions or label them `TBD`.

## 1. Global interaction principles

- Every interactive element MUST have an understandable purpose, label, state, and observable outcome.
- Similar actions MUST behave consistently across screens and platforms.
- Prefer recognition over recall: expose relevant context, current selection, progress, and next actions.
- Avoid surprising navigation, loss of entered data, or silent data changes.
- Prevent accidental duplicate submissions and clearly indicate in-progress operations.
- Provide reversible actions when practical; require appropriate confirmation for irreversible or high-impact changes.
- Design pointer, touch, keyboard, and assistive-technology interactions together.
- Use the smallest interaction pattern that fully supports the task, not the one that looks most impressive.
- Distinguish **loading**, **empty**, **error**, **success**, **disabled**, **read-only**, and **permission-restricted** states.

## 2. Forms

### Labels and helper text
- MUST provide a persistent visible label for each field; placeholders are examples, not labels.
- MUST identify required fields clearly and consistently; if using an asterisk, explain it.
- SHOULD mark optional fields when most fields are required, or required fields when most are optional.
- MUST group related inputs under meaningful headings and use appropriate field types.
- MUST place relevant help, units, format hints, and constraints near the field, before errors occur where feasible.
- MUST preserve entered values when validation fails unless security requirements explicitly prevent it.

### Validation
- MUST validate against **confirmed** product rules; never invent regexes, lengths, or thresholds.
- SHOULD validate format when users finish a field (blur) or at submission; use real-time feedback when it is helpful and not disruptive.
- MUST not display an error before the user has had a fair chance to complete the input.
- MUST place inline errors next to the affected field and associate them programmatically with it.
- MUST explain the problem and how to correct it. Avoid generic “Invalid input.”
- MUST handle client-side and server-side failures; server validation remains authoritative when applicable.
- MUST show a form-level summary when multiple errors or a long form make errors hard to locate; link/focus to fields as appropriate.
- MUST define exactly when Submit is enabled, disabled, or loading in `memory.md`.
- SHOULD keep Submit available when a form can explain validation on submit; do not disable it without a defined reason.

### Form actions
- Use a clear primary action that states the outcome: “Save changes,” “Create account,” “Send invite.”
- Keep Cancel/Back distinguishable from the primary action.
- Define whether Cancel discards edits, whether unsaved-change confirmation appears, and whether drafts persist.
- During submission, indicate progress and prevent accidental duplicate actions without trapping users.
- On success, show the outcome and the next step; on failure, preserve recoverable data and offer retry.

## 3. Navigation

- MUST use consistent placement, naming, active states, and back behavior for primary navigation.
- MUST show where users are within complex hierarchies through active tabs, headings, breadcrumbs, or equivalent cues.
- MUST use navigation controls for navigation and action controls for operations.
- MUST preserve relevant filters, scroll position, and form state on return **when the project specifies this behavior**.
- MUST define deep-link, refresh, browser-back, session-expiry, and permission-denied behavior where applicable.
- MUST ensure focus moves sensibly after navigation or content replacement.
- SHOULD keep high-frequency destinations easy to reach and avoid unnecessary nested levels.
- MUST document conditional routes and role-specific destinations in `memory.md`.

## 4. Tables and data-heavy lists

### Structure
- Use descriptive column headers and align comparable data consistently.
- Distinguish clickable rows from noninteractive rows; do not hide essential actions behind hover alone.
- Preserve readable layouts at small widths; use an approved responsive pattern (horizontal scroll, column priority, card view, etc.).

### Sorting
- MUST identify sortable columns and indicate active sort field/direction.
- MUST define default order and stable tie-breaking when relevant.
- MUST distinguish client-side from server-side sorting where this changes behavior.

### Filtering and search
- MUST show active filters and provide a clear way to remove individual filters and reset all.
- MUST define whether changes apply immediately or on an Apply action.
- MUST define interactions between search, filters, sorting, and pagination.
- MUST display meaningful “no matching results” feedback, separate from “no data exists.”

### Pagination
- MUST use the project's approved pagination component/pattern.
- MUST define page size, page count behavior, current page, and previous/next states from requirements.
- MUST specify what happens to page selection after filters, sorting, deletions, or data refresh.
- MUST not silently reset the page without a defined reason.
- SHOULD show total results and range when the data source supports them.

### Bulk actions
- MUST make selection state and selected count visible.
- MUST define whether “Select all” means current page, current filtered results, or the full dataset.
- MUST show which records an action affects and handle partial failures.
- MUST require confirmation for destructive or high-impact bulk actions.
- MUST clear or preserve selection after actions according to documented rules.

## 5. Search patterns

- MUST give search a descriptive label or accessible name and an obvious clear action when populated.
- MUST define match scope (current list, module, or entire product) and whether results are live or submitted.
- MUST distinguish no query, loading, results, no matches, and search failure.
- SHOULD retain the query when moving to result details and returning, if consistent with the product flow.
- SHOULD highlight matched terms only if the design system supports it and contrast remains sufficient.
- MUST document debouncing, minimum characters, ranking, and search syntax only if approved; do not invent values.

## 6. Modal vs. drawer vs. full page

| Pattern | Prefer when | Avoid when |
|---|---|---|
| **Modal/dialog** | Short, focused decision or contained task; confirmation; blocking choice | Long workflows, extensive editing, multiple nested decisions |
| **Drawer/side panel** | Inspect or edit context while keeping the underlying screen visible | Complex work needing full width, deep navigation, or unclear context |
| **Full page** | Multi-step tasks, substantial forms, primary destinations, complex content | A trivial confirmation that interrupts navigation unnecessarily |

Rules for all overlays:
- MUST have an accessible title, clear close/cancel behavior, and defined primary action.
- MUST manage keyboard focus on open/close and restore focus appropriately.
- MUST define outside-click and Escape behavior, especially with unsaved changes.
- MUST NOT stack nested overlays unless the existing approved pattern explicitly supports it.
- MUST maintain a predictable backdrop, scroll, and responsive behavior.
- MUST define what happens to unfinished work on dismissal.

## 7. Loading, empty, error, and success states

| State | Required UX behavior |
|---|---|
| **Loading** | Indicate work in progress; keep layout stable where possible; prevent duplicate actions; avoid falsely suggesting completion. |
| **Empty: first use** | Explain what is absent and offer the next meaningful action, if available. |
| **Empty: filtered** | State that nothing matches and offer Clear filters or Edit search. |
| **Error: field** | Identify affected input and how to fix it. |
| **Error: system/network** | Explain what failed in plain language, whether data was saved, and what can be tried next. |
| **Permission denied** | Explain access limitation without exposing sensitive details; provide an authorized next step. |
| **Success** | Confirm what completed; show destination, result, or next action. |
| **Partial success** | Distinguish completed and failed items and explain recovery. |

- MUST avoid blank screens and indefinite spinners without defined recovery where applicable.
- MUST not use success messaging until the operation has actually succeeded.
- SHOULD use skeletons for predictable content layouts and progress indicators for longer operations, following approved patterns.
- MUST keep feedback perceivable to screen readers, as defined in `accessibility.md`.

## 8. Destructive and high-impact actions

- Examples: Delete, Remove access, Cancel booking, Discard edits, Publish irreversible change, Bulk archive.
- MUST communicate the affected object(s) and consequence before irreversible actions.
- MUST distinguish reversible actions (prefer Undo where reliable) from irreversible actions (prefer explicit confirmation).
- MUST make the destructive action label specific: “Delete 3 records,” not just “Confirm.”
- MUST place destructive and safe actions so accidental activation is less likely.
- MUST define permissions, dependencies, and post-action navigation.
- MUST handle server failure and partial bulk failure without implying success.
- MUST NOT require a confirmation dialog for every harmless action; reserve it for meaningful risk.

## 9. Responsive and device behavior

- Preserve task hierarchy and control meaning across screen sizes.
- Use accessible touch targets and sufficient spacing; see `accessibility.md`.
- Avoid hover-only functionality on touch devices.
- Support expected keyboard actions, including Enter/Space activation and Escape dismissal where applicable.
- Respect platform conventions unless the project explicitly specifies otherwise.
- Document mobile-specific overlays, table alternatives, sticky actions, and keyboard obstruction handling.

## 10. Interaction specification format

For each new or changed screen, capture in `memory.md`:

```markdown
### [SCREEN-ID] — [SCREEN NAME]
- Entry conditions and roles:
- UI controls and default states:
- Interaction: [TRIGGER] → [VALIDATION] → [SYSTEM ACTION] → [UI FEEDBACK] → [NEXT STATE]
- Form fields and exact validation rules:
- Navigation, back, cancel, and unsaved changes:
- Search/filter/sort/pagination and bulk actions (if applicable):
- Loading, empty, success, error, and permission states:
- Destructive action handling:
- Responsive, keyboard, and focus behavior:
- Dependencies, assumptions, and open questions:
- Acceptance criteria:
```

## 11. Pre-handoff UX checklist

- [ ] Every control has a purpose, label, enabled/disabled behavior, and outcome.
- [ ] Forms include persistent labels, required-field rules, inline errors, and recovery.
- [ ] Navigation, back, cancel, and unsaved changes are predictable.
- [ ] Tables define sort, filter, search, pagination, selection, and bulk-action semantics.
- [ ] Overlay choice is justified and focus/close behavior is specified.
- [ ] Loading, empty, success, error, and restricted states are designed.
- [ ] High-impact actions have proportionate safeguards.
- [ ] Keyboard, touch, screen-reader, and responsive behavior are addressed.
- [ ] Approved project design-system components are reused.
- [ ] All screen-specific logic is recorded in `memory.md`; unknown rules are flagged.

## 12. Claude Code usage

**Before implementation:** Read the project's design-system files, `ux-standards.md`, `accessibility.md`, `content-and-microcopy.md`, and relevant `memory.md` entries.

**During implementation:** Prefer existing components; implement confirmed behavior; verify interactions and states; do not fill functional gaps with guesses.

**After implementation:** Update `memory.md` with verified interactions, validations, states, and deviations. When the user later requests an FRD, use `frd-template.md` plus `memory.md` to document the confirmed behavior.
