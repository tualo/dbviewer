<?php
namespace Tualo\Office\DBViewer;
use Tualo\Office\Basic\TualoApplication;

class DBRoutingHelper {

    public static function h_type2txt($type_id)
    {
        static $types;

        if (!isset($types))
        {
            $types = array();
            $constants = get_defined_constants(true);
            foreach ($constants['mysqli'] as $c => $n) if (preg_match('/^MYSQLI_TYPE_(.*)/', $c, $m)) $types[$n] = $c;
        }

        return array_key_exists($type_id, $types)? $types[$type_id] : NULL;
    }
    public static function request($db){
        
        $canRun = true;
        //$canRun = (TualoApplication::get('session')->typ == 'master') || (TualoApplication::get('session')->typ == 'localmaster');
        if (!$canRun) throw new \Exception('Sie dürfen keine SQL-Anfragen ausführen');
        $delimiter = isset($_REQUEST['delimiter']) ? $_REQUEST['delimiter'] : ';';
        $query = $_REQUEST['query'];
        $s = trim(chop($query));
        if (strlen($s) > 6) {
            if (
                (strtolower(substr($s, 0, 6)) == 'select') ||
                (strtolower(substr($s, 0, 4)) == 'show') ||
                (strtolower(substr($s, 0, 5)) == 'check') ||
                (strtolower(substr($s, 0, 6)) == 'repair') ||
                (strtolower(substr($s, 0, 7)) == 'explain')
            ) {
                $sql_splitted = explode($delimiter, $query);
                $query = $sql_splitted[0];
                unset($sql_splitted);

                $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 50;
                $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;

                $order_by = '';
                $sortBy = array();
                if (isset($_REQUEST['sort'])) {
                    $sort = json_decode($_REQUEST['sort'], true);
                    if (is_array($sort)) {
                        foreach ($sort as $key => $value) {
                            if (strpos($value['property'], '__') != false) {
                                list($sorttable, $sortfield) = explode('__', $value['property']);
                                $value['property'] = $sorttable.'.'.$sortfield;
                            }
                            $sortBy[] = $value['property'].' '.$value['direction'];
                        }
                    }
                }
                if (count($sortBy) > 0) {
                    $order_by = ' order by '.implode(',', $sortBy);
                }
                $query=trim($query);
                $resultdata = array();
                if (strtolower(substr($s, 0, 6)) == 'select'){
                    $qquery = 'select SQL_CALC_FOUND_ROWS '.substr($s, 7);
                    if (strpos($qquery,' order by ')===false){
                        $qquery .= $order_by;
                    }
                    if (strpos($qquery,' limit ')===false){
                        $qquery.=' limit '.$start.','.$limit;
                    }
                    $rs = $db->execute($qquery);
                    $resultdata = $rs->toArray('');
                    $rs->unload();
                    TualoApplication::result('total', $db->singleValue('select found_rows() total',array(),'total') );
                }else{
                    $rs = $db->execute($query.' '.$order_by);
                    $resultdata = $rs->toArray('');
                    $rs->unload();
                    TualoApplication::result('total', count( TualoApplication::result('data') ) );
                }



                if (!isset($_REQUEST['dontcut'])||(isset($_REQUEST['dontcut'])&&$_REQUEST['dontcut']=='1')){
                    foreach ($resultdata as &$row) {
                        foreach ($row as $key => $value) {
                            if (is_string($value)){
                                if (strlen($value)>9048){
                                    $row[$key]=substr($value,0,9048);
                                }
                            }
                        }
                    }
                }

                $rownumber=0;

                
                if((isset($_REQUEST['keepMeta']))&&($_REQUEST['keepMeta']===1)){

                }else{
                    $data=array();
                    
                    foreach ($resultdata as $item) {
                        if (isset($item['id'])) $item['__id']=$item['id'];
                        $item['id']=$rownumber;
                        $rownumber++;
                        $data[] = $item;
                    }
                    TualoApplication::result('data',$data);

                }
                $metaFields = array();
                $metaColumns = array();
                foreach ($rs->a_fields as $key => $item) {
                    $constant = DBRoutingHelper::h_type2txt($item['type']);
                    if ( $constant ){
                        $column_text = $key;
                        if ($key=='id') $key='__id';
                        $metaFields[]=array('name'=>$key,'type'=>'tualo_'.strtolower($constant));
                        $metaColumns[]=array('dataIndex'=>$key,'text'=>$column_text,'xtype'=>'tualo_'.strtolower($constant));
                    }
                }

                TualoApplication::result('metaData',array(
                    'fields'=>$metaFields,
                    'columns'=>$metaColumns,
                    'rootProperty' => 'data',
                    'idProperty' => '__rowid__',
                    'messageProperty' => 'msg'
                ));
                
                TualoApplication::result('success',true);
            }else{
                $sql_a = explode($delimiter, $query);

                TualoApplication::result('metaData', array(
                    'fields' => array(
                        array(
                            'name' => 'id',
                            'type' => 'string',
                        ),
                        array(
                            'name' => 't',
                            'type' => 'string',
                        ),
                    ),
                    'columns' => array(
                        array(
                            'dataIndex' => 'id',
                            'text' => 'ID',
                            'xtype' => 'gridcolumn',
                        ),
                        array(
                            'dataIndex' => 't',
                            'text' => 'MSG',
                            'xtype' => 'gridcolumn',
                            'flex' => 1,
                        ),
                    ),
                    'rootProperty' => 'data',
                    'idProperty' => '__rowid__',
                    'messageProperty' => 'msg',
                ));
                $total = 0;
                $results = array();
                foreach ($sql_a as $sql) {
                    if (trim(chop($sql)) != '') {
                        try {
                            if ($db->execute($sql)) {
                                ++$total;
                                $results[] = array('id' => $total, 't' => 'Statement executed successfuly');
                            } else {
                                ++$total;
                                $results[] = array('id' => $total,              't' => 'Error while executing');
                            }
                        } catch (Exception $error) {
                            ++$total;
                            $results[] = array('id' => $total,            't' =>  ($error->getMessage()));
                        }
                    }
                }
                TualoApplication::result('data', $results);
                TualoApplication::result('total', $total);
                TualoApplication::result('success', true);
                
            }
            
        }
    }
}