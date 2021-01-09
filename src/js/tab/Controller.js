Ext.define('TualoOffice.dbviewer.tab.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dbviewer_tab',
    onRunQuery: function(){
        console.log(this.getView().getComponent('querypanel').getValues());
        var grid = this.getView().getComponent('grid');
        grid.getStore().load();
    },
    onExcelQuery: function(){

    },
    onBeforeStoreLoad: function(store, operation, eOpts){
        var queryField = this.getView().getComponent('querypanel').getComponent('query');
        var params = operation.getParams();
        
        if (params==null){
          params = {};
        }
        params.query = queryField.getValue();
        if (params.query==null) params.query='';
        params.delimiter = this.getView().getComponent('tools').getComponent('trenner').getValue();
        
        operation.setParams(params);
    
        this.getView().setTitle(this.encodeHTML(params.query));
        return true;
      },
      encodeHTML: function(str){
        return str.replace(/([\u00A0-\u9999<>&])(.|$)/g, function(full, char, next) {
          if(char !== '&' || next !== '#'){
            if(/[\u00A0-\u9999<>&]/.test(next))
              next = '&#' + next.charCodeAt(0) + ';';
    
            return '&#' + char.charCodeAt(0) + ';' + next;
          }
    
          return full;
        });
    }
});