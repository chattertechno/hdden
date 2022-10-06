<?php

require_once('app_env.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header("Location: ../../index.php");
    exit;
}

$enviroment = getenv('APP_ENV');

if ($enviroment === trim('production')) {
    # SERVIDOR_PRODUCCION -----
    putenv("DB_HOST=127.0.0.1");
    putenv("DB_DATABASE=caradece_hdden_forms");
    putenv("DB_USERNAME=caradece_hdden_u");
    putenv("DB_PASSWORD=v5HnodTTRTV*");
    
    putenv("MAIL_TO=info@hddenforms.com");
    putenv("MAIL_BCC_1=leads@metodika.mx");
    putenv("MAIL_BCC_2=dulce.hernandez@metodika.mx");
    putenv("URL_WEBSITE=<a href='https://hddenforms.com/' target='_blank'>Hdden Forms</a>");
}

if ($enviroment === trim('development')) {
    # SERVIDOR_PRUEBAS -----
    putenv("DB_HOST=metodika.com.mx");
    putenv("DB_DATABASE=metodika_hdden_forms");
    putenv("DB_USERNAME=metodika_hdden_u");
    putenv("DB_PASSWORD=JqXLrbdhDW&8");

    putenv("MAIL_TO=dulce.hernandez@metodika.mx");
    putenv("MAIL_BCC_1=dulce.hernandez@metodika.mx");
    putenv("MAIL_BCC_2=dulce.hernandez@metodika.mx");
    putenv("URL_WEBSITE=<a href='https://metodika.mx/' target='_blank'>Metodika</a>");
}

if ($enviroment === trim('localhost')) {
    # LOCALHOST -----
    putenv("DB_HOST=127.0.0.1");
    putenv("DB_DATABASE=metodika_hddenforms");
    putenv("DB_USERNAME=root");
    putenv("DB_PASSWORD=");

    putenv("MAIL_TO=dulce.hernandez@metodika.mx");
    putenv("MAIL_BCC_1=dulce.hernandez@metodika.mx");
    putenv("MAIL_BCC_2=dulce.hernandez@metodika.mx");
    putenv("URL_WEBSITE=<a href='http://localhost/hddenforms/admin' target='_blank'>Localhost</a>");
}

?>