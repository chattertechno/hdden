<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>Hdden Forms</title>

    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/hdden-forms.css">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- JS -->
    <script src="./assets/js/jQuery1.7.2.min.js"></script>
    <script src="./assets/js/GSAP3.10.4.min.js"></script>
    <script src="./assets/js/ScrollTrigger3.10.4.min.js"></script>
    <script src="./assets/js/ScrollToPlugin3.10.4.min.js"></script>
</head>

<body>
    <div class="cursor hide"></div>
    <div class="cursor__follower hide"></div>
    <!-- Nav -->
    <header>
        <?php require_once('./header_content.php'); ?>
    </header>

    <main class="main home">
        <section class="seccion__intro">
            <div class="intro__contenido__capa"></div>

            <img class="intro__contenido__logohdden" src="./assets/img/hddenforms.svg" alt="hddenforms">

            <video class="intro__contenido__video desktop_intro_video" autoplay="autoplay" loop="loop" preload="auto" volume="0" muted
                poster="./assets/img/home.jpg" playsinline="playsinline">
                <source  src="./assets/video/main.mov" />
            </video>
            <video class="intro__contenido__video mobile_intro_video" autoplay="autoplay" loop="loop" preload="auto" volume="0" muted
                poster="./assets/img/home.jpg" playsinline="playsinline">
                <source src="./assets/video/mobile_intro.mp4" type="video/mp4">
            </video>

            <div class="intro__contenido__marquesina">
                <div class="intro__contenido__marquesina--inner">
                    <p>&ensp;•&ensp;Web 3.0 Native Strategy</p>
                </div>
            </div>

            <img class="intro__contenido__imagen" src="./assets/img/home.jpg" alt="imagen">
        </section>
        <!-- Section 1 -->
        <section class="seccion1">

            <h1 class="seccion1__titulo">
                <span class="seccion1__titulo--texto an_revelar an_revelar_izq">Web 3.0</span>
                <!-- <span>Based</span> -->
                <span class="an_revelar an_revelar_izq">Native</span>
                <span class="an_revelar an_revelar_izq">Strategy</span>
            </h1>
            <p class="seccion1__parrafo an_revelar an_revelar_der tuto__para">
                At Hdden Forms, we make exclusive limited editions of objects in wood, and we offer them using a Web 3.0
                native strategy that allows us to tokenize our assets and create a new business model: an economy in
                which we are able to share our profits with our customers, and which also effectively turns our
                customers into stakeholders with voting rights.
            </p>
            <img class="seccion1__imagen an_revelar an_revelar_der"
                src="./assets/img/collection/circulo-lineas-secc1.svg" alt="image">
        </section>
        <div class="main__contenedorLogoCollection">
            <img class="seccion2__img main__logocollection" src="./assets/img/collection/logo-collection.png"
                alt="logocollection">

            <!-- Background video -->
            <div class="video_wrap">
                <video class="the_video" autoplay="autoplay" loop="loop" preload="auto" volume="0" muted
                    poster="./assets/img/home.jpg">
                    <source src="./assets/video/banner.mov" />
                </video>
                <div class="overlay"></div>
            </div>
            <!-- // Background video -->

<div class="mobile_update">
            <!-- Section 2 -->
            <section class="seccion2">
                <div class="seccion2__contenido">
                    <p class="seccion2__parrafo an_revelar an_revelar_der">
                        The Entombment is a collection that consists of <br>two functional pieces made of solid ash
                        wood. <br>It
                        is characterized by the use of spherical elements and by the juxtaposition of heavy and light
                        components, and the balance acheived between both, sometimes quite literally.
                    </p>
                    <img class="hide seccion2__img seccion2__img1 an_revelar an_revelar_izq"
                        src="./assets/img/collection/photo_1.jpg" alt="photo">
                    <img class="hide seccion2__img seccion2__img2 an_revelar" src="./assets/img/collection/photo_2.jpg"
                        alt="photo">
                    <img class="hide seccion2__img seccion2__img3 an_revelar an_revelar_izq"
                        src="./assets/img/collection/photo_3.jpg" alt="photo">
                </div>

                <img class="seccion2__img seccion2__img4" src="./assets/img/collection/logo_collection.png"
                    alt="logocollection">
            </section><!-- end Section 2 -->

            <!-- Section 3 -->
            <section class="seccion3">
                <div class="seccion3__contenido">
                    <a href="whitemap.php" class="btn seccion3__link">Read Whitemap</a>
                    <div class="seccion3__objeto obj1 an_revelar an_revelar_der">
                        <img class="img" src="./assets/img/collection/objs/photo_obj1.jpg" alt="object1">
                    </div>
                    <div class="seccion3__objeto obj2 an_revelar an_revelar_izq">
                        <img class="img img1-obj2" src="./assets/img/collection/objs/photo_obj2.jpg" alt="object2">
                    </div>
                </div>
            </section><!-- end Section 3 -->
</div>
        </div>
        <!-- end main__contenedorLogoCollection -->
    </main>

    <section>
        <?php require_once('./extra_links.php'); ?>
    </section>

    <footer>
        <?php require_once('./footer_content.php'); ?>
    </footer>
<script>
        document.querySelector('video').play();

</script>
    <script type="text/javascript" src="./assets/js/init.js"></script>
    <script type="text/javascript" src="./assets/js/hddenforms/index.js"></script>
</body>

</html>