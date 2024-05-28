Ext.define('Tualo.dbviewer.lazy.views.AddTab', {
	extend: 'Ext.Panel',
  requires: [
    /*'Tualo.dbviewer.models.Grid',*/
    'Tualo.dbviewer.lazy.controller.AddTab'
  ],
  layout: 'fit',
	alias: 'widget.tualodbaddquerytab',
  title: '+',
	controller: 'cmp_db_addtab',
	listeners: {
    boxReady: 'onBoxReady',
    painted: 'onBoxReady',
    resize: 'onResize'
  },
  border: true,
  items: [
  ]
})
