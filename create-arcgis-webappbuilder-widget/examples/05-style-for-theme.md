# 05. Create a new style for a theme

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-style-for-a-theme.htm

## Use when

- You need visual branding variants inside one theme.

## Adaptation recommendations

- Create style folder under `themes/<ThemeName>/styles/<StyleName>` with a single entry `style.css`.
- Register style in theme `manifest.json` with `name`, `description`, and `styleColor`.
- Prefer widget-scoped selectors for high-impact changes; avoid broad global resets.
- If importing fonts, ensure offline/network policy compatibility.

## Minimal code pattern

```json
{
  "name": "myStyle",
  "description": "high contrast style",
  "styleColor": "#323232"
}
```

```css
@import url(//fonts.googleapis.com/css?family=Open+Sans);

.jimu-main-font {
  font-family: 'Open Sans';
}

.jimu-widget-header-controller .icon-node.jimu-state-selected {
  background-color: #2196f3;
}
```

## Validation checklist

- Style appears in Builder style selector.
- Header/controller icons remain aligned after style override.
- Panel title colors and popup colors are readable.
- No unintended style leaks to unrelated widgets.
