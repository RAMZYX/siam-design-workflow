# React Native motion patterns

Use `react-native-reanimated` and `react-native-gesture-handler`. Check the installed major version in `package.json`: Reanimated 4 requires the New Architecture and changed some config shapes.

## Tokens

```ts
import { Easing } from "react-native-reanimated";

export const duration = { fast: 150, base: 220, moderate: 300, slow: 400 };
export const ease = {
  enter: Easing.bezier(0.22, 1, 0.36, 1),
  move: Easing.bezier(0.25, 1, 0.5, 1),
};
export const spring = {
  snappy: { duration: 250, dampingRatio: 1 },
  smooth: { duration: 400, dampingRatio: 1 },
  bouncy: { duration: 500, dampingRatio: 0.8 },
};
```

In Reanimated 4, a spring config is either duration-based (`duration`, `dampingRatio`) or physics-based (`stiffness`, `damping`), never both. Check the feel on device: duration semantics differ slightly between versions.

## Value changes

```tsx
const scale = useSharedValue(1);
const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

const onPressIn = () => { scale.value = withSpring(0.97, spring.snappy); };
const onPressOut = () => { scale.value = withSpring(1, spring.snappy); };

<Animated.View style={style} />
```

## Show, hide and layout

```tsx
import Animated, { FadeIn, FadeOut, SlideInUp, LinearTransition } from "react-native-reanimated";

{showBanner && (
  <Animated.View
    entering={SlideInUp.duration(duration.base).easing(ease.enter)}
    exiting={FadeOut.duration(duration.fast)}
  />
)}

<Animated.View layout={LinearTransition.springify()}>{/* list item */}</Animated.View>
```

Reanimated 4 also supports CSS-style `transitionProperty` / `transitionDuration` and `animationName` keyframes on Animated components, for simple state-driven transitions.

## Sequences

```ts
y.value = withSequence(
  withTiming(8, { duration: 80 }),                                    // anticipation
  withTiming(-24, { duration: 200, easing: ease.enter }),
  withSpring(0, spring.bouncy),
);
```

## Gestures

Use the `Gesture` API with `GestureDetector`. If the project still uses `useAnimatedGestureHandler` with `PanGestureHandler`, migrate it: it's deprecated in Reanimated 3 and removed in Reanimated 4. While migrating, check for `runOnJS(setState)` inside the per-frame update callback; it sends a call to the JS thread every frame and causes stutter. Move it to `onStart` or `onEnd`.

```tsx
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const x = useSharedValue(0);
const pan = Gesture.Pan()
  .onUpdate((e) => { x.value = e.translationX; })                     // locked to the finger
  .onEnd((e) => {
    const dismiss = Math.abs(e.translationX) > 120 || Math.abs(e.velocityX) > 800;
    x.value = dismiss
      ? withTiming(Math.sign(e.translationX) * 500, { duration: duration.fast })
      : withSpring(0, { ...spring.smooth, velocity: e.velocityX });
  });

<GestureDetector gesture={pan}><Animated.View style={useAnimatedStyle(() => ({ transform: [{ translateX: x.value }] }))} /></GestureDetector>
```

## Shared elements

Reanimated's `sharedTransitionTag` works with native-stack navigation but has been marked experimental. Check its status for the installed version; for production, a manual transition (measure the source, animate an overlay to the destination) is more predictable.

## Older `Animated` code

Projects often mix Reanimated with React Native's built-in `Animated`. `Animated` animations don't follow the OS reduced-motion setting on their own; check `AccessibilityInfo.isReduceMotionEnabled()` there, use `useNativeDriver: true`, or migrate the file to Reanimated when you touch it.

## Reduced motion

```ts
import { useReducedMotion, ReduceMotion } from "react-native-reanimated";

const reduceMotion = useReducedMotion();
// Animations default to ReduceMotion.System: they jump to the end value when the OS setting is on.
// Where the jump would hide meaning, provide a fade instead:
entering={reduceMotion ? FadeIn.duration(150) : SlideInUp.duration(duration.base)}
```

## Expo

In Expo projects the same libraries apply. Use `expo-haptics` for haptic feedback paired with motion (see haptics-sound).
