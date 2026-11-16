---
name: haptics-sound
description: Pair motion with haptic feedback and UI sound - choosing the right haptic for each moment, syncing it to the animation frame, and implementing it with SwiftUI sensoryFeedback, UIKit feedback generators and Core Haptics (iOS), Compose and View haptic constants and VibrationEffect (Android), expo-haptics (React Native) and the Vibration API (web, Android only), plus short UI sounds that respect silent mode and user settings. Use when designing success, error, toggle, selection, drag, pull-to-refresh, purchase, reward or celebration moments in an app, when a Rive or Lottie event should fire feedback, or when the user mentions haptics, vibration, taptic, sound effects or "make it feel tactile".
---

# Haptics & Sound

Motion shows that something happened. Haptics make you feel it. Sound confirms it when you're not looking. Used together and in sync, a moment feels physical. Used everywhere, they become noise and drain the battery.

## 1. When to use feedback

| Moment | Haptic | Sound | Notes |
|---|---|---|---|
| Toggle on/off | Light / toggle | No | Every toggle, but subtle |
| Picker or slider step | Selection tick | No | One tick per discrete step, never continuous |
| Drag snaps into place, reorder drop | Light impact | No | On the snap frame |
| Pull-to-refresh threshold reached | Light impact | No | Once, when crossing the threshold |
| Success (saved, sent, paid) | Success | Optional, short | Payment and sending deserve sound |
| Error or rejected action | Error / reject | Optional | Always with a visible message |
| Warning (destructive confirm) | Warning | No | |
| Long press opens a menu | Medium impact | No | |
| Reward, streak, level up | Success, or a custom pattern | Yes | Rare moments can be richer |
| Typing, scrolling, hover | None | None | Too frequent |

Rules:

- **Frequency inversely to intensity.** Frequent actions get the lightest feedback or none. Rare moments can be stronger.
- **Feedback confirms an action the user took.** Don't vibrate for things that happen on their own (incoming data), except important notifications.
- **Never use haptics or sound alone to convey information.** Pair with a visual change and text.
- **One haptic per moment.** Don't stack a haptic on every element of a staggered animation.

## 2. Sync to the animation

Fire feedback on the frame where the motion "lands", not when it starts:

- A check mark: when the stroke completes.
- A card snapping into a slot: when the spring first reaches the target, not when it settles.
- A celebration: on the peak (the big jump), with sound starting together.
- Lottie: listen for the frame (`enterFrame` event, or split the animation into segments) and fire then.
- Rive: add an event in the file at the exact frame (for example `celebrationPeak`) and fire feedback from the event listener (see rive-interactive).

Prepare the generator in advance on iOS (`prepare()`) so there's no delay on the first fire.

## 3. Implementation

### iOS: SwiftUI (iOS 17+)

```swift
Button("Save") { save() }
    .sensoryFeedback(.success, trigger: saveCount)

Toggle("Notifications", isOn: $isOn)
    .sensoryFeedback(.selection, trigger: isOn)

Slider(value: $value, in: 0...10, step: 1)
    .sensoryFeedback(.selection, trigger: value)

.sensoryFeedback(.impact(weight: .light, intensity: 0.7), trigger: snapped)
```

Styles include `.success`, `.warning`, `.error`, `.selection`, `.increase`, `.decrease`, `.start`, `.stop`, `.alignment`, `.levelChange` and `.impact(...)`. Not every style exists on every platform.

### iOS: UIKit

```swift
let impact = UIImpactFeedbackGenerator(style: .light)
impact.prepare()
impact.impactOccurred()

UINotificationFeedbackGenerator().notificationOccurred(.success)
UISelectionFeedbackGenerator().selectionChanged()
```

### iOS: Core Haptics (custom patterns)

Use `CHHapticEngine` with a pattern (or an `.ahap` file) for signature moments such as a reward. Check `CHHapticEngine.capabilitiesForHardware().supportsHaptics`, handle engine resets, and keep custom patterns under about 1 second.

### Android: Compose

```kotlin
val haptic = LocalHapticFeedback.current
haptic.performHapticFeedback(HapticFeedbackType.Confirm)      // success
haptic.performHapticFeedback(HapticFeedbackType.Reject)       // error
haptic.performHapticFeedback(HapticFeedbackType.ToggleOn)
haptic.performHapticFeedback(HapticFeedbackType.SegmentTick)  // slider / picker step
haptic.performHapticFeedback(HapticFeedbackType.LongPress)
```

The newer types (Confirm, Reject, ToggleOn/Off, SegmentTick) need a recent Compose UI version; check the installed version.

### Android: Views

```kotlin
view.performHapticFeedback(HapticFeedbackConstants.CONFIRM)   // API 30+
view.performHapticFeedback(HapticFeedbackConstants.REJECT)    // API 30+
view.performHapticFeedback(HapticFeedbackConstants.CLOCK_TICK)
```

`performHapticFeedback` respects the user's system haptics setting. For custom patterns, use `VibrationEffect.startComposition()` with primitives such as `PRIMITIVE_CLICK` and `PRIMITIVE_TICK` (API 30+), and check `vibrator.areAllPrimitivesSupported(...)` first. Direct `Vibrator` use needs the `VIBRATE` permission.

### React Native (bare)

Many bare React Native apps already use `react-native-haptic-feedback`. Use it rather than adding a second library:

```ts
import { trigger } from "react-native-haptic-feedback";

const OPTIONS = { enableVibrateFallback: false, ignoreAndroidSystemSettings: false };
trigger("selection", OPTIONS);
trigger("impactLight", OPTIONS);           // also impactMedium, impactHeavy
trigger("notificationSuccess", OPTIONS);   // also notificationWarning, notificationError
```

Keep `ignoreAndroidSystemSettings: false` so users who turned haptics off aren't buzzed. Keep `enableVibrateFallback: false`, otherwise phones without a haptic engine get a long vibration instead of a tap. Don't call React Native's `Vibration.vibrate()` for UI feedback, and never fire two or three haptics for one moment. Put the calls in one small helper (`haptics.success()`, `haptics.select()`) so the whole app stays consistent.

### React Native / Expo

```ts
import * as Haptics from "expo-haptics";

Haptics.selectionAsync();
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
```

Fire it from the JS side when the animation lands; with Reanimated, call it via `runOnJS` from the animation callback.

### Web

```js
if ("vibrate" in navigator) navigator.vibrate(10);   // Android browsers only; iOS Safari ignores it
```

Treat web haptics as a bonus. Keep pulses to 10-20ms. Never vibrate on page load.

## 4. UI sound

- **Short**: 50-300ms for UI sounds; up to about 1.5s for a celebration.
- **Quiet and soft**: mixed well below media volume, no harsh high frequencies.
- **One family**: all sounds share a palette (same instrument or texture) so the app sounds coherent.
- **Respect the device**: on iOS, use the ambient audio session category so the silent switch mutes UI sounds and other apps' music keeps playing. Never interrupt the user's audio for a UI sound.
- **Respect the user**: add an in-app "Sounds" setting, default on only for apps where sound is core (games, learning apps), otherwise default off or subtle.
- **Preload** sounds so they play on the exact frame.
- **Web**: sound only after a user gesture (browsers block autoplay), via the Web Audio API or a preloaded `<audio>` element.
- Provide a visual equivalent for every sound.

## 5. Accessibility and settings

- Honor the OS haptics setting (system APIs above do this automatically).
- Reduced motion doesn't disable haptics or sound; they can replace motion as the confirmation when animation is reduced.
- Some users find vibration uncomfortable: offer an in-app toggle for haptics when you use custom patterns.

## 6. Spec it

Add a row per moment to the motion spec (motion-spec-handoff, section 9): moment, haptic type per platform, sound file, and the exact frame or event it fires on.
