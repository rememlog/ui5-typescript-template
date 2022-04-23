sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  /**
   * @namespace sap.typescript.cf.portal
   */
  const Component = UIComponent.extend("sap.typescript.cf.portal.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      UIComponent.prototype.init.call(this);
      this.getRouter().initialize();
    }
  });
  return Component;
});
//# sourceMappingURL=Component.js.map