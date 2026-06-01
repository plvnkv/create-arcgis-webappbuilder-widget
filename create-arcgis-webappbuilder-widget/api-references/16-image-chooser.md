# ImageChooser (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/imagechooser.htm

## When to use
- Choose icon or image assets in widget settings.

## Recommendations
- Restrict allowed file types and size.
- Store image path in config, not full binary content.

## Example

```javascript
define(['jimu/dijit/ImageChooser'], function(ImageChooser) {
  this.imageChooser = new ImageChooser({}, this.imageChooserNode);
  this.imageChooser.startup();
});
```
