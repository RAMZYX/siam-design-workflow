---
name: motion-spec-handoff
description: Write developer-ready motion specifications - timing diagrams, per-element property tables, easing and spring values, triggers, interruption and reduced-motion behavior, and the delivery format (CSS, Motion, native code, Lottie, Rive or video). Use when handing an animation to engineers, documenting motion for a design system, turning a prototype or Figma motion into a spec, writing acceptance criteria for an animation, or when the user asks for a motion spec, animation spec, redlines for motion, timing chart or "how should devs build this".
---

# Motion Spec & Handoff

A motion spec lets an engineer build the animation without guessing, and lets QA check it without asking the designer. "Make it feel smooth" is not a spec. "Card: translateY 16px to 0, opacity 0 to 1, 220ms, ease-enter, starts 40ms after the header" is.

## When to write one

- Any animation longer than a single property change.
- Anything with sequencing (stagger, choreography, multiple elements).
- Anything interactive (gestures, interruptible states, Rive state machines).
- Every reusable pattern going into a design system.

## Workflow

1. **Gather the source**: Figma motion (use figma-implement-motion's `get_motion_context` when there's a Figma link), a prototype, a video, a Lottie/Rive file, or a description.
2. **Name every moving element** with the name engineers will see in code (component or layer name).
3. **Map values to motion-system tokens.** Write the token name and the raw value: `ease-enter (cubic-bezier(0.22, 1, 0.36, 1))`. Flag anything that doesn't fit a token as a deliberate exception with a reason.
4. **Fill the template** in `assets/motion-spec-template.md`. Keep every section; write "None" rather than deleting one, so the reader knows it was considered.
5. **Draw the timing diagram** (text Gantt, below) so overlaps and stagger are obvious.
6. **Write acceptance criteria** that QA can check by slowing the animation down.
7. **Choose and state the delivery format** (section below) with the reason.

## Timing diagram format

One row per element. State the scale on the first line (20ms per character works for most UI). Each bar starts at the element's delay and its length is its duration.

```
Scale: 1 char = 20ms          0ms       200ms     400ms
Scrim (fade in)               |========|
Sheet (translateY 100% to 0)  |=============|
Handle (fade in)                     |===|
Title (fade, rise 8px)              |=========|
List items (stagger 40ms)               |=========|
```

Keep durations true to scale; that's the point of the diagram.

## Property table format

| Element | Property | From | To | Delay | Duration | Easing / spring | Notes |
|---|---|---|---|---|---|---|---|
| Sheet | translateY | 100% | 0 | 0ms | 300ms | ease-drawer `cubic-bezier(0.32, 0.72, 0, 1)` | Follows the finger when dragged |
| Scrim | opacity | 0 | 0.4 | 0ms | 200ms | linear | |
| Title | opacity, translateY | 0, 8px | 1, 0 | 120ms | 220ms | ease-enter | |

Use units everywhere (ms, px, %, deg). For springs, write the token and its parameters for each platform in scope (from motion-system).

## Behavior that specs often miss

Always specify:

- **Trigger**: what starts it (tap, load, data change, scroll position, gesture threshold).
- **Interruption**: what happens if it's triggered again mid-animation (retarget from the current value, ignore, or restart). Default: retarget.
- **Reverse / exit**: the closing animation, usually shorter. Don't assume "the same backwards".
- **Gesture handoff**: during a drag the element follows the finger 1:1; on release it animates with the release velocity. State the dismiss threshold (distance and velocity).
- **Reduced motion**: the exact alternative (see motion-accessibility).
- **Loading and failure**: what shows if data is late, and whether the animation waits.
- **Visibility**: check the animation isn't playing behind something else. A load entrance that runs while a loader or splash still covers the page is never seen. Start entrances from the moment they become visible, not from page load.
- **Performance budget**: properties allowed (transform, opacity), target frame rate, asset size.
- **Haptics and sound**: which frame they fire on (see haptics-sound).

## Delivery format

| Animation type | Deliver as |
|---|---|
| UI state changes, transitions, micro-interactions | Code from the spec (CSS, Motion, SwiftUI, Compose, Reanimated) |
| Illustrated, linear, same every time | Lottie JSON (validated with lottie-animator) |
| Interactive, state-driven, data-driven illustration | Rive file plus its interaction spec (rive-interactive) |
| Marketing, cinematic, not interactive | Video (MP4/WebM), with a poster frame |

State why. Mixing is normal (a Rive mascot inside a coded screen transition).

## Acceptance criteria

Write them as checkable statements:

- At 10% speed, the title starts moving after the sheet is at least half open.
- No element moves after 520ms.
- With reduced motion on, the sheet appears with a 150ms fade and nothing slides.
- Tapping the close button mid-open reverses smoothly from the current position.
- Animation holds 60fps on a mid-range Android device (no dropped frames in a performance trace).

## Output

Deliver the spec as a Markdown file next to the feature (or in the design system docs), named `<feature>-motion-spec.md`, based on the template. If the user wants it shareable, also offer a page version.
