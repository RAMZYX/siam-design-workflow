---
name: motion-system
description: The single source of truth for motion numbers - duration scale, named easing curves, spring presets, stagger, distances and reduced-motion rules - with ready-to-paste tokens for CSS, Motion (Framer), SwiftUI, Jetpack Compose and Figma variables. Use whenever choosing a duration, easing or spring, setting up motion tokens for a project, or when other motion skills give conflicting numbers. Other motion skills defer to this one.
---

# Motion System

Every other motion skill decides *what* should move and *why*.

This skill decides *how fast* and *with what curve*.

When another skill gives a different number, this skill wins.

Before inventing a value, pick the nearest token below. If no token fits, add a new one to the project's token file instead of hard-coding it.

## 1. Duration scale

| Token | Value | Use for |
|---|---|---|
| `duration-instant` | 0ms | Keyboard-initiated changes, focus moves, reduced-motion fallback |
| `duration-micro` | 100ms | Press feedback, toggles, checkbox ticks |
| `duration-fast` | 150ms | Hover, tooltips, small popovers, color/opacity state changes |
| `duration-base` | 220ms | Dropdowns, menus, tabs, small cards |
| `duration-moderate` | 300ms | Modals, drawers, sheets, on-screen slides |
| `duration-slow` | 400ms | Page and view transitions, shared-element moves, large surfaces |
| `duration-expressive` | 600-1000ms | Celebrations, onboarding moments, illustrative motion |

Brand and Lottie work runs on its own scale:

| Piece | Length |
|---|---|
| Lottie UI icon or state (success, error, loader cycle) | 0.4-1.2s |
| Logo reveal / splash | 1-3s |
| Story or intro sequence | 3-8s |

Rules:

- Product UI stays at or under 300ms unless the element is large or travels far.
- Exits are faster than entrances: about 70-80% of the enter duration.
- Frequent actions get shorter, quieter motion. Rare moments can be longer and more expressive.
- Scale duration with distance: a sheet crossing the full screen earns `duration-moderate`/`slow`; a 12px nudge stays at `fast`.

## 2. Easing curves

| Token | Curve | Use for |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances, hover transforms, anything arriving |
| `ease-move` | `cubic-bezier(0.25, 1, 0.5, 1)` | On-screen slides, panels, position changes |
| `ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | iOS-like sheets and drawers |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Ambient loops, morphs and camera moves with no user trigger |
| `ease-exit` | `cubic-bezier(0.55, 0, 1, 0.45)` | Elements leaving the screen for good (only, see below) |
| `linear` | `linear` | Spinners, progress bars, scroll-scrubbed timelines only |

Settled rules:

- **Exits default to `ease-enter` at a shorter duration.** This keeps dismissals feeling instant.
- **Use `ease-exit` (accelerating) only** when an element leaves the screen permanently (a toast flung away, a page exiting) and keep it at or under 200ms.
- **Never use an accelerating curve for an entrance or an on-screen move.** It feels sluggish.
- **Never use `linear` for anything organic.**
- Do not give every layer the same curve: the hero gets the most character, supporting elements get calmer curves.

## 3. Springs

Springs are defined by *perceived duration* and *bounce*, which maps across platforms.

| Token | Duration | Bounce | Use for |
|---|---|---|---|
| `spring-snappy` | 0.25s | 0 | Toggles, buttons, small state changes, drag release |
| `spring-smooth` | 0.4s | 0 | Panels, layout changes, shared elements, sheets |
| `spring-bouncy` | 0.5s | 0.2 | Success, rewards, mascot reactions, playful confirmations |

Platform mapping (mass 1, stiffness = (2pi / duration)^2, damping = 4pi x (1 - bounce) / duration):

| Token | Motion (React) | SwiftUI | Compose / react-spring |
|---|---|---|---|
| `spring-snappy` | `{ type: "spring", visualDuration: 0.25, bounce: 0 }` | `.spring(duration: 0.25, bounce: 0)` | stiffness 632, damping 50 / `dampingRatio = 1f` |
| `spring-smooth` | `{ type: "spring", visualDuration: 0.4, bounce: 0 }` | `.spring(duration: 0.4, bounce: 0)` | stiffness 247, damping 31 / `dampingRatio = 1f` |
| `spring-bouncy` | `{ type: "spring", visualDuration: 0.5, bounce: 0.2 }` | `.spring(duration: 0.5, bounce: 0.2)` | stiffness 158, damping 20 / `dampingRatio = 0.8f` |

Bounce above 0.3 reads as cartoonish in product UI. Keep it for characters and celebrations.

Use springs for anything the user can interrupt (drag, toggles, gestures). Use curves for fixed, choreographed sequences.

## 4. Stagger and choreography

- Stagger lists at 30-50ms per item.
- Keep total stagger under 300ms. After 6-8 items, reveal the rest together.
- Order: primary element first, secondary follows, details settle last.
- Overlap steps. The next element starts while the previous is still settling (start at 40-60% of the previous step).

## 5. Distance and scale

| Movement | Value |
|---|---|
| Small UI enter offset | 8-16px |
| Section or card enter offset | 24-40px |
| Menus, popovers start scale | 0.9-0.96, origin at the trigger |
| Modals start scale | 0.95, origin center |
| Press feedback scale | 0.97 |
| Never | scale(0) |

## 6. Reduced motion

When `prefers-reduced-motion: reduce` (or the OS setting) is on:

- Replace translation, scale, parallax and zoom with an opacity cross-fade of `duration-fast` or less, or an instant change.
- Keep spinners and progress indicators. They carry information.
- Stop auto-playing loops. Show a meaningful still frame (for Lottie: the final or key frame).
- Keep hierarchy and order. Reduced motion is a different design, not a deleted one.

Hard limits for everyone:

- Nothing flashes more than 3 times per second (WCAG 2.3.1).
- Anything that moves automatically for more than 5 seconds needs a pause control (WCAG 2.2.2).
- Large-scale parallax, zoom and spinning are vestibular triggers. Use them rarely and always disable them under reduced motion (WCAG 2.3.3).

## 7. Tokens to paste

### CSS

```css
:root {
  --duration-instant: 0ms;
  --duration-micro: 100ms;
  --duration-fast: 150ms;
  --duration-base: 220ms;
  --duration-moderate: 300ms;
  --duration-slow: 400ms;
  --duration-expressive: 700ms;

  --ease-enter: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-move: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-exit: cubic-bezier(0.55, 0, 1, 0.45);

  --stagger: 40ms;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-micro: 0ms;
    --duration-base: 150ms;
    --duration-moderate: 150ms;
    --duration-slow: 150ms;
    --duration-expressive: 150ms;
    --stagger: 0ms;
  }
}
```

### Motion (React)

```ts
export const duration = { micro: 0.1, fast: 0.15, base: 0.22, moderate: 0.3, slow: 0.4, expressive: 0.7 };
export const ease = {
  enter: [0.22, 1, 0.36, 1],
  move: [0.25, 1, 0.5, 1],
  drawer: [0.32, 0.72, 0, 1],
  inOut: [0.65, 0, 0.35, 1],
  exit: [0.55, 0, 1, 0.45],
} as const;
export const spring = {
  snappy: { type: "spring", visualDuration: 0.25, bounce: 0 },
  smooth: { type: "spring", visualDuration: 0.4, bounce: 0 },
  bouncy: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
} as const;
```

Pair with `useReducedMotion()` from `motion/react` and swap transforms for opacity when it returns true.

### SwiftUI

```swift
enum Motion {
    static let fast = Animation.timingCurve(0.22, 1, 0.36, 1, duration: 0.15)
    static let base = Animation.timingCurve(0.22, 1, 0.36, 1, duration: 0.22)
    static let moderate = Animation.timingCurve(0.25, 1, 0.5, 1, duration: 0.3)
    static let snappy = Animation.spring(duration: 0.25, bounce: 0)
    static let smooth = Animation.spring(duration: 0.4, bounce: 0)
    static let bouncy = Animation.spring(duration: 0.5, bounce: 0.2)
}
```

Read `@Environment(\.accessibilityReduceMotion)` and fall back to `.opacity` transitions.

### Jetpack Compose

```kotlin
object Motion {
    val EaseEnter = CubicBezierEasing(0.22f, 1f, 0.36f, 1f)
    val EaseMove = CubicBezierEasing(0.25f, 1f, 0.5f, 1f)
    const val Fast = 150
    const val Base = 220
    const val Moderate = 300
    fun <T> snappy() = spring<T>(dampingRatio = 1f, stiffness = 632f)
    fun <T> smooth() = spring<T>(dampingRatio = 1f, stiffness = 247f)
    fun <T> bouncy() = spring<T>(dampingRatio = 0.8f, stiffness = 158f)
}
```

### Figma variables

Create a `motion` collection with number variables named `duration/fast`, `duration/base`, etc. (in ms), and document easing curves as animation styles named `ease/enter`, `ease/move`, etc., so designers and code share names.

## 8. Setting up a project

1. Look for an existing motion token file first (`tokens`, `theme`, `motion.ts`, CSS variables). If one exists, map these tokens onto it rather than adding a parallel set.
2. Otherwise add the block from section 7 for the project's stack, once, in the shared theme file.
3. Replace hard-coded durations and curves in components with tokens.
4. Note any deliberate exception next to the code with a one-line reason.
