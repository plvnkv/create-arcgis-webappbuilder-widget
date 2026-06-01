# FeatureActionManager

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/featureactionmanager.htm

## When to use
- Discover and invoke supported feature actions for a feature set.

## Recommendations
- Request supported actions at runtime based on selected features.
- Render actions as a small menu and execute only selected action.

## Example

```javascript
FeatureActionManager.getInstance().getSupportedActions(featureSet)
  .then(lang.hitch(this, function(actions) {
    this._renderActionMenu(actions);
  }));
```
