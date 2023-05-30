Ext.define('Tualo.dbviewer.lazy.tab.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dbviewer_tab',
    requires: [
        'Tualo.dbviewer.lazy.views.Grid',
        'Tualo.dbviewer.lazy.tab.Controller'
    ],
    layout: {
        type: 'vbox',
        align: 'strech'
    },
    controller: 'dbviewer_tab',
    items: [
        {
            xtype: 'toolbar',

            itemId: 'tools',
            docked: 'top',
            border: 1,

            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'displayfield',
                    style: {
                        color: '-internal-light-dark',
                    },
                    html: 'Trenner:'
                },
                {
                    xtype: 'spacer',
                    width: 25
                },
                {
                    xtype: 'combobox',
                    displayField: 'id',
                    itemId: 'trenner',
                    width: 80,
                    valueField: 'id',
                    value: ';',
                    store: {
                        type: 'array',
                        fields: ['id'],
                        data:[[';'],['//']]
                    }
                },
                {
                    xtype: 'spacer',
                    width: 25
                },{
                    xtype: 'button',
                    iconCls: 'x-fa fa-play',
                    tooltip: 'Ausführen',
                    handler: 'onRunQuery'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-download',
                    tooltip: 'Excel',
                    handler: 'onExcelQuery'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    tooltip: 'Neuer Tab',
                    handler: function(el){
                        let newPanel = Ext.create('TualoOffice.dbviewer.tab.Panel',{
                            title: 'New',
                            closable: true
                        })
                        this.up('dbviewer_panel').add( newPanel );
                        this.up('dbviewer_panel').setActiveItem( newPanel );
                    }
                }
            ]
        },{
            xtype: 'formpanel',
            autoHeight: true,
            itemId: 'querypanel',
            bodyPadding: 12,
            items: [
                {
                    xtype: 'textarea',
                    value: 'select @@version ver',
                    name: 'sql',
                    itemId: 'query',
                    //autoHeight: true,
                    minHeight: 100
                }

            ]
                
        },{
            xtype: 'tualodbgrid',
            itemId: 'grid',
            flex: 1,
            listeners: {
				beforeload: 'onBeforeStoreLoad'
			}

        }
    ]
});