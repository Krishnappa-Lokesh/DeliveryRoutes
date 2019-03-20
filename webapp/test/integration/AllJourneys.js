jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 dlyRouteSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"dlyRts/DeliveryRoutes/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dlyRts/DeliveryRoutes/test/integration/pages/App",
	"dlyRts/DeliveryRoutes/test/integration/pages/Browser",
	"dlyRts/DeliveryRoutes/test/integration/pages/Master",
	"dlyRts/DeliveryRoutes/test/integration/pages/Detail",
	"dlyRts/DeliveryRoutes/test/integration/pages/Create",
	"dlyRts/DeliveryRoutes/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dlyRts.DeliveryRoutes.view."
	});

	sap.ui.require([
		"dlyRts/DeliveryRoutes/test/integration/MasterJourney",
		"dlyRts/DeliveryRoutes/test/integration/NavigationJourney",
		"dlyRts/DeliveryRoutes/test/integration/NotFoundJourney",
		"dlyRts/DeliveryRoutes/test/integration/BusyJourney",
		"dlyRts/DeliveryRoutes/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});