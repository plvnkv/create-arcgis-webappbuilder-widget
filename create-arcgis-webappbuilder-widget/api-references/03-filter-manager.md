# FilterManager

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/filtermanager.htm

## When to use
- Apply, update, and clear layer filters from custom widgets.

## Recommendations
- Keep one source of truth for active filter expressions.
- Clear filter on widget close if your flow is temporary.

## Example

```javascript
var fm = FilterManager.getInstance();
fm.applyWidgetFilter(this.id, layerId, "POPULATION > 10000");

// Later
fm.clearWidgetFilter(this.id, layerId);
```
