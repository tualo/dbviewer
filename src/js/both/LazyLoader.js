Ext.define('Tualo.dbviewer.LazyLoader', {
    singleton: true,
    requires: [
        'Ext.Loader'
    ]
});
Ext.Loader.setPath('Tualo.dbviewer.lazy', './jsdbviewer');
