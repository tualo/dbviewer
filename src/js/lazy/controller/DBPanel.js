Ext.define('Tualo.dbviewer.lazy.controller.DBPanel', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.tualodbpanel',

  onBoxReady: function () {
    console.log('Box is ready', this.getViewModel().get('tablename'));
    this.getView().getComponent('tabpanel').getComponent('addquerytab').setTablename(this.getViewModel().get('tablename'));
  }
});
