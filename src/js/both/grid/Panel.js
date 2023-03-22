Ext.define('Tualo.dbviewer.grid.Panel', {
    extend: 'Ext.grid.Grid',
    requires: [
      'Tualo.dbviewer.grid.Controller',
      'Tualo.dbviewer.grid.Model'
    ],

    alias: 'widget.tualodbgrid',
    controller: 'tualodbgrid',
    viewModel: {
        type: 'tualodbgrid'
    },
    bind: {
      store: '{aggregate}'
    },
    rowNumbers: {
      text: '#'
    },
    plugins: {
      clipboard: true,
      pagingtoolbar: {
        toolbar: {
            xtype: 'pagingtoolbar',
            docked: 'bottom',
            items: [{
              xtype: 'displayfield',
                style: {
                    color: '-internal-light-dark',
                },
                html: 'Zeilen:'
            },
            {
                xtype: 'spacer',
                width: 25
            },{
              itemId: 'pagesize',
              xtype: 'combobox',
              store: {
                type: 'array',
                fields: ['size'],
                data: [[25],[50],[100],[500],[1000],[5000],[10000],[100000]]
              },
        
              displayField: 'size',
              valueField: 'size',
              value: 25,
              forceSelection: true,

              listeners:{
                painted: function(f){
                  var ps = f.up().parent.getStore().getPageSize();
                  f.lockUpdate = true;
                  f.setValue(ps);
                  f.lockUpdate = false;
                },
                change: function(f,nv,ov){
                  if (nv==null){  return false; }
                  if (f.lockUpdate===true){  return; }
                  var tb = f.up().parent;
                  tb.getStore().setPageSize(parseInt(f.getValue()));
                  tb.getStore().loadPage(1);
                }
              }
            }]
        }
      }
    },
    selectable: {
      // Disables sorting by header click, though it will be still available via menu
      columns: true,
      cells: true,
      checkbox: false,
      drag: true,
      //extensible: 'y'
    },
    columns: [
      {
        text: 'ID',
        dataIndex: 'id'
      }
    ],
    
    reconfigureStore: function(config){
      this.controller.reconfigureStore(config);
    }
});
  