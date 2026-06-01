# CoordinateControl (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/coordinatecontrol.htm

## When to use
- Providing coordinate input/output controls in setting UIs.

## Recommendations
- Validate input format before applying map operations.
- Keep coordinate display format configurable per project standards.

## Example

```javascript
define(['jimu/dijit/CoordinateControl'], function(CoordinateControl) {
  var cc = new CoordinateControl({ map: this.map });
  cc.placeAt(this.coordinateNode);
  cc.startup();
});
```
