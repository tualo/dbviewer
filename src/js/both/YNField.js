Ext.define('Ext.tualo.field.YNField', {
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

/*
insert into  extjs_base_types(id, classname, baseclass, xtype_long_classic, name, vendor, iscolumn, isformfield)
values('Ext.tualo.field.YNField', 'Ext.tualo.field.YNField', 'Ext.data.field.Boolean',
    'data.field.tualo_ynfield', 'Ext.tualo.field.YNField', 'Tualo', 0, 0) on duplicate key update xtype_long_classic = values(xtype_long_classic), iscolumn = values(iscolumn), isformfield = values(isformfield);
*/
