
Ext.define('Ext.tualo.field.Mysqli_type_decimal', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_decimal' });
Ext.define('Ext.tualo.field.Mysqli_type_tiny', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_tiny' });
Ext.define('Ext.tualo.field.Mysqli_type_short', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_short' });
Ext.define('Ext.tualo.field.Mysqli_type_long', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_long' });
Ext.define('Ext.tualo.field.Mysqli_type_float', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_float' });
Ext.define('Ext.tualo.field.Mysqli_type_double', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_double' });
Ext.define('Ext.tualo.field.Mysqli_type_longlong', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_longlong' });
Ext.define('Ext.tualo.field.Mysqli_type_int24', { extend: 'Ext.data.field.Number', alias: 'data.field.tualo_mysqli_type_int24' });

Ext.define('Ext.tualo.field.Mysqli_type_bit', { extend: 'Ext.data.field.Boolean', alias: 'data.field.tualo_mysqli_type_bit' });


Ext.define('Ext.tualo.field.Mysqli_type_null', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_null' });
Ext.define('Ext.tualo.field.Mysqli_type_timestamp', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_timestamp', dateFormat: 'Y-m-d H:i:s' });
Ext.define('Ext.tualo.field.Mysqli_type_date', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_date', dateFormat: 'Y-m-d' });
Ext.define('Ext.tualo.field.Mysqli_type_time', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_time', dateFormat: 'H:i:s' });
Ext.define('Ext.tualo.field.Mysqli_type_datetime', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_datetime', dateFormat: 'Y-m-d H:i:s' });
Ext.define('Ext.tualo.field.Mysqli_type_year', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_year' });
Ext.define('Ext.tualo.field.Mysqli_type_newdate', { extend: 'Ext.data.field.Date', alias: 'data.field.tualo_mysqli_type_newdate', dateFormat: 'Y-m-d H:i:s' });

Ext.define('Ext.tualo.field.Mysqli_type_enum', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_enum' });
Ext.define('Ext.tualo.field.Mysqli_type_set', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_set' });
Ext.define('Ext.tualo.field.Mysqli_type_tiny_blob', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_tiny_blob' });
Ext.define('Ext.tualo.field.Mysqli_type_medium_blob', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_medium_blob' });
Ext.define('Ext.tualo.field.Mysqli_type_long_blob', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_long_blob' });
Ext.define('Ext.tualo.field.Mysqli_type_blob', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_blob' });
Ext.define('Ext.tualo.field.Mysqli_type_var_string', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_var_string' });
Ext.define('Ext.tualo.field.Mysqli_type_string', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_string' });
Ext.define('Ext.tualo.field.Mysqli_type_char', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_char' });
Ext.define('Ext.tualo.field.Mysqli_type_interval', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_interval' });
Ext.define('Ext.tualo.field.Mysqli_type_geometry', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_geometry' });
Ext.define('Ext.tualo.field.Mysqli_type_json', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_json' });
Ext.define('Ext.tualo.field.Mysqli_type_newdecimal', { extend: 'Ext.data.field.String', alias: 'data.field.tualo_mysqli_type_newdecimal' });


Ext.define('TualoOffice.dbviewer.column.Mysqli_type_decimal', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_decimal', format: '0.00000', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_tiny', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_tiny', format: '0', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_short', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_short', format: '0', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_long', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_long', format: '0', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_float', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_float', format: '0.00000', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_double', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_double', format: '0.00000', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_longlong', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_longlong', format: '0', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_int24', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_int24', format: '0', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_newdecimal', { extend: 'Ext.grid.column.Number', alias: 'widget.tualo_mysqli_type_newdecimal', format: '0.00000', align: 'right' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_bit', { extend: 'Ext.grid.column.Boolean', alias: 'widget.tualo_mysqli_type_bit' });

Ext.define('TualoOffice.dbviewer.column.Mysqli_type_null', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_null' });

Ext.define('TualoOffice.dbviewer.column.Mysqli_type_timestamp', { extend: 'Ext.grid.column.Date', alias: 'widget.tualo_mysqli_type_timestamp', format: 'd.m.Y H:i:s' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_date', { extend: 'Ext.grid.column.Date', alias: 'widget.tualo_mysqli_type_date', format: 'd.m.Y' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_time', { extend: 'Ext.grid.column.Date', alias: 'widget.tualo_mysqli_type_time', format: 'H:i:s' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_datetime', { extend: 'Ext.grid.column.Date', alias: 'widget.tualo_mysqli_type_datetime', format: 'd.m.Y H:i:s' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_year', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_year' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_newdate', { extend: 'Ext.grid.column.Date', alias: 'widget.tualo_mysqli_type_newdate', format: 'd.m.Y H:i:s' });

Ext.define('TualoOffice.dbviewer.column.Mysqli_type_enum', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_enum' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_set', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_set' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_tiny_blob', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_tiny_blob' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_medium_blob', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_medium_blob' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_long_blob', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_long_blob' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_blob', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_blob' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_var_string', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_var_string' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_string', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_string' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_char', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_char' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_interval', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_interval' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_geometry', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_geometry' });
Ext.define('TualoOffice.dbviewer.column.Mysqli_type_json', { extend: 'Ext.grid.column.Column', alias: 'widget.tualo_mysqli_type_json' });

