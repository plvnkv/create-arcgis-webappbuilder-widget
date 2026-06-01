# LayerInfo

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/layerinfo.htm

## When to use
- Inspect or update capabilities/state of one operational layer.

## Recommendations
- Resolve `LayerInfo` from `LayerInfos` instead of caching stale objects.
- Check support methods before actions that require table/query support.

## Example

```javascript
var info = this.layerInfosObj.getLayerInfoById(layerId);
if (info) {
  info.getSupportTableInfo().then(function(tableInfo) {
    if (tableInfo.isSupportedLayer) {
      // safe to publish to AttributeTable
    }
  });
}
```
