sap.ui.define([
    "sap/ui/test/Opa5"
  ], function (Opa5) {
    "use strict";
  
    return Opa5.extend("agc.agrc.test.integration.pages.Common", { 
        iStartMyApp: function () {
            var sPath = sap.ui.require.toUrl("agc/agrc/test");
            return this.iStartMyAppInAFrame(sPath + "/flpSandbox.html#agcagrc-tile");
        }
    });
  }
);
