
Ext.define('Tualo.dbviewer.lazy.models.GridModel', {
  extend: 'Ext.data.Model',
  fields: [
    { name: '__rowid__', type: 'number' }
  ],
  idProperty:'__rowid__'
});

Ext.define('Tualo.dbviewer.lazy.models.Grid', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.tualodbgridmodel',
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
      model: 'Tualo.dbviewer.lazy.models.GridModel',
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
            Ext.MessageBox.show({
              title: 'Fehler',
              msg: msg,
              icon: Ext.MessageBox.ERROR,
              buttons: Ext.Msg.OK
            });
          }
        }
      }
    }
  }
});
