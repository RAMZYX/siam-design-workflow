---
name: native-motion
description: Implement product motion in native and cross-platform mobile apps - SwiftUI and UIKit (iOS), Jetpack Compose (Android), and React Native with Reanimated and Gesture Handler. Covers springs, enter/exit transitions, shared-element and navigation transitions, list and layout animation, gestures with velocity, number and icon changes, platform conventions and reduced motion. Use whenever animation work targets an iOS, Android or React Native app, or the project contains .swift, .kt, an .xcodeproj, build.gradle, or react-native in package.json - even if the user just says "animate this screen".
---

# Native Motion

Web motion skills assume CSS and the browser. Mobile platforms have their own animation systems, conventions and accessibility settings. This skill maps the shared motion language onto each one.

## Workflow

1. **Detect the platform** from the project: `.swift` / `.xcodeproj` (SwiftUI or UIKit), `build.gradle` + Compose imports (Jetpack Compose), `react-native` in `package.json` (React Native). If several, ask which surface is in scope.
2. **Read the platform reference** for code patterns, and only that one:
   - `references/swiftui.md` - SwiftUI and UIKit
   - `references/compose.md` - Jetpack Compose
   - `references/react-native.md` - React Native (Reanimated, Gesture Handler, Expo)
3. **Take numbers from motion-system.** Its spring tokens (`spring-snappy`, `spring-smooth`, `spring-bouncy`) are defined by duration and bounce, which map directly to SwiftUI and Reanimated, and to dampingRatio + stiffness in Compose. If the app already has motion constants, use them.
4. **Follow platform conventions** (below) before brand personality.
5. **Handle reduced motion** on every animation you add.
6. **Watch it**: slow animations down on the device (see Testing) and run motion-review.

## Pattern map

| Pattern | SwiftUI | Compose | React Native |
|---|---|---|---|
| Animate a value change | `withAnimation(.spring(...))`, `.animation(_:value:)` | `animate*AsState` | `useSharedValue` + `withSpring` / `withTiming` |
| Show / hide | `.transition(...)` with `if` | `AnimatedVisibility` | `entering` / `exiting` layout animations |
| Swap content | `.transition` + `.id()`, `.contentTransition` | `AnimatedContent` | `entering`/`exiting` keyed by content |
| Size or layout change | implicit with `withAnimation` | `Modifier.animateContentSize()` | `layout={LinearTransition}` |
| List insert / remove / move | `withAnimation` around data change | `Modifier.animateItem()` in Lazy lists | `itemLayoutAnimation` / `layout` on items |
| Shared element | `matchedGeometryEffect`, iOS 18 `.navigationTransition(.zoom)` | `SharedTransitionLayout` + `Modifier.sharedElement` | Reanimated `sharedTransitionTag` (experimental) |
| Multi-step sequence | `PhaseAnimator`, `KeyframeAnimator` | `updateTransition`, `Animatable` with sequential `animateTo` | `withSequence`, `withDelay` |
| Drag with fling | `DragGesture` + spring on end | `Modifier.draggable` / `pointerInput` + `Animatable.animateDecay` or spring | `Gesture.Pan()` + `withSpring({ velocity })` / `withDecay` |
| Number change | `.contentTransition(.numericText())` | `AnimatedContent` per digit | Animated text via shared value |
| Icon reaction | `.symbolEffect(.bounce, value:)` | `AnimatedVectorDrawable`, Lottie or Rive | Lottie or Rive |

## Platform conventions

**iOS**
- Navigation pushes, sheets and alerts use system motion. Customize only with a reason.
- Springs everywhere. Avoid linear and long ease curves for UI.
- Sheets and cards follow the finger and keep velocity on release.
- SF Symbols have built-in effects. Use them before custom icon animation.
- Respect the system "Reduce Motion" setting and the "Prefer Cross-Fade Transitions" setting.

**Android**
- Follow Material motion: container transforms, shared axis and fade-through patterns for navigation.
- Support predictive back: the outgoing screen previews as the user swipes back. Don't block it with custom back handling unless you also animate the preview.
- Ripples are the default press feedback. Don't replace them with scale bounces.
- The system "Remove animations" setting sets the animator duration scale to 0.

**React Native**
- Run animations on the UI thread (Reanimated worklets). Never animate with `setState` per frame.
- Match each platform's conventions where they differ (iOS sheet motion vs Android predictive back) instead of one compromise.

## Reduced motion

| Platform | Read it | Typical reduced behavior |
|---|---|---|
| SwiftUI | `@Environment(\.accessibilityReduceMotion)` | Swap slides and scales for `.opacity`; skip decorative loops |
| UIKit | `UIAccessibility.isReduceMotionEnabled` + its notification | Same |
| Compose | Animations already honor the system animator duration scale; read `Settings.Global.ANIMATOR_DURATION_SCALE` for custom variants | Swap slides for fades when the scale is 0 |
| React Native | Reanimated `useReducedMotion()`; `ReduceMotion.System` is the default on animations | Spring/timing jump to the end value; provide fades where meaning would be lost |

Reduced motion is a different design, not a deleted one. Keep state changes visible (a fade, a color change) so the user still sees what happened.

## Performance

- Animate transforms (offset, scale, rotation) and opacity. Avoid animating layout-heavy properties every frame where a transform works.
- SwiftUI: keep animated views small; use `.drawingGroup()` only for heavy vector content and measure first.
- Compose: read animated values in the draw or layout phase (`Modifier.graphicsLayer { }`, `Modifier.offset { }` lambda versions) to skip recomposition.
- React Native: keep animation logic in worklets; avoid JS-thread `Animated` without `useNativeDriver: true` on old code.
- Test on a mid-range Android device, not only a flagship or simulator.

## Testing

- **iOS Simulator**: Debug menu > Slow Animations. Toggle Reduce Motion in Settings > Accessibility > Motion.
- **Android**: Developer options > Animator duration scale 5x or 10x to slow everything; set to Off to test "Remove animations".
- **React Native**: use the platform settings above; Reanimated respects them.
- Record the screen and step through frames for motion-review.
