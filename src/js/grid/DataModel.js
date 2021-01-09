Ext.define('TualoOffice.dbviewer.grid.DataModel', {
    extend: 'Ext.data.Model',
    fields: [
      { name: '__rowid__', type: 'number' }
    ],
    idProperty:'__rowid__'
});