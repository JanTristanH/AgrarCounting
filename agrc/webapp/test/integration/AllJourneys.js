sap.ui.define([
	"sap/ui/test/Opa5",
    "agc/agrc/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"agc/agrc/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "agc.agrc.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "agc.agrc",
					entitySet: "Fields"
				}
			}
		}
	});
});
