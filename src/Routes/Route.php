<?php
namespace Tualo\Office\DBViewer\Routes;
use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;
use Tualo\Office\DBViewer\DBRoutingHelper;

class Route implements IRoute{
    public static function register(){

        BasicRoute::add('/dbviewer/(?P<file>[\/.\w\d\-\_]+)'.'.js',function($matches){
            if (file_exists( dirname(__DIR__).'/js/'.$matches['file'].'.js') ){
                App::etagFile( dirname(__DIR__).'/js/'.$matches['file'].'.js' , true);
            }
        },array('get'),false);

        BasicRoute::add('/dbviewer/query',function($matches){

            App::contenttype('application/json');
            $db = App::get('session')->getDB();
            try{
                error_reporting(E_ALL);
                ini_set('display_errors', 'on');
                ini_set('memory_limit', '8096M');
                DBRoutingHelper::request($db);

            }catch(\Exception $e){
                App::result('last_sql', $db->last_sql );
                App::result('msg', $e->getMessage());
            }

        },array('get','post'),true);


    }
}