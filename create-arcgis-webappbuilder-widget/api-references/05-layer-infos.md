# LayerInfos

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/layerinfos.htm

## When to use
- Enumerate operational layers and track layer add/remove changes.

## Recommendations
- Initialize once in `startup` and keep handle with `this.own(...)`.
- Use `layerInfosChanged` for dynamic layers.

## Example

```javascript
LayerInfos.getInstance(this.map, this.map.itemInfo)
  .then(lang.hitch(this, function(layerInfosObj) {
    this.layerInfosObj = layerInfosObj;
    this.own(layerInfosObj.on('layerInfosChanged',
      lang.hitch(this, this._onLayerInfosChanged)));
  }));
```
