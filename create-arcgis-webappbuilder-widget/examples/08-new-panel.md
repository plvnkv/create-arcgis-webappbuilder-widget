# 08. Create a new panel

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-new-panel.htm

## Use when

- Creating custom panel chrome (modal, overlay, custom title bar).

## Adaptation recommendations

- Extend `jimu/BaseWidgetPanel` and use `_TemplatedMixin` for panel HTML.
- Implement predictable defaults via `DEFAULT_POSITION` and `_setPosition`.
- Use `onOpen` and `onClose` to manage overlay lifecycle.
- Keep panel styles isolated under panel root class.

## Minimal code pattern

```js
define([
  'dojo/_base/declare',
  'jimu/BaseWidgetPanel',
  'dijit/_TemplatedMixin',
  'dojo/text!./Panel.html'
], function(declare, BaseWidgetPanel, _TemplatedMixin, template) {
  return declare([BaseWidgetPanel, _TemplatedMixin], {
    templateString: template,
    baseClass: 'jimu-panel jimu-modal-panel',

    DEFAULT_POSITION: { width: 450, height: 400 },

    startup: function() {
      this.inherited(arguments);
      this._setPosition();
    },

    _setPosition: function() {
      var p = this.config && this.config.panel && this.config.panel.position;
      if (!p) { return; }
    }
  });
});
```

## Validation checklist

- Panel can be registered and opened from widgetPool.
- Default center positioning works without explicit config.
- Overlay is shown/hidden correctly on open/close.
- Content area remains scrollable with long widget content.
