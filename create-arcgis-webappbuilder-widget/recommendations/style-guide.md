# Style Recommendations (ArcGIS WAB 2.30)

## JavaScript and Dojo

- Use AMD modules (`define`) and keep dependency arrays minimal.
- Keep widget methods small and lifecycle-focused.
- Always call `this.inherited(arguments);` in overridden lifecycle methods.
- Use `this.own(on(...))` for event/listener cleanup.
- Keep shared logic in small helpers instead of very large `Widget.js` files.

## Naming

- `baseClass` should follow `.jimu-widget-<widgetname>`.
- Use `camelCase` for methods/variables and readable attach-point names.
- Keep localization keys short and semantic (for example `runAction`, `noResults`).

## CSS

- Scope selectors by widget root class to avoid cross-widget leakage.
- Avoid global tag selectors (`button`, `div`, `input`) without widget scope.
- Respect built-in theme spacing and typography unless there is a strong UX reason.

## Accessibility

- Add `role`, `aria-label`, and keyboard support for custom controls.
- Keep visible focus styles.
- Use meaningful alt text for images and icon-only buttons.

## Safety and Stability

- Do not inject unsanitized HTML into the DOM.
- Guard asynchronous callbacks so they do not update destroyed widgets.
- Keep manifest flags and real files synchronized.
