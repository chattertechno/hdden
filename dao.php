<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>DAO</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/dao.css">
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

        <!--DAO section -->
        <section class="seccionDao">
            <div class="seccionDao__capa"></div>
            <img class="seccionDao__imagen" src="./assets/img/home.jpg" alt="imagen">

            <div class="seccionDao__contenido">

                <!-- columna-1 -->
                <div class="seccionDao__columna1">
                    <h1 class="seccionDao__titulo">Dutch Auction</h1>
                </div>

                <!-- columna-2 -->
                <div class="seccionDao__columna2">
                    <!-- sub-columna-1 -->
                    <div class="seccionDao__subcolumna-1">

                        <div class="seccionDao__form-group">
                            <label>Total Price</label>
                            <span class="txt-active">1.768 ETH</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label>Mint</label>
                            <span>2 max</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label>Mint</label>
                            <span>1.768 ETH</span>
                        </div>

                        <!-- Mint -->
                        <div class="seccionDao__form-group--mint">
                            <div class="seccionDao__form-group--mint-inner">
                                <button class="mint-btn" type="button">Mint now</button>

                                <div class="mint-progress">
                                    <div class="mint-green" style="width:40%;"></div>
                                </div>

                                <label class="mint-message">5,170 / 10,000 <span>Minted</span></label>
                            </div>
                        </div>
                    </div>

                    <!-- sub-columna-2 -->
                    <div class="seccionDao__subcolumna-2">

                        <div class="seccionDao__form-group">
                            <label class="txt-label">
                                <div>Running Time:</div>
                            </label>
                            <span class="txt-span">24 hours</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label class="txt-label">
                                <div>Starting Price:</div>
                            </label>
                            <span class="txt-span">xxx</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label class="txt-label">
                                <div>Price Drop:</div>
                            </label>
                            <span class="txt-span">Price will drop by 0.05 ETH until it <br> reaches 0.15 ETH</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label class="txt-label">
                                <div>Price Drop Frequency:</div>
                            </label>
                            <span class="txt-span">Every 20 minutes</span>
                        </div>

                        <div class="seccionDao__form-group">
                            <label class="txt-label">
                                <div>Max. Mint Allowed:</div>
                            </label>
                            <span class="txt-span">2 per wallet</span>
                        </div>

                        <!-- Time -->
                        <div class="seccionDao__form-group--time">
                            <div class="seccionDao__form-group--time-inner">
                                <label class="time-label" for="time">07:01</label>
                                <button class="time-btn" type="button">Next Price Drop</button>
                                <!-- <a class="time-btn" href="javascript: void(0)">Next Price Drop</a> -->
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!--DAO section-2 -->
        <section class="seccionDao2">
            <div class="seccionDao2__contenido">
                <!-- columna-1 -->
                <div class="seccionDao2__columna1">
                    <!-- DATE  -->
                    <div class="seccionDao2__date">
                        <span class="prev-date active">←</span>
                        <h2>July 10th, 2022</h2>
                        <span class="next-date">→</span>
                    </div>

                    <!-- INFO  -->
                    <div class="seccionDao2__info">
                        <!-- current-bind  -->
                        <div class="seccionDao2__bid">
                            <div class="seccionDao2__bid--inner">
                                <span class="bid-txt">Current bid</span>
                                <div class="seccionDao2__bar">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                                <span class="bid-val txt-active">17.98</span>
                            </div>
                        </div>
                        <!-- auction -->
                        <div class="auction-info">
                            <label class="auction-txt">Auction ends in</label>
                            <span class="auction-time">3h 56m 45s</span>
                        </div>
                        <!-- number -->
                        <div class="seccionDao2__number">
                            <div class="seccionDao2__number--inner">
                                <div class="seccionDao2__bar">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                                <!-- <span class="number-val">17.98 or more</span> -->
                                <input class="number-val" type="text" placeholder="17.98 or more">
                            </div>
                        </div>
                        <button class="bid-btn" type="button">Place bid</button>
                    </div>
                </div>

                <!-- COLUMNA-2 -->
                <div class="seccionDao2__columna2">
                    <!-- treasury -->
                    <div class="seccionDao2__treasury">
                        <div class="seccionDao2__treasury--inner">
                            <span>Treasury</span>
                            <div class="seccionDao2__bar">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>
                            <span>21,878</span>
                        </div>
                    </div>
                    <!-- imagen -->
                    <div class="seccionDao2__img">
                        <img src="./assets/img/home.jpg" alt="photo">
                    </div>
                    <!-- lista -->
                    <div class="bid-list">
                        <ul>
                            <li>
                                <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                                <img src="./assets/img/bar2.png" alt="">
                                <span class="bid-list-val">17.96</span>
                                <img src="./assets/img/arrow1.png" alt="">
                            </li>
                            <li>
                                <span class="bid-list-txt"
                                    style="width: 70%; display: inline-block">reply-with-your-ens.eth</span>
                                <img src="./assets/img/bar2.png" alt="">
                                <span class="bid-list-val">17.96</span>
                                <img src="./assets/img/arrow1.png" alt="">
                            </li>
                            <li>
                                <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                                <img src="./assets/img/bar2.png" alt="">
                                <span class="bid-list-val">17.96</span>
                                <img src="./assets/img/arrow1.png" alt="">
                            </li>
                        </ul>
                        <a class="bid-view" href="javascript:void(0)">View all bids</a>
                    </div>

                </div>
            </div>
        </section>

        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="bid-list--modal">
                    <ul>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt"
                                style="width: 70%; display: inline-block">reply-with-your-ens.eth</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                        <li>
                            <span class="bid-list-txt" style="width: 70%; display: inline-block">0xB9...03A2</span>
                            <img src="./assets/img/bar2.png" alt="">
                            <span class="bid-list-val">17.96</span>
                            <img src="./assets/img/arrow1.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    
    <footer>
        <?php require_once('./footer_content.php'); ?>
    </footer>
    
    <script type="text/javascript" src="./assets/js/init.js"></script>
    <script>
        document.querySelector('.navbar__logohdden').addEventListener("click", () => {
            this.window.location.href = 'index.php'
        })

        let seccionDao__capa = document.querySelector('.seccionDao__capa')
        seccionDao__capa.style.left = 12.5 + '%'
        seccionDao__capa.style.top = 52 + '%'
        // document.addEventListener("mousemove", positionCircle);
        // function positionCircle(e) {
        //     seccionDao__capa.style.left = e.clientX + 'px';
        //     seccionDao__capa.style.top = e.clientY + 'px';
        // }
        let btn_all_bids = document.querySelector('a.bid-view')
        let modal = document.querySelector('#myModal')
        let close = document.querySelector('#myModal .close')

        btn_all_bids.addEventListener("click", () => {
            modal.style.display = "block";
        })

        close.addEventListener("click", () => {
            modal.style.display = "none";
        })

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
</body>

</html>