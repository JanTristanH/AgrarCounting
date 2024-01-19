
using MainService as service from '../srv/main-service';

annotate service.Fields with @(
    odata.draft.enabled,
    UI: {
        SelectionFields       : [
            title,
            descr
        ],
        LineItem              : [
            {Value: title},
            {Value: descr},
        ],
        Facets                : [{
            $Type : 'UI.ReferenceFacet',
            Label : 'Header Info',
            ID    : 'HeaderInfo',
            Target: '@UI.FieldGroup#HeaderInfo',
        }],
        FieldGroup #HeaderInfo: {
            $Type: 'UI.FieldGroupType',
            Data : [
                {
                    $Type: 'UI.DataField',
                    Value: ID,
                    Label: 'ID',
                },
                {
                    $Type: 'UI.DataField',
                    Value: title,
                    Label: 'title',
                },
                {
                    $Type: 'UI.DataField',
                    Value: descr,
                    Label: 'descr',
                },
                {
                    $Type : 'UI.DataFieldForAction',
                    Action: 'MainService.process',
                    Label : 'process'
                }
            ],
        }
    }
);
