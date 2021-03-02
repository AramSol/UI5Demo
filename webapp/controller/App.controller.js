sap.ui.define(
  ["sap/ui/core/mvc/Controller", "ui5/demo/model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("ui5.demo.controller.App", {
      formatter: formatter,

      onInit: function () {},
    });
  }
);
