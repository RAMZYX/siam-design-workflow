# 10 · Components

The full component library. Every component lists its version, status and change log, then purpose, anatomy, variants, states, behaviour, tokens and usage. Styles: `tokens/components.css`.

_Koach Brand Book v1.0 · generated from index.html_

## Library

Library v1.0.0 · 17 components · updated 23 Nov 2026. Versions follow major.minor.patch: major for breaking changes, minor for additions, patch for fixes.

| Component | Category | Version | Status | Updated |
| --- | --- | --- | --- | --- |
| [Button](#button) | Actions | 1.0.0 | Stable | 23 Nov 2026 |
| [Text field & textarea](#text-field-textarea) | Inputs | 1.0.0 | Stable | 23 Nov 2026 |
| [Select & menu](#select-menu) | Inputs | 1.0.0 | Stable | 23 Nov 2026 |
| [Checkbox, radio & switch](#checkbox-radio-switch) | Inputs | 1.0.0 | Stable | 23 Nov 2026 |
| [Date picker](#date-picker) | Inputs | 0.1.0 | Draft | 23 Nov 2026 |
| [Card](#card) | Content | 1.0.0 | Stable | 23 Nov 2026 |
| [Status tag & badge](#status-tag-badge) | Content | 1.0.0 | Stable | 23 Nov 2026 |
| [Avatar](#avatar) | Content | 1.0.0 | Stable | 23 Nov 2026 |
| [Stat card](#stat-card) | Data | 1.0.0 | Stable | 23 Nov 2026 |
| [Table & pager](#table-pager) | Content | 1.0.0 | Stable | 23 Nov 2026 |
| [Alert & toast](#alert-toast) | Feedback | 0.1.0 | Draft | 23 Nov 2026 |
| [Dialog](#dialog) | Feedback | 1.0.0 | Stable | 23 Nov 2026 |
| [Drawer](#drawer) | Feedback | 1.0.0 | Stable | 23 Nov 2026 |
| [Tooltip](#tooltip) | Feedback | 1.0.0 | Stable | 23 Nov 2026 |
| [Progress, ring & status steps](#progress-ring-status-steps) | Feedback | 1.0.0 | Stable | 23 Nov 2026 |
| [Skeleton & spinner](#skeleton-spinner) | Feedback | 1.0.0 | Stable | 23 Nov 2026 |
| [Navigation & tabs](#navigation-tabs) | Navigation | 1.0.0 | Stable | 23 Nov 2026 |

## Button

`v1.0.0` · Stable · Actions

Starts an action. The label says exactly what happens next.

|  |  |
| --- | --- |
| Anatomy | Container · label · optional leading or trailing icon |
| Variants | Filled, outline, text × primary, secondary, destructive · S 32 px, M 36 px, L 44 px |
| States | Default, hover, focus, disabled (50%), loading |
| Behaviour | Loading disables the button, sets aria-busy and swaps a spinner into the leading slot. Defaults to type=button. |
| Responsive | Full width on phones when it is the only action; height stays 44 px. |
| Accessibility | Visible label or accessible name; 44 px target; visible focus ring. |
| Tokens | `brand, brand-deep, on-brand, sand, line-strong, danger-solid, radius-sm` |

**Do:** Use one filled primary button per view. Use destructive only for irreversible actions, and the text variant for low-emphasis links like “See all”.

**Don't:** Write “Click here”, or hand-roll a <button>.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from src/components/ui/Button |

## Text field & textarea

`v1.0.0` · Stable · Inputs

Lets people enter and edit text, on one line or several.

|  |  |
| --- | --- |
| Anatomy | Field label · input · helper or error text · optional left and right icon |
| Variants | Text input (42 px), textarea, search with a leading icon |
| States | Default, focused, filled, error, success, disabled, read-only, character limit |
| Behaviour | Always wrap an Input in Field so it gets a visible, associated label. The focus ring sits on the wrapper, so the native input keeps full semantics. Use DateField and TimeField, not type=date or type=time. |
| Responsive | One column on phones; input text stays 16 px so mobile browsers don’t zoom. |
| Accessibility | Persistent label tied to the input; errors written in text and linked to the field. |
| Tokens | `card, line-strong, brand, danger-line, radius-sm` |

**Do:** Show a visible label and an error that says how to fix it.

**Don't:** Rely on a placeholder as the label, or hand-roll an <input>.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Field, Input and Textarea |

## Select & menu

`v1.0.0` · Stable · Inputs

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
| 1.0.0 | 23 Nov 2026 | Documented from Select, SelectMenu and Menu |

## Checkbox, radio & switch

`v1.0.0` · Stable · Inputs

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
| 1.0.0 | 23 Nov 2026 | Documented from Checkbox, Radio and Switch |

## Date picker

`v0.1.0` · Draft · Inputs

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

**Don't:** Use the browser’s native date input.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 23 Nov 2026 | Exists in the codebase (DateField, MiniCalendar, DateRangePicker) but is not yet in the design system |

## Card

`v1.0.0` · Stable · Content

Groups related content into one scannable surface.

|  |  |
| --- | --- |
| Anatomy | Surface · eyebrow · title · text · optional action |
| Variants | Static, interactive · padding 16, 20 or 24 px |
| States | Default, hover (linked) |
| Behaviour | Interactive cards add shadow-md on hover and scale to 0.995 when pressed. Group inside a card with spacing and hairline dividers. |
| Responsive | Cards stack to one column below 768 px. |
| Accessibility | A linked card has one link with a clear name; heading order is kept. |
| Tokens | `card, ring, shadow-xs, shadow-lift, radius-lg` |

**Do:** Use a card by role, and separate layers with hairlines.

**Don't:** Nest a card in a card.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Card |

## Status tag & badge

`v1.0.0` · Stable · Content

Tags name a category or status; badges show a count.

|  |  |
| --- | --- |
| Anatomy | Pill · optional dot · label; badge: number in a small pill |
| Variants | success, warning, error, info, neutral · live, pilot, discontinued · active, inactive · archived, unassigned · count badge |
| States | Static (never clickable) |
| Behaviour | Every status carries a word, never colour alone. In the Learner theme tags become quieter pills with a hairline ring. |
| Responsive | Tags wrap onto the next line; labels never truncate. |
| Accessibility | Status is in the text, not only the colour. |
| Tokens | `*-tint, status colours, radius-pill` |

**Do:** Name the lifecycle state: Completed, Overdue, Upcoming, Approved, Archived.

**Don't:** Rely on colour alone, or use a metric tone to show status.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from StatusTag, Badge and CountBadge |

## Avatar

`v1.0.0` · Stable · Content

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
| 1.0.0 | 23 Nov 2026 | Documented from Avatar |

## Stat card

`v1.0.0` · Stable · Data

Shows one metric with an icon chip, a label, a value and its change.

|  |  |
| --- | --- |
| Anatomy | Icon chip · label · value · change |
| Variants | Overview strip, summary (icon beside label and value) |
| States | Default |
| Behaviour | Lay cards on the overview strip at the top of list pages. Use the summary layout for a session-detail overview. A missing change shows a dash. |
| Responsive | Cards wrap onto new rows; rows of three or more collapse on narrow screens. |
| Accessibility | Values are real text; the change is written with its sign. |
| Tokens | `card, ring, overview, metric-*, radius-lg` |

**Do:** Give each metric its own tone and keep it the same on every page.

**Don't:** Use metric tones to show status.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from StatCard |

## Table & pager

`v1.0.0` · Stable · Content

Compares records row by row, with sorting, filtering and bulk actions.

|  |  |
| --- | --- |
| Anatomy | Toolbar (search, filters) · bulk action bar · header row · body rows · status · row action · pagination |
| Variants | Default, compact · selectable · sticky last column |
| States | Default, hover, selected, sorted, empty, no results, loading |
| Behaviour | Click a header to sort. The last (Action) column stays sticky, and the table scrolls inside its own container so the page never scrolls sideways. Dash for empty cells. |
| Responsive | The table scrolls sideways inside its frame on phones; name and status columns come first. |
| Accessibility | Real header cells; sortable headers announce direction; row actions have names. |
| Tokens | `card, line, ink-muted, brand-tint, ink, paper, radius-lg` |

**Do:** Truncate name columns and keep headers in sentence case.

**Don't:** Let the page scroll sideways.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Table and TablePager |

## Alert & toast

`v0.1.0` · Draft · Feedback

Tells people what happened and what to do next.

|  |  |
| --- | --- |
| Anatomy | Icon · title · message · optional action |
| Variants | Inline alert (info, success, warning, danger), toast, error recovery (alert with an action) |
| States | Visible, dismissed |
| Behaviour | Inline errors use danger-line, never danger. A toast confirms a finished action. Success always uses the success tokens. |
| Responsive | Toasts sit at the bottom on phones and at the top right on desktop. |
| Accessibility | Errors use role alert; toasts use role status and stay long enough to read. |
| Tokens | `*-tint, status colours, card, shadow-float, radius-md` |

**Do:** Say what happened and offer the next step.

**Don't:** Style a success message with the brand colour.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 0.1.0 | 23 Nov 2026 | Toast and error banners exist in the codebase but are not yet in the design system |

## Dialog

`v1.0.0` · Stable · Feedback

Asks for a decision before the person continues.

|  |  |
| --- | --- |
| Anatomy | Scrim · panel · title · message · actions |
| Variants | Confirmation, destructive confirmation |
| States | Open, closing |
| Behaviour | role=dialog with aria-modal. Escape closes it, the page scroll locks, focus moves in and returns to the opener, and Tab stays inside. Confirmations are 400 px wide; larger list deletes 500 px. |
| Responsive | Becomes a bottom sheet on phones. |
| Accessibility | Focus is trapped inside; the page behind is inert while it is open. |
| Tokens | `scrim, card, ink-soft, danger, shadow-float, radius-xl` |

**Do:** Ask the question in the title (“Delete document?”), state the consequence in the body, and name the buttons “Cancel” and “Delete”.

**Don't:** Use “OK” for a destructive action.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Dialog |

## Drawer

`v1.0.0` · Stable · Feedback

A side sheet for creating, editing or viewing one record without leaving the list.

|  |  |
| --- | --- |
| Anatomy | Scrim · sheet · header with close · body · footer actions |
| Variants | 560 px, 600 px wide; full width on phones |
| States | Open, closing |
| Behaviour | Slides in from the right edge over 240 ms. Focus moves in and returns to the opener; Escape closes. Used for Invite, Edit and View organisation sheets. |
| Responsive | Full width on phones. |
| Accessibility | Focus is trapped inside; the page behind is inert while it is open. |
| Tokens | `card, scrim, line, shadow-float, radius-lg` |

**Do:** Use it for a form about one record.

**Don't:** Open a drawer from inside a drawer.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Drawer |

## Tooltip

`v1.0.0` · Stable · Feedback

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
| 1.0.0 | 23 Nov 2026 | Documented from Tooltip |

## Progress, ring & status steps

`v1.0.0` · Stable · Feedback

Shows how far along a task or score is.

|  |  |
| --- | --- |
| Anatomy | Label · value · track · fill; or numbered steps with connectors |
| Variants | Progress bar, course progress meter (in progress, overdue, completed), score ring, status steps |
| States | Upcoming, current, done, rejected |
| Behaviour | Course meters use the native value, so 65% renders at 65%. The score ring marks a pass in green and a fail in amber. Status steps show a check when done, a magenta ring when current and a red cross when rejected. |
| Responsive | Steppers collapse to “Step 2 of 4” on narrow screens. |
| Accessibility | Bars expose their value and range; the current step is announced. |
| Tokens | `brand, success, danger, course-*, course-track` |

**Do:** Show the figure as well as the bar.

**Don't:** Show progress without a label.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from ProgressBar, CourseProgressMeter, ScoreRing and StatusSteps |

## Skeleton & spinner

`v1.0.0` · Stable · Feedback

Shows that something is loading.

|  |  |
| --- | --- |
| Anatomy | Spinner ring; inline loading text; skeleton blocks in the shape of the content |
| Variants | Spinner S/M/L, inline loading, skeleton lines and cards |
| States | Initial loading, inline loading |
| Behaviour | Every screen renders a Skeleton shaped like its content while loading. Use a Spinner only inside buttons or small areas. |
| Responsive | Skeletons match the layout at each breakpoint. |
| Accessibility | Loading regions are marked busy; spinners stop under reduced motion. |
| Tokens | `brand, sand, paper-deep` |

**Do:** Match the skeleton to the real layout.

**Don't:** Show a full-page spinner for content that loads in parts.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Skeleton, Spinner and EmptyState |

## Navigation & tabs

`v1.0.0` · Stable · Navigation

Moves between pages, or between views of the same page.

|  |  |
| --- | --- |
| Anatomy | Logo · links · action; side groups; tab list with active indicator; back link; bottom bar |
| Variants | Sidebar nav items (248 px, 72 px collapsed), tabs: underline (console), soft and pill (learner, detail pages), segment; mobile bottom bar |
| States | Default, hover, active, collapsed, expanded, focus |
| Behaviour | The active nav item uses the soft brand tint. Keep tabs to two to six short labels in sentence case; a badge shows a count, not a status. |
| Responsive | Below 768 px the top links move into a menu, or into a bottom bar of four items. |
| Accessibility | The current page is announced; the menu button names its state. |
| Tokens | `ink, ink-soft, brand, brand-tint, line` |

**Do:** Keep one clear active state.

**Don't:** Use tabs to move to a different page.

**Change log**

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 23 Nov 2026 | Documented from Tabs, SegmentToggle and NavItem |
