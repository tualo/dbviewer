<?php

namespace Tualo\Office\DBViewer\Middlewares;
use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware{
    public static function register(){
        App::use('dbviewer',function(){
            try{
                App::javascript(  'dbviewer_js', './dbviewer/Routes.js', [], 9000 );
                App::javascript(  'dbviewer_js_mysql', './dbviewer/MySQL.js', [], 9000 );
            }catch(\Exception $e){
                App::set('maintanceMode','on');
                App::addError($e->getMessage());
            }
        },-100);

    }
}