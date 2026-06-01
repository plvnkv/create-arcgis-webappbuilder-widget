# LayerNode

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/layernode.htm

## When to use
- Work with nodes in a hierarchical layer tree UI.

## Recommendations
- Treat node relationships as dynamic; do not assume fixed parent/child order.
- Keep UI updates derived from node state, not hardcoded IDs.

## Example

```javascript
var rootNodes = this.layerStructure.getRootNodes();
rootNodes.forEach(function(node) {
  if (node.layerInfo && node.layerInfo.isShowInMap()) {
    // render visible root layer node
  }
});
```
