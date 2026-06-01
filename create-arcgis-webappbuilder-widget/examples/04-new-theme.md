# 04. Create a new theme

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-new-theme.htm

## Use when

- Building a reusable branded theme with custom layout, widgets, and panel behavior.

## Adaptation recommendations

- Start by cloning an existing theme and immediately rename `manifest.json` name/label.
- Build theme in layers: controller widget, layout widget, default layout, panel, style.
- Keep all URIs consistent with theme folder name.
- For 3D support, mirror theme structure in `stemapp3d/themes` when required.

## Minimal code pattern

```json
{
  "name": "NewTheme",
  "label": "New Theme",
  "layouts": [
    { "name": "default", "description": "Main layout" }
  ],
  "panels": [
    { "name": "SimpleBorderPanel", "description": "Default panel" }
  ]
}
```

## Validation checklist

- Theme appears in Builder theme picker.
- Default layout loads with correct widget positions.
- Theme widgets resolve without 404 URI errors.
- Theme can host widget pool panels and groups.
