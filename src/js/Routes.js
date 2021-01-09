Ext.define('TualoOffice.routes.DBViewer',{
    url: 'dbviewer',
    handler: {
        action: function(token){
            TualoOfficeApplication.getApplication().addView('TualoOffice.dbviewer.view.Panel',true,token);
        },
        before: function (action) {
            Ext.require('TualoOffice.dbviewer.view.Panel',function(){
                action.resume();
            },this)
        }
    }
});
Ext.define('TualoOffice.routes.DBViewerTab',{
    url: 'dbviewer/:id',
    handler: {
        action: function(token){
            TualoOfficeApplication.getApplication().addView('TualoOffice.dbviewer.view.Panel',token,true);
        },
        before: function (id,action) {
            Ext.require('TualoOffice.dbviewer.view.Panel',function(){
                action.resume();
            },this)
        }
    }
});