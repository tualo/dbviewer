Ext.define('Tualo.dbviewer.lazy.views.AddTab', {
  extend: 'Ext.Panel',
  requires: [
    /*'Tualo.dbviewer.models.Grid',*/
    'Tualo.dbviewer.lazy.controller.AddTab',
    'Tualo.dbviewer.lazy.models.AddTab'
  ],
  layout: 'fit',
  alias: 'widget.tualodbaddquerytab',
  controller: 'tualodbaddquerytab',
  viewModel: {
    type: 'tualodbaddquerytab'
  },
  config: {
    tablename: null
  },
  applyTablename: function (tablename) {

    console.log('AddTab: Table name applied to:', tablename);
    this.getViewModel().set('tablename', tablename);
    this.getController().onTableNameChange(tablename);
  },
  updateTablename: function (tablename) {
    this.getViewModel().set('tablename', tablename);
    this.getController().onTableNameChange(tablename);
  },
  title: '+',
  /*controller: 'tualodbquerytab',*/
  listeners: {
    boxReady: 'onBoxReady',
    painted: 'onBoxReady',
    resize: 'onResize'
  },
  border: true,
  items: [
  ]
})
