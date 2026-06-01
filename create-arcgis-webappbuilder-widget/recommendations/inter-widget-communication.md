# Inter-Widget Communication

## Publish Pattern

In a sender widget:

```javascript
this.publishData({
  source: this.name,
  type: "mywidget-action",
  payload: {
    timestamp: Date.now()
  }
});
```

## Receive Pattern

In a receiver widget:

```javascript
onReceiveData: function(name, widgetId, data, historyData) {
  if (name !== "MyWidget") {
    return;
  }
  if (!data || data.type !== "mywidget-action") {
    return;
  }
  // Process payload safely.
}
```

## Reliability Rules

- Always filter by sender widget name.
- Treat payload as untrusted input and guard missing fields.
- Handle cases where the sender was loaded late or unloaded.
- Avoid huge payloads; send IDs and fetch details lazily.
