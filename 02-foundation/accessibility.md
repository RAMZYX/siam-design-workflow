---
title: Accessibility Standards
version: 1.0
baseline: WCAG 2.1 Level AA
scope: Reusable accessibility requirements for web and mobile UI
---

# Accessibility Standards (`accessibility.md`)

## Purpose

This file defines the **minimum accessibility bar** for product design, implementation, QA, and handoff. Target **WCAG 2.1 AA** for applicable web content. For native apps, apply equivalent accessible interaction principles and platform accessibility APIs. These rules are a baseline, not a guarantee of legal compliance or conformance; verify the actual product with manual and automated testing.

**MUST** use approved accessible design-system components where available, fix inaccessible patterns rather than copying them uncritically, and record exceptions with owner and remediation plan.

## 1. Perceivable content and contrast

- **Normal text:** MUST meet at least **4.5:1** contrast against its background.
- **Large text:** MUST meet at least **3:1** (approximately 18 pt regular or 14 pt bold and larger).
- **Meaningful UI component boundaries and graphical objects:** MUST meet **3:1** against adjacent colors where WCAG 1.4.11 applies.
- MUST evaluate text and controls in all relevant states: default, hover, focus, selected, disabled, error, success, and dark mode.
- MUST NOT convey status, error, requiredness, selection, or chart meaning by color alone. Pair color with text, icons, patterns, or other perceivable cues.
- MUST allow text resizing to **200%** without loss of content or functionality, subject to applicable WCAG exceptions.
- MUST support reflow at narrow viewport equivalents (320 CSS px for typical vertically scrolling content), except content that legitimately requires two-dimensional layout (e.g., data tables).
- MUST avoid images of text when actual text can provide the same result, except allowed cases such as essential presentation or customizable imagery.

## 2. Keyboard operation and focus

- MUST make every actionable control operable using a keyboard without requiring a mouse.
- MUST use a logical focus order that matches meaning and visual sequence.
- MUST provide a visible focus indicator for keyboard focus; do not remove outlines without a suitable replacement.
- MUST avoid keyboard traps; users must be able to leave widgets and dialogs by an expected method.
- MUST support native semantics and expected keys: Tab/Shift+Tab for movement, Enter/Space for activation as appropriate, arrow keys for composite widgets where applicable, Escape for dismissible overlays when safe.
- MUST manage focus when opening/closing modals, showing critical validation, changing routes, and removing focused elements.
- MUST return focus to a sensible location after a dialog closes (usually the trigger, if it still exists).
- SHOULD provide a skip-to-main-content mechanism for pages with repeated navigation.
- MUST avoid unexpected focus movement while users type or select options.
- MUST ensure hover-triggered content can be dismissed, hovered, and persisted as required by WCAG 1.4.13 where applicable.

## 3. Touch targets and gestures

- **WCAG 2.1 AA:** No universal minimum touch-target pixel size is mandated by this version. Nonetheless, use **at least 44 × 44 CSS px as a recommended design target** for frequently tapped controls, allowing platform-specific exceptions and layout constraints.
- MUST provide sufficient separation to avoid accidental activation.
- MUST offer a simple single-pointer alternative to complex path-based or multipoint gestures, unless essential.
- MUST NOT rely solely on swipe, drag, hover, or motion to access required functionality.
- MUST ensure orientation changes do not block functionality unless a specific orientation is essential.

## 4. Labels, names, and instructions

- MUST give each input a programmatically associated accessible label.
- MUST use visible, persistent field labels; placeholders alone are insufficient.
- MUST expose each control's accessible name, role, value, and state.
- MUST make accessible names for visible-label controls include the visible label text (WCAG 2.5.3).
- MUST use clear headings, landmarks, and semantic structure so assistive-technology users can navigate efficiently.
- MUST identify required inputs and provide format guidance when needed; do not rely on an unexplained asterisk.
- MUST associate errors and helper text with their respective fields.
- MUST avoid instructions dependent solely on position, shape, sound, or color (“click the red button on the right”).
- SHOULD use native HTML elements for web controls before custom ARIA widgets.

## 5. Images, icons, media, and charts

- **Informative images:** MUST have concise alternative text that communicates their purpose.
- **Decorative images:** MUST be ignored by assistive technology (e.g., empty `alt` on web images).
- **Functional icons:** MUST have a meaningful accessible name through the interactive control; avoid duplicate icon announcements.
- **Complex diagrams/charts:** MUST provide an accessible text summary or equivalent data presentation, not only a visual legend.
- **Video with audio:** MUST provide accurate captions when required by WCAG 2.1 AA.
- **Prerecorded audio/video:** MUST provide required alternatives, such as transcripts or audio description, depending on media type and criterion.
- MUST provide controls to pause, stop, or hide moving or auto-updating content where WCAG requires them.
- MUST respect reduced-motion preferences when feasible and avoid flashes exceeding applicable seizure thresholds.

