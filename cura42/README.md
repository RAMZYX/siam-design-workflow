# Cura42 Brand Book

Brand book and design system for Cura42, built on the standard brand book template. This folder is the single source of truth for how Cura42 looks, sounds and behaves. If a Figma file, slide or old screen disagrees, **this folder wins**.

Open **`index.html`** in a browser.

## Structure

| Part | Chapters |
| --- | --- |
| 1 · Brand | Overview, Voice & writing, Logo |
| 2 · Foundations | Colour, Typography, Spacing & layout, Radius & elevation, Iconography, Motion |
| 3 · Components | Full library of 19 components, each with version, status and change log |
| 4 · Patterns & usage | Forms; Empty, loading & error; Do's & don'ts |
| 5 · Developers & governance | Tokens & setup, Change history |

## Folder

```
index.html           The book: BRAND data (Cura42), GUIDE data and the engine
tools/build.js       Regenerates everything below from index.html
tokens/              tokens.json, tokens.css, components.css   (generated)
assets/icons/        icons + sprite.svg                      (generated)
assets/logo/         Cura42 logo
assets/fonts/        Parkinsans (self-hosted)
docs/                One Markdown file per chapter              (generated)
CHANGE-HISTORY.md    Book and component change logs             (generated)
```

## Changing the book

1. Edit the `BRAND` block in `index.html`.
2. Add a row to `BRAND.changes` (version, date, section, change, reason, owner, status).
3. Run `node tools/build.js`.
4. The owner approves before the status moves to Published.

Owner: Easwar R · Version 2.2 · 23 November 2026
