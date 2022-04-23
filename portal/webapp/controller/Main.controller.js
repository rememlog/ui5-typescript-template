sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  /**
   * @namespace sap.typescript.cf.portal
   */
  const Main = Controller.extend("sap.typescript.cf.portal.Main", {
    onInit: function _onInit() {
      console.log("Main");
      const test = "aa";
      const a = "asdsadad ".concat(test);
    }
  });
  return Main;
});
//# sourceMappingURL=Main.controller.js.map