---
name: design-principles
description: Universal UI/UX principles for AI-assisted product design and frontend implementation across web, mobile, tablet, desktop, dashboards, SaaS products, and other digital experiences.
version: 1.0.0
updated: 2026-10-21
scope: Universal design guidance; not a replacement for project-specific requirements or a platform design system.
---

# Universal UI/UX Design Principles

## 1. Purpose

Use this file as the shared foundation for designing, reviewing, or implementing user interfaces and user experiences across projects.

The goal is not to make every product look the same. The goal is to make every product **clear, useful, usable, accessible, coherent, responsive, and appropriate to its users and context**.

Apply these principles to websites, web applications, mobile apps, admin panels, dashboards, SaaS products, and other interactive digital experiences.

This file defines universal principles. It does not prescribe a single visual style, brand, framework, component library, or design system.

## 2. How to use this file

Before starting a design or frontend task:

1. Read the project instructions and understand the requested outcome.
2. Identify the target users, their main goals, the platform, and the context of use.
3. Inspect the existing product, design system, components, and established patterns when available.
4. Apply the relevant principles in this document.
5. Load any project-specific or specialist guidelines required for the task.
6. Implement and verify the complete experience, not just its default visual appearance.

Use the principles as decision-making guidance, not as a checklist to apply mechanically. Choose the solution that best serves the user and the product context, and explain significant trade-offs when useful.

## 3. Authority and conflict resolution

Apply instructions in this order:

1. Explicit task requirements and approved product decisions.
2. The project's existing design system, brand guidelines, architecture, and established interaction patterns.
3. Relevant platform conventions and specialist project guidance.
4. The universal principles in this file.
5. Personal preference or visual trends.

Do not use a universal principle as a reason to silently break an existing project convention or requirement. If two requirements conflict, identify the conflict and choose a safe, consistent resolution; ask a focused question when the decision materially affects the outcome.

When working in an existing project, **preserve and extend before replacing**. Do not introduce a new component, pattern, dependency, or visual language when an established project solution already meets the need. If a new pattern is genuinely necessary, justify it and keep it consistent with the project's system.

## 4. Core principles

### 4.1 Start with the user and the task

- Design around users' goals, needs, abilities, expectations, and real context of use.
- Identify the primary task for each screen or state before deciding on its layout.
- Prioritize the actions and information users need to complete that task.
- Do not assume that the developer's habits or preferences represent all users.
- Avoid requiring accounts, permissions, data, or steps that are not necessary for the user's current task.
- When research or user feedback is available, use it to inform decisions. Do not present assumptions as validated facts.

**Check:** Can a target user understand what the screen is for and how it helps them?

### 4.2 Make the interface clear and understandable

- Use familiar language and meaningful labels.
- Make navigation, actions, content, and status understandable without requiring users to guess.
- Prefer clear text labels over ambiguous icons. Provide accessible names for icon-only controls.
- Use concise content, but do not remove information users need to make a safe or informed decision.
- Explain unfamiliar concepts and provide guidance at the point where it is needed.
- Keep terminology consistent across screens and throughout the user journey.

**Do not:** Use clever wording, vague labels, unexplained icons, or decorative complexity at the expense of comprehension.

### 4.3 Establish a clear visual hierarchy

- Make the most important content and primary action visually distinguishable.
- Use typography, spacing, grouping, alignment, contrast, and emphasis consistently to communicate relationships.
- Make related information look related and unrelated information distinct.
- Give each screen a clear focal point and avoid making every element equally prominent.
- Match information density to the user's task: operational dashboards may need dense information, while focused tasks may need a simpler presentation.
- Use whitespace purposefully; do not add or remove it merely to follow a trend.

**Check:** Can users quickly identify the page purpose, key information, and next useful action?

### 4.4 Keep experiences simple and efficient

- Remove elements that do not support a user goal, necessary context, trust, or product requirements.
- Reduce unnecessary steps, repeated data entry, avoidable decisions, and redundant content.
- Use sensible defaults and preserve user input where safe.
- Break complex tasks into manageable steps when this reduces cognitive load.
- Use progressive disclosure for secondary or advanced options when hiding them does not make important functionality hard to discover.
- Do not confuse simplicity with removing essential capabilities, explanations, or controls.