## 6. Forms and validation accessibility

- MUST announce or programmatically expose validation errors in a way screen readers can discover.
- MUST identify the field in error and describe how to correct it.
- MUST preserve values on recoverable errors and avoid wiping the form.
- MUST not use color alone for invalid states.
- MUST expose required, invalid, expanded, checked, selected, and disabled states programmatically when relevant.
- MUST ensure keyboard users can reach errors and corrections efficiently; for long forms, consider an error summary with links.
- MUST provide accessible error prevention for legal commitments, financial transactions, or changes/deletions of user-controlled data when WCAG 3.3.4 applies (reversible, checked, or confirmed submissions).

## 7. Dynamic content and announcements

- MUST provide perceivable feedback for loading completion, successful submission, failures, and important asynchronous updates.
- For web apps, SHOULD use suitable live-region/status semantics for non-focus-changing messages; avoid announcing every keystroke.
- MUST ensure dialogs expose a title and appropriate modal semantics and maintain focus correctly.
- MUST ensure dropdowns, autocomplete, tabs, accordions, and custom widgets expose appropriate state and keyboard interactions.
- MUST not auto-navigate or change context solely because a field receives focus.
- MUST warn users about time limits and provide extensions where required by WCAG and supported by product/security rules.

## 8. Navigation, tables, and responsive behavior

- MUST use descriptive link and button names that make sense in context.
- MUST offer consistent navigation placement and identification across related pages.
- MUST give data tables meaningful headers and correct header-to-cell relationships.
- MUST make sortable columns, selected rows, filters, and pagination controls understandable without relying on icons alone.
- MUST maintain reading and focus order at responsive breakpoints.
- MUST ensure fixed/sticky headers, footers, and on-screen keyboards do not obscure the currently focused control.
- MUST not require users to distinguish information solely by spatial arrangement.

## 9. Screen-reader implementation notes

For each complex screen, document:

```markdown
- Screen title and heading hierarchy:
- Main landmarks/regions:
- Focus entry point and logical order:
- Accessible names for icon-only controls:
- State announcements (loading, success, error, selected):
- Modal/drawer focus behavior:
- Table/list semantics:
- Validation announcement behavior:
- Images/charts alternative descriptions:
- Known exceptions and remediation owner:
```

**Web guidance:** Prefer semantic HTML. Use ARIA only when necessary and ensure role/state attributes match actual behavior. Avoid `aria-label` when a visible native label already works. Test the accessibility tree, not only visual output.

**Native mobile guidance:** Use platform accessibility labels, hints, traits/roles, grouping, and focus order; verify with VoiceOver and TalkBack as applicable.

## 10. Testing protocol

**Automated checks:** Use an accessibility linter/audit tool to catch detectable issues (e.g., missing labels, contrast failures, invalid ARIA). Automated tools cannot prove WCAG conformance.

**Manual checks:**
1. Navigate the full journey using keyboard only; inspect visible focus and focus order.
2. Check zoom/text resizing, responsive reflow, orientation, and device font scaling.
3. Test representative screens with a screen reader and confirm names, roles, states, announcements, and navigation.
4. Check contrast for real content and interactive states.
5. Validate forms with missing/invalid data and recover from errors.
6. Test dialogs, dropdowns, tables, search, pagination, and destructive confirmations.
7. Review alt text, captions, charts, motion, and non-color cues.
8. Re-test after design-system or shared-component changes.

## 11. Pre-handoff accessibility checklist

- [ ] WCAG 2.1 AA applicable success criteria reviewed.
- [ ] Normal text contrast ≥4.5:1; large text ≥3:1; relevant UI boundaries/graphics ≥3:1.
- [ ] Information and status are not communicated through color alone.
- [ ] All functions work by keyboard; focus order and visible focus are correct.
- [ ] Dialogs and overlays manage focus and dismissal properly.
- [ ] Controls have accessible names, roles, values, and states.
- [ ] Forms have persistent labels, instructions, required-state cues, and associated errors.
- [ ] Images have appropriate alternatives; charts/media have accessible equivalents.
- [ ] Dynamic status messages are perceivable to assistive technologies.
- [ ] Responsive layouts, 200% zoom, and target spacing have been reviewed.
- [ ] Representative journeys have been tested with screen readers.
- [ ] Exceptions are documented with impact, owner, and remediation plan.

## 12. Claude Code operating rules

Before UI work, read this file and the project's design system. While implementing, prefer native semantics and approved accessible components. After implementing, report what was actually tested versus what remains unverified. Record screen-specific accessibility interactions and known gaps in `memory.md` for later FRD generation.

## References

- [W3C WCAG 2.1 Recommendation](https://www.w3.org/TR/WCAG21/)
- [W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
