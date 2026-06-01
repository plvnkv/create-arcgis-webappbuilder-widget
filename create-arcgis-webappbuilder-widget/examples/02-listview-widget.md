# 02. Create a ListView widget

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/create-a-listview-widget.htm

## Use when

- Building list-driven widgets from feature layer data.
- Creating setting UI that maps layer fields to widget display fields.

## Adaptation recommendations

- Use `setting/Setting.js` to select layer and field mappings; persist through `getConfig`.
- Query feature layers using `esri/tasks/Query` and map attributes into a local store.
- Guard asynchronous callbacks with `if (this.destroyed) { return; }` before UI update.
- Keep list rendering functions small (`createList`, `_createListItem`, `getDataStore`).

## Minimal code pattern

```js
define([
  'dojo/_base/declare', 'jimu/BaseWidget', 'dojo/_base/lang',
  'dojo/Deferred', 'dojo/store/Memory', 'esri/tasks/query'
], function(declare, BaseWidget, lang, Deferred, Memory, Query) {
  return declare([BaseWidget], {
    baseClass: 'jimu-widget-listview',

    getDataStore: function() {
      var def = new Deferred();
      var layer = this.map.getLayer(this.config.layerId);
      var q = new Query();
      q.returnGeometry = false;
      q.outFields = ['*'];
      q.where = '1=1';
      layer.queryFeatures(q, lang.hitch(this, function(fs) {
        if (this.destroyed) { return; }
        var data = fs.features.map(lang.hitch(this, function(f) {
          return {
            id: f.attributes[layer.objectIdField],
            title: f.attributes[this.config.titleField],
            thumbnailImg: f.attributes[this.config.thumbnailField]
          };
        }));
        def.resolve(new Memory({ data: data }));
      }));
      return def;
    }
  });
});
```

## Validation checklist

- Setting page lists feature layers and fields.
- Selected row can resolve back to map feature.
- Reopening widget does not duplicate event handlers.
- Empty layer and null fields are handled gracefully.
