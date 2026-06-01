# 06. Create a new default layout

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-new-default-layout.htm

## Use when

- Defining the baseline layout for a theme.

## Adaptation recommendations

- Create `layouts/default/config.json` first with minimal sections, then add widgets incrementally.
- Register the layout in theme `manifest.json`.
- Keep map and panel positions explicit to avoid overlap with controllers.
- Add `mobileLayout` overrides only after desktop layout is stable.

## Minimal code pattern

```json
{
  "widgetOnScreen": {
    "widgets": [
      {
        "uri": "themes/YourTheme/widgets/HeaderController/Widget",
        "position": { "left": 40, "top": 40, "right": 40, "height": 40, "relativeTo": "browser" }
      }
    ]
  },
  "map": {
    "position": { "left": 0, "top": 0, "right": 0, "bottom": 0 }
  },
  "widgetPool": {
    "panel": { "uri": "themes/YourTheme/panels/FoldablePanel/Panel" },
    "widgets": [
      { "uri": "widgets/BasemapGallery/Widget" },
      { "uri": "widgets/About/Widget" }
    ]
  }
}
```

## Validation checklist

- Default layout appears in theme layout options.
- WidgetOnScreen and widgetPool elements do not overlap unintentionally.
- Panel opens widgets with expected geometry.
- Mobile overrides work without breaking desktop positions.
