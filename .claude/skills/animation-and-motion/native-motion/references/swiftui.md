# SwiftUI and UIKit motion patterns

Check the deployment target first. Several APIs below need iOS 17 or iOS 18; wrap them in `if #available` when the app supports older versions.

## Tokens

```swift
enum Motion {
    static let snappy = Animation.spring(duration: 0.25, bounce: 0)     // iOS 17+
    static let smooth = Animation.spring(duration: 0.4, bounce: 0)
    static let bouncy = Animation.spring(duration: 0.5, bounce: 0.2)
    static let enter = Animation.timingCurve(0.22, 1, 0.36, 1, duration: 0.22)
}
```

iOS 17 also ships presets `.snappy`, `.smooth` and `.bouncy`. Prefer the project's own tokens so values match motion-system.

## Value changes

```swift
Button("Like") {
    withAnimation(Motion.snappy) { isLiked.toggle() }
}

Circle()
    .scaleEffect(isActive ? 1 : 0.95)
    .animation(Motion.smooth, value: isActive)   // scoped to one value
```

Always pass `value:` to `.animation`. The value-less version animates everything and is deprecated.

## Show and hide

```swift
if showBanner {
    BannerView()
        .transition(.asymmetric(
            insertion: .move(edge: .top).combined(with: .opacity),
            removal: .opacity))
}
// Toggle inside withAnimation { showBanner = true }
```

Exits are shorter and simpler than entrances.

## Content swap and numbers

```swift
Text(score, format: .number)
    .contentTransition(.numericText(value: Double(score)))  // iOS 17+
// change score inside withAnimation

Image(systemName: isMuted ? "speaker.slash" : "speaker.wave.2")
    .contentTransition(.symbolEffect(.replace))

Image(systemName: "bell")
    .symbolEffect(.bounce, value: notificationCount)
```

## Shared elements

Within one view hierarchy:

```swift
@Namespace private var ns

if isExpanded {
    CardDetail().matchedGeometryEffect(id: card.id, in: ns)
} else {
    CardThumb().matchedGeometryEffect(id: card.id, in: ns)
}
```

Navigation zoom (iOS 18+):

```swift
NavigationLink(value: item) {
    Thumb(item).matchedTransitionSource(id: item.id, in: ns)
}
// destination:
Detail(item).navigationTransition(.zoom(sourceID: item.id, in: ns))
```

## Sequences

```swift
// Phases: each phase animates to the next
Image(systemName: "heart.fill")
    .phaseAnimator([1.0, 1.25, 1.0], trigger: likeCount) { view, scale in
        view.scaleEffect(scale)
    } animation: { _ in Motion.snappy }

// Keyframes: independent tracks
struct Pop { var scale = 1.0; var y = 0.0 }
Mascot()
    .keyframeAnimator(initialValue: Pop(), trigger: celebrateCount) { view, v in
        view.scaleEffect(v.scale).offset(y: v.y)
    } keyframes: { _ in
        KeyframeTrack(\.scale) {
            SpringKeyframe(0.9, duration: 0.1)      // anticipation
            SpringKeyframe(1.15, duration: 0.2)
            SpringKeyframe(1.0, duration: 0.3)
        }
        KeyframeTrack(\.y) {
            CubicKeyframe(-24, duration: 0.25)
            SpringKeyframe(0, duration: 0.35)
        }
    }
```

## Gestures

```swift
@State private var offset: CGSize = .zero

Card()
    .offset(offset)
    .gesture(DragGesture()
        .onChanged { offset = $0.translation }               // locked to the finger, no animation
        .onEnded { value in
            withAnimation(Motion.smooth) { offset = .zero }  // springs keep the gesture's momentum
        })
```

For dismiss-on-throw, check `value.predictedEndTranslation` to decide whether to dismiss.

## Reduced motion

```swift
@Environment(\.accessibilityReduceMotion) private var reduceMotion

.transition(reduceMotion ? .opacity : .move(edge: .bottom).combined(with: .opacity))
```

Skip decorative `phaseAnimator`/`keyframeAnimator` loops entirely when `reduceMotion` is true.

## UIKit

```swift
UIView.animate(springDuration: 0.4, bounce: 0) {      // iOS 17+
    self.panel.transform = .identity
}

// Interruptible, scrubbable
let animator = UIViewPropertyAnimator(duration: 0.4, dampingRatio: 1) {
    self.sheet.frame.origin.y = targetY
}
animator.startAnimation()
```

Use `UIViewPropertyAnimator` when the user can grab or reverse the animation mid-flight. Check `UIAccessibility.isReduceMotionEnabled`.
