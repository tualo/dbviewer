Ext.define('Tualo.dbviewer.view.Panel', {
    extend: 'Ext.panel.Panel',
    /*
    requires: [
      'Tualo.dbviewer.models.Viewport',
      'Tualo.dbviewer.controller.Viewport',
      'Tualo.dbviewer.views.Grid',
      'Tualo.dbviewer.views.Tab',
      'Tualo.dbviewer.views.AddTab'
    ],
    */
    layout: 'card',
    listeners: {
      boxready: function(me){
        console.log('boxready',me);
        Ext.Loader.setPath('Tualo.dbviewer.lazy', './jsdbviewer');
        this.myPanel = Ext.create('Tualo.dbviewer.lazy.views.DBPanel',{});
        this.add(this.myPanel);
      }
    },
    items: []
    
    /*
    controller: 'cmp_db_viewport',
    viewModel: {
        type: 'cmp_db_viewport'
    },
    xtype: 'tualodbviewport',
    title: 'DB-Viewer',
    
    tools:[
      {
        xtype: 'glyphtool',
        glyph: 'upload',
        tooltip: 'Liste hochladen',
      //  handler: 'onImportClicked',
        hidden: false
      },

      {
        xtype: 'glyphtool',
        glyph: 'gear ',
        tooltip: 'Vorlagen',
        handler: 'onVorlagenClicked',
        hidden: false
      }
    ],
    items: [
      {
        xtype: 'tabpanel',
        reference: 'tabpanel',
        maxTabWidth: 100,
        defaults: {
           bodyPadding: 0,
           scrollable: true
        },
        items: [
          {
            xtype: 'tualodbaddquerytab',
            closable: true
          }
        ]
      }
  
    ],
    addPanel: function(panel){
      this.controller.addPanel(panel);
    }
    */
});
  