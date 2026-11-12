---
name: design-context
description: Resolve the design context for a screen or component before designing, building, documenting or reviewing it — find the approved Markdown specs, Figma references, existing implementation and memory.md entries, classify each requirement by status, and report what can safely proceed and what is missing or conflicting. Use before any screen or component task, when Figma is unavailable, or when the user asks "what do we have for X" or "can we build X yet".
---

# Resolve design context

Output a context report. Do not design or change files in this skill unless the user asks.

## Read first
- `CLAUDE.md`
- `03-design-system/README.md` — project type, status definitions, missing-spec rules
- `03-design-system/component-registry.md`

## Steps

1. **Identify the target.** Name the screen (`SCR-`) or component (`CMP-`) and the task (design, build, document, review, test). If the user gave a name only, find its ID in `memory.md` §4, the IA page inventory or the registry. If none exists, say so.

2. **Discover approved Markdown.**
   - Screens: the `memory.md` §5 block, related `01-research/flow-*.md`, the IA entry.
   - Components: `03-design-system/components/[name].md` and its registry row.
   - Foundations the target uses: the topic files listed in the index.
   - Standards: the relevant sections of `02-foundation/` files.
   Note each file's *Specification status* (or requirement status in `memory.md`).

3. **Check Figma references.** Collect Figma URLs from the files above or from the user. If Figma tools are available and a link exists, read it. If there is no link or no tool access, record "Figma not checked" — this is not a blocker on its own.

4. **Check existing implementation.** If a codebase is available, search for the component or screen (component folders, token files, routes). Record paths. Code is evidence of current behaviour, not of approved intent.

5. **Classify every requirement** you found (tokens, variants, states, behaviour, copy, validation) as:
   | Class | Meaning |
   |---|---|
   | `approved` | Approved spec or confirmed requirement |
   | `draft` / `proposed` | Exists but not approved |
   | `missing` | Needed, documented nowhere |
   | `conflicting` | Sources disagree — record each value and source |
   Inspiration and moodboards are never `approved`.

6. **Decide what can safely proceed.**
   - `approved` items: proceed.
   - `draft` / `proposed`: proceed only if the user accepts the risk; label the output as unapproved.
   - `missing`: do not invent — propose a solution marked `proposed`, based on approved foundations and related approved components.
   - `conflicting`: stop on that item; the owner must decide.
   Use the project type (`foundation-only`, `partial`, `complete`) from the index to set expectations.

7. **Report.** Use this format:
   ```markdown
   ## Design context — [TARGET ID / NAME]
   Project type: [foundation-only / partial / complete / unknown]
   Sources checked: Markdown [files] · Figma [checked / not checked: reason] · Code [paths / none]

   | Requirement | Status | Source | Notes |
   |---|---|---|---|

   Can proceed: [list]
   Needs a proposal: [list]
   Needs owner decision (conflicts): [list with both values]
   Open questions to log: [Q- IDs or proposed new ones]
   ```
   Offer to log new open questions in `memory.md` §8 or the spec's *Open decisions*; do it only on the user's yes.
