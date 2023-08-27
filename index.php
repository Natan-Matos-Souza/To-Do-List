<?php

require "bootstrap.php";

use Controller\Controller;
use Router\Router;

$route = Router::getRoute();
$controllerName = Router::getMatchedController($route);

$controller = new $controllerName;

switch ($controller->requestMethod)
{
    case 'GET':
        $controller->index();
        break;
    
    case 'POST':
        $controller->create();
        break;
}