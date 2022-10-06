<?php
    require_once('./assets/data/app_env.php');

    $title = !isset($_GET['title']) ? 'Hdden Forms':$_GET['title'];

    if ( getenv('APP_ENV_PROD') === trim('production')) {
        echo  "<!-- Google tag (gtag.js) -->".
        "<script async src='https://www.googletagmanager.com/gtag/js?id=G-QTC75L30F6'></script>". 
        "<script> 
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 
        
            gtag('config', 'G-QTC75L30F6'); 
        </script>";
    }else {
        echo  "<!-- not show Google Analytics in development  -->";
    }

    echo '
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon.png">';
?>