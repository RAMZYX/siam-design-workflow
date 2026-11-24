# QCS Brand Book

Brand book and design system for QCS, the white-labelled product inside the CareBrain admin panel. It is built from the QCS Design System v1.1 and the admin panel codebase, on the same standard brand book template as the Koach Brand Book. This folder is the single source of truth for how QCS looks, sounds and behaves. If a mock-up, slide or old screen disagrees, **this folder wins**.

Open **`index.html`** in a browser.

## Structure

| Part | Chapters |
| --- | --- |
| 1 · Brand | Overview, Voice & writing, Logo |
| 2 · Foundations | Colour (QCS and CareBrain previews), Typography, Spacing & layout, Radius & elevation, Iconography (161 icons), Motion |
| 3 · Components | 30 components, each with version, status and change log (covers all 35 entries of the QCS design system) |
| 4 · Patterns & usage | List pages; Forms in modals; Multi-step flows; Empty, loading & error; Feedback; Tables & data views; Dashboard; Full-screen audit; Allowances; Navigation; Do's & don'ts |
| 5 · Developers & governance | Tokens & setup, Change history |

## Two previews

One admin panel carries two brands. **QCS** is this book's product: deep teal, warm neutrals, amber for inactive. **CareBrain** is the same structure in CareBrain blue. Use the "Product previews" switch in the sidebar to compare them; only colour tokens change, which is the first QCS principle. The "Book" switch (Auto, Light, Dark) changes the book's own frame, not the product.

## Folder

```
index.html           The book: BRAND data (QCS), GUIDE data and the engine
tools/build.js       Regenerates everything below from index.html
tokens/              tokens.json, tokens.css, components.css   (generated)
assets/icons/        The QCS icon registry + sprite.svg        (generated)
assets/logo/         qcs-mark.png
docs/                One Markdown file per chapter              (generated)
CHANGE-HISTORY.md    Book and component change logs             (generated)
```

## Sources

- QCS Design System v1.1 (foundations, 35 components, principles, changelog).
- `carebrain-admin-panel`: `src/constants/qcsTheme.js` (QCS_PALETTE), `src/globalStyles.js` (CareBrain values and the `data-brand="qcs"` overrides), `src/constants/qcs.js` (the QCS menu), `src/uiKit/icons/QcsLogo.tsx`, and the Lucide icons the code imports (`lucide-react` 1.64.0).
- Not decided yet, and marked as proposed in the book: logo minimum size and clear space, the date format, the "Caring" personality trait, the modal backdrop value, and the book owner.

## Template changes

The engine is the standard template with small, generic additions, so it still works for any product: extra components with their own preview (`extraComponents`), component order, per-product patterns, usage, keep-in-mind and token-naming lists, chapter lead overrides (`leads`), icon stroke width (`iconStroke`), logo corner radius, an optional token code sample, and stat cards with a sub-label instead of a change. QCS-only component styles are the `qx-` classes in the components block.

## Changing the book

1. Edit the `BRAND` block in `index.html`.
2. Add a row to `BRAND.changes` (version, date, section, change, reason, owner, status) and a log line per component you change.
3. Run `node tools/build.js`.
4. The owner approves before the status moves to Published.

Owner: to be confirmed · Version 1.0 · 23 November 2026
