Ext.define('Tualo.routes.dbviewer.SimpleSelect', {
    statics: {
        load: async function () {
            return [
                {
                    name: 'DB Viewer simple select',
                    path: '#dbviewer/:{table_name}'
                }
            ]
        }
    },
    url: 'dbviewer/table/:{table_name}',
    handler: {

        action: function (values) {
            Ext.getApplication().addView('Tualo.dbviewer.lazy.views.DBPanel', {
                tablename: values.table_name
            });
        },
        before: function (values, action) {
            action.resume();

        },


    }
});