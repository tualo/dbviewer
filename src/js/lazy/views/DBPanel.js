Ext.define('Tualo.dbviewer.lazy.views.DBPanel', {
    extend: 'Ext.Panel',
    requires: [
        'Tualo.dbviewer.lazy.tab.Panel',
        'Tualo.dbviewer.lazy.views.Grid',
        'Tualo.dbviewer.lazy.views.Tab',
        'Tualo.dbviewer.lazy.views.AddTab'
    ],
    // layout: 'card',
    layout: 'fit',
    items:[
        {
            xtype: 'tabpanel',
            reference: 'tabpanel',
            maxTabWidth: 100,
            defaults: {
                bodyPadding: 0,
            },
            items: [
                
                {
                    xtype: 'tualodbaddquerytab',
                    closable: true
                }
                
            ]
        }
    ]
});

