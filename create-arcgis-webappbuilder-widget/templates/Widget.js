define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/on",
  "jimu/BaseWidget",
  "dijit/_WidgetsInTemplateMixin"
], function(declare, lang, on, BaseWidget, _WidgetsInTemplateMixin) {
  return declare([BaseWidget, _WidgetsInTemplateMixin], {
    baseClass: "jimu-widget-mywidget",

    _openTimer: null,

    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      this.inherited(arguments);

      // Keep handles owned so they are removed automatically.
      if (this.actionBtn) {
        this.own(on(this.actionBtn, "click", lang.hitch(this, this._onActionClick)));
      }
    },

    onOpen: function() {
      this.inherited(arguments);
      this._scheduleLightweightRefresh();
    },

    onClose: function() {
      this.inherited(arguments);
    },

    destroy: function() {
      if (this._openTimer) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      this.inherited(arguments);
    },

    _onActionClick: function() {
      // Example widget-to-widget message.
      this.publishData({
        source: this.name,
        type: "mywidget-action"
      });

      if (this.statusNode) {
        this.statusNode.innerHTML = this.nls.actionCompleted;
      }
    },

    _scheduleLightweightRefresh: function() {
      this._openTimer = setTimeout(lang.hitch(this, function() {
        if (this.destroyed) {
          return;
        }
        // Place deferred work here (for example, lightweight refresh).
      }), 100);
    }
  });
});
