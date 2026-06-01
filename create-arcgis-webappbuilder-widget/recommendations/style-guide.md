# Style Recommendations (ArcGIS WAB 2.30)

## JavaScript and Dojo

- Use AMD modules (`define`) and keep dependency arrays minimal.
- Keep widget methods small and lifecycle-focused.
- Always call `this.inherited(arguments);` in overridden lifecycle methods.
- Use `this.own(on(...))` for event/listener cleanup.
- Keep shared logic in small helpers instead of very large `Widget.js` files.

## Code Decomposition (Avoid Very Large `Widget.js`)

- Keep `Widget.js` as lifecycle orchestration, not business logic storage.
- Move responsibilities into focused modules:
	- Data/service access (`services/LayerService.js`)
	- UI rendering helpers (`ui/ResultRenderer.js`)
	- Domain logic (`core/SelectionState.js`)
- Use a practical threshold: if `Widget.js` grows beyond roughly 250-350 lines or methods no longer fit one screen, split it.
- Prefer pure helpers (input -> output) for testability and reuse.
- Keep side effects near lifecycle methods (`startup`, `onOpen`, `onClose`, `destroy`).

### Example: Split Rendering and Data Fetching Out of `Widget.js`

Too large pattern (hard to maintain):

```js
// Widget.js (anti-pattern shape)
startup: function() {
	this.inherited(arguments);
	this._bindUI();
	this._loadLayers();
},

_loadLayers: function() {
	// request, filtering, mapping, HTML creation, DOM insertion all mixed here
},

_renderResults: function(items) {
	// complex string templates and event wiring inside Widget.js
}
```

Decomposed pattern (clear boundaries):

```js
define([
	'dojo/_base/declare',
	'jimu/BaseWidget',
	'./services/LayerService',
	'./ui/ResultRenderer',
	'dojo/on'
], function(declare, BaseWidget, LayerService, ResultRenderer, on) {
	return declare([BaseWidget], {
		baseClass: 'jimu-widget-mywidget',

		postCreate: function() {
			this.inherited(arguments);
			this.layerService = new LayerService(this.map);
			this.resultRenderer = new ResultRenderer(this.resultsNode, this.nls);
		},

		startup: function() {
			this.inherited(arguments);
			this.own(on(this.runBtn, 'click', this._onRun.bind(this)));
		},

		_onRun: function() {
			this.layerService.fetchVisible()
				.then(this._applyResults.bind(this));
		},

		_applyResults: function(items) {
			if (this.destroyed) {
				return;
			}
			this.resultRenderer.render(items);
		}
	});
});
```

### Example: Small Helper Module

```js
// services/LayerService.js
define([], function() {
	function LayerService(map) {
		this.map = map;
	}

	LayerService.prototype.fetchVisible = function() {
		var layers = (this.map && this.map.graphicsLayerIds) || [];
		return Promise.resolve(layers.filter(function(id) {
			return !!id;
		}));
	};

	return LayerService;
});
```

### Example: Keep Widget Lifecycle Thin

```js
onOpen: function() {
	this.inherited(arguments);
	this.resultRenderer.show();
},

onClose: function() {
	this.inherited(arguments);
	this.resultRenderer.hide();
},

destroy: function() {
	this.layerService = null;
	this.resultRenderer = null;
	this.inherited(arguments);
}
```

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
