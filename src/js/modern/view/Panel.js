    /*
    Ext.define('Tualo.dbviewer.view.Panel', {
    extend: 'Ext.Panel',
    xtype: 'dbviewer_panel',

    requires: [
        
        // 'Tualo.dbviewer.tab.Panel'
    ],
    //controller: 'dashboard_main',
    layout: 'card',
    listeners: {
    //    initialize: 'onInitialize'
    },
    items: [
         
        {
            xtype : 'toolbar',
            docked: 'left',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    tooltip: 'Neuer Tab',
                    handler: function(me){
                        let newPanel = Ext.create('TualoOffice.dbviewer.tab.Panel',{
                            title: 'New',
                            closable: true
                        })
                        this.up('dbviewer_panel').add( newPanel );
                        this.up('dbviewer_panel').setActiveItem( newPanel );
                    }
                }  
            ]
        },
       
        {
            xtype: 'dbviewer_tab',
            closable: false,
            title: 'View 1'
        }
    ]
});
     */

Ext.define('Tualo.dbviewer.view.Panel', {
    extend: 'Ext.Panel',
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
      painted: function(me){
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
  