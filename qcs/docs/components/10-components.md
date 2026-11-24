# 10 · Components

The full component library. Every component lists its version, status and change log, then purpose, anatomy, variants, states, behaviour, tokens and usage. Styles: `tokens/components.css`.

_QCS Brand Book v1.0 · generated from index.html_

## Library

Library v1.1.0 · 30 components · updated 11 Nov 2026. Versions follow major.minor.patch: major for breaking changes, minor for additions, patch for fixes.

| Component | Category | Version | Status | Updated |
| --- | --- | --- | --- | --- |
| [Button](#button) | Actions | 1.0.0 | Stable | 3 Nov 2026 |
| [Text field, search & text area](#text-field-search-text-area) | Inputs | 1.0.0 | Stable | 3 Nov 2026 |
| [Select & menu](#select-menu) | Inputs | 1.0.0 | Stable | 3 Nov 2026 |
| [Checkbox, radio & switch](#checkbox-radio-switch) | Inputs | 1.0.0 | Stable | 3 Nov 2026 |
| [Segmented control](#segmented-control) | Inputs | 1.0.0 | Stable | 3 Nov 2026 |
| [Mode choice cards](#mode-choice-cards) | Inputs | 1.0.0 | Stable | 3 Nov 2026 |
| [Sidebar](#sidebar) | Navigation | 1.0.0 | Stable | 3 Nov 2026 |
| [Top header](#top-header) | Navigation | 1.0.0 | Stable | 3 Nov 2026 |
| [Back to QCS](#back-to-qcs) | Navigation | 1.0.0 | Stable | 3 Nov 2026 |
| [Tabs & back link](#tabs-back-link) | Navigation | 1.1.0 | New | 11 Nov 2026 |
| [Card](#card) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [Status & pills](#status-pills) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [Status count key](#status-count-key) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [Overflow chip](#overflow-chip) | Content | 1.1.0 | New | 11 Nov 2026 |
| [Avatar](#avatar) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [QCS logo mark](#qcs-logo-mark) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [Dashboard & summary card](#dashboard-summary-card) | Data | 1.0.0 | Stable | 3 Nov 2026 |
| [List card](#list-card) | Data | 1.0.0 | Stable | 3 Nov 2026 |
| [Table & pagination](#table-pagination) | Content | 1.0.0 | Stable | 3 Nov 2026 |
| [Accordion](#accordion) | Content | 1.1.0 | New | 11 Nov 2026 |
| [Usage meter](#usage-meter) | Data | 1.0.0 | Stable | 3 Nov 2026 |
| [Snackbar & inline alert](#snackbar-inline-alert) | Feedback | 1.0.0 | Stable | 3 Nov 2026 |
| [Callout](#callout) | Feedback | 1.1.0 | New | 11 Nov 2026 |
| [Modal](#modal) | Feedback | 1.0.0 | Stable | 3 Nov 2026 |
| [Tooltip](#tooltip) | Feedback | 1.0.0 | Stable | 3 Nov 2026 |
| [Usage bar, progress ring & steps](#usage-bar-progress-ring-steps) | Feedback | 1.1.0 | Stable | 11 Nov 2026 |
| [Loaders & empty states](#loaders-empty-states) | Feedback | 1.0.0 | Stable | 3 Nov 2026 |
| [App shell](#app-shell) | Layout | 1.0.0 | Stable | 3 Nov 2026 |
| [Dashboard grid](#dashboard-grid) | Layout | 1.0.0 | Stable | 3 Nov 2026 |
| [Audit screen](#audit-screen) | Layout | 1.0.0 | Stable | 3 Nov 2026 |

## Button

`v1.0.0` · Stable · Actions

Starts an action. The label says exactly what happens next.

|  |  |
| --- | --- |
| Anatomy | Container · label · optional 16 px icon, 8 px gap |
| Variants | Primary (deep teal), action teal, secondary (white with border), link (teal text), destructive · icon-only 32 px square · 38 px default, 48 px for the main add action |
| States | Default, hover, focus, pressed, disabled (45%, with a reason), loading |
| Behaviour | One primary per page, on the right of the title row. Action teal is only for Care plan audit and the Supervision shortcut; it darkens and lifts 1 px on hover. Loading keeps the width. A disabled button stays hoverable so its tooltip can say why. |
| Responsive | Desktop only; buttons never stretch full width. |
| Accessibility | Visible label or accessible name; 2 px teal focus outline; icon-only buttons need a name and a tooltip. |
| Tokens | `brand, brand-deep, on-brand, cta, cta-deep, line-strong, danger-solid, radius-sm, shadow-cta` |

**Do:** Use one primary per page, and link buttons for row actions such as Manage.

**Don't:** Put two primaries side by side, or use red for an action that is not destructive.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented from the QCS screens: primary, action teal, secondary, link and icon button |

## Text field, search & text area

`v1.0.0` · Stable · Inputs

Lets people enter and edit text, on one line or several.

|  |  |
| --- | --- |
| Anatomy | Label above · input · helper or error text · optional icon |
| Variants | Text input (48 px in forms), search (320 × 42 px, icon on the right), text area (at least 88 px tall) |
| States | Default, focused, filled, error, success, disabled, read-only, character limit |
| Behaviour | The label stays visible above the field. Errors say what went wrong and how to fix it, under the field in error colour. Search sits above the list it filters, on the left. |
| Responsive | One column inside the 520 px modal. |
| Accessibility | Persistent label tied to the input; errors written in text and linked to the field. |
| Tokens | `card, line-strong, brand, danger-line, ink-muted, radius-sm` |

**Do:** Show a visible label and an error that says how to fix it.

**Don't:** Rely on placeholder text as the label.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: text field, search input and text area |

## Select & menu

`v1.0.0` · Stable · Inputs

Choose one option from a list, or pick an action from a menu.

|  |  |
| --- | --- |
| Anatomy | Label · trigger with chevron · floating list · items · optional divider |
| Variants | Select as a filter (42 px) and in forms (48 px), row action menu |
| States | Closed, open, item hover, item selected, disabled, invalid, no results |
| Behaviour | The list opens below the trigger with shadow-overlay; the selected row uses brand-tint. Arrows move, Enter selects, Escape closes. Destructive actions such as Archive sit last. |
| Responsive | Desktop only. |
| Accessibility | Arrow keys move through options, Enter selects, Escape closes. |
| Tokens | `card, line-strong, brand-tint, brand-tint-text, shadow-overlay, radius-sm` |

**Do:** Show the current value in the trigger.

**Don't:** Hide the page’s main action inside a menu.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: filter and form select, row action menu |

## Checkbox, radio & switch

`v1.0.0` · Stable · Inputs

Choose options. Checkbox for many, radio for one, switch for an instant on/off.

|  |  |
| --- | --- |
| Anatomy | Control · label · optional description |
| Variants | Checkbox (row selection, with indeterminate; 6 px radius, a known off-scale value), radio group (assign manager), switch (36 × 20 px) |
| States | Unselected, selected, indeterminate, focus, disabled |
| Behaviour | The header checkbox selects the page and shows the selection bar. A switch applies at once; checkboxes and radios apply on save. |
| Responsive | Labels wrap instead of truncating. |
| Accessibility | Groups have a visible heading; state is never shown by colour alone. |
| Tokens | `brand, on-brand, line-strong, sand` |

**Do:** Show bulk actions only when rows are selected.

**Don't:** Use a switch inside a form that needs Save.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: checkbox, radio and switch |

## Segmented control

`v1.0.0` · Stable · Inputs

A fused control for views of the same content: Table / Grid, scope and view-as.

|  |  |
| --- | --- |
| Anatomy | Container · 2 to 4 segments · optional icon |
| Variants | View toggle, scope, view as |
| States | Default, hover, selected, focus |
| Behaviour | One segment is always selected. Selected uses brand-tint with teal text; the change takes 120 ms. |
| Responsive | Desktop only. |
| Accessibility | A radio group; arrows move the selection. |
| Tokens | `card, line-strong, brand-tint, brand-tint-text, radius-md` |

**Do:** Use it for two to four views of the same content.

**Don't:** Use it to move between pages.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: view toggle, scope and view as |

## Mode choice cards

`v1.0.0` · Stable · Inputs

Two or three selectable cards for a meaningful choice, such as Dynamic or Default limits.

|  |  |
| --- | --- |
| Anatomy | Card · radio · title · one line |
| Variants | Two or three cards; radio cards in the Assign manager modal |
| States | Default, hover, selected, focus, disabled |
| Behaviour | A radio group drawn as cards. Selected has a 2 px teal border and brand-tint fill. |
| Responsive | Cards wrap below each other when narrow. |
| Accessibility | Arrows move between cards; the selected card is announced. |
| Tokens | `card, line-strong, brand, brand-tint, radius-md` |

**Do:** Use for two or three choices with real consequences.

**Don't:** Use cards for a simple yes or no.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: Dynamic and Default cards |

## Sidebar

`v1.0.0` · Stable · Navigation

The 100 px flat teal rail with icon-over-label items. The frame of every QCS screen.

|  |  |
| --- | --- |
| Anatomy | QCS mark (52 px) · items (23 px icon over a 12 px label) · Back to QCS box |
| Variants | Organisation menu, filtered for QCS to Dashboard, Professionals, Service users, PAL audit and Settings |
| States | Default, hover, active, focus |
| Behaviour | The active item is a full-width square block in nav-active. Hover is a translucent white. Flat, no gradient. |
| Responsive | Fixed width; the main area absorbs extra space. |
| Accessibility | The current page is announced; every item has a visible label. |
| Tokens | `nav-bg, nav-active, nav-item, nav-item-hover, shadow-navigation` |

**Do:** Keep the active item a square block.

**Don't:** Use a rounded pill for the active item; it was tried and rejected.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: 100 px flat teal rail, square active block |

## Top header

`v1.0.0` · Stable · Navigation

A 64 px white bar: Manage organisations, the organisation name, view as, the Supervision shortcut and the profile.

|  |  |
| --- | --- |
| Anatomy | Back link and organisation name · view-as segmented control · action-teal shortcut · avatar |
| Variants | Organisation header; QCS home header |
| States | Default |
| Behaviour | Sticky, white, shadow-overlay, quieter than the sidebar. Page actions never sit here. |
| Responsive | Fluid width. |
| Accessibility | The organisation name is the page’s context, read before the page title. |
| Tokens | `card, ink, ink-soft, cta, shadow-overlay` |

**Do:** Keep page actions in the page title row.

**Don't:** Add a second primary button to the header.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: 64 px header |

## Back to QCS

`v1.0.0` · Stable · Navigation

The outlined box at the bottom of the sidebar that leaves the organisation.

|  |  |
| --- | --- |
| Anatomy | Outlined box · arrow · label |
| Variants | Back to QCS, Home |
| States | Default, hover, focus |
| Behaviour | Outlined in rgba(255,255,255,.45) with a 10 px corner (a known off-scale value). 11.5 px / 600 label. Hover fills with nav-item-hover over 160 to 180 ms. |
| Responsive | Fixed in the rail. |
| Accessibility | A link with a visible label. |
| Tokens | `nav-bg, nav-item-hover` |

**Do:** Keep it at the bottom of the rail.

**Don't:** Style it like a navigation item.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: Back to QCS and Home box |

## Tabs & back link

`v1.1.0` · New · Navigation

Switch between views of one record, and step back to the list.

|  |  |
| --- | --- |
| Anatomy | Back link · tab list with active indicator · panel |
| Variants | Underline tabs (PAL audit result: Overview, Areas to update, Answers, History) |
| States | Default, hover, active, focus |
| Behaviour | The active tab has a 2 px teal underline. Back returns to the list the person came from. |
| Responsive | Desktop only. |
| Accessibility | A tab list; arrows move between tabs. |
| Tokens | `ink, ink-soft, brand, line` |

**Do:** Keep two to six short labels in sentence case.

**Don't:** Use tabs to move to a different page.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 11 Nov 2026 | Added from the PAL audit result tabs |

## Card

`v1.0.0` · Stable · Content

Groups related content into one scannable surface.

|  |  |
| --- | --- |
| Anatomy | White surface · eyebrow · title · text · optional action |
| Variants | Static, linked · 20 px padding |
| States | Default, hover (linked) |
| Behaviour | White, 20 px radius, shadow-card, no border. Group inside with spacing and hairline dividers. |
| Responsive | The outer grid adapts; a card’s inside never changes. |
| Accessibility | A linked card has one link with a clear name; heading order is kept. |
| Tokens | `card, line, shadow-card, radius-lg` |

**Do:** Put white cards on the warm canvas.

**Don't:** Nest a card in a card, or darken it to show depth.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: white card, 20 px radius, shadow-card |

## Status & pills

`v1.0.0` · Stable · Content

Tags name a category or status; badges show a count.

|  |  |
| --- | --- |
| Anatomy | Pill · optional dot · word; or 8 px dot plus a 14 px word |
| Variants | Tier pills (Platinum, Gold, Basic) · status (Active, Archived, Spent, Not set, Pending) · dot and word · count |
| States | Static (never clickable) |
| Behaviour | Pills are 12.5 px / 700 with .02em tracking on their tint. Archived is amber; red is only for failed or spent. Unread counts show “—”. |
| Responsive | Tags wrap onto the next line; labels never truncate. |
| Accessibility | Status is in the text, not only the colour. |
| Tokens | `brand-tint, success-tint, warning-tint, danger-tint, info-tint, status colours, radius-pill` |

**Do:** Use the same word and colour for the same status everywhere.

**Don't:** Use a bare coloured dot, or red for archived.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: tier pills, status pills, dot and word |

## Status count key

`v1.0.0` · Stable · Content

A two-row key of dot, word and number for Active and Archived.

|  |  |
| --- | --- |
| Anatomy | Dot · word · number, right-aligned |
| Variants | Active and Archived |
| States | Loaded, not loaded (—) |
| Behaviour | Numbers use tabular figures. Before the backend answers, show “—”. |
| Responsive | Fixed size. |
| Accessibility | The word carries the meaning; the dot only supports it. |
| Tokens | `success, warning, ink` |

**Do:** Show “—” when the count is unknown.

**Don't:** Show 0 for a count that has not loaded.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: Active and Archived key |

## Overflow chip

`v1.1.0` · New · Content

A “+2” chip beside the first value. Hover or focus lists the rest.

|  |  |
| --- | --- |
| Anatomy | First value · +N chip · bubble listing the rest |
| Variants | Names, care plan files |
| States | Default, hover, focus |
| Behaviour | Shows the first value in full and lists the others on hover and on keyboard focus. |
| Responsive | Fits in a table cell. |
| Accessibility | The chip is focusable and names how many more there are. |
| Tokens | `paper-deep, ink, shadow-tooltip` |

**Do:** Show the first value in full.

**Don't:** Truncate every value with an ellipsis.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 11 Nov 2026 | Added from the PAL audit design |

## Avatar

`v1.0.0` · Stable · Content

Represents a person with a photo or their initials.

|  |  |
| --- | --- |
| Anatomy | Circle · photo or initials · optional status dot |
| Variants | 36 px and 48 px · initials only |
| States | Default, with status |
| Behaviour | Two initials in teal on brand-tint. |
| Responsive | Same sizes on every screen; groups show +N when space is short. |
| Accessibility | Give an accessible name unless the person’s name is shown beside it. |
| Tokens | `brand-tint, brand-tint-text` |

**Do:** Show the person’s name beside the avatar.

**Don't:** Use colour to mean anything about the person.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: initials on brand-tint |

## QCS logo mark

`v1.0.0` · Stable · Content

The QCS speech-bubble mark at the top of the sidebar. See the Logo chapter.

|  |  |
| --- | --- |
| Anatomy | 512 px PNG with its own teal tile |
| Variants | 52 px in the sidebar |
| States | Static |
| Behaviour | Rendered by QcsLogo from public/images/qcs.png with a 10 px corner. |
| Responsive | Fixed size. |
| Accessibility | Alt text “QCS”. |
| Tokens | `nav-bg` |

**Do:** Use the supplied file.

**Don't:** Redraw the mark in code.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented from QcsLogo |

## Dashboard & summary card

`v1.0.0` · Stable · Data

Shows one metric with an icon chip, a label, a value and its change.

|  |  |
| --- | --- |
| Anatomy | 44 px icon circle · title · numbers split by hairlines · sub-label |
| Variants | Dashboard card (icon, title, up to 3 stat columns), summary card (icon, number, label on Manage organisations) |
| States | Default |
| Behaviour | Cards sit in named sections: Overview, Adoption snapshot, Pending actions. 30 px from header to numbers. Numbers use tabular figures and show “—” until loaded. |
| Responsive | Stat columns go from 3 to 2 at 1200 px; dividers go at 1024 px. |
| Accessibility | Values are real text; the change is written with its sign. |
| Tokens | `card, metric-teal, metric-teal-tint, line, shadow-card, radius-lg` |

**Do:** Group cards into named sections.

**Don't:** Show 0 before the backend has answered.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: dashboard card and summary card |

## List card

`v1.0.0` · Stable · Data

A card of rows, such as Pending actions on the dashboard.

|  |  |
| --- | --- |
| Anatomy | Card · section title · rows with an action link |
| Variants | Pending actions, recent activity |
| States | Default, empty |
| Behaviour | Rows are split by hairlines with one action link on the right. The Review pill uses brand-tint, not the legacy lavender. |
| Responsive | Rows wrap their text. |
| Accessibility | Each action names its row. |
| Tokens | `card, line, brand-text, shadow-card, radius-lg` |

**Do:** One action per row.

**Don't:** Nest cards inside the list card.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: Pending actions |

## Table & pagination

`v1.0.0` · Stable · Content

Compares records row by row, with sorting, filtering and bulk actions.

|  |  |
| --- | --- |
| Anatomy | Search and filters · selection bar · plain header row · striped rows · status · row action link · pagination |
| Variants | List table (Professionals, Service users, PAL audit), organisations table with usage bar and tier |
| States | Default, hover, selected, sorted, empty, no results, loading |
| Behaviour | Rows are striped sand and paper-deep, flat with no shadow. Status is a dot and a word. Row actions are links on the right. Pagination below says “1–10 of 48” with Rows per page. |
| Responsive | The table scrolls inside its frame; the page never scrolls sideways. |
| Accessibility | Real header cells; sortable headers announce direction; row actions have names. |
| Tokens | `card, sand, paper-deep, line-strong, ink, ink-soft, brand-text` |

**Do:** Keep headers, status and row actions in the same place on every table.

**Don't:** Add shadows or cards inside rows.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: striped list tables, organisations table, pagination |

## Accordion

`v1.1.0` · New · Content

Shows and hides sections of related content.

|  |  |
| --- | --- |
| Anatomy | White card · header (status icon, name, count, subtext, chevron) · rows |
| Variants | Single group, several groups |
| States | Collapsed, expanded, focus |
| Behaviour | The whole header toggles the rows. Used in the PAL audit result to keep long reports short; the group that needs action opens first. |
| Responsive | Full width on every screen. |
| Accessibility | The header is a button; the expanded state is announced. |
| Tokens | `card, line, ink-soft, shadow-card, radius-lg` |

**Do:** Collapse groups the reader does not need first.

**Don't:** Hide the only actionable item inside a closed group.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 11 Nov 2026 | Added from the PAL audit design |

## Usage meter

`v1.0.0` · Stable · Data

A card for one monthly allowance: number, bar, pill and the action.

|  |  |
| --- | --- |
| Anatomy | 42 px icon chip · title · pill · number (30 px) · “of 10 used this month” · bar · action |
| Variants | Normal, running low, spent |
| States | Loaded, not loaded (—) |
| Behaviour | Teal while the allowance is healthy, amber when running low, red when spent. When spent, the action it gates is blocked and the meter says so. |
| Responsive | Fixed inside its card. |
| Accessibility | The bar exposes its value; the state is written in the pill. |
| Tokens | `usage-normal, usage-warning, usage-spent, card, brand-tint, shadow-card` |

**Do:** Spell out the count.

**Don't:** Show “0 of 10” before the backend has answered.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: normal, running low and spent |

## Snackbar & inline alert

`v1.0.0` · Stable · Feedback

Tells people what happened and what to do next.

|  |  |
| --- | --- |
| Anatomy | Icon · title · message · optional action |
| Variants | Snackbar (success, error, warning), inline alert (info, warning, error) |
| States | Visible, dismissed |
| Behaviour | A snackbar confirms an action that just finished and closes by itself; one at a time. Success is past tense: “AI model updated successfully”. Errors say what happened and offer Try again. |
| Responsive | Toasts sit at the bottom on phones and at the top right on desktop. |
| Accessibility | Errors use role alert; toasts use role status and stay long enough to read. |
| Tokens | `success, warning, danger, *-tint, card, shadow-overlay, radius-md` |

**Do:** Use success tokens for success, every time.

**Don't:** Use a snackbar for a decision; that is a modal.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: snackbar and inline alert |

## Callout

`v1.1.0` · New · Feedback

An inline tinted note inside a page or a report.

|  |  |
| --- | --- |
| Anatomy | Icon · text |
| Variants | Info, warning, error, success |
| States | Static |
| Behaviour | Tinted fill, 12 px radius, no border. Stays next to the content it is about. |
| Responsive | Full width of its column. |
| Accessibility | The text carries the meaning, not the tint. |
| Tokens | `brand-tint, warning-tint, danger-tint, success-tint, radius-md` |

**Do:** Keep it next to what it is about.

**Don't:** Stack more than two callouts.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 11 Nov 2026 | Added from the PAL audit design: four tones, no border |

## Modal

`v1.0.0` · Stable · Feedback

Asks for a decision before the person continues.

|  |  |
| --- | --- |
| Anatomy | Scrim · 520 px panel · title (20 px / 600) · body · hairline footer with Cancel left of the action |
| Variants | Form modal, confirmation, detail view |
| States | Open, closing |
| Behaviour | Focus moves in and returns to the trigger; Escape closes unless an action is in flight. QCS has no drawer or side panel: detail views use this modal. |
| Responsive | Desktop only; 520 px wide. |
| Accessibility | Focus is trapped inside; the page behind is inert while it is open. |
| Tokens | `scrim, card, line, ink-soft, shadow-overlay, radius-lg` |

**Do:** Name the buttons: “No, cancel” and “Yes, delete”. Use the red button only for actions that cannot be undone; archiving uses the primary button.

**Don't:** Open a right-side drawer. It was rejected as not the QCS theme.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: 520 px modal; no drawer in QCS |

## Tooltip

`v1.0.0` · Stable · Feedback

Gives a short label or hint on hover or focus.

|  |  |
| --- | --- |
| Anatomy | Trigger · bubble · arrow |
| Variants | Label (icon buttons), hint (info icon), disabled reason |
| States | Hidden, visible |
| Behaviour | Ink bubble with white 13 px text, 8 px radius and a teal-tinted shadow. For a disabled control, keep it hoverable, set aria-disabled and guard the click so the tooltip can show. |
| Responsive | Touch screens have no hover; put the hint in visible text there. |
| Accessibility | Shown on keyboard focus as well as hover. |
| Tokens | `ink, card, shadow-tooltip, radius-sm` |

**Do:** Say why something is disabled: “Upload a care plan first”.

**Don't:** Put essential instructions only in a tooltip.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: info bubble and disabled reason |

## Usage bar, progress ring & steps

`v1.1.0` · Stable · Feedback

Shows how far along a task or score is.

|  |  |
| --- | --- |
| Anatomy | Label · value · track · fill; ring with one percentage; numbered steps |
| Variants | Usage bar (6 px, in the organisations table), progress ring (64 px, care plan alignment), steps (PAL audit flow) |
| States | Normal, running low, spent, complete |
| Behaviour | Always show the number with the bar: “70% · 7 of 10”. Teal for normal, amber for running low, red for spent. |
| Responsive | Steppers collapse to “Step 2 of 4” on narrow screens. |
| Accessibility | Bars expose their value and range; the current step is announced. |
| Tokens | `usage-normal, usage-warning, usage-spent, line, brand, success` |

**Do:** Show the figure as well as the bar.

**Don't:** Show a bar or ring without a label.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 11 Nov 2026 | Progress ring added from the PAL audit design |
| 1.0.0 | 3 Nov 2026 | Documented: usage bar |

## Loaders & empty states

`v1.0.0` · Stable · Feedback

Shows that something is loading.

|  |  |
| --- | --- |
| Anatomy | Spinner; inline loading text; empty state (icon chip, title, one line, one action) |
| Variants | Screen spinner, inline spinner, button loading, empty, no results, error, complete |
| States | Initial loading, inline loading |
| Behaviour | Name what is loading. The control keeps its size so nothing shifts. An empty state says what is missing and gives one action. |
| Responsive | Skeletons match the layout at each breakpoint. |
| Accessibility | Loading regions are marked busy; spinners stop under reduced motion. |
| Tokens | `brand, sand, paper-deep, brand-tint` |

**Do:** Write “Loading service users…”.

**Don't:** Write “Please wait” or leave a blank area.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: loaders and empty states |

## App shell

`v1.0.0` · Stable · Layout

Sidebar, header and content: the frame of every QCS screen.

|  |  |
| --- | --- |
| Anatomy | 100 px sidebar · 64 px header · canvas with the page title row and content |
| Variants | Organisation screens, QCS home |
| States | Default |
| Behaviour | The page title row has the title and count on the left and one primary action on the right. |
| Responsive | Minimum 1180 px; content capped at 1820 px. |
| Accessibility | Landmarks: navigation, banner, main. |
| Tokens | `nav-bg, card, paper, shadow-overlay` |

**Do:** Let the main area absorb extra width.

**Don't:** Change the sidebar width per page.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: sidebar, header, content |

## Dashboard grid

`v1.0.0` · Stable · Layout

Named sections of cards that stack below 1180 px.

|  |  |
| --- | --- |
| Anatomy | Section title · cards |
| Variants | Overview, Adoption snapshot, Pending actions |
| States | Default |
| Behaviour | 30 px below each section, 16 px between cards. Never one undifferentiated grid. |
| Responsive | Sections stack at 1180 px; stat columns go from 3 to 2 at 1200 px. |
| Accessibility | Each section has a heading. |
| Tokens | `paper, card, shadow-card` |

**Do:** Name each section.

**Don't:** Mix unrelated cards in one grid.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: named sections |

## Audit screen

`v1.0.0` · Stable · Layout

A full-screen overlay for the care plan audit and the PAL audit: a file sidebar and one report column.

|  |  |
| --- | --- |
| Anatomy | 62 px top bar with Back · 300 px sticky sidebar of files and actions · report column up to 1360 px |
| Variants | Care plan audit, PAL audit result |
| States | Loading, result, failed |
| Behaviour | Opens over the whole app at z-index 10000. Long reports group areas into accordions. The result states the finding in one sentence before the detail. |
| Responsive | Report column caps at 1360 px. |
| Accessibility | Focus moves into the overlay; Back returns to the list. |
| Tokens | `card, paper, line, shadow-card` |

**Do:** Keep one report column.

**Don't:** Split the report into side-by-side panels.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 3 Nov 2026 | Documented: care plan audit overlay |
