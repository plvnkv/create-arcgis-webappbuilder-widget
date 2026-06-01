# RendererChooser (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/rendererchooser.htm

## When to use
- Let users configure symbol renderer rules for visualization.

## Recommendations
- Keep defaults simple (single symbol) before advanced renderers.
- Validate renderer against target geometry type.

## Example

```javascript
define(['jimu/dijit/RendererChooser'], function(RendererChooser) {
  var rc = new RendererChooser({
    layerInfo: this.layerInfo
  }, this.rendererNode);
  rc.startup();
});
```
