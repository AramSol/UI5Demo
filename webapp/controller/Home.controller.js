sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("ui5.demo.controller.Home", {
      formatter: formatter,

      onInit: function () {},
    });
  }
);
