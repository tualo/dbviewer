Ext.define('Tualo.dbviewer.lazy.views.AddTab', {
	extend: 'Ext.panel.Panel',
  requires: [
    /*'Tualo.dbviewer.models.Grid',*/
    'Tualo.dbviewer.lazy.controller.AddTab'
  ],
  layout: 'fit',
	xtype: 'tualodbaddquerytab',
  title: '+',
	controller: 'cmp_db_addtab',
	listeners: {
    boxReady: 'onBoxReady',
    resize: 'onResize'
  },
  items: [
  ]
})
