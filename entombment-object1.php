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

            <img class="object1Hero__bg" src="./assets/img/obj1covered.webp" alt="Object 1">
            <h1 class="object1Hero__titulo">The Entombment Collection<br>Object 1</h1>
        </section>

        <!-- object1 Seciton 1 -->
        <section id="object1Section1">
            <div class="object1Section1_contenido">
                <h2 class="object1Section1__titulo">The Entombment Collection<br> Object 1</h2>

                <div class="object1Section1__ul">
                    <ul class="gs_reveal gs_reveal_fromLeft">
                        <li>Wood</li>
                        <li>Finish</li>
                        <li>Dimensions</li>
                    </ul>

                    <ul class="gs_reveal gs_reveal_fromRight">
                        <li>White Ash</li>
                        <li>Proprietary mix of waxes.</li>
                        <li>91 cm. / 191 cm. / 75 cm.</li>
                    </ul>
                </div>

                <p class="gs_reveal gs_reveal_fromLeft">Object 1 is part of The Entombment: a collection of 2 functional pieces made from solid white ash. It
                    is characterized by a seeming frailness, achieved by the juxtaposition of heavy and light elements
                    and by the delicate touch between the components of the pieces and the pieces and the surface on
                    which they stand.</p>
                <p class="gs_reveal gs_reveal_fromLeft">The Greeks, unlike the Romans, always used columns structurally. Object 1 draws inspiration from the
                    Greek column of the Doric order, which originated in wood. It formally simplifies the weight-bearing
                    column and takes it back to its wooden beginnings..</p>

                    <div class="relative">
                                                    <img id="obj2" class="object1Section1__photo gs_reveal" src="./assets/img/obj1transparentNew.webp" alt="photo">
                                                      </div>
            </div>

        </section>

        <!-- object1 Seciton 2 -->
        <section id="object1Section2">
            <img class="object1Section2__photo1 gs_reveal gs_reveal_fromRight"
                src="./assets/img/collection/photo2_obj2.png" alt="photo">
            <div class="object1Section2_contenido">
                <a href="javascript:void(0)"
                    class="object1Section2_link btn btn-circulo-verde btn-circulo-verde--lg gs_reveal"
                    href="#object1Section2">Set an Auction<br> Reminder</a>
                <img class="object1Section2__photo2 gs_reveal gs_reveal_fromLeft" src="./assets/img/withrose.webp"
                    alt="Object">
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
                <img class="object1Section3__photo1 gs_reveal gs_reveal_fromLeft" src="./assets/img/obj2covered.webp"
                    alt="Object">
                <img class="object1Section3__photo1 gs_reveal gs_reveal_fromRight" src="./assets/img/withbook.webp"
                    alt="Object">
                <!-- <h2 class="object1Section3__titulo"><span>The Entombment Collection, Object 1,</span><a href="coming-soon.php">Coming soon...</a></h2> -->
                <h2 class="object1Section3__titulo gs_reveal"><a href="entombment-object2.php">Go to Next Object</a></h2>
            </div>
        </section>

        <!-- modal reminder -->
        <div class="modal-reminder">

            <span class="modal_close">✕</span>

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