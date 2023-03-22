Ext.define('Tualo.routes.DBViewer',{
    url: 'dbviewer',
    handler: {
        action: function(token){
            TualoOfficeApplication.getApplication().addView('Tualo.dbviewer.view.Panel',true,token);
        },
        before: function (action) {
            Ext.require('Tualo.dbviewer.view.Panel',function(){
                action.resume();
            },this)
        }
    }
});
Ext.define('Tualo.routes.DBViewerTab',{
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