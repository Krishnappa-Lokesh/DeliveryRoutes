jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"dlyRts/DeliveryRoutes/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dlyRts/DeliveryRoutes/test/integration/pages/App",
	"dlyRts/DeliveryRoutes/test/integration/pages/Browser",
	"dlyRts/DeliveryRoutes/test/integration/pages/Master",
	"dlyRts/DeliveryRoutes/test/integration/pages/Detail",
	"dlyRts/DeliveryRoutes/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dlyRts.DeliveryRoutes.view."
	});

	sap.ui.require([
		"dlyRts/DeliveryRoutes/test/integration/NavigationJourneyPhone",
		"dlyRts/DeliveryRoutes/test/integration/NotFoundJourneyPhone",
		"dlyRts/DeliveryRoutes/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});