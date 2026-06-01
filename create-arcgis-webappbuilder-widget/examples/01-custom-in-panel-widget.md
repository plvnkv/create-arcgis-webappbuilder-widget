# 01. Create a custom in-panel widget

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-custom-in-panel-widget.htm

## Use when

- Creating a first in-panel custom widget.
- You need manifest, HTML, CSS, and config wiring.

## Adaptation recommendations

- Start from this skill's `templates/` folder instead of a random Demo copy.
- Keep `baseClass` as `.jimu-widget-<widgetname>` and scope all CSS to it.
- Move all visible strings to `nls/strings.js` and add `nls/uk/strings.js` when Ukrainian is required.
- Keep config in `config.json`; do not hardcode UI text in `Widget.html`.

## Minimal code pattern

```js
// Widget.js
define(['dojo/_base/declare', 'jimu/BaseWidget'], function(declare, BaseWidget) {
  return declare([BaseWidget], {
    baseClass: 'jimu-widget-mywidget',

    startup: function() {
      this.inherited(arguments);
      if (this.mapIdNode && this.map) {
        this.mapIdNode.innerHTML = 'map id: ' + this.map.id;
      }
    }
  });
});
```

```html
<!-- Widget.html -->
<div>
  <div>${nls.label1}</div>
  <div>${nls.label2}[${config.configText}]</div>
  <div data-dojo-attach-point="mapIdNode"></div>
</div>
```

## Validation checklist

- Widget appears in Builder widget list.
- Config values from `config.json` render in UI.
- CSS affects only this widget.
- No hardcoded user-facing strings in JS/HTML.
