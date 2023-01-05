<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>Contact Us</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/contact-us.css">
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

        <!--Contact us section -->
        <section class="seccionContactanos">
            <h1 class="seccionContactanos__h1">Contact Us</h1>
            <div class="seccionContactanos__formulario">

                <div class="seccionContactanos__img hide">
                    <h3 class="seccionContactanos__h3--email">Send us an email <span>info@hddenforms.com</span></h3>
                    <img src="./assets/img/home.jpg" alt="photo">
                </div>
                <span class="seccionContactanos__span mensaje">The fields marked * are required.</span>
                <form action="./assets/data/send-contact-us.php" autocomplete="off" method="POST">

                    <div class="col__form">
                        <!-- name -->
                        <div class="seccionContactanos__form-group">
                            <label for="Name">Name*</label>
                            <input type="text" name="name" autocomplete="off" value="">
                        </div>
                        <!-- email -->
                        <div class="seccionContactanos__form-group">
                            <label for="email">Email*</label>
                            <input type="email" name="email" autocomplete="off" value="">
                        </div>
                        <!-- mobile -->
                        <div class="seccionContactanos__form-group">
                            <label for="Mobile">Mobile</label>
                            <select name="mobile_code" placeholder="Mobile"></select>
                            <input type="text" name="mobile" autocomplete="off" value="">
                        </div>
                        <!-- nationality -->
                        <div class="seccionContactanos__form-group hide">
                            <label class="" for="Nationality">Nationality</label>
                            <select name="nationality" placeholder="Nationality">
                            </select>
                        </div>
                        <!-- location -->
                        <div class="seccionContactanos__form-group hide">
                            <label class="" for="location">Location</label>
                            <select name="location" placeholder="Location">
                            </select>
                        </div>
                        <!-- name -->
                        <div class="seccionContactanos__form-group">
                            <label for="Wallet">Wallet</label>
                            <input type="text" name="wallet" autocomplete="off" value="">
                        </div>
                        <!-- <span class=""></span> -->
                    </div>

                    <div class="col__form">
                        <div class="seccionContactanos__form-group">
                            <textarea name="message" cols="50" rows="15" placeholder="Tell us something..."></textarea>
                        </div>
                    </div>

                    <div class="col__form">
                        <button type="submit" class="btn-enviar">Send</button>
                    </div>
                </form>
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
    <script type="text/javascript" src="./assets/js/contact-us/index.js"></script>
</body>

</html>