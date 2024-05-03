Ext.define('Tualo.dbviewer.lazy.views.DBPanel', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Tualo.dbviewer.lazy.tab.Panel',
        'Tualo.dbviewer.lazy.views.Grid',
        'Tualo.dbviewer.lazy.views.Tab',
        'Tualo.dbviewer.lazy.views.AddTab'
    ],
    layout: 'card',
    items:[
        {
            xtype: 'tabpanel',
            reference: 'tabpanel',
            layout: 'fit',
            maxTabWidth: 100,
            defaults: {
                bodyPadding: 0,
                //border: true,
                scrollable: true,
                //bodyStyle: 'background-color: #ffc;'
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

