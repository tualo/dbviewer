Ext.define('Tualo.dbviewer.lazy.views.Tab', {
	extend: 'Ext.panel.Panel',
	requires: [
		/*'Tualo.dbviewer.models.Grid',*/
		'Tualo.dbviewer.lazy.controller.Tab'
	],
	layout: 'fit',
	xtype: 'tualodbquerytab',
	controller: 'cmp_db_tab',
	mixins: [
		'Ext.mixin.Keyboard'
	],
	keyMap: {
		"CmdOrCtrl+X": 'onRunQueryKeyMap',
	},
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [

			{
				xtype: 'label',
				text: 'Trenner:'
			},
			{
				xtype: 'tbspacer'
			},
			{
				xtype: 'combobox',
				displayField: 'id',
				reference: 'trenner',
				width: 80,
				valueField: 'id',
				value: ';',
				store: {
					type: 'array',
					fields: ['id'],
					data: [[';'], ['//']]
				}
			},
			{
				xtype: 'tbspacer',
				width: 25
			},
			{
				xtype: 'glyphtool',
				glyph: 'play',
				darkColor: true,	
				tooltip: 'Ausführen',
				handler: 'onRunQuery'
			},
			{
				xtype: 'glyphtool',
				glyph: 'download',
				darkColor: true,	
				tooltip: 'Excel',
				handler: 'onExcelQuery'
			}
		],
	},
	{
		dock: 'top',
		border: true,
		"xtype": "tualocodesql",
		height: 200,
		reference: 'query',
		//fitParent: true,

	}

	],
	items: [{
		reference: 'grid',
		//xtype: 'panel',
		xtype: 'tualodbgrid',
		
		listeners: {
			beforeload: 'onBeforeStoreLoad'
		}
	}

	]
});

