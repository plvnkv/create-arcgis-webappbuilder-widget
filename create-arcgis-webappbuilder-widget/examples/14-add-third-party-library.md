# 14. Add a third-party library

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/add-a-third-party-library.htm

## Use when

- You need external utility libraries not included in WAB.

## Adaptation recommendations

- Choose loading strategy by scope:
  - Global non-AMD: load via app resources (shared startup load).
  - Shared AMD module: add in app `libs` and include in dependency graph.
  - Widget-only AMD module: place in widget folder and import only there.
- Document chosen strategy in widget README to prevent duplicate loading.
- Validate CSP/network policy if library is remote.

## Minimal code pattern

```js
define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  './libs/mylib'
], function(declare, BaseWidget, mylib) {
  return declare([BaseWidget], {
    baseClass: 'jimu-widget-mywidget',
    startup: function() {
      this.inherited(arguments);
      mylib.init();
    }
  });
});
```

## Validation checklist

- Library loads exactly once in runtime.
- AMD path resolves in both builder and deployed app.
- No conflict with ArcGIS API/Dojo versions.
- Offline deployment behavior is tested.
