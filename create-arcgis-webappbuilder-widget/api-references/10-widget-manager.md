# WidgetManager

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/widgetmanager.htm

## When to use
- Open/close widgets programmatically and coordinate widget state.

## Recommendations
- Use `triggerWidgetOpen` for lazy-loaded widgets.
- Use `closeWidget` for off-panel widgets and implement `onClose` cleanup.

## Example

```javascript
WidgetManager.getInstance().triggerWidgetOpen(widgetId)
  .then(function(widget) {
    if (widget && widget.setData) {
      widget.setData(payload);
    }
  });
```
