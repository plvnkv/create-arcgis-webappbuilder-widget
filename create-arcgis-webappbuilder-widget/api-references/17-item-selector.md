# ItemSelector (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/itemselector.htm

## When to use
- Choose portal items (maps, layers, services) in settings workflows.

## Recommendations
- Respect current portal/org context and user permissions.
- Persist selected item ID and title.

## Example

```javascript
define(['jimu/dijit/ItemSelector'], function(ItemSelector) {
  var selector = new ItemSelector({
    portalUrl: this.appConfig.portalUrl
  }, this.itemSelectorNode);
  selector.startup();
});
```
