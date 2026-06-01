# Utils

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/utils.htm

## When to use
- Shared utility operations for URL, config, and environment helpers.

## Recommendations
- Prefer `jimu/utils` helpers over duplicating common utility code.
- Wrap utility usage in small adapter methods for easier testing.

## Example

```javascript
define(['jimu/utils'], function(utils) {
  var isHttps = utils.isHttpsProtocol(window.location.href);
  return { isHttps: isHttps };
});
```
