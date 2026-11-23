# 11 · Patterns

Recurring combinations of components and the rules behind them.

_Koach Brand Book v1.0 · generated from index.html_

## Forms

- One column for most forms; two columns only for short, related fields.
- Labels above fields, always visible.
- Mark optional fields, not required ones.
- Validate on blur; keep the person’s input when there is an error.
- Primary action last, aligned to the start of the form.

## Multi-step flows

- Use a stepper for 3 to 6 steps; show where the person is and what is done.
- Save progress as people move forward, and let them go back without losing input.
- Keep Back on the left as a ghost button and Next or Finish as the one primary action.
- End with a clear completion state that says what happens next.

## Empty, loading & error

- Loading: show a skeleton in the shape of the content for the first load; use an inline spinner with a short message for updates.
- Empty: say what will appear and give one action to start.
- No results: say what was searched and offer to clear filters.
- Error: say what went wrong in plain words and offer Retry.
- Complete: confirm the result and say what happens next.
- Never leave a blank area without explanation.

## Feedback

- Toast: confirm an action that just finished. It closes by itself.
- Inline alert: keep a message next to the thing it is about until it is resolved.
- Dialog: ask for a decision before something hard to undo.
- Show one message at a time; never stack more than two.
- Use success tokens for success and danger tokens for errors. Always say what to do next.

## Tables & data views

- Put search and filters above the table, and keep the filters visible once applied.
- Sort by clicking a header; show which column is sorted and in which direction.
- Show bulk actions only when rows are selected.
- Paginate beyond 20 rows and say how many rows exist.
- On phones, keep name and status visible and let the rest scroll sideways.

## Navigation & chat

- Keep the same labels and order across web and mobile.
- Show one active state; collapse secondary groups by default.
- Back returns to the list the person came from.
- In chat, keep failed messages visible with Retry, mark unread messages, and show who is typing.
