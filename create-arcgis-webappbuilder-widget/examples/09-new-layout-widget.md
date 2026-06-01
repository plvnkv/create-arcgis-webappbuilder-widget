# 09. Create a new layout widget

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-new-layout-widget.htm

## Use when

- Creating theme-level widgets such as headers or side chrome.

## Adaptation recommendations

- Mark widget as off-panel and theme widget in `manifest.json`.
- Add widget under `themes/<ThemeName>/widgets/<WidgetName>` and place from layout config.
- Consume `this.appConfig` for logo/title/link branding.
- Handle `onAppConfigChanged` for live Builder preview updates.

## Minimal code pattern

```json
{
  "properties": {
    "inPanel": false,
    "isThemeWidget": true
  }
}
```

```js
onAppConfigChanged: function(appConfig, reason, changedData) {
  if (reason === 'attributeChange') {
    if ('title' in changedData) {
      this.titleNode.innerHTML = changedData.title;
    }
  }
  this.appConfig = appConfig;
}
```

## Validation checklist

- Layout widget appears when theme layout loads.
- Map position leaves room for the widget area.
- Live title/logo updates reflect in preview mode.
- Links are sanitized and rendered consistently.
