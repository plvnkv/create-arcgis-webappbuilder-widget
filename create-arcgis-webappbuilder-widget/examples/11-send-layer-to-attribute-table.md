# 11. Send a layer to the Attribute Table widget

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/send-a-layer-to-attribute-table-widget.htm

## Use when

- Your widget creates/selects layers and should open them in Attribute Table.

## Adaptation recommendations

- Use `LayerInfos.getInstance(map, map.itemInfo)` and subscribe to `layerInfosChanged`.
- If layer already exists, publish directly with resolved `layerInfo`.
- If layer is newly added, publish only after support check via `getSupportTableInfo`.
- Always target `AttributeTable` explicitly in `publishData`.

## Minimal code pattern

```js
LayerInfos.getInstance(this.map, this.map.itemInfo).then(lang.hitch(this, function(layerInfosObj) {
  this.layerInfosObj = layerInfosObj;
  this.own(layerInfosObj.on('layerInfosChanged', lang.hitch(this, this.onLayerInfosChanged)));
}));

onLayerInfosChanged: function(layerInfo, changeType, layerInfoSelf) {
  if (changeType === 'added' && layerInfoSelf) {
    layerInfoSelf.getSupportTableInfo().then(lang.hitch(this, function(info) {
      if (info.isSupportedLayer) {
        this.publishData({ target: 'AttributeTable', layer: layerInfoSelf });
      }
    }));
  }
}
```

## Validation checklist

- Attribute Table opens expected layer after publish.
- Unsupported layers are not sent.
- Add/remove layer cycles do not leak listeners.
- Layer IDs remain stable across reloads.
