# Component Registry — [PROJECT]

Tracking and navigation index for components. **Each component's specification file is authoritative**; this registry only points to it and tracks its status. Do not copy spec details here.

Add a row only for a component the project actually uses or has decided to build. Do not add placeholder rows for unused components.

| ID | Component | Specification | Figma (optional) | Implementation (optional) | Documentation status | Approval status | Owner | Open decisions |
|---|---|---|---|---|---|---|---|---|
| `[CMP-001]` | `[NAME]` | `[components/name.md]` | `[URL / N/A]` | `[CODE PATH / N/A]` | `[documented / partial / not documented]` | `[approved / draft / proposed / missing / conflicting / deprecated]` | `[NAME]` | `[IDs / NONE]` |

## Column rules
- **ID** — `CMP-` IDs are stable; never renumber or reuse.
- **Specification** — path to `components/[name].md`. `N/A` while documentation status is `not documented`.
- **Figma / Implementation** — real links or paths only; `N/A` when there is none.
- **Documentation status** — `documented` (all applicable spec sections filled), `partial` (spec exists with `TBD`s), `not documented` (no spec file yet).
- **Approval status** — the *Specification status* from the component's own file; see the [status definitions](README.md#specification-statuses). Keep the two in sync.
- **Open decisions** — question IDs from the spec or `memory.md`.

## Maintenance
- Update the row whenever a spec is created, changes status, or gets a Figma link or implementation path.
- If the registry and a spec file disagree, the spec file wins; fix the registry.
