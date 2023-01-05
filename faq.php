<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('./head_google_analytics_and_icon.php'); ?>
    <title>FAQ | Frequently Asked Questions.</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/init.css">
    <link rel="stylesheet" href="./assets/css/faq.css">
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

        <!--FAQ section -->
        <section class="seccionFaq">
            <div class="seccionFaq__contenedor">
                <h1 class="seccionFaq__h1">FAQ</h1>
                <div class="seccionFaq__indice">
                    <ul class="seccionFaq__ul">
                        <!-- <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Trade Discounts</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                <span>Do you offer trade discounts?</span> Yes, Hdden Forms provides a courtesy discount
                                to interior
                                designers, architects, commercial developers and the hospitality industry. To apply for
                                our trade program, please download our Trade Program Application and return it to
                                info@hddenforms.com.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Place an Order</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                <span>How do i place an order?</span>
                                Please contact us directly for all orders or inquiries either by email or through the
                                contact link at the top of this page.
                            </p>
                        </li>
                        <li class="seccionFaq__li active">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Quotes</span>
                            </a>
                            <p class="seccionFaq__parrafo">All quotes are valid for 30 days, and prices may be subject
                                to change without notice.</p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Sales</span>
                            </a>
                            <p class="seccionFaq__parrafo">All orders require a 50% non-refundable deposit. Prices may
                                be
                                subject to change without notice. Lead times begin with receipt of payment and
                                finalization of order details. Products ship when the balance due is paid in full.
                                In-stock purchases ship within 1-2 weeks unless otherwise noted.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Custom Orders</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                We do not offer custom orders on any product.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Materials</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                We produce every piece in our workshop in Madrid using local wood. All of our finishes
                                are water soluble and hand applied, and any metallic elements used are sealed.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Warranty</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                We pride ourselves in the quality of our furniture since we take care of every detail,
                                from hand selecting the wood to making sure everything is properly and beautifully
                                packed. For this reason, all of our products are guaranteed for the lifetime of the
                                original owner, against any mechanical defects or technical failures. Should an issue
                                arise with your product please inform us and we will, at our discretion, either replace
                                the defective component/item or send one of our cabinet makers to repair it wherever
                                it’s located. We cannot be held responsible for damage caused by improper use, care or
                                cleaning solutions, damage caused by exposure to weather or improper environmental
                                conditions, damage caused by improper assembly or installation (in case there is any),
                                damage caused by typical wear and tear including but not limited to scratches, dents, or
                                stains.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Damage</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                If upon receiving your new item you discover a defect, please contact us immediately and
                                we will work with you to fix the problem. Damages must be documented and reported within
                                48 hours of receipt. We cannot be held responsible for damages report after the 48 hour
                                window. In the case that damage occurred during shipment, packaging must be retained in
                                order for the claim to be successfully processed. If you are not happy with your
                                purchase for other reasons, please let us know why. We stand behind all our products and
                                will work with you to determine the best solution.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Shipping</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                We ship world-wide and are happy to arrange shipment on your behalf with our preferred
                                carrier. Long distance delivery costs must be determined by quote and may take up to
                                three business days to procure. All merchandise must be paid in full prior to shipment.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Lead Times</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                Our lead times vary depending on product, and are generally between 6 - 18 weeks. Please
                                contact us for information specific to the item(s) of your interest. Lead times begin
                                with receipt of payment and finalization of order details.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Forms of Payment</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                We accept payment by transfer or credit card (Visa, Master Card, Discover, American
                                Express). Service fees may apply.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Return Policy</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                Because of the made-to-order nature of our work, we are not able to accept returns or
                                offer exchanges. Once your order is placed, cancellations will not be permitted.
                            </p>
                        </li> -->
                        <!-- Nuevas preguntas y respuestas 16-08-22 -->
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>What is the supply?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                There is no limit to the supply. 1 Governance token will be auctioned daily, forever,
                                and a fixed amount TBA will be available to mint on the launching day.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>What is the launch date?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                TBA
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>What is the utility?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                Token holders get access to the 25 annual auctions of the utility tokens containing the
                                real-world and digital assets. Just as important, they get <span class="txt-dao">equity
                                    and governing rights in the DAO</span>,
                                a decentralized treasury that gets its income from 3 streams:
                            <ul>
                                <li>50% of proceeds from every governance token sale</li>
                                <li>50% of royalties from secondary market sales</li>
                                <li>1 out of every 5 utility tokens which contain the real-world assets, as well as
                                    the digital ones</li>
                            </ul>
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>What is the price?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                TBA
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Is there a roadmap?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                There is no need for a roadmap, as Hdden Forms will release yearly limited-edition
                                collections, which are the economic sustenance for the ecosystem. Also, every year, at a
                                certain point, the collection for the next year will be announced.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Is this a PFP project?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                This is not a PFP project.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>What are the differences and similarities with a PFP project?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                Although many PFP projects have utility, their main product and what provides economic
                                sustenance to the token’s value is the community, and most of the utility revolves
                                around that. As a consequence, the community is extremely high-maintenance. On the other
                                side, we at Hdden Forms rely on tangible utility, tokenized real-world assets released
                                constantly but in limited editions to provide economic sustenance to our tokens. While
                                our community is also a valuable asset, releasing it from the responsibility of being
                                the economy’s main economic sustenance reduces volatility and provides stability to the
                                value of the tokens.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Is there a discord server?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                The discord server will launch after the initial mint. It will be exclusive for token
                                holders.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Is there a maximum mint per wallet?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                There will be a 2 token limit per wallet in the direct sale phase. There will be no
                                limits for the auction phase, which will remain active in perpetuity.
                            </p>
                        </li>
                        <li class="seccionFaq__li">
                            <a class="seccionFaq__titulo" href="javascript:void(0)">
                                <span>Is the company Hdden Forms already legally constituded?</span>
                            </a>
                            <p class="seccionFaq__parrafo">
                                Not yet, as our top priority for now is launching the project. We are currently
                                researching our options as new regulations on Crypto surface each day. Bureaucracy will
                                slow us down, but it won’t stop us.
                            </p>
                        </li>
                    </ul>
                </div>
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
    <script>
    let navbar__logohdden = document.querySelector('.navbar__logohdden')
    navbar__logohdden.addEventListener("click", () => {
        this.window.location.href = 'index.php'
    })

    let indice = document.querySelectorAll('.seccionFaq__li')
    indice.forEach(item => {
        item.addEventListener('click', event => {

            if (item.classList.contains('active')) {
                item.classList.remove('active')
                return true
            } else {
                indice.forEach(c => c.classList.remove('active'))
                item.classList.add('active')
            }
        })
    })
    </script>
</body>

</html>