<?php

namespace Controller;

class Controller
{
    public $requestMethod;

    function __construct()
    {
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];
    }
}

