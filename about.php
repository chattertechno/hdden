<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>About</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/about.css">
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

    <main class="main">

        <!-- About section -->
        <section id="aboutSection" class="seccion__about">
            <div class="aboutSection_contenido">
                <h1 class="about-titulo">Hdden Forms was founded in 2022 by César Bejarano and Gabriel Canedo. They work
                    together and combine their abilities to create unique objects made of wood.</h1>

                <p class="about-texto txt-1">César, who also designs under the moniker Antipop, comes from México. He
                    has a
                    degree in
                    architecture and is
                    responsible for all things related to Web 3.0 and design. His designs have won multiple
                    international awards
                    over the years. <a href="https://www.linkedin.com/in/cesarbejarano/" target="_blank">View
                        Linkedin</a></p>

                <p class="about-texto txt-2">A certified and expert cabinet maker with more than 10 years of experience,
                    Gabriel
                    is a
                    native of Spain. He runs the workshop and with exceptional craftsmanship is able to turn César’s
                    designs into
                    finished masterpieces.
                    <!-- <a href="javascript:void(0)">View Linkedin</a> -->
                </p>

                <p class="about-texto txt-3">Both are 1/2 of a whole, and Hdden Forms could not exist without either
                    one.</p>

                <div class="about-equipo">
                    <h2>Team <br>Members:</h2>
                    <a href="https://www.linkedin.com/in/cesarbejarano/" target="_blank">Founder/Artist: César
                        Bejarano</a>
                    <a href="https://www.instagram.com/ga_hdden/" target="_blank">Founder/Cabinet Maker: Gabriel
                        Canedo</a>
                    <a href="https://www.linkedin.com/in/javier-ram%C3%B3n-miranda-126475106/"
                        target="_blank">Founder/Director:
                        Javier Ramón</a>
                    <a href="https://www.linkedin.com/in/reneekrom/" target="_blank">Web 3.0 Developer: Renee Krom</a>
                    <a href="https://github.com/alexthecurator" target="_blank">Front End Developer: alexthecurator</a>
                    <a href="https://asomados.com/" target="_blank">Marketing: Asomados Marketing Digital</a>
                    <a href="http://vvorkroom.com/" target="_blank">Graphic Design: VVorkroom</a>
                    <a href="https://www.linkedin.com/in/albertselles/" target="_blank">Digital Media: Albert Selles</a>
                </div>

                <img class="figura-gris figura-gris--izq" src="./assets/img/about/obj-2.png" alt="object">
                <img class="figura-gris figura-gris--der" src="./assets/img/about/obj-2-grecia.png" alt="object grecia">
                <!-- <span class="figura-gris figura-gris--izq"></span> -->
                <!-- <span class="figura-gris figura-gris--der"></span> -->
            </div>
        </section>
    </main>

    <section>
        <?php require_once('./extra_links.php'); ?>
    </section>

    <footer>
        <?php require_once('./footer_content.php'); ?>
    </footer>

    <script type="text/javascript" src="./assets/js/init.js"></script>
    <script type="text/javascript" src="./assets/js/about/about.js"></script>
</body>

</html>