Ext.define('Tualo.dbviewer.grid.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tualodbgrid',
    onRenderView: function(){
  
    },
    onMetaChanged: function( pr, meta, eOpts ){
      
      this.reconfigureColumns(meta.columns);
      
    },
    onStoreLoad: function(store,records,success,opts){
  
    },
    onBeforeStoreLoad: function(store, operation, eOpts){
      return this.view.fireEvent('beforeload',store, operation, eOpts);
    },
    columnRendererMap:{},
    columnPHPRendererMap:{},
    reconfigureRenderer: function(columns){
        for(var i=0;i<columns.length;i++){
            if (typeof this.columnRendererMap[columns[i].rendererMap]!=='undefined'){
                columns[i].renderer = this.columnRendererMap[columns[i].rendererMap];
            }
            if (typeof this.columnPHPRendererMap[columns[i].rendererMap]!=='undefined'){
                columns[i].phprenderer = this.columnPHPRendererMap[columns[i].rendererMap];
            }
            if(typeof columns[i].columns!=='undefined'){
                columns[i].columns = this.reconfigureRenderer(columns[i].columns);
            }
        }
        return columns;
    },
  
    reconfigureColumns: function (columns) {
        var me = this.getView();
        if (columns) {
            //console.log(me);

            //me.headerCt.removeAll();
            me.setColumns(columns);
            columns = this.reconfigureRenderer(columns);
            //me.headerCt.add(columns);
        }
        //me.refresh();
    },
    reconfigureStore: function(config){

      
      var model = this.view.getViewModel();
      var list = model.getStore('aggregate');
      var proxy = list.getProxy();
  
      proxy.setUrl(config.url);
      if (config.extraParams){
        for(var prop in config.extraParams){
          if (config.extraParams.hasOwnProperty(prop)){
            proxy.setExtraParam(prop,config.extraParams[prop]);
          }
        }
      }
    }
});
  