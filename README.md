# Siam Design Workflow

A reusable set of standards and fill-in templates for the design team, covering a product from first research to final UI QA. It is written for both designers and Claude Code: every file states what must be documented, and Claude follows the same rules (see [CLAUDE.md](CLAUDE.md)).

The core idea: **document what every screen *does*, not only how it looks** — and never invent a rule that hasn't been approved. Unknowns are marked `TBD` and tracked as open questions.

## Workflow at a glance

```
01 Research  →  02 Foundation  →  03 Design system  →  04 Development  →  05 Testing
   IA, flows      principles,        tokens and           prototype stack,    UI QA
                  UX, a11y, copy,    components           dev handoff         checklist
                  functional memory
```

`memory.md` runs through the whole process: it is updated as each screen is designed and built, and becomes the input for the FRD when the screens are complete.

## What's in each folder

### `01-research/`
| File | Use it to |
|---|---|
| `information-architecture.md` | Define the sitemap, page inventory, navigation levels and role visibility. |
| `user-flow.md` | Map one user task: main path, decisions, alternates, errors, permissions and end states. Duplicate it for each task. |

### `02-foundation/`
| File | Use it to |
|---|---|
| `design-principles.md` | Universal UI/UX principles, MUST / MUST NOT rules, a 7-step design workflow and a quality scorecard. |
| `ux-standards.md` | Standard behaviour for forms, navigation, tables, search, modals vs. drawers, states and destructive actions. |
| `accessibility.md` | The accessibility baseline (WCAG 2.1 AA), testing protocol and pre-handoff checklist. |
| `content-and-microcopy.md` | Voice and tone, and formulas for buttons, errors, empty states, success and destructive messages. |
| `memory.md` | The project's living functional record: roles, business rules, screen inventory and per-screen logic. |
| `frd-template.md` | The standard for generating the Functional Requirements Document — used only when the FRD is requested. |

### `03-design-system/Design Foundation/`
| File | Use it to |
|---|---|
| `color-system.md` | Palette, semantic colours, state matrix, themes and contrast checks. |
| `typography.md` | Fonts, weights and the full responsive type scale. |
| `spacing-and-grid.md` | Spacing tokens, grids and layout templates. |
| `radius-and-elevation.md` | Corner radius and shadow scales, and layering rules. |
| `02-iconography.md` | Icon source, sizes, states and semantic icon map. |
| `03-responsiveness.md` | Breakpoints, navigation changes and responsive QA. |
| `motion.md` | Duration and easing tokens and reduced-motion rules (optional). |
| `_component-template.md` | Spec for one component — duplicate as `[component-name].md`. |

### `04-development/`
| File | Use it to |
|---|---|
| `PROTOTYPE-STACK.md` | The required frontend stack for every new prototype (TypeScript, React, Vite, Tailwind, TanStack, zod, MSW) and its definition of done. |
| `dev-handoff.md` | The handoff index for a release: sources, screens, components, interactions, assets and open questions. |

### `05-testing/`
| File | Use it to |
|---|---|
| `ui-qa-checklist.md` | Compare the built UI against the design and FRD: visual fidelity, states, responsiveness, accessibility and a defect log. |

### `.claude/skills/`
Claude Code slash commands for each step of the workflow. Run them inside Claude Code from this repo (or a project made from it).

| Skill | What it does |
|---|---|
| `/start-project` | Asks for the project basics and fills the project profile, roles and context. |
| `/map-ia` | Builds the sitemap, page inventory, navigation and role visibility. |
| `/user-flow` | Creates a flow file for one user task, with a Mermaid diagram. |
| `/update-memory` | Records a screen's elements, interactions, validations and states in `memory.md`. |
| `/document-tokens` | Fills the colour, type, spacing, radius, icon, responsive or motion file and checks contrast. |
| `/document-component` | Writes a component spec from the component template. |
| `/design-review` | Reviews a design against these standards and scores it. |
| `/scaffold-prototype` | Starts a new prototype on the required stack. |
| `/dev-handoff` | Builds the developer handoff document for a release. |
| `/ui-qa` | Tests a build in the browser and logs defects. |

To get the FRD, ask Claude to "Create the FRD" once all screens are complete.

## Starting a new project from this template

1. Create a new repository from this one (on GitHub: **Use this template**, or with the GitHub CLI). This requires the repo to be marked as a template under **Settings → General → Template repository**.
   ```bash
   gh repo create my-project-design --private --template RAMZYX/siam-design-workflow --clone
   ```
2. Fill in `02-foundation/memory.md` → *Project profile* and `01-research/information-architecture.md` → *Context*.
3. Work through the phases. Replace every `[PLACEHOLDER]` with approved project information, or mark it `TBD`.
4. Keep `memory.md` up to date as screens change. Ask for the FRD only once the screens are complete.

## Conventions

- **Placeholders** look like `` `[VALUE]` ``. Replace them; don't leave them in finished documents.
- **IDs** (`SCR-001`, `FLOW-001`, `BR-001`, `AC-001` …) stay stable so flows, memory, FRD, handoff and QA all link up. See [CLAUDE.md](CLAUDE.md) for the full list.
- **Never mark a check `Pass`** or a screen *verified* without actually testing it.

## Updating the template

Change a standard in its own file only, and keep this template generic — project-specific data belongs in each project's own copy.
