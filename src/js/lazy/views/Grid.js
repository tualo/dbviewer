Ext.define('Tualo.dbviewer.lazy.views.Grid', {
  extend: 'Tualo.grid.Panel',//.Panel',
  requires: [
    'Tualo.dbviewer.lazy.models.Grid',
    'Tualo.dbviewer.lazy.controller.Grid'
  ],
	alias: 'widget.tualodbgrid',
  controller: 'tualodbgrid',
	viewModel: {
		type: 'tualodbgrid'
	},
  bind: {
    store: '{aggregate}'
  },
  
  columns: [
    {
      header: 'ID',
      dataIndex: 'id'
    }
  ],

  plugins: [
		{
			exportHeader: true,
			type: 'clipboard',
			ptype: 'tualoclipboard'
		}
	],
	selModel: {
     type: 'spreadsheet',
		 mode: 'MULTI'
  },
  selectable: {
    rows: false,
    cells: true
  },

	reconfigureStore: function(config){
		console.log('reconfigureStore-----------',config);
		this.controller.reconfigureStore(config);
	}
});
