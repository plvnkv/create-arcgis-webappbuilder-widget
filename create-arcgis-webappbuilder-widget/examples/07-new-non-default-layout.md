# 07. Create a new nondefault layout

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-new-non-default-layout.htm

## Use when

- You need an alternate position profile for the same theme (for example, bottom controller).

## Adaptation recommendations

- Copy from default layout and strip to position-only overrides.
- Keep object order in `widgetOnScreen.widgets` synchronized with default layout.
- Override panel positions in `widgetPool.panel` and `widgetPool.groups[].panel` to avoid collisions.
- Treat this as a positional delta, not a full app config.

## Minimal code pattern

```json
{
  "widgetOnScreen": {
    "widgets": [
      { "position": { "left": 20, "bottom": 20, "right": 20, "height": 40 } },
      { "position": { "bottom": 70, "left": 20 } },
      { "position": { "left": 20, "bottom": 140 } }
    ]
  },
  "widgetPool": {
    "panel": { "position": { "top": 10, "right": 20, "bottom": 70, "width": 300 } },
    "groups": [
      { "panel": { "position": { "bottom": 70, "right": 20, "width": 200, "height": 200 } } }
    ]
  }
}
```

## Validation checklist

- Alternate layout is selectable in Builder.
- Controller and panels no longer overlap after reposition.
- Placeholder widgets preserve expected order/identity.
- Switching between layouts does not break widget pool behavior.
