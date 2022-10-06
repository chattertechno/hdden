<?php

    echo '
    <nav class="navbar">
        <img class="navbar__logohdden" src="./assets/img/hddenforms.svg" alt="Company Logo">
        <div class="navbar__menu-togle" id="navbar__mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav">
            <li class="nav__item">
                <ul class="nav__item-submenu">
                    <li><a href="coming-soon.php">DAO</a></li>
                    <li><a href="whitemap.php">Whitemap</a></li>
                    <li><a href="index.php?collection" class="to__collection">Collection</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="faq.php">FAQ</a></li>
                </ul>
            </li>
            <li class="nav__item"><a href="coming-soon.php">Discord</a></li>
            <li class="nav__item"><a href="https://twitter.com/HddenForms" target="_blank">Twitter</a></li>
            <!-- <li class="nav__item"><a href="coming-soon.php">Instagram</a></li> -->

            <li class="nav__item">
                <a class="nav__item--mint" href="coming-soon.php">Mint Now</a>
            </li>
            <li class="nav__item">
                <a class="nav__item--wallet" href="javascript:void(0)">
                    <img class="navbar_item-img" src="./assets/img/menu/connect_to.svg" alt="ConnectToWallet">
                    <span>Connect to Wallet</span>
                </a>
            </li>
            <!-- <li class="nav__item"><a href="javascript:void(0)"><img class="navbar_item-img" src="./assets/img/menu/connect_to.svg" alt="connect_to_wallet"></a></li> -->
        </ul>
    </nav>';
?>