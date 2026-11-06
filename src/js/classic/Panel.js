Ext.define('Tualo.dbviewer.view.Panel', {
  extend: 'Ext.panel.Panel',

  getWindowTitle: function () {
    return "DB-Viewer";
  },

  getWindowIcon: function () {
    return 'fa-solid fa-database';
  },


  layout: 'fit',
  listeners: {
    boxready: function (me) {
      console.log('boxready', me);
      Ext.Loader.setPath('Tualo.dbviewer.lazy', './jsdbviewer');
      this.myPanel = Ext.create('Tualo.dbviewer.lazy.views.DBPanel', {});
      this.add(this.myPanel);
    }
  },
  items: []

});
