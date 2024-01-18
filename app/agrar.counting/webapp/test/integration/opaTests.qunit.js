sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ac/agrar/counting/test/integration/FirstJourney',
		'ac/agrar/counting/test/integration/pages/FieldsList',
		'ac/agrar/counting/test/integration/pages/FieldsObjectPage'
    ],
    function(JourneyRunner, opaJourney, FieldsList, FieldsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start test/flpSandbox.html?sap-ui-xx-viewCache=false#acagrarcounting-tile in web folder
            launchUrl: sap.ui.require.toUrl('ac/agrar/counting') + '/test/flpSandbox.html?sap-ui-xx-viewCache=false#acagrarcounting-tile'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFieldsList: FieldsList,
					onTheFieldsObjectPage: FieldsObjectPage
                }
            },
            opaJourney.run
        );
    }
);