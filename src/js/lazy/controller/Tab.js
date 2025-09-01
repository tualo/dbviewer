Ext.define('Tualo.dbviewer.lazy.controller.Tab', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tualodbquerytab',
  onResize: function (me, width, height, oldWidth, oldHeight, eOpts) {
    this.view.updateLayout();
  },
  onBoxReady: function () {

    console.log('Tualo.dbviewer.lazy.controller.Tab', this.getViewModel().get('tablename'));
  },
  onTableNameChange: function (newTableName) {
    console.log('Tualo.dbviewer.lazy.controller.Tab: table name changed to', newTableName);
    var queryField = this.lookupReference('query');
    if (queryField) {
      if (newTableName) {
        queryField.setValue('select * from ' + newTableName + ' limit 100');
      }
    }
  },

  onRunQueryKeyMap: function () {
    var queryField = this.lookupReference('query');
    console.log('onRunQueryKeyMap', queryField.getValue())
  },
  onRunQuery: function () {
    var grid = this.lookupReference('grid');
    grid.getStore().load();
  },
  onExcelQuery: function () {
    var queryField = this.lookupReference('query');
    this.view.up().setTitle(queryField.getValue());
    Tualo.Ajax.download({
      // showWait: true,
      url: './dbviewer/export',
      timeout: 300000,
      params: {
        query: queryField.getValue()
      },
      method: 'POST'
    });
  },
  onBeforeStoreLoad: function (store, operation, eOpts) {
    var queryField = this.lookupReference('query');
    var params = operation.getParams();
    if (params == null) {
      params = {};
    }
    params.query = queryField.getValue();
    params.delimiter = this.lookupReference('trenner').getValue();

    operation.setParams(params);
    this.view.up().setTitle(params.query);
    return true;
  }


});
