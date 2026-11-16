# Jetpack Compose motion patterns

Check the Compose BOM version in `build.gradle` first. Shared elements need Compose 1.7+, and some parameter names changed between versions; confirm signatures against the installed version.

## Tokens

```kotlin
object Motion {
    val EaseEnter = CubicBezierEasing(0.22f, 1f, 0.36f, 1f)
    val EaseMove = CubicBezierEasing(0.25f, 1f, 0.5f, 1f)
    const val Fast = 150
    const val Base = 220
    const val Moderate = 300
    fun <T> snappy() = spring<T>(dampingRatio = 1f, stiffness = 632f)   // ~0.25s
    fun <T> smooth() = spring<T>(dampingRatio = 1f, stiffness = 247f)   // ~0.4s
    fun <T> bouncy() = spring<T>(dampingRatio = 0.8f, stiffness = 158f) // ~0.5s, light bounce
}
```

If the app uses Material 3 Expressive, `MaterialTheme` accepts a `motionScheme` (standard or expressive) that Material components read. Align custom motion with it instead of adding a parallel set.

## Value changes

```kotlin
val scale by animateFloatAsState(
    targetValue = if (pressed) 0.97f else 1f,
    animationSpec = Motion.snappy(),
    label = "pressScale",
)
Box(Modifier.graphicsLayer { scaleX = scale; scaleY = scale })
```

Read animated values inside `graphicsLayer { }` or lambda modifiers (`Modifier.offset { }`) so changes skip recomposition.

## Show and hide

```kotlin
AnimatedVisibility(
    visible = showBanner,
    enter = fadeIn(tween(Motion.Base, easing = Motion.EaseEnter)) +
            slideInVertically(tween(Motion.Base, easing = Motion.EaseEnter)) { -it / 4 },
    exit = fadeOut(tween(Motion.Fast)),
) { Banner() }
```

## Content swap

```kotlin
AnimatedContent(
    targetState = count,
    transitionSpec = {
        (slideInVertically { it } + fadeIn()) togetherWith (slideOutVertically { -it } + fadeOut())
    },
    label = "counter",
) { value -> Text("$value") }
```

## Size and lists

```kotlin
Column(Modifier.animateContentSize(Motion.smooth())) { /* expanding content */ }

LazyColumn {
    items(items, key = { it.id }) { item ->
        Row(Modifier.animateItem()) { /* ... */ }   // insert, remove, reorder
    }
}
```

Stable `key`s are required for item animation.

## Shared elements

```kotlin
SharedTransitionLayout {
    AnimatedContent(targetState = selected, label = "detail") { target ->
        if (target == null) {
            Thumb(
                Modifier.sharedElement(
                    rememberSharedContentState(key = "image-${item.id}"),
                    animatedVisibilityScope = this@AnimatedContent,
                )
            )
        } else {
            Detail(
                Modifier.sharedElement(
                    rememberSharedContentState(key = "image-${target.id}"),
                    animatedVisibilityScope = this@AnimatedContent,
                )
            )
        }
    }
}
```

Use `sharedBounds` for containers whose content changes, and `sharedElement` for the same visual (an image) in both places. With Navigation Compose, pass the `AnimatedVisibilityScope` from each `composable { }` destination.

## Sequences

```kotlin
val y = remember { Animatable(0f) }
LaunchedEffect(celebrateCount) {
    y.animateTo(8f, tween(80))                 // anticipation
    y.animateTo(-24f, tween(200, easing = Motion.EaseEnter))
    y.animateTo(0f, Motion.bouncy())
}
```

For several properties driven by one state, use `updateTransition(targetState)` and `animateFloat`/`animateDp` on it.

## Gestures

```kotlin
val offsetX = remember { Animatable(0f) }
val scope = rememberCoroutineScope()
Modifier
    .offset { IntOffset(offsetX.value.roundToInt(), 0) }
    .draggable(
        state = rememberDraggableState { delta -> scope.launch { offsetX.snapTo(offsetX.value + delta) } },
        orientation = Orientation.Horizontal,
        onDragStopped = { velocity -> offsetX.animateTo(0f, Motion.smooth(), initialVelocity = velocity) },
    )
```

## Predictive back

Enable it in the manifest (`android:enableOnBackInvokedCallback="true"`, default on newer target SDKs). Navigation Compose animates the back preview automatically. For custom surfaces (sheets, drawers), use `PredictiveBackHandler` and drive the surface's offset and scale from the gesture progress.

## Reduced motion

Compose animations already honor the system animator duration scale, so "Remove animations" ends them immediately. For a deliberate alternative (fade instead of slide), read the scale:

```kotlin
val context = LocalContext.current
val reduceMotion = remember {
    Settings.Global.getFloat(context.contentResolver, Settings.Global.ANIMATOR_DURATION_SCALE, 1f) == 0f
}
```
