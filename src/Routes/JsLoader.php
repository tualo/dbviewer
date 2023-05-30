<?php
namespace Tualo\Office\DBViewer\Routes;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;

class JsLoader implements IRoute{
    public static function register(){
        BasicRoute::add('/jsdbviewer/(?P<file>[\w.\/\-]+).js',function($matches){
            App::contenttype('application/javascript');
            readfile( dirname(__DIR__,1).'/js/lazy_classic/'.$matches['file'].'.js' );
            exit();
            
        },['get'],false);

    }
}