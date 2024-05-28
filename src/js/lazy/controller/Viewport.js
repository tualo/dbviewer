Ext.define('Tualo.dbviewer.lazy.controller.Viewport', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.cmp_db_viewport',

  addPanel: function(panel){
    var tab = this.lookupReference('tabpanel');
    tab.add(panel);
  }


});