**Do not:** Add cards, panels, dialogs, animations, onboarding, or confirmation steps without a clear purpose.

### 4.5 Make navigation and information architecture predictable

- Organize content according to users' mental models and tasks.
- Use stable, meaningful names for destinations, sections, tabs, and actions.
- Keep navigation patterns consistent across equivalent areas.
- Make the user's current location and available next steps clear when relevant.
- Ensure breadcrumbs reflect the real hierarchy and navigation model. Do not represent a single-page tab switch as a deeper route unless that matches the actual information architecture.
- Provide clear ways to move forward, go back, cancel, or exit a flow.
- Preserve context when users switch views or return from a detail page, where practical.
- Use established platform navigation patterns unless there is a clear product reason not to.

**Check:** Can users tell where they are, how they arrived there, and how to reach their next destination?

### 4.6 Provide feedback, control, and recovery

- Every meaningful user action should produce a clear and timely response.
- Communicate whether an action succeeded, failed, is processing, or requires more information.
- Prevent accidental data loss and provide undo, cancel, confirmation, or recovery options when appropriate to the risk.
- Make destructive actions distinguishable and explain their consequences.
- Keep users in control of consequential actions; do not trigger unexpected changes or submissions.
- For asynchronous work, show progress or a suitable loading state when waiting is meaningful.
- For errors, explain what happened in useful language and how to recover.
- Do not rely on color, animation, or sound alone to communicate status.

**Check:** After an action, does the user know what happened and what they can do next?

### 4.7 Be consistent without being rigid

- Reuse existing project components, tokens, layouts, and interaction patterns.
- Keep equivalent controls visually and behaviorally consistent.
- Use the project's defined colors, typography, spacing, shapes, elevation, iconography, and terminology.
- Use semantic design tokens when the project supports them; avoid scattered hardcoded values that make consistency difficult.
- Follow platform conventions when they improve familiarity and usability.
- Allow deliberate variation when user needs, content, accessibility, or platform constraints justify it.

Consistency means predictable behavior and coherent visual language, not making every screen identical.

### 4.8 Design for accessibility and inclusion

- Treat accessibility as a core requirement, not a final polish step.
- Support keyboard navigation and visible focus wherever keyboard interaction applies.
- Use semantic structure, meaningful labels, accessible names, and appropriate relationships between form controls and instructions.
- Maintain sufficient text and interface contrast according to the applicable accessibility standard and project requirements.
- Do not communicate meaning through color alone.
- Support text resizing and zoom without clipping essential content or functionality.
- Provide useful validation messages and associate errors with the relevant fields.
- Use descriptive text alternatives for meaningful images; mark purely decorative imagery appropriately.
- Respect reduced-motion preferences when motion is present.
- Consider a range of abilities, languages, literacy levels, devices, and interaction methods.

Do not claim that an interface is fully accessible without appropriate testing.

### 4.9 Design responsive and adaptive experiences

- Consider small and large screens from the beginning of the design process.
- Adapt layout and interaction to available space and input methods rather than simply shrinking or stretching a desktop screen.
- Preserve content priority and core task completion across screen sizes.
- Allow layouts to reflow without horizontal overflow, clipped controls, or unreadable content.
- Use breakpoints based on where the layout or content needs to change, rather than relying only on named device categories.
- Adapt navigation, columns, tables, dialogs, forms, and content density when required.
- Test portrait and landscape orientations where relevant.
- Consider keyboard appearance, safe areas, system UI, notches, and device-specific constraints for native mobile experiences.
- Ensure touch, mouse, keyboard, and other supported input methods work appropriately for the platform.

### 4.10 Apply mobile-specific usability principles

When designing for phones and other touch devices:

