sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ac.agrar.counting',
            componentId: 'FieldsObjectPage',
            contextPath: '/Fields'
        },
        CustomPageDefinitions
    );
});