# SymbolChooser (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/symbolchooser.htm

## When to use
- Allow users to choose marker/line/fill symbols in settings.

## Recommendations
- Restrict symbol choices by geometry type.
- Store symbol JSON in config for reliable reload.

## Example

```javascript
define(['jimu/dijit/SymbolChooser'], function(SymbolChooser) {
  var chooser = new SymbolChooser({
    symbol: this.config.symbol
  }, this.symbolChooserNode);
  chooser.startup();
});
```
