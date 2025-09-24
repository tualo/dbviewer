Ext.define('Tualo.field.YNField', {
    extend: 'Ext.data.field.Boolean',
    alias: 'data.field.tualo_ynfield',
    convert: function (v, record) {
        if (v === 'Y') return true;
        if (v === 'N') return false;
        return this.callParent([v, record]);
    },
    serialize: function (v, record) {
        if (v === true) return 'Y';
        if (v === false) return 'N';
        return this.callParent([v, record]);
    }
});
