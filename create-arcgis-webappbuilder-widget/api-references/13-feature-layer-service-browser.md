# FeatureLayerServiceBrowser (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/featurelayerservicebrowser.htm

## When to use
- Browse feature layers from a service URL and allow user selection.

## Recommendations
- Validate service URL and handle auth/permission errors.
- Cache service metadata during one settings session.

## Example

```javascript
define(['jimu/dijit/FeatureLayerServiceBrowser'], function(FeatureLayerServiceBrowser) {
  var browser = new FeatureLayerServiceBrowser({}, this.browserNode);
  browser.startup();
});
```
