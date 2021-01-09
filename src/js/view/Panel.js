Ext.define('TualoOffice.dbviewer.view.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'dbviewer_panel',
    requires: [
        
        'TualoOffice.dbviewer.tab.Panel'
    ],
    //controller: 'dashboard_main',
    layout: 'card',
    listeners: {
    //    initialize: 'onInitialize'
    },
    items: [
        /*
        {
            xtype : 'toolbar',
            docked: 'left',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    tooltip: 'Neuer Tab',
                    handler: function(me){
                        let newPanel = Ext.create('TualoOffice.dbviewer.tab.Panel',{
                            title: 'New',
                            closable: true
                        })
                        this.up('dbviewer_panel').add( newPanel );
                        this.up('dbviewer_panel').setActiveItem( newPanel );
                    }
                }  
            ]
        },
        */
        {
            xtype: 'dbviewer_tab',
            closable: false,
            title: 'View 1'
        }
    ]
});

