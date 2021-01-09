
Ext.define('TualoOffice.dbviewer.grid.Model', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'TualoOffice.dbviewer.grid.DataModel'
    ],
    alias: 'viewmodel.tualodbgrid',
    formulas: {
  
    },
    stores: {
      aggregate: {
        type: 'json',
        autoLoad: false,
        autoSync: false,
        remoteFilter: true,
        remoteSort: true,
        pageSize: 1000,
        model: 'TualoOffice.dbviewer.grid.DataModel',
        listeners:{
          beforeload: 'onBeforeStoreLoad',
          load: 'onStoreLoad',
          metachange: 'onMetaChanged'
        },
        
        //renaming the extjs id property
        proxy: {
          type: 'ajax',
          actionMethods:  { 
            create: 'POST', 
            read: 'POST', update: 'POST', destroy: 'POST' 
          },
          noCache: true,
          url: './dbviewer/query',
          reader: {
            type: 'json',
            rootProperty: 'data',
            idProperty:'__rowid__'
          },
          listeners: {
            exception: function(proxy, response, operation){
              var o,msg;
              try{
                if (typeof response.responseJson=='object'){
                  o=response.responseJson;
                }else{
                  o = Ext.JSON.decode(response.responseText);
                }
                msg = o.msg;
              }catch(e){
                msg = response.responseText;
              }
              Ext.toast(msg);
              
            }
          }
        }
      }
    }
});
  