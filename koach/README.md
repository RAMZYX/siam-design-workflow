# Koach Brand Book

Brand book and design system for Koach, Kauvery Hospital's learning platform. It is built from the `koach-v2-frontend` codebase and the Koach design system, on the standard brand book template. This folder is the single source of truth for how Koach looks, sounds and behaves. If a Figma file, slide or old screen disagrees, **this folder wins**.

Open **`index.html`** in a browser.

## Structure

| Part | Chapters |
| --- | --- |
| 1 · Brand | Overview, Voice & writing, Logo |
| 2 · Foundations | Colour (Console and Learner themes), Typography, Spacing & layout, Radius & elevation, Iconography (263 icons), Motion |
| 3 · Components | 17 components, each with version, status and change log |
| 4 · Patterns & usage | Forms; Multi-step flows; Empty, loading & error; Feedback; Tables & data views; Navigation; Do's & don'ts |
| 5 · Developers & governance | Tokens & setup, Change history |

## Two themes

Koach has two themes instead of light and dark. **Console** is for admin, trainer and HOD screens. **Learner** is for anything a learner sees: quieter status colours, softer hairlines and 12 px cards. Use the "Product previews" switch in the sidebar to compare them.

## Folder

```
index.html           The book: BRAND data (Koach), GUIDE data and the engine
tools/build.js       Regenerates everything below from index.html
tokens/              tokens.json, tokens.css, components.css   (generated)
assets/icons/        The Koach icon registry + sprite.svg      (generated)
assets/logo/         Koach wordmark, "k" mark, Kauvery Hospital logo
docs/                One Markdown file per chapter              (generated)
CHANGE-HISTORY.md    Book and component change logs             (generated)
```

## Sources

- `koach-v2-frontend`: `src/styles/tokens.css`, `tailwind.config.ts`, `src/components/ui`, `PRODUCT.md`, `src/assets`.
- The Koach design system artifact (brand book, tokens, 36 component pages).
- Koach's positioning against other learning platforms is not decided yet, so this book does not make a positioning claim.

## Changing the book

1. Edit the `BRAND` block in `index.html`.
2. Add a row to `BRAND.changes` (version, date, section, change, reason, owner, status) and a log line per component you change.
3. Run `node tools/build.js`.
4. The owner approves before the status moves to Published.

Owner: Easwar R · Version 1.0 · 23 November 2026
