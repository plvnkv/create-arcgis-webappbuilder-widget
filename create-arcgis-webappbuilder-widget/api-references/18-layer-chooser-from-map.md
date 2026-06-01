# LayerChooserFromMap (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/layerchooserfrommap.htm

## When to use
- Select map layers in settings for downstream processing.

## Recommendations
- Use include/exclude rules by layer type.
- Handle map reload where available layers change.

## Example

```javascript
define(['jimu/dijit/LayerChooserFromMap'], function(LayerChooserFromMap) {
  var chooser = new LayerChooserFromMap({
    map: this.map
  }, this.layerChooserNode);
  chooser.startup();
});
```
