Ext.define('Tualo.dbviewer.lazy.views.Grid', {
  extend: 'Ext.grid.Panel',
  requires: [
    'Tualo.dbviewer.lazy.models.Grid',
    'Tualo.dbviewer.lazy.controller.Grid'
  ],
	alias: 'widget.tualodbgrid',
  controller: 'tualodbgridcontroller',
	viewModel: {
		type: 'tualodbgridmodel'
	},
  bind: {
    store: '{aggregate}'
  },
  title: 'Grid',
  /*
	dockedItems: [{
      xtype: 'pagingtoolbar',
			bind: {
		    store: '{aggregate}'
		  },
      dock: 'bottom',
      displayInfo: true
  }],*/
  columns: [
    {
      header: 'ID',
      dataIndex: 'id'
    }
  ],
	plugins: [
		{
			exportHeader: true,
			ptype: 'tualoclipboard'
			//ptype: 'clipboard'
		}
	],
	selModel: {
     type: 'spreadsheet',
		 mode: 'MULTI'
  },
	reconfigureStore: function(config){
		console.log('reconfigureStore-----------',config);
		this.controller.reconfigureStore(config);
	}
});
