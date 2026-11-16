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

### `03-design-system/`
Start at the [design-system index](03-design-system/README.md). It records the project's design-system type (foundation-only, partial or complete), links every topic file, and defines the metadata and statuses used in them. Figma is optional throughout.

| File | Use it to |
|---|---|
| [`README.md`](03-design-system/README.md) | Index, project type, metadata fields, statuses and the rules for missing specs. |
| [`component-registry.md`](03-design-system/component-registry.md) | Track each component: spec path, Figma and code references, status, owner, open decisions. |
| [`components/_component-template.md`](03-design-system/components/_component-template.md) | Spec for one component — duplicate as `components/[component-name].md` (e.g. `button.md`) when the component is used. |

**`Design Foundation/`** — one authoritative file per topic:

| File | Use it to |
|---|---|
| `color-system.md` | Palette, semantic colours, state matrix, themes and contrast checks. |
| `typography.md` | Fonts, weights and the full responsive type scale. |
| `spacing.md` | Spacing scale, component internal spacing, alignment and density. |
| `grid.md` | Layout grids per breakpoint, containers and layout templates. |
| `radius.md` | Corner radius scale. |
| `elevation.md` | Shadow and elevation levels, component mapping and layering. |
| `02-iconography.md` | Icon source, sizes, states and semantic icon map. |
| `03-responsiveness.md` | Platforms, breakpoint ranges, navigation and content adaptation, responsive QA. |
| `motion.md` | Duration and easing tokens and reduced-motion rules (optional). |

`spacing-and-grid.md` and `radius-and-elevation.md` are kept only as redirects to the split files.

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
| `/design-context` | Before screen or component work: finds the approved specs, Figma, code and memory entries, and reports what can proceed and what is missing or conflicting. |
| `/start-project` | Asks for the project basics and fills the project profile, roles, context and design-system type. |
| `/map-ia` | Builds the sitemap, page inventory, navigation and role visibility. |
| `/user-flow` | Creates a flow file for one user task, with a Mermaid diagram. |
| `/update-memory` | Records a screen's elements, interactions, validations and states in `memory.md`. |
| `/document-tokens` | Fills a foundation file (colour, type, spacing, grid, radius, elevation, icons, responsive, motion) and checks contrast. |
| `/document-component` | Writes a component spec from the template and adds it to the registry — from Figma, code, Markdown, or as a proposal. |
| `/design-review` | Reviews a design against these standards and scores it. |
| `/scaffold-prototype` | Starts a new prototype on the required stack. |
| `/dev-handoff` | Builds the developer handoff document for a release. |
| `/ui-qa` | Tests a build in the browser and logs defects. |

To get the FRD, ask Claude to "Create the FRD" once all screens are complete.

**`.claude/skills/animation-and-motion/`** holds 17 more skills for motion work: timing tokens (`motion-system`), product UI motion, web and native animation, page transitions, scroll storytelling, Lottie and Rive, haptics and sound, motion accessibility, motion specs and motion review. They sit in a subfolder, so they don't show up as slash commands: ask Claude to use one by name. See the [animation-and-motion guide](.claude/skills/animation-and-motion/README.md) for which to use, the extra tools some need, and how they defer to the project's approved `motion.md`.

## Starting a new project from this template

1. Create a new repository from this one — on GitHub click **Use this template** (template mode is turned on for this repo), or use the GitHub CLI:
   ```bash
   gh repo create my-project-design --private --template RAMZYX/siam-design-workflow --clone
   ```
2. Run `/start-project` in Claude Code, or fill in `02-foundation/memory.md` → *Project profile*, `01-research/information-architecture.md` → *Context* and `03-design-system/README.md` → *Project design-system type* by hand.
3. Work through the phases. Replace every `[PLACEHOLDER]` with approved project information, or mark it `TBD`.
4. Keep `memory.md` up to date as screens change. Ask for the FRD only once the screens are complete.

## Conventions

- **Placeholders** look like `` `[VALUE]` ``. Replace them; don't leave them in finished documents.
- **IDs** (`SCR-001`, `FLOW-001`, `BR-001`, `CMP-001`, `AC-001` …) stay stable so flows, memory, FRD, handoff and QA all link up. See [CLAUDE.md](CLAUDE.md) for the full list.
- **Specification statuses** (`approved`, `draft`, `proposed`, `missing`, `conflicting`) are defined in the [design-system index](03-design-system/README.md#specification-statuses). Inspiration and moodboards are never approved rules.
- **Figma is optional.** Every Figma field accepts `N/A`; Markdown or code references work instead.
- **Never mark a check `Pass`** or a screen *verified* without actually testing it.

## Checking the docs

Run this after moving, renaming or linking files (needs Node.js 18 or newer, no install step):

```bash
node scripts/check-docs.mjs
```

It checks that internal links and referenced paths exist, that skills are well formed, that every design-system file is linked from the index, and that the component registry and component specs match. GitHub runs the same check on every push and pull request.

## Updating the template

Change a standard in its own file only, and keep this template generic — project-specific data belongs in each project's own copy.
