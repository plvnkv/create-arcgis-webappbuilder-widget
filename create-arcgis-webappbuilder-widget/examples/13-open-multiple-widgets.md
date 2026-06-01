# 13. Open multiple widgets simultaneously

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/open-multiple-widgets-simultaneously.htm

## Use when

- Product requires multiple widget panels visible at once.

## Adaptation recommendations

- Prefer themes/controllers that allow multi-open behavior (Dart/Launchpad patterns).
- Avoid default controller auto-close behavior when multi-open is required.
- Consider moving critical widgets to `widgetOnScreen` or off-panel mode.
- Group widgets intentionally and assign dedicated panel behavior.

## Minimal code pattern

```json
{
  "widgetOnScreen": {
    "widgets": [
      { "uri": "widgets/ZoomSlider/Widget", "position": { "left": 20, "top": 70 } },
      { "uri": "widgets/MyLocation/Widget", "position": { "left": 20, "top": 140 } }
    ]
  },
  "widgetPool": {
    "groups": [
      {
        "panel": { "uri": "themes/YourTheme/panels/SimpleBorderPanel/Panel" },
        "widgets": [
          { "uri": "widgets/About/Widget" },
          { "uri": "widgets/Legend/Widget" }
        ]
      }
    ]
  }
}
```

## Validation checklist

- Opening one widget does not auto-close required companion widgets.
- Group panel behavior matches UX expectations.
- Z-index and panel geometry remain usable with multiple open widgets.
- Mobile layout is still usable when several widgets are visible.
