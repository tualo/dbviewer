Ext.define('Tualo.dbviewer.lazy.views.Tab', {
	extend: 'Ext.Panel',
	requires: [
		/*'Tualo.dbviewer.models.Grid',*/
		'Tualo.dbviewer.lazy.controller.Tab',
		'Tualo.dbviewer.lazy.models.Tab',
		'Tualo.dbviewer.lazy.views.Grid'
	],
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	alias: 'widget.tualodbquerytab',
	controller: 'tualodbquerytab',
	viewModel: {
		type: 'tualodbquerytab'
	},
	config: {
		tablename: null
	},
	applyTablename: function (tablename) {
		console.log('Tab: Table name applied to:', tablename);
		this.getViewModel().set('tablename', tablename);
		this.getController().onTableNameChange(tablename);
	},
	updateTablename: function (tablename) {
		this.getViewModel().set('tablename', tablename);
		console.log('Tab: Table name updated to:', tablename);
	},

	mixins: [
		'Ext.mixin.Keyboard'
	],
	keyMap: {
		"CmdOrCtrl+X": 'onRunQueryKeyMap',
	},
	items: [{
		xtype: 'toolbar',
		//docked: 'top',
		// height: 100,
		items: [

			{
				xtype: 'label',
				text: 'Trenner:'
			},
			{
				xtype: 'tualospacer'
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
				xtype: 'tualospacer',
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
		//docked: 'top',
		border: true,
		xtype: "tualocodesql",
		height: 200,
		//minHeight: 200,
		reference: 'query',
		//fitParent: true,

	}, {
		xtype: 'panel',
		flex: 1,
		layout: 'fit',
		items: [{
			reference: 'grid',
			// xtype: 'grid',
			xtype: 'tualodbgrid',
			// html: 'Grid',
			listeners: {
				beforeload: 'onBeforeStoreLoad'
			}
		}
		]
	}],
});

