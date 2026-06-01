# Filter (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/filter.htm

## When to use
- Build/edit SQL-like filter expressions from a UI control.

## Recommendations
- Validate generated expression before applying.
- Map UI fields to actual layer fields defensively.

## Example

```javascript
define(['jimu/dijit/Filter'], function(Filter) {
  this.filterDijit = new Filter({
    layerInfo: this.layerInfo
  }, this.filterNode);
  this.filterDijit.startup();
});
```
