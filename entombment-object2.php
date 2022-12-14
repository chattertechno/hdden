<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>The Entombment Collection Object 2</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/object.css">
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

    <main class="object1__contenido">

        <!-- object1 hero -->
        <section id="object1Hero" class="">

            <svg class="object1Himg" viewBox="3 -1.4 570 872">
                <path class="object1Himg__sto_two"
                    d="M168.09 871.88H0V0h168.09v395.43c22.97-70.14 105.2-100.36 158.41-100.36 148.74 0 226.13 99.15 226.13 269.66v307.15H384.54V570.77c0-73.76-53.2-112.46-103.99-112.46s-112.46 29.02-112.46 114.88v298.69ZM459.43 0c56.83 0 102.79 42.33 102.79 97.95s-45.96 99.16-102.79 99.16-105.2-43.54-105.2-99.16S402.6 0 459.43 0Z" />
            </svg>

            <img class="object1Hero__bg" src="./assets/img/home.jpg" alt="Object 1">
            <h1 class="object1Hero__titulo">The Entombment Collection<br>Object 2</h1>
        </section>

        <!-- object1 Seciton 1 -->
        <section id="object1Section1">
            <div class="object1Section1_contenido">
                <h2 class="object1Section1__titulo">The Entombment Collection<br> Object 2</h2>

                <div class="object1Section1__ul">
                    <ul>
                        <li>Wood</li>
                        <li>Finish</li>
                        <li>Dimensions</li>
                    </ul>

                    <ul>
                        <li>White Ash</li>
                        <li>Proprietary mix of waxes.</li>
                        <li>75 cm. / 191 cm. / 91 cm.</li>
                    </ul>
                </div>

                <p>Object 2 is the first object released from The Entombment Collection. It is constructed 100% entirely
                    out
                    of wood, with no metal supports of any type used for the complex system of joinery.</p>
                <p>The positioning of the spheres, along with their small areas of contact, provide Object 2 with a
                    false
                    sense of frailty and imbalance, and the users with a sense of surprise when they find out the real
                    sturdiness of the piece.</p>
            </div>

            <img id="obj2" class="object1Section1__photo" src="./assets/img/collection/photo1_obj2.png" alt="photo">
        </section>

        <!-- object1 Seciton 2 -->
        <section id="object1Section2">
            <img class="object1Section2__photo1 gs_reveal gs_reveal_fromRight"
                src="./assets/img/collection/photo2_obj2.png" alt="photo">
            <div class="object1Section2_contenido">
                <a href="javascript:void(0)"
                    class="object1Section2_link btn btn-circulo-verde btn-circulo-verde--lg gs_reveal"
                    href="#object1Section2">Set an Auction<br> Reminder</a>
                <img class="object1Section2__photo2 gs_reveal gs_reveal_fromLeft"
                    src="./assets/img/collection/photo3_obj2.jpg" alt="Object">
            </div>
        </section>

        <!-- object1 Seciton 3 -->
        <!-- <section id="object1Section3">
      <div class="object1Section3_contenido">
        <img class="object1Section3__photo1" src="./assets/img/collection/photo_7.png" alt="Object">
        <h2 class="object1Section3__titulo"><span>The Entombment Collection, Object 1,</span><a
            href="coming-soon.php">Coming soon...</a>
        </h2>
      </div>
    </section> -->
        <section id="object1Section3">
            <div class="object1Section3_contenido">
                <img class="object1Section3__photo1 gs_reveal gs_reveal_fromLeft"
                    src="./assets/img/collection/photo4_obj2.jpg" alt="Object">
                <img class="object1Section3__photo1 gs_reveal gs_reveal_fromRight"
                    src="./assets/img/collection/photo5_obj2.jpg" alt="Object">
                <!-- <h2 class="object1Section3__titulo"><span>The Entombment Collection, Object 1,</span><a href="coming-soon.php">Coming soon...</a></h2> -->
                <h2 class="object1Section3__titulo gs_reveal"><a href="coming-soon.php">Go to Next Object</a></h2>
            </div>
        </section>

        <!-- modal reminder -->
        <div class="modal-reminder">

            <span class="modal_close">???</span>

            <form action="./assets/data/send.php" autocomplete="off" method="POST" id="formAuctionReminder">
                <!-- name -->
                <div class="modal_form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" name="name" autocomplete="off">
                </div>

                <!-- last name -->
                <div class="modal_form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="last_name" autocomplete="off">
                </div>

                <!-- email -->
                <div class="modal_form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" autocomplete="off">
                </div>

                <!-- country -->
                <div class="modal_form-group">
                    <label for="country">Country:</label>
                    <select name="country" placeholder="Country">
                    </select>
                </div>
                <span class="mensaje"></span>
                <div class="modal_checkboxes">
                    <label><input name="remind_auction_dates" type="checkbox" value="1"> Remind me of auction
                        dates</label>

                    <label><input name="receive_news" type="checkbox" value="1"> I would like to receive all the news
                        and
                        updates</label>
                </div>
                <button type="submit" class="btn btn-enviar">Send</button>


                <p class="modal_terms">By clicking SEND you confirm that you accept our <a href="terms-conditions.php"
                        target="_blank">Terms of
                        Service</a></p>
            </form>
        </div>
    </main>

    <section>
        <?php require_once('./extra_links.php'); ?>
    </section>

    <footer>
        <?php require_once('./footer_content.php'); ?>
    </footer>

    <script type="text/javascript" src="./assets/js/init.js"></script>
    <script type="text/javascript" src="./assets/js/object/auction_reminder.js"></script>
    <script type="text/javascript" src="./assets/js/object/object2.js"></script>
</body>

</html>