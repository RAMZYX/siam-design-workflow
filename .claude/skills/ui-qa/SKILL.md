---
name: ui-qa
description: Run UI QA on a built screen or app against the approved design, FRD, memory.md and standards using 05-testing/ui-qa-checklist.md — visual fidelity, components and states, responsiveness, accessibility — and log defects with evidence. Use when the user asks to QA, test, verify or compare a build against the design.
---

# UI QA

Only report what was actually tested. Untested checks stay `Not tested`.

## Read first
- `CLAUDE.md`
- `05-testing/ui-qa-checklist.md` — the template
- `02-foundation/memory.md` — expected behaviour for the screens under test
- `02-foundation/accessibility.md` — §10 testing protocol
- `03-design-system/Design Foundation/` — expected token values
- The approved design (Figma link) for comparison

## Steps

1. **Set up.** Confirm the build URL or local dev server, the screens (`SCR-` IDs), roles, viewports and design baseline. Create `05-testing/qa-[release-or-screen].md` from the template; fill §1 Test setup.

2. **Test in the browser.** Use the browser tools to open the build:
   - **Visual (V01–V06):** compare against the Figma frame; check spacing, type, colours and tokens via computed styles; try long and short content.
   - **Components and states (C01–C09):** click every control; trigger loading, empty, error, success, disabled and permission states where possible; submit forms with invalid data; check behaviour against `memory.md` and flows.
   - **Responsive (R01–R05):** resize to each specified viewport (at least 375, 768, desktop); check reflow at 320 px, no horizontal scroll, nav/table/overlay adaptation.
   - **Accessibility (A01–A07):** keyboard-only pass (Tab order, visible focus, no traps, Escape on dialogs), contrast on real colours, labels and accessible names from the accessibility tree, colour-only meaning, zoom 200%.

3. **Record results.** For each check: `Pass`, `Fail` (with defect ID and evidence), `N/A` (with reason), `Blocked`, or `Not tested`. Screen-reader testing with a real screen reader cannot be done from here — mark A06 `Not tested` unless the user did it.

4. **Log defects** in §7: `UI-00X`, severity, expected (design/FRD reference), actual, evidence (screenshot), status `Open`.

5. **Sign-off** (§8): set the release recommendation from the results — `Not ready` if any blocking defect is open. Leave approver names `PENDING`.

## Finish
Summarise pass/fail counts, blocking defects, what was not tested and why, and the recommendation. Reset any viewport changes in the browser.
