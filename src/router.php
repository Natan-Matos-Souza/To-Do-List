<?php

namespace Router;

function routes()
{
    return require "routes.php";
}

class Router {

    public static function getRoute()
    {
        $requestUrl = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        return $requestUrl;
    }

    public static function getMatchedController($route)
    {
        if (array_key_exists($route, routes()))
        {
            $controller = routes()[$route];

            return $controller;
        } else {
            
            $controller = "NotFoundController";
            return $controller;

        }
    }
}