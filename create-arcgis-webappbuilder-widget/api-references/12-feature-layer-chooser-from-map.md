# FeatureLayerChooserFromMap (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/featurelayerchooserfrommap.htm

## When to use
- Let users pick one feature layer from current map context.

## Recommendations
- Filter out non-feature layers before presenting choices.
- Persist selected layer ID to widget config.

## Example

```javascript
define(['jimu/dijit/FeatureLayerChooserFromMap'], function(FeatureLayerChooserFromMap) {
  this.layerChooser = new FeatureLayerChooserFromMap({
    map: this.map
  }, this.layerChooserNode);
  this.layerChooser.startup();
});
```