- Prioritize the user's most common mobile tasks and the content needed to complete them.
- Use touch targets that meet the applicable platform and accessibility guidance, with enough separation to reduce accidental activation.
- Place frequent actions within comfortable reach when the device and interaction pattern allow it.
- Use suitable input types, mobile keyboards, autofill, and device capabilities to reduce effort when safe and appropriate.
- Keep forms focused; minimize typing and preserve entered data if validation fails.
- Use familiar gestures and provide visible alternatives for important actions. Do not make a critical action available only through an undiscoverable gesture.
- Avoid hover-only interactions.
- Keep text legible and controls usable at realistic device sizes.
- Respect platform conventions for navigation, permissions, system back behavior, and operating-system UI.
- Avoid unnecessary permission requests, sign-in barriers, notifications, and onboarding.
- Account for interruptions, limited attention, variable connectivity, and performance constraints.
- Keep mobile and desktop experiences consistent in identity and meaning while adapting their layout and capabilities to the context.

Do not assume every mobile experience should be a single column or that every desktop pattern should be copied onto mobile. Choose the structure that best supports the task and content.

### 4.11 Make forms and data entry easy to complete

- Ask only for information that is needed for the task or a clearly explained business requirement.
- Group related fields and use clear labels, hints, and examples where useful.
- Preserve entered values after recoverable errors.
- Validate at the right time and explain how to correct invalid input.
- Use appropriate input types, constraints, autocomplete, and input masks only when they help users enter valid data.
- Make required and optional fields clear.
- Explain why sensitive information is needed when that context is not obvious.
- Distinguish saving, submitting, publishing, deleting, and other consequential actions.
- For multi-step forms, show progress and let users review or return to previous steps when appropriate.

### 4.12 Design all important states

Do not design only the ideal, populated, default screen. Identify applicable states, including:

- Initial and default
- Hover, focus, pressed, selected, and expanded
- Disabled and read-only
- Loading and processing
- Empty and no-results
- Validation and error
- Success and completion
- Offline, unavailable, or permission-denied
- Partial data, long content, and boundary cases

Not every component needs every state. Include the states that can realistically occur and that affect understanding, task completion, or recovery. Keep state styling and behavior consistent with the project.

### 4.13 Use visual styling with purpose

- Let the product's users, purpose, brand, content, and existing design system guide the visual direction.
- Use color to support hierarchy, identity, and meaning while maintaining appropriate contrast.
- Use typography that supports readability, hierarchy, and the product's tone.
- Apply spacing, borders, shadows, corner radii, illustrations, and imagery consistently and deliberately.
- Use motion only when it communicates feedback, transition, relationship, or state, and avoid unnecessary distraction.
- Avoid decorative effects that obscure content, reduce readability, harm performance, or conflict with the brand.
- Do not imitate a reference screenshot blindly; understand which parts of the reference solve the relevant design problem.

A visually attractive interface is not successful if users cannot understand it or complete their tasks.

### 4.14 Protect trust, privacy, and user confidence

- Make important consequences, costs, permissions, and data use understandable before users commit.
- Request only the permissions and information needed for a legitimate purpose.
- Do not use misleading visual hierarchy, deceptive defaults, hidden costs, or manipulative interaction patterns.
- Make opt-outs, cancellations, and account or preference controls reasonably findable.
- Be transparent about automated or AI-driven behavior when it affects user expectations or consequential outcomes.
- Provide appropriate user control over automated actions, corrections, and recovery.
- Treat trust, privacy, and clarity as part of the experience rather than separate concerns.

### 4.15 Consider performance and resilience

- Keep interfaces responsive and avoid unnecessary visual or interaction complexity.
- Provide useful loading feedback for operations that take time.
- Design meaningful empty, failure, retry, and offline states where relevant.
- Avoid making essential information or actions dependent on animation or expensive visual effects.
- Consider slower networks, lower-powered devices, and interrupted sessions when relevant.
- Do not present a control as functional if it has no working behavior. If functionality is outside the current scope, identify it clearly rather than simulating success.

### 4.16 Validate decisions and improve through evidence

- Treat design principles as guidance, not a substitute for understanding users.
- Test important flows and high-impact decisions with representative users when feasible.
- Use usability testing, analytics, accessibility checks, and feedback where available and appropriate.
- Distinguish observed evidence from assumptions.
- Fix issues that block comprehension, accessibility, navigation, or task completion before polishing minor details.
- Revisit decisions when user needs, product requirements, or technical constraints change.

Do not claim that a design has been user-tested unless testing actually occurred.

## 5. Universal MUST rules

The AI agent MUST:

- Understand the user goal and required outcome before choosing a design solution.
- Inspect the existing project and its design system before changing an established interface.
- Follow explicit requirements and project conventions.
- Use clear hierarchy, meaningful labels, and predictable interactions.
- Consider responsive behavior and mobile usability where the product supports those contexts.
- Include relevant interaction states, validation, feedback, and recovery.
- Account for accessibility throughout design and implementation.
- Reuse existing components and patterns when they satisfy the requirement.
- Verify that implemented controls perform their intended actions.
- Check the final result against requirements and the quality checklist in this file.
- State important assumptions, limitations, or unresolved decisions rather than inventing facts.

## 6. Universal MUST NOT rules

The AI agent MUST NOT:

- Start with decoration before understanding the user task and content hierarchy.
- Apply one visual style or design system to every project regardless of context.
- replace an existing design system or introduce unnecessary components without justification.
- Invent unsupported requirements, brand rules, user research findings, or functionality.
- Treat responsive design as merely reducing desktop dimensions.
- Make important actions discoverable only through hover, color, or hidden gestures.
- Use color alone to communicate errors, status, or meaning.
- Ignore loading, empty, error, disabled, validation, or success states when applicable.
- Add unnecessary steps, fields, dialogs, cards, animations, or visual effects.
- Sacrifice accessibility, readability, or usability for visual novelty.
- Claim implementation, testing, accessibility, or user validation is complete without evidence.

## 7. Recommended design workflow

Follow this workflow unless the task explicitly limits the scope.

### Step 1 — Understand the context

Identify:

- Product and business goal
- Target users and their primary tasks
- Platform(s), screen sizes, and input methods
- Required content, actions, and navigation
- Brand, design system, existing components, and technical constraints
- Relevant accessibility, privacy, and security considerations
- Known edge cases and important states

Ask a question only when missing information materially changes the design or implementation. Otherwise, make a conservative assumption and state it.

### Step 2 — Define the experience before styling

- Map the key user journey or flow.
- Organize content and navigation around user tasks.
- Identify the primary action and supporting actions.
- Remove unnecessary steps and clarify decision points.
- Define relevant success, error, empty, loading, and recovery paths.

### Step 3 — Establish layout and hierarchy

- Select a layout that suits the content and task.
- Establish content grouping, reading order, emphasis, and action placement.
- Consider responsive and mobile behavior.
- Check whether navigation and page structure accurately represent the product.

### Step 4 — Apply the project's visual system

- Use established design tokens and components.
- Follow the project's typography, color, spacing, shape, icon, and interaction patterns.
- Introduce variation only when it serves a clear need.
- Do not invent a new system when a suitable one already exists.

### Step 5 — Specify behavior and states

- Define what each meaningful control does.
- Cover relevant input, focus, selected, disabled, loading, empty, error, success, and recovery states.
- Make feedback timely and understandable.
- Ensure important actions have real, working behavior.

### Step 6 — Implement responsively and accessibly

- Build for supported screen sizes and input methods.
- Use semantic structure and accessible control names.
- Verify keyboard access, focus, contrast, text scaling, and non-color cues where applicable.
- Follow relevant platform conventions.

### Step 7 — Verify and refine

- Compare the implementation with requirements and existing project patterns.
- Test important flows, controls, validation, and recovery.
- Review small and large layouts and relevant mobile states.
- Fix functional, accessibility, hierarchy, and responsive issues before cosmetic refinements.
- Report genuine limitations or unverified areas.

## 8. Design quality checklist

Score each applicable category before considering the work ready:

- `0` — Missing, incorrect, or unusable
- `1` — Partially addressed; needs improvement
- `2` — Adequately addressed and verified for the current scope
- `N/A` — Not applicable; include a brief reason when it may not be obvious

