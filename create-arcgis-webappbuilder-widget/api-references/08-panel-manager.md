# PanelManager

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/panelmanager.htm

## When to use
- Programmatically close/open in-panel widgets and manage panel lifecycle.

## Recommendations
- Use panel IDs derived from widget ID conventions.
- Centralize panel close behavior in helper methods.

## Example

```javascript
var panelManager = PanelManager.getInstance();
panelManager.closePanel(widgetId + '_panel');
```
