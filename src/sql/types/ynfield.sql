delimiter ;

insert into  extjs_base_types(id, classname, baseclass, xtype_long_classic, name, vendor, iscolumn, isformfield)
values('Ext.tualo.field.YNField', 'Ext.tualo.field.YNField', 'Ext.data.field.Boolean',
    'data.field.tualo_ynfield', 'Ext.tualo.field.YNField', 'Tualo', 0, 0) on duplicate key update xtype_long_classic = values(xtype_long_classic), iscolumn = values(iscolumn), isformfield = values(isformfield);
