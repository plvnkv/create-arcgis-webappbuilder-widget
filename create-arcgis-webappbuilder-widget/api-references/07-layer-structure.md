# LayerStructure

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/layerstructure.htm

## When to use
- Build tree-based layer explorers and layer-selection UIs.

## Recommendations
- Build layer tree once and refresh only changed branches.
- Couple structure usage with `LayerInfos` events for sync.

## Example

```javascript
LayerStructure.getInstance().then(lang.hitch(this, function(structure) {
  this.layerStructure = structure;
  var nodes = structure.getRootNodes();
  this._renderLayerTree(nodes);
}));
```
