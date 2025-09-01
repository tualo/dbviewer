Ext.define('Tualo.dbviewer.lazy.views.DBPanel', {
    extend: 'Ext.Panel',
    requires: [
        'Tualo.dbviewer.lazy.tab.Panel',
        'Tualo.dbviewer.lazy.views.Grid',
        'Tualo.dbviewer.lazy.views.Tab',
        'Tualo.dbviewer.lazy.views.AddTab',

        'Tualo.dbviewer.lazy.models.DBPanel',
        'Tualo.dbviewer.lazy.controller.DBPanel'
    ],
    // layout: 'card',
    alias: 'widget.tualodbpanel',
    controller: 'tualodbpanel',
    viewModel: {
        type: 'tualodbpanel'
    },

    layout: 'fit',
    config: {
        tablename: null
    },
    listeners: {
        boxReady: 'onBoxReady'
    },

    updateTablename: function (tableName) {
        console.log('Table name updated to:', tableName);
        this.getViewModel().set('tablename', tableName);
    },

    applyTablename: function (tableName) {
        console.log('DBPanel: Table name applied to:', tableName);
        this.getViewModel().set('tablename', tableName);
    },

    items: [
        {
            xtype: 'tabpanel',
            reference: 'tabpanel',
            itemId: 'tabpanel',
            maxTabWidth: 100,
            defaults: {
                bodyPadding: 0,
            },
            items: [

                {
                    itemId: 'addquerytab',
                    xtype: 'tualodbaddquerytab',
                    bind: {
                        tablename: '{tablename}'
                    },
                    closable: true
                }

            ]
        }
    ]
});

