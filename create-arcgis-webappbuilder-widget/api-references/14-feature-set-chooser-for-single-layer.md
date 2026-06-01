# FeatureSetChooserForSingleLayer (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/featuresetchooserforsinglelayer.htm

## When to use
- Let users choose a subset of features from one layer.

## Recommendations
- Limit max selectable features for performance.
- Use clear empty-state feedback when selection is empty.

## Example

```javascript
define(['jimu/dijit/FeatureSetChooserForSingleLayer'], function(FeatureSetChooserForSingleLayer) {
  var chooser = new FeatureSetChooserForSingleLayer({
    map: this.map,
    layer: this.featureLayer
  }, this.featureSetNode);
  chooser.startup();
});
```
