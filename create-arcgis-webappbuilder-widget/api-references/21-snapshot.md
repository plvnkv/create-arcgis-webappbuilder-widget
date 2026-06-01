# Snapshot (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/snapshot.htm

## When to use
- Configure snapshot date/time behavior for temporal datasets.

## Recommendations
- Keep timezone explicit in UI and persistence.
- Validate against layer time extent.

## Example

```javascript
define(['jimu/dijit/Snapshot'], function(Snapshot) {
  var snap = new Snapshot({}, this.snapshotNode);
  snap.startup();
});
```
