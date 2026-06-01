# 10. Create a feature action in your widget

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-feature-action-in-your-widget.htm

## Use when

- Executing custom logic from selected feature sets.

## Adaptation recommendations

- Implement a dedicated `<ActionName>FeatureAction.js` extending `jimu/BaseFeatureAction`.
- Keep support checks strict in `isFeatureSupported` to avoid broken action menus.
- Register action in `manifest.json` and localize action label in `nls/strings.js`.
- Provide default/hover icons following naming convention.

## Minimal code pattern

```js
define([
  'dojo/_base/declare',
  'jimu/BaseFeatureAction',
  'jimu/WidgetManager'
], function(declare, BaseFeatureAction, WidgetManager) {
  return declare(BaseFeatureAction, {
    iconFormat: 'png',

    isFeatureSupported: function(featureSet) {
      return featureSet && featureSet.features && featureSet.features.length > 0;
    },

    onExecute: function(featureSet) {
      return WidgetManager.getInstance().triggerWidgetOpen(this.widgetId).then(function(widget) {
        widget.showFeatureCount(featureSet.features.length);
      });
    }
  });
});
```

## Validation checklist

- Action appears in popup/select/query results when feature is supported.
- Action hidden for unsupported geometry types.
- Action icon renders in both normal and hover states.
- Action label is localized correctly.
