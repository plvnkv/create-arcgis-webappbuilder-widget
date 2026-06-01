# 12. Close widget programmatically

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/close-widget-programmatically.htm

## Use when

- Closing a widget after completion of an action.
- Enforcing one-step workflows where widget should auto-dismiss.

## Adaptation recommendations

- For in-panel widgets, close panel via `PanelManager` and `widgetId + '_panel'`.
- For off-panel widgets, close via `WidgetManager.closeWidget(widgetId)`.
- Put cleanup logic in `onClose` to release transient resources.
- Do not close widget before async save/submit confirms success.

## Minimal code pattern

```js
define(['jimu/PanelManager', 'jimu/WidgetManager'], function(PanelManager, WidgetManager) {
  return {
    closeInPanel: function(widgetId) {
      PanelManager.getInstance().closePanel(widgetId + '_panel');
    },

    closeOffPanel: function(widgetId) {
      WidgetManager.getInstance().closeWidget(widgetId);
    }
  };
});
```

## Validation checklist

- Correct close strategy is used for widget type.
- `onClose` executes and clears temporary state.
- No console errors on repeated open/close cycles.
- User does not lose unsaved data unexpectedly.
