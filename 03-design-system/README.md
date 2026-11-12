# Design System Index

Navigation only. Each topic has **one authoritative file**; this index links to them and does not repeat their content.

## Project design-system type
Record which situation the project is in. It decides how much can be built from approved specifications and how much must be proposed first.

| Field | Value |
|---|---|
| Project type | `[foundation-only / partial / complete]` |
| Primary source | `[figma / markdown / code / hybrid / none]` |
| Figma file (optional) | `[URL / N/A]` |
| Owner | `[NAME]` |
| Last reviewed | `[YYYY-MM-DD]` |

| Type | Meaning | What can proceed |
|---|---|---|
| **foundation-only** | Moodboards or inspiration exist; foundations are not yet approved. | Draft and **propose** foundations and components for approval. Nothing is `approved` until the owner approves it. |
| **partial** | Some foundations and components are approved; others are missing. | Build with approved items. For missing ones, follow the [missing-specification rules](#missing-specifications) and propose. |
| **complete** | Foundations and components are approved. | Build with approved items only; any new pattern needs approval. |

## Foundations
| Topic | Authoritative file |
|---|---|
| Colors | [`color-system.md`](Design%20Foundation/color-system.md) |
| Typography | [`typography.md`](Design%20Foundation/typography.md) |
| Spacing | [`spacing.md`](Design%20Foundation/spacing.md) |
| Grid and layout | [`grid.md`](Design%20Foundation/grid.md) |
| Radius | [`radius.md`](Design%20Foundation/radius.md) |
| Elevation and layering | [`elevation.md`](Design%20Foundation/elevation.md) |
| Iconography | [`02-iconography.md`](Design%20Foundation/02-iconography.md) |
| Responsiveness and breakpoints | [`03-responsiveness.md`](Design%20Foundation/03-responsiveness.md) |
| Motion (optional) | [`motion.md`](Design%20Foundation/motion.md) |

Deprecated paths kept as redirects only: [`spacing-and-grid.md`](Design%20Foundation/spacing-and-grid.md), [`radius-and-elevation.md`](Design%20Foundation/radius-and-elevation.md).

## Components
- [Component registry](component-registry.md) — every component, its spec, status and owner.
- [Component template](components/_component-template.md) — duplicate as `components/[component-name].md` when a component is actually used.

Accessibility and interaction rules that apply to every component live in [`../02-foundation/accessibility.md`](../02-foundation/accessibility.md) and [`../02-foundation/ux-standards.md`](../02-foundation/ux-standards.md).

## Specification metadata
Every foundation file and component spec starts with a metadata table. Field rules:

| Field | Required? | Rule |
|---|---|---|
| Source type | Yes | `figma`, `markdown`, `code`, `hybrid` (more than one), or `none` (no source yet). |
| Figma URL | **Optional** | Only a real link. Use `N/A` when there is no Figma. Never invent a link. |
| Specification status | Yes | See statuses below. |
| Owner | Yes | The person who approves this spec. `TBD` if unknown. |
| Last reviewed | Yes | Date of the last real review. Leave `[YYYY-MM-DD]` if never reviewed. |
| Related specifications | When relevant | Paths to files this spec depends on or affects. |
| Inspiration / moodboard | Optional | Links for reference only. **Inspiration is never an approved rule.** |
| Open decisions | Yes | Question IDs, or `NONE`. |

Any table column named "Figma link", "Figma variable", "Design link" or similar is optional: use a Markdown path or code path instead, or `N/A`.

### Specification statuses
| Status | Meaning | Can it be built from? |
|---|---|---|
| `approved` | Confirmed by the owner. | Yes |
| `draft` | Being written or reviewed; not yet confirmed. | Only with the gap reported |
| `proposed` | Suggested (e.g. by Claude or from inspiration) and awaiting approval. | No — present for approval first |
| `missing` | Needed but not documented. | No — see below |
| `conflicting` | Sources disagree (e.g. Figma vs Markdown vs code). | No — owner must resolve |
| `deprecated` | Retired; components only. Keep for migration notes. | No |

Do not set or change a status to `approved` unless the owner has approved it.

This vocabulary is for **design specifications**. Functional requirements in [`memory.md`](../02-foundation/memory.md) keep their own statuses (`Confirmed`, `Proposed`, `Open`, `Implemented (verified)`, `Deprecated`).

### Missing specifications
When a needed foundation or component spec is missing or Figma is unavailable:
1. Check approved Markdown specs, then existing code, then related approved components.
2. Use only what is approved. Do not treat inspiration, screenshots or unapproved code as rules.
3. If the gap blocks the work, write a proposal marked `proposed`, add an open decision, and ask the owner.
4. If Figma, Markdown and code disagree, mark the item `conflicting`, record both values, and ask the owner. Do not choose silently.
