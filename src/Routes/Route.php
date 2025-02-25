<?php

namespace Tualo\Office\DBViewer\Routes;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;
use Tualo\Office\DBViewer\DBRoutingHelper;
use Ramsey\Uuid\Uuid;
use Tualo\Office\DS\DSExporterHelper;

class Route implements IRoute
{
    public static function register()
    {

        BasicRoute::add('/dbviewer/query', function ($matches) {

            App::contenttype('application/json');
            $db = App::get('session')->getDB();
            try {
                error_reporting(E_ALL);
                ini_set('display_errors', 'on');
                ini_set('memory_limit', '8096M');
                DBRoutingHelper::request($db);
            } catch (\Exception $e) {
                App::result('last_sql', $db->last_sql);
                App::result('msg', $e->getMessage());
            }
        }, array('get', 'post'), true);


        BasicRoute::add('/dbviewer/export', function ($matches) {

            App::contenttype('application/json');
            $db = App::get('session')->getDB();
            try {
                error_reporting(E_ALL);
                ini_set('display_errors', 'on');
                ini_set('memory_limit', '8096M');
                set_time_limit(300);
                DBRoutingHelper::request($db);


                $_REQUEST['limit'] = '1000000';
                DBRoutingHelper::request($db);

                $filename = (Uuid::uuid4())->toString();
                $meta = App::resultDirect('metaData');
                $data = App::resultDirect('data');
                $metaColumns = $meta['columns'];
                $tablename = '';
                $columns = array();

                $xdata = [];
                foreach ($data as $row) {
                    $r = [];
                    foreach ($row as $key => $d) {
                        $r['__' . $key] = $d;
                    }
                    $xdata[] = $r;
                }
                $data = $xdata;

                foreach ($metaColumns as $c) {
                    $columns[$c['dataIndex']] = array('label' => $c['text']);
                };
                DSExporterHelper::exportDataToXSLX($db, $tablename, $columns, $data, App::get('tempPath') . '/', $filename, $columns);

                App::result('data', false);
                App::result('metaData', false);
                App::result('file', $filename);
                App::result('success', true);
            } catch (\Exception $e) {
                App::result('last_sql', $db->last_sql);
                App::result('msg', $e->getMessage());
            }
        }, array('get', 'post'), true);
    }
}
