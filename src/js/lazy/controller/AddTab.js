Ext.define('Tualo.dbviewer.lazy.controller.AddTab', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.cmp_db_addtab',
  onResize: function(me, width, height, oldWidth, oldHeight, eOpts) {
    this.view.updateLayout();
  },
  onBoxReady: function() {

    this.getView().setTitle('new query');
    this.getView().add(new Ext.create('Tualo.dbviewer.lazy.views.Tab',{}));
    this.getView().up().add(new Ext.create('Tualo.dbviewer.lazy.views.AddTab',{closable: true}));
    console.log('onBoxReady',this.getView());
  }


});
