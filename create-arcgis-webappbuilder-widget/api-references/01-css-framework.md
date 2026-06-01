# CSS Framework

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/css-framework.htm

## When to use
- Styling widget UI with Jimu utility classes.
- Keeping visual consistency with built-in WAB widgets.

## Recommendations
- Keep your root selector scoped by widget base class.
- Use Jimu helper classes for spacing and typography before custom CSS.
- Avoid overriding global Jimu classes unless theme-level change is intended.

## Example

```css
.jimu-widget-mywidget .panel-title {
  font-weight: 600;
}

.jimu-widget-mywidget .action-link {
  color: #0079c1;
}
```
