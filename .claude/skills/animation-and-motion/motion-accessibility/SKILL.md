---
name: motion-accessibility
description: Make animation accessible - WCAG motion and flashing rules (2.2.2 Pause Stop Hide, 2.3.1 Three Flashes, 2.3.3 Animation from Interactions), vestibular triggers, designing reduced-motion alternatives, pause controls for loops, Lottie/Rive/video accessibility, and screen reader and focus handling around animated changes. Use when auditing or building any animation, carousel, auto-playing loop, parallax, scroll effect, splash or celebration; when the user mentions accessibility, a11y, WCAG, reduced motion, motion sickness, vestibular, seizures or flashing; and before shipping any motion-heavy page or app screen.
---

# Motion Accessibility

Motion can make an interface clearer, or make someone dizzy, nauseous, distracted or, with flashing, cause a seizure. Accessible motion keeps the meaning and removes the harm.

## 1. The rules that apply

| Rule | Level | What it requires | Typical failures |
|---|---|---|---|
| WCAG 2.3.1 Three Flashes or Below Threshold | A | Nothing flashes more than 3 times in any 1 second (unless below the general and red flash thresholds) | Strobing celebrations, fast-blinking alerts, glitch effects, rapid color cycling |
| WCAG 2.2.2 Pause, Stop, Hide | A | Anything that moves, blinks or scrolls automatically, lasts more than 5 seconds and runs alongside other content can be paused, stopped or hidden. Auto-updating content can be paused or controlled | Auto-advancing carousels, looping hero videos, endless Lottie loops, marquees, animated backgrounds |
| WCAG 2.3.3 Animation from Interactions | AAA | Motion triggered by interaction can be disabled unless essential | Parallax on scroll, scroll-jacking, zooming page transitions, shake on hover |
| WCAG 1.4.1 / 1.3.3 (by analogy) | A | Information isn't conveyed by motion alone | A field shakes on error with no message; a status changes only by an animation |

Treat 2.3.3 as required in practice: honoring the OS reduced-motion setting is cheap and expected.

## 2. Vestibular triggers

These cause the most trouble for people with vestibular disorders. Use them sparingly and always disable or replace them under reduced motion:

- Parallax, especially multi-layer or large-offset parallax
- Zooming and scaling large areas (zoom page transitions, full-screen scale-ups)
- Spinning and rotation of large elements
- Scroll-jacking (scroll speed or direction that doesn't match the input)
- Large surfaces sliding across the full screen
- Background motion behind text (moving gradients, particle fields)
- Auto-playing video backgrounds

Small, short, user-triggered motion (a button press, a 12px fade-up, a toggle) is rarely a problem.

## 3. Design the reduced-motion version

Reduced motion is a second design, not a deleted one. For each animation, decide what carries the meaning, then keep that and drop the movement.

| Original | Reduced-motion version |
|---|---|
| Slide-up entrance | Fade in, 150ms or less |
| Page zoom / shared-element morph | Instant change or short cross-fade |
| Parallax hero | Static image |
| Auto-playing carousel | Static first slide with manual controls |
| Looping Lottie / Rive mascot | Still frame of a meaningful pose |
| Celebration burst | Still badge with a color change; haptic and sound can stay |
| Skeleton shimmer | Static skeleton (or a slow opacity pulse) |
| Spinner / progress | Keep it: it carries information |
| Number counting up | Show the final number |
| Error shake | Red border and an error message (which should exist anyway) |

## 4. Implementation

**CSS**

```css
@media (prefers-reduced-motion: reduce) {
  .hero-parallax { transform: none !important; }
  .card { animation: fade-in 150ms ease-out both; }
}
```

Prefer opting in to motion over a global kill switch, so you design both versions:

```css
@media (prefers-reduced-motion: no-preference) {
  .card { animation: slide-up var(--duration-base) var(--ease-enter) both; }
}
```

Avoid `* { animation: none !important }` blanket rules: they also kill spinners and can break components that wait for `animationend`.

**JavaScript**

```js
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
reduce.addEventListener("change", update);
```

**Motion (React)**: `useReducedMotion()`, or `<MotionConfig reducedMotion="user">` to drop transform and layout animations app-wide while keeping opacity and color.

**GSAP**: `gsap.matchMedia()` with `"(prefers-reduced-motion: reduce)"` to register reduced variants.

**Native**: see native-motion (SwiftUI `accessibilityReduceMotion`, Android animator duration scale, Reanimated `useReducedMotion`).

**Lottie**: under reduced motion, don't autoplay; call `goToAndStop(frame, true)` on a meaningful frame.

**Rive**: set the resting state through data binding and skip celebration triggers.

## 5. Pause controls

Anything that moves on its own for more than 5 seconds needs a visible control:

```html
<button type="button" class="motion-toggle">Pause animation</button>
```

- Put it near the moving content, reachable by keyboard, with a label that changes ("Pause animation" / "Play animation"). Change the label or use `aria-pressed`, not both: a pressed "Play" button is confusing.
- Pause when the content scrolls off-screen or the tab is hidden (saves battery too).
- Stop auto-advancing carousels on hover and focus, and don't restart them automatically after the user interacts.
- Looping marquees duplicate their content to loop seamlessly. Give each duplicate image empty `alt=""` and `aria-hidden="true"` so screen readers don't read everything twice. If the content isn't duplicated, the loop visibly jumps.

## 6. Screen readers and focus

- Animation is invisible to screen readers. Announce state changes in text: `aria-live="polite"` regions for "Saved", "3 items added", "Level complete".
- Decorative animations: `aria-hidden="true"` (or `role="presentation"`) so they aren't read.
- Meaningful animations (a mascot that conveys status): `role="img"` with an `aria-label` that states the meaning.
- After a page or view transition, move focus to the new heading or main region.
- Don't animate focus movement for keyboard users, and never hide the focus ring during an animation.
- Elements must be usable as soon as they're visible: don't block clicks until an entrance finishes.

## 7. Flash safety checklist

- No element flashes more than 3 times per second.
- No saturated red flashing.
- Large-area brightness changes (full-screen white to black) happen at most once, slowly.
- Check video and Lottie exports frame by frame for strobing. For video, a tool such as PEAT (Photosensitive Epilepsy Analysis Tool) can analyze it.

## 8. Audit output

When auditing, return a table:

| Element | Issue | Rule | Severity | Fix |
|---|---|---|---|---|
| Home hero video | Loops forever, no pause | 2.2.2 | High | Add pause button; stop after 5s under reduced motion |
| Product page parallax | Moves on scroll, ignores OS setting | 2.3.3 | Medium | Disable under `prefers-reduced-motion` |
| Form error | Shake only, no message | 1.4.1 | High | Add inline error text; keep shake only when motion is allowed |

Then implement the fixes and re-test with reduced motion turned on (OS setting, or DevTools > Rendering > Emulate `prefers-reduced-motion`).
