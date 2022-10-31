<?php

    // $enviroment = trim('localhost');
    // $enviroment = trim('development');
    $enviroment = trim('production');
    putenv("APP_ENV=$enviroment");
?>