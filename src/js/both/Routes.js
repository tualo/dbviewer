Ext.define('Tualo.routes.DBViewer',{
    statics: {
        load: async function() {
            return [
                {
                    name: 'dbviewer',
                    path: '#dbviewer'
                }
            ]
        }
    },
    url: 'dbviewer',
    handler: {
        action: function(token){
            Ext.getApplication().addView( 'Tualo.dbviewer.view.Panel' );
        },
        before: function (action) {
            console.log('Tualo.routes.DBViewer','before');
            /*
            Ext.require('Tualo.dbviewer.view.Panel',function(){
                action.resume();
            },this)
            */
            action.resume();
        }
    }
});
Ext.define('Tualo.routes.DBViewerTab',{
    statics: {
        load: async function() {
            return [
                
            ]
        }
    },
    url: 'dbviewer/:id',
    handler: {
        action: function(token){
            TualoOfficeApplication.getApplication().addView('Tualo.dbviewer.view.Panel',token,true);
        },
        before: function (id,action) {
            
            Ext.require('Tualo.dbviewer.view.Panel',function(){
                action.resume();
            },this)
            
        }
    }
});