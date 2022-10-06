<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>Work in Progress...</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
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

        <!--Coming soon section -->
        <section class="seccionComingsoon">
            <div class="seccionComingsoon__contenedor">

                <div>
                    <span>Work in Progress</span>
                    <a href="<?php echo isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER']:'index.php' ?>">Go
                        Back</a>
                </div>

                <div>
                    <span>Sorry for the inconvenience</span>
                </div>

                <div>
                    <span>¯\_(ツ)_/¯</span>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <?php require_once('./footer_content.php'); ?>
    </footer>

    <script type="text/javascript" src="./assets/js/init.js"></script>
    <script>
        document.querySelector('.navbar__logohdden').addEventListener("click", () => {
            this.window.location.href = 'index.php'
        })
    </script>
</body>

</html>