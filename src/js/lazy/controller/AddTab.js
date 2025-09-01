Ext.define('Tualo.dbviewer.lazy.controller.AddTab', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tualodbaddquerytab',
  onResize: function (me, width, height, oldWidth, oldHeight, eOpts) {
    this.view.updateLayout();
  },
  onBoxReady: function () {

    console.log('AddTab: tablename is', this.getViewModel().get('tablename'));
    this.getView().setTitle('new query');
    this.getView().add(new Ext.create('Tualo.dbviewer.lazy.views.Tab', {
      tablename: this.getViewModel().get('tablename'),
      bind: {
        tablename: this.getViewModel().get('tablename')
      }
    }));
    this.getView().up().add(new Ext.create('Tualo.dbviewer.lazy.views.AddTab', { closable: true }));
    console.log('onBoxReady', this.getView());
  },

  onTableNameChange: function (newTableName) {
    let items = this.getView().items;
    if (newTableName) {
      console.log('AddTab: table name changed to', newTableName, items);
      items.each(function (item) {
        item.setTablename(newTableName);
      });
      this.getView().setTitle(newTableName);
    }
  }


});
