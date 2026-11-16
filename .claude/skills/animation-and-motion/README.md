# Animation and Motion skills

17 skills for planning, building, documenting and reviewing motion. They were added as supplied; this file explains how they fit this repo.

**How to use them:** Claude Code only auto-loads skills placed directly in `.claude/skills/`, so these grouped skills do not appear as slash commands. Ask Claude to use one by name (for example "use the motion-review skill"), and Claude reads its `SKILL.md` from this folder. To make one a slash command, move its folder up one level into `.claude/skills/`.

## Which skill to use

| Need | Skill |
|---|---|
| Timing numbers: durations, easing curves, springs, stagger | `motion-system` |
| Decide what moves and why (product UI) | `premium-motion-design` |
| Plan a complex sequence before building (storyboard, timing map) | `motion-art-direction` |
| Mascots, characters, emotional moments | `animator` |
| Logo reveals and splash screens | `logo-animation` |
| Web UI motion in CSS / Motion (springs, gestures, drag, clip-path) | `ui-animation` |
| Page, route and shared-element transitions on the web | `view-transitions` |
| Scroll-driven storytelling pages | `scroll-storytelling` |
| iOS, Android and React Native motion | `native-motion` |
| Interactive, state-driven animation (Rive) | `rive-interactive` |
| Lottie JSON files (includes a validator) | `lottie-animator` |
| Lottie authoring in the Skottie player project | `text-to-lottie` |
| Haptic feedback and UI sound | `haptics-sound` |
| WCAG motion rules and reduced-motion design | `motion-accessibility` |
| Developer-ready motion spec | `motion-spec-handoff` |
| Review a built animation by watching it | `motion-review` |
| Pixel-art game character spritesheets | `game-character-sprites` |

## How they fit this repo's rules

- **The project's approved motion spec comes first.** `motion-system` calls itself the single source of truth and ships default values. In this repo, the authority is the project's [`motion.md`](../../../03-design-system/Design%20Foundation/motion.md). Use its `approved` tokens. Use `motion-system` values only where the project has none, and mark them `proposed` until the owner approves them. The same applies to the default timings in `ui-animation`.
- **Accessibility.** `motion-accessibility` supports [`accessibility.md`](../../../02-foundation/accessibility.md), which remains the project baseline.
- **Motion specs.** Files from `motion-spec-handoff` complement the project's `motion.md` and `dev-handoff.md`; record per-screen motion behaviour in `memory.md` as usual.
- **Never invent approval.** Brand motion, mascot personalities and sound design from these skills are proposals until approved.

## Extra setup some skills need

| Skill | Needs |
|---|---|
| `lottie-animator` | Node.js to run `lottie-animator/scripts/validate-lottie.mjs` |
| `text-to-lottie` | The separate Skottie player project (`npx degit diffusionstudio/lottie`), which downloads third-party code; review it before running |
| `game-character-sprites` | Python 3 with Pillow for its scripts, and an image-generation tool. It was written for another AI tool (Codex: `$imagegen`, `D:\CodexHome` paths), so those steps will not work as written in Claude Code |
| `motion-review`, `ui-animation` | A browser to watch animations; `ffmpeg` and Playwright are optional |
