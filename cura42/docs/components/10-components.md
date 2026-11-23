# 10 · Components

The full component library. Every component lists its version, status and change log, then purpose, anatomy, variants, states, behaviour, tokens and usage. Styles: `tokens/components.css`.

_Cura42 Brand Book v2.2 · generated from index.html_

## Library

Library v2.2.0 · 19 components · updated 23 Nov 2026. Versions follow major.minor.patch: major for breaking changes, minor for additions, patch for fixes.

| Component | Category | Version | Status | Updated |
| --- | --- | --- | --- | --- |
| [Button](#button) | Actions | 2.0.0 | Stable | 23 Nov 2026 |
| [Text field & textarea](#text-field-textarea) | Inputs | 2.1.0 | Stable | 23 Nov 2026 |
| [Select & menu](#select-menu) | Inputs | 1.1.0 | New | 23 Nov 2026 |
| [Checkbox, radio & switch](#checkbox-radio-switch) | Inputs | 1.1.0 | New | 23 Nov 2026 |
| [Chip](#chip) | Inputs | 1.0.0 | New | 23 Nov 2026 |
| [Date picker](#date-picker) | Inputs | 1.0.0 | Beta | 23 Nov 2026 |
| [Card](#card) | Content | 1.1.0 | Stable | 23 Nov 2026 |
| [Tag & badge](#tag-badge) | Content | 1.1.0 | Stable | 23 Nov 2026 |
| [Avatar](#avatar) | Content | 1.0.0 | New | 23 Nov 2026 |
| [Table & data view](#table-data-view) | Content | 1.1.0 | New | 23 Nov 2026 |
| [Accordion](#accordion) | Content | 1.0.0 | New | 23 Nov 2026 |
| [Chat](#chat) | Communication | 1.0.0 | New | 23 Nov 2026 |
| [Alert & toast](#alert-toast) | Feedback | 2.1.0 | Stable | 23 Nov 2026 |
| [Dialog](#dialog) | Feedback | 1.0.0 | Beta | 23 Nov 2026 |
| [Tooltip](#tooltip) | Feedback | 1.0.0 | New | 23 Nov 2026 |
| [Progress & stepper](#progress-stepper) | Feedback | 1.2.0 | Stable | 23 Nov 2026 |
| [Spinner & skeleton](#spinner-skeleton) | Feedback | 1.1.0 | New | 23 Nov 2026 |
| [Navigation & tabs](#navigation-tabs) | Navigation | 1.2.0 | Stable | 23 Nov 2026 |
| [Breadcrumbs & pagination](#breadcrumbs-pagination) | Navigation | 1.0.0 | New | 23 Nov 2026 |

## Button

`v2.0.0` · Stable · Actions

Starts an action. The label says exactly what happens next.

|  |  |
| --- | --- |
| Anatomy | Container · label · optional leading or trailing icon |
| Variants | Primary, secondary, ghost, destructive, icon-only · S 36 px, M 44 px, L 56 px |
| States | Default, hover, focus, pressed, disabled, loading |
| Behaviour | Loading keeps the width, shows a spinner and blocks repeat clicks. Icon-only buttons need an accessible name. |
| Responsive | Full width on phones when it is the only action; height stays 44 px. |
| Accessibility | Visible label or accessible name; 44 px target; visible focus ring. |
| Tokens | `brand, brand-deep, on-brand, line-strong, danger, on-danger, radius-pill` |

**Do:** Use one primary action per view; supporting actions are secondary or ghost.

**Don't:** Show several competing primary buttons in the same area.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 2.0.0 | 23 Nov 2026 | Added destructive, icon-only, small and loading; one 44 px default height; ink variant retired |
| 1.0.0 | 23 Nov 2026 | Primary, ink, secondary and ghost taken from the website |

## Text field & textarea

`v2.1.0` · Stable · Inputs

Lets people enter and edit text, on one line or several.

|  |  |
| --- | --- |
| Anatomy | Label · input · helper or error text · optional icon · optional character count |
| Variants | Text, textarea, search (pill with leading icon) |
| States | Default, focused, filled, error, success, disabled, read-only, character limit |
| Behaviour | The label stays visible above the input. Validate on blur and show how to fix the error in the helper line. A counter shows characters used when a limit applies. |
| Responsive | One column on phones; input text stays 16 px so mobile browsers don’t zoom. |
| Accessibility | Persistent label tied to the input; errors written in text and linked to the field. |
| Tokens | `card, line-strong, brand, danger, success, ink-muted, radius-md` |

**Do:** Show a persistent label and an error that explains the fix.

**Don't:** Rely on placeholder text as the only label.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 2.1.0 | 23 Nov 2026 | Added character limit counter |
| 2.0.0 | 23 Nov 2026 | Boxed input replaces the underline; added textarea, search, success, disabled and read-only |
| 1.0.0 | 23 Nov 2026 | Underlined field from the website contact form |

## Select & menu

`v1.1.0` · New · Inputs

Choose one option from a list, or pick an action from a menu.

|  |  |
| --- | --- |
| Anatomy | Label · trigger with chevron · floating list · items · optional divider |
| Variants | Select (form value), action menu |
| States | Closed, open, item hover, item selected, disabled, invalid, no results |
| Behaviour | The list opens below the trigger and closes on selection, Escape or outside click. With no matches it says so and offers to clear the search. Destructive actions sit last, after a divider. |
| Responsive | On phones the list opens as a bottom sheet. |
| Accessibility | Arrow keys move through options, Enter selects, Escape closes. |
| Tokens | `card, line-strong, brand-tint, brand-tint-text, danger, shadow-float, radius-lg` |

**Do:** Use a select for 5 or more options; use radios for fewer.

**Don't:** Hide primary actions inside a menu.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Added invalid and no-results states |
| 1.0.0 | 23 Nov 2026 | Added select and action menu |

## Checkbox, radio & switch

`v1.1.0` · New · Inputs

Choose options. Checkbox for many, radio for one, switch for an instant on/off.

|  |  |
| --- | --- |
| Anatomy | Control · label · optional description |
| Variants | Checkbox (with indeterminate), radio group, switch |
| States | Unselected, selected, indeterminate, focus, disabled |
| Behaviour | The whole label is clickable. A switch applies immediately; checkboxes and radios apply on save. Indeterminate shows when only some child options are chosen. |
| Responsive | Targets stay 44 px tall; labels wrap instead of truncating. |
| Accessibility | Groups have a visible heading; state is never shown by colour alone. |
| Tokens | `brand, on-brand, line-strong, sand` |

**Do:** Use a switch only for settings that take effect at once.

**Don't:** Use a switch inside a form that needs a Save button.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Added indeterminate checkbox |
| 1.0.0 | 23 Nov 2026 | Added checkbox, radio and switch |

## Chip

`v1.0.0` · New · Inputs

Filters a list or toggles a choice in one tap.

|  |  |
| --- | --- |
| Anatomy | Pill · label · optional icon or count |
| Variants | Filter chip (multi), choice chip (single) |
| States | Default, hover, selected, focus, disabled |
| Behaviour | Selected chips show a check and brand tint. Filters apply immediately and can be combined. |
| Responsive | A row of chips scrolls sideways on phones instead of wrapping into many lines. |
| Accessibility | Selected state is announced and also shown by a check, not colour alone. |
| Tokens | `card, line-strong, brand, brand-tint, brand-tint-text, radius-pill` |

**Do:** Keep chip labels to one or two words.

**Don't:** Use chips as primary navigation.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added filter and choice chips |

## Date picker

`v1.0.0` · Beta · Inputs

Picks a single date from a calendar.

|  |  |
| --- | --- |
| Anatomy | Month header · previous/next · weekday row · day grid |
| Variants | Single date (inline or in a popover) |
| States | Default, hover, today, selected, outside month, disabled, invalid value |
| Behaviour | Arrow keys move between days; Enter selects. Past or unavailable dates are disabled, not hidden. A typed date that doesn’t exist shows an error in the field. |
| Responsive | On phones it opens as a bottom sheet with a larger day grid. |
| Accessibility | Today and the selected day are announced; every day is reachable by keyboard. |
| Tokens | `card, brand, on-brand, sand, ink-muted, shadow-float, radius-lg` |

**Do:** Let people type the date as well as pick it.

**Don't:** Make people click through months to reach a date far away.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added single-date picker; keyboard support to be confirmed in code |

## Card

`v1.1.0` · Stable · Content

Groups related content into one scannable surface.

|  |  |
| --- | --- |
| Anatomy | Surface · eyebrow · title · text · optional action |
| Variants | Static, linked |
| States | Default, hover (linked) |
| Behaviour | A linked card is one link; hover lifts it 4 px with shadow-lift. |
| Responsive | Cards stack to one column below 768 px. |
| Accessibility | A linked card has one link with a clear name; heading order is kept. |
| Tokens | `card, ring, shadow-lift, radius-xl` |

**Do:** Follow the surface rule: a ring at rest, a shadow only on hover.

**Don't:** Put a card inside a card, or mix borders and shadows at random.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Surface rule: ring at rest, shadow only on hover |
| 1.0.0 | 23 Nov 2026 | 28 px card with ring from the website |

## Tag & badge

`v1.1.0` · Stable · Content

Tags name a category or status; badges show a count.

|  |  |
| --- | --- |
| Anatomy | Pill · optional dot · label; badge: number in a small pill |
| Variants | Neutral, brand, success, warning, danger, info · count badge |
| States | Static (never clickable) |
| Behaviour | The word carries the meaning; colour only supports it. Counts above 99 show 99+. |
| Responsive | Tags wrap onto the next line; labels never truncate. |
| Accessibility | Status is in the text, not only the colour. |
| Tokens | `sand, brand, brand-tint, *-tint, status colours, radius-pill` |

**Do:** Use the same word and colour for the same status everywhere.

**Don't:** Use colour alone to show status.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Added status variants and count badge |
| 1.0.0 | 23 Nov 2026 | Neutral and brand tags |

## Avatar

`v1.0.0` · New · Content

Represents a person with a photo or their initials.

|  |  |
| --- | --- |
| Anatomy | Circle · photo or initials · optional status dot |
| Variants | S 28 px, M 40 px, L 56 px · single, group |
| States | Default, with status |
| Behaviour | Initials use the first letter of the first and last name. Groups overlap and show +N after four. |
| Responsive | Same sizes on every screen; groups show +N when space is short. |
| Accessibility | Give an accessible name unless the person’s name is shown beside it. |
| Tokens | `brand-tint, brand-tint-text, sand, success, paper` |

**Do:** Always pair an avatar with the person’s name nearby.

**Don't:** Use avatars as the only way to identify someone.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added avatar sizes, status dot and group |

## Table & data view

`v1.1.0` · New · Content

Compares records row by row, with sorting, filtering and bulk actions.

|  |  |
| --- | --- |
| Anatomy | Toolbar (search, filters) · bulk action bar · header row · body rows · status · row action · pagination |
| Variants | Default, selectable, with toolbar |
| States | Default, hover, selected, sorted, empty, no results, loading |
| Behaviour | Click a header to sort; filters sit above the table; selecting rows shows a bulk action bar. Pagination sits below. Text aligns left, numbers right; status is a tag; row actions sit at the end. |
| Responsive | The table scrolls sideways inside its frame on phones; name and status columns come first. |
| Accessibility | Real header cells; sortable headers announce direction; row actions have names. |
| Tokens | `card, line, ink-muted, brand-tint, ink, paper, radius-lg` |

**Do:** Keep headers, status and row actions in the same place on every table.

**Don't:** Mix column alignment or hide important status.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Added toolbar with search and filters, sortable headers, bulk action bar, pagination and a no-results state |
| 1.0.0 | 23 Nov 2026 | Added table with status tags, selection and row actions |

## Accordion

`v1.0.0` · New · Content

Shows and hides sections of related content.

|  |  |
| --- | --- |
| Anatomy | Container · header with chevron · panel |
| Variants | Single open, multiple open |
| States | Collapsed, expanded, focus |
| Behaviour | The whole header toggles the panel. The chevron rotates when open. |
| Responsive | Full width on every screen. |
| Accessibility | The header is a button; the expanded state is announced. |
| Tokens | `card, ring, line, ink-soft, radius-lg` |

**Do:** Use for FAQs and secondary detail.

**Don't:** Hide content people need to finish a task.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added accordion |

## Chat

`v1.0.0` · New · Communication

Shows a conversation between people, or between a person and an agent.

|  |  |
| --- | --- |
| Anatomy | Message bubble · timestamp or receipt · attachment · reaction · system line · unread divider · typing indicator · composer |
| Variants | Incoming, outgoing, system, attachment |
| States | Typing, sending, sent, read, failed, unread, with attachment, with reaction |
| Behaviour | Outgoing messages show Sending, then Sent or Read. A failed message keeps its text and offers Retry. The typing indicator appears after 1 second of activity and clears after 5. An unread divider marks where new messages start. |
| Responsive | Bubbles fill up to 80% of the width; the composer stays pinned to the bottom on phones. |
| Accessibility | New messages are announced politely; failed messages say what to do; attachments name the file. |
| Tokens | `sand, brand, on-brand, danger, danger-tint, ink-muted, radius-xl` |

**Do:** Keep failed messages visible with a clear Retry.

**Don't:** Remove a failed message or retry silently.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added chat: messages, receipts, attachments, reactions, system messages, failed state with retry, typing indicator and composer |

## Alert & toast

`v2.1.0` · Stable · Feedback

Tells people what happened and what to do next.

|  |  |
| --- | --- |
| Anatomy | Icon · title · message · optional action |
| Variants | Inline alert (info, success, warning, danger), toast, error recovery (alert with an action) |
| States | Visible, dismissed |
| Behaviour | Inline alerts stay until resolved. Toasts confirm a completed action and close after 5 seconds. Errors offer a way to recover, such as Try again. |
| Responsive | Toasts sit at the bottom on phones and at the top right on desktop. |
| Accessibility | Errors use role alert; toasts use role status and stay long enough to read. |
| Tokens | `*-tint, status colours, card, shadow-float, radius-md` |

**Do:** Use success tokens for success, every time.

**Don't:** Style a success message with the brand colour.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 2.1.0 | 23 Nov 2026 | Added error recovery action |
| 2.0.0 | 23 Nov 2026 | Notice renamed Alert; added toast; success always uses success tokens |
| 1.0.0 | 23 Nov 2026 | Success notice from the contact form |

## Dialog

`v1.0.0` · Beta · Feedback

Asks for a decision before the person continues.

|  |  |
| --- | --- |
| Anatomy | Scrim · panel · title · message · actions |
| Variants | Confirmation, destructive confirmation |
| States | Open, closing |
| Behaviour | Focus moves into the dialog and returns to the trigger on close. Escape and Cancel close it; the main action sits on the right. |
| Responsive | Becomes a bottom sheet on phones. |
| Accessibility | Focus is trapped inside; the page behind is inert while it is open. |
| Tokens | `scrim, card, ink-soft, danger, shadow-float, radius-xl` |

**Do:** Name the action on the button, for example “Delete item”, not “OK”.

**Don't:** Use a dialog for information that could be inline.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added confirmation and destructive dialog |

## Tooltip

`v1.0.0` · New · Feedback

Gives a short label or hint on hover or focus.

|  |  |
| --- | --- |
| Anatomy | Trigger · bubble · arrow |
| Variants | Label (for icon buttons), hint |
| States | Hidden, visible |
| Behaviour | Appears after 300 ms on hover or immediately on keyboard focus. Never holds links or actions. |
| Responsive | Touch screens have no hover; put the hint in visible text there. |
| Accessibility | Shown on keyboard focus as well as hover. |
| Tokens | `ink, paper, radius-sm` |

**Do:** Use to name icon-only buttons.

**Don't:** Put essential information only in a tooltip.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added tooltip |

## Progress & stepper

`v1.2.0` · Stable · Feedback

Shows how far along a task or score is.

|  |  |
| --- | --- |
| Anatomy | Label · value · track · fill; or numbered steps with connectors |
| Variants | Progress bar, stepper |
| States | Upcoming, current, complete |
| Behaviour | Always show the number with the bar. Steppers mark completed steps with a check. A complete bar turns green and says Complete. |
| Responsive | Steppers collapse to “Step 2 of 4” on narrow screens. |
| Accessibility | Bars expose their value and range; the current step is announced. |
| Tokens | `brand, brand-text, success, sand, line-strong` |

**Do:** Use a stepper for tasks with 3 to 6 steps.

**Don't:** Show progress without a label or value.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.2.0 | 23 Nov 2026 | Added complete state |
| 1.1.0 | 23 Nov 2026 | Added stepper |
| 1.0.0 | 23 Nov 2026 | Progress bar from the assessment report |

## Spinner & skeleton

`v1.1.0` · New · Feedback

Shows that something is loading.

|  |  |
| --- | --- |
| Anatomy | Spinner ring; inline loading text; skeleton blocks in the shape of the content |
| Variants | Spinner S/M/L, inline loading, skeleton lines and cards |
| States | Initial loading, inline loading |
| Behaviour | Use a skeleton for page and section loads; a spinner only inside buttons or small areas. Both stop under reduced motion. |
| Responsive | Skeletons match the layout at each breakpoint. |
| Accessibility | Loading regions are marked busy; spinners stop under reduced motion. |
| Tokens | `brand, sand, paper-deep` |

**Do:** Match the skeleton to the real layout.

**Don't:** Show a full-page spinner for content that loads in parts.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.1.0 | 23 Nov 2026 | Added inline loading |
| 1.0.0 | 23 Nov 2026 | Added spinner and skeleton |

## Navigation & tabs

`v1.2.0` · Stable · Navigation

Moves between pages, or between views of the same page.

|  |  |
| --- | --- |
| Anatomy | Logo · links · action; side groups; tab list with active indicator; back link; bottom bar |
| Variants | Top navigation, side navigation (collapsible), tabs, back link, mobile bottom bar |
| States | Default, hover, active, collapsed, expanded, focus |
| Behaviour | The active item has a 2 px brand underline or tint. Groups in side navigation collapse and expand. Back goes to the previous list, not the previous page. |
| Responsive | Below 768 px the top links move into a menu, or into a bottom bar of four items. |
| Accessibility | The current page is announced; the menu button names its state. |
| Tokens | `ink, ink-soft, brand, brand-tint, line` |

**Do:** Keep one clear active state.

**Don't:** Use tabs to move to a different page.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.2.0 | 23 Nov 2026 | Added collapsible side navigation, back link and mobile bottom bar |
| 1.1.0 | 23 Nov 2026 | Added tabs |
| 1.0.0 | 23 Nov 2026 | Top navigation from the website |

## Breadcrumbs & pagination

`v1.0.0` · New · Navigation

Shows where a page sits, and moves through long lists.

|  |  |
| --- | --- |
| Anatomy | Crumb links with separators · current page; previous, pages, next |
| Variants | Breadcrumbs, pagination |
| States | Default, hover, current, disabled |
| Behaviour | The last crumb is the current page and is not a link. Pagination shows the first, last and nearby pages. |
| Responsive | Long trails collapse the middle to “…” on phones. |
| Accessibility | Each is wrapped in a labelled navigation region. |
| Tokens | `ink, ink-soft, ink-muted, brand, on-brand, sand` |

**Do:** Use breadcrumbs from the third level down.

**Don't:** Use pagination for fewer than 20 items.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Added breadcrumbs and pagination |
