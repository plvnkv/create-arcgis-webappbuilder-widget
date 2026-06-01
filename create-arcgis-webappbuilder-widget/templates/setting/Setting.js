define([
  "dojo/_base/declare",
  "dojo/i18n!./nls/strings",
  "jimu/BaseWidgetSetting"
], function(declare, nls, BaseWidgetSetting) {
  return declare([BaseWidgetSetting], {
    baseClass: "jimu-widget-mywidget-setting",
    nls: nls,

    startup: function() {
      this.inherited(arguments);
      this.setConfig(this.config || {});
    },

    setConfig: function(config) {
      this.config = config;
      if (this.titleNode) {
        this.titleNode.value = config.title || "";
      }
    },

    getConfig: function() {
      this.config.title = this.titleNode ? this.titleNode.value : "";
      return this.config;
    }
  });
});
