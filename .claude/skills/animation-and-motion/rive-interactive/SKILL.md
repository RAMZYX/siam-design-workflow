---
name: rive-interactive
description: Design and integrate interactive Rive animations - mascots and characters that react to the user, stateful icons, animated toggles, progress and reward moments driven by app state. Covers state machine design, data binding (view models), events, and runtime code for web/React, React Native, iOS, Android and Flutter. Use whenever an animation must respond to taps, hovers, app state or data, whenever the user mentions Rive or a .riv file, or when a Lottie animation would need many separate files to cover every state. Lottie plays a fixed timeline; Rive reacts.
---

# Rive Interactive

Rive files (`.riv`) are authored in the Rive editor. You cannot write or edit a `.riv` file directly; it is a binary format.

Your job is the two halves around the editor:

1. **Design the interaction** so an animator can build it in Rive without guessing: the states, the inputs, the data, the transitions and the events.
2. **Integrate the runtime** so the app drives the animation with real state, and listens for what the animation reports back.

If the user has no `.riv` file yet, deliver the interaction spec (section 3) as the hand-off for whoever builds it in Rive.

## 1. Rive or Lottie?

| Need | Use |
|---|---|
| Plays the same way every time (logo reveal, intro, illustration) | Lottie (lottie-animator) |
| Reacts to taps, hover, drag or pointer position | Rive |
| Blends between states (idle to happy to sad) without hard cuts | Rive |
| Driven by live data (score, progress, streak count, name text) | Rive |
| One character with many reactions | Rive (one file instead of a dozen Lotties) |
| Must play in After Effects pipelines or simple email/GIF exports | Lottie |

## 2. Rive concepts you design with

- **Artboard**: the canvas. One file can hold several (for example the mascot and a badge).
- **State machine**: the logic graph. Layers run in parallel (for example: body layer, eyes layer, mouth layer), so a blink can run while the body celebrates.
- **States**: animations or blend states. A **blend state** mixes animations by a number (for example 0-100 "happiness" blends sad, neutral and happy).
- **Transitions**: conditions that move between states, with a duration for smooth crossfades.
- **Data binding (view models)**: the modern way for the app to talk to the file. A view model exposes typed properties: number, boolean, string, color, enum, trigger, image, list. Prefer data binding for new work.
- **State machine inputs** (boolean, number, trigger): the older way. Still common in existing files, but deprecated in newer runtimes in favor of data binding.
- **Listeners**: pointer interactions handled inside the file (hover, click, pointer move) without app code.
- **Events**: the file reporting back to the app (for example "celebrationFinished" or "buttonPressed"), so the app can play a sound, fire haptics or navigate.

## 3. Write the interaction spec first

Before any code, produce this table. It is the contract between design, the Rive animator and engineering.

**Example: streak mascot**

View model `Mascot`:

| Property | Type | Range / values | Set by | Drives |
|---|---|---|---|---|
| `mood` | enum | idle, happy, sad, sleepy | App | Body layer state |
| `streak` | number | 0-365 | App | Flame size blend, counter text |
| `name` | string | user's first name | App | Speech bubble text |
| `celebrate` | trigger | - | App | One-shot celebration |
| `isPressed` | boolean | - | Listener in file | Squash on press |

State machine layers:

| Layer | States | Transitions |
|---|---|---|
| Body | idle (loop), happy, sad, sleepy, celebrate | `mood` changes: 0.2s crossfade. `celebrate` fires: celebrate, then back to `mood` state |
| Eyes | open, blink | Random blink every 3-5s, independent of body |
| Flame | blend state by `streak` | Continuous |

Events reported to the app:

| Event | When | App does |
|---|---|---|
| `celebrationPeak` | Frame of the big jump | Haptic success + sound |
| `celebrationDone` | Back to idle | Enable the Continue button |

Rules for the spec:

- Every state has an exit. No state traps the character.
- Idle never freezes: give it a breathing loop and an independent blink layer.
- Keep high-frequency reactions short (under 0.6s) and save big ones for rare events. Take durations from motion-system.
- Name properties in camelCase, exactly as the code will use them.
- Plan a reduced-motion behavior: which still pose to show, and that triggers jump straight to their end state.

## 4. Runtime integration

Pick the official runtime for the platform. Always check the project's installed version and the current docs at `rive.app/docs/runtimes/<platform>/data-binding`, because APIs moved from state machine inputs to data binding.

| Platform | Package |
|---|---|
| React (web) | `@rive-app/react-webgl2` (or `@rive-app/react-canvas` for smaller bundles) |
| Vanilla web | `@rive-app/webgl2` or `@rive-app/canvas` |
| React Native | `@rive-app/react-native` |
| iOS | `RiveRuntime` (Swift Package Manager) |
| Android | `app.rive:rive-android` |
| Flutter | `rive` |

### React example (data binding)

```tsx
import { useEffect } from "react";
import {
  useRive,
  useViewModel,
  useViewModelInstance,
  useViewModelInstanceNumber,
  useViewModelInstanceEnum,
  useViewModelInstanceTrigger,
} from "@rive-app/react-webgl2";

export function StreakMascot({ streak, mood, onCelebrationDone }) {
  const { rive, RiveComponent } = useRive({
    src: "/animations/mascot.riv",
    stateMachines: "Main",
    autoplay: true,
    autoBind: false,
  });

  const viewModel = useViewModel(rive, { name: "Mascot" });
  const vmi = useViewModelInstance(viewModel, { rive });

  const { setValue: setStreak } = useViewModelInstanceNumber("streak", vmi);
  const { setValue: setMood } = useViewModelInstanceEnum("mood", vmi);
  const { trigger: celebrate } = useViewModelInstanceTrigger("celebrate", vmi);

  useEffect(() => { setStreak(streak); }, [streak, setStreak]);
  useEffect(() => { setMood(mood); }, [mood, setMood]);

  return <RiveComponent role="img" aria-label={`Mascot, ${streak} day streak`} style={{ width: 240, height: 240 }} />;
}
```

Check whether the installed version names the option `stateMachines` or `stateMachine`; the docs show both.

Listen for events from the file:

```ts
import { EventType } from "@rive-app/react-webgl2";

useEffect(() => {
  if (!rive) return;
  const onEvent = (e) => {
    if (e.data?.name === "celebrationDone") onCelebrationDone?.();
  };
  rive.on(EventType.RiveEvent, onEvent);
  return () => rive.off(EventType.RiveEvent, onEvent);
}, [rive]);
```

### Legacy files (state machine inputs)

If the `.riv` file uses inputs instead of a view model, use `useStateMachineInput(rive, "Main", "inputName")` and set `.value` or call `.fire()`. Recommend migrating to data binding when the file is next edited.

## 5. Production checklist

- **Size the canvas** with explicit width and height (or aspect-ratio) so layout doesn't jump when the file loads. Show a static fallback image while loading.
- **Fit and alignment**: set `layout` (fit contain/cover, alignment) deliberately; check small phones and tablets.
- **Pause off-screen**: stop or pause the animation when it scrolls out of view or the app goes to the background.
- **Clean up**: the React hook cleans up on unmount; in vanilla JS call `rive.cleanup()`.
- **File size**: keep `.riv` files small (usually under 200 KB). Embed only the fonts and images actually used.
- **Accessibility**: give the canvas `role="img"` and an `aria-label` that states the meaning, not the motion. Under reduced motion, set the resting state and skip celebrations. Never put essential text only inside the animation.
- **Haptics and sound**: trigger them from Rive events, not timers, so they stay in sync (see haptics-sound).
- Run motion-review on the result, recording the interaction in every state.