| Category | Review question |
|---|---|
| User goal | Is the main user task understood and supported? |
| Clarity | Are labels, content, and actions understandable? |
| Hierarchy | Can users identify what matters most? |
| Simplicity | Have unnecessary steps and distractions been removed? |
| Navigation | Is the information architecture predictable and accurate? |
| Feedback | Do actions provide clear results and recovery paths? |
| Consistency | Does the solution follow the project's existing system? |
| Responsive behavior | Does the interface adapt to supported viewport sizes? |
| Mobile usability | Are touch, typing, reach, and mobile navigation considered where relevant? |
| Accessibility | Are semantics, keyboard access, focus, contrast, scaling, and non-color cues addressed? |
| States | Are relevant loading, empty, error, validation, success, and disabled states covered? |
| Functionality | Do controls perform their intended actions? |
| Trust and privacy | Are consequential actions and information requests transparent? |
| Performance | Is the experience reasonably responsive and resilient for the context? |
| Verification | Has the result been checked against the actual requirements? |

A score of `0` for user goal, clarity, navigation, functionality, or an applicable accessibility requirement means the work is **not ready**. Fix the issue or clearly document why it cannot be resolved within the current scope. Do not inflate scores to make the result appear complete.

## 9. How to adapt these principles

These principles are universal, but their application depends on the product.

- **Mobile apps:** prioritize touch usability, focused tasks, platform navigation, interruptions, and device constraints.
- **Responsive websites:** preserve content priority while adapting layouts, navigation, and controls to available space.
- **Admin panels and dashboards:** support efficient workflows, information density, scanning, filtering, data accuracy, and clear system feedback.
- **E-commerce:** clarify product information, pricing, availability, checkout steps, trust signals, and transaction outcomes.
- **Content-focused products:** prioritize reading order, typography, discoverability, accessibility, and clear content structure.
- **AI-enabled products:** communicate uncertainty and automation appropriately, preserve user control, and make correction and recovery possible.

These are examples, not exhaustive categories. Determine which considerations matter for the actual project.

## 10. Relationship to other project instructions

This file provides the universal foundation only.

When additional instruction files exist, use them for their specific purpose, such as:

- Project discovery and requirements
- UX research and user flows
- Visual design and design systems
- Responsive and mobile implementation
- Accessibility
- Frontend architecture and implementation
- Interaction behavior and state management
- Testing and design-quality review

Read only the specialist guidance relevant to the task, along with mandatory project instructions. Avoid duplicating the full content of this file in every specialist document. Specialist files should explain their own scope and link back to this file for universal principles.

## 11. Reference sources

The following articles informed this document. They are secondary reference material, not rigid standards. Apply their ideas critically and in context; use applicable official platform and accessibility guidance for implementation-specific requirements.

1. GeeksforGeeks — [Principles of UI/UX Design](https://www.geeksforgeeks.org/techtips/principles-of-ui-ux-design/)
   - Reference themes: simplicity, user-centred design, visibility, consistency, feedback, clarity, accessibility, efficiency, and delight.

2. UX Design Institute — [7 Fundamental UX Design Principles in 2026](https://www.uxdesigninstitute.com/blog/ux-design-principles-2026/)
   - Reference themes: foundational UX principles adapted to context, user control, hierarchy, consistency, accessibility, and emerging AI or multimodal experiences.

3. Lyssna — [UI Design Principles](https://www.lyssna.com/blog/ui-design-principles/)
   - Reference themes: clear visual hierarchy, simplicity, predictable interactions, and validating design decisions with user feedback.

4. Toptal — [Mobile UX Design Principles](https://www.toptal.com/designers/ui/mobile-ux-design-principles)
   - Reference themes: user goals, intuitive navigation, cross-device consistency, reducing effort, onboarding appropriate to complexity, personalization with restraint, and familiar gestures.

Use current official platform documentation and applicable accessibility standards for exact technical requirements, platform-specific conventions, and required measurements. Do not assume that any single article covers every product or platform.

## Final principle

**Design for people first, use the project's system, adapt to context, make behavior clear, include everyone, and verify the experience.**

A successful interface is not merely visually appealing. It helps the intended user understand the product, complete the right task, recover from problems, and remain confident across the supported devices and states.
