window.addEventListener('load', function () {

    let isMobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        isMobile = true
        
    const Navbar = document.querySelector("header")
    let seccion__intro = document.querySelector(".seccion__intro")
    const Intro__contenido__capa = seccion__intro.querySelector(".intro__contenido__capa")
    const Intro__contenido__logohdden = seccion__intro.querySelector('.intro__contenido__logohdden')
    const Main__logocollection = seccion__intro.querySelector('.main__logocollection')
    const seccion3__objeto1 = this.document.querySelector('.seccion3__img--izq')
    const seccion3__objeto2 = this.document.querySelector('.seccion3__img--der')
    let letter1 = seccion__intro.querySelector('.intro__contenido__marquesina p');

    Timeline_HddenFormSeccionIntro()
    Intro__contenido__capa.style.left = 50 + '%'
    Intro__contenido__capa.style.top = 50 + '%'
    Intro__contenido__logohdden.addEventListener('click', () => scrollToSection(1050));

    if (isMobile == false) {
        Timeline_HddenFormSeccion1()
        Timeline_HddenFormSeccion2(Main__logocollection)
        Timeline_HddenFormSeccion3()
        Timeline_LogoCollection(Main__logocollection)

        document.addEventListener("mousemove", positionCircle);

        function positionCircle(e) {
            Intro__contenido__capa.style.left = e.clientX + 'px';
            Intro__contenido__capa.style.top = e.clientY + 'px';
        }
    } else {
        // Mostrar menú al cargar la pag.
        // gsap.to(Navbar, { duration: 0.5, delay: 1, opacity: 1 }, '-=1')
    }
    
    for (counter = 1; counter <= 12; ++counter) {
        let clone = letter1.cloneNode(true);
        letter1.after(clone);
    }

    // pag. pieza
    seccion3__objeto2.addEventListener('click', function () {
        window.location.href = 'entombment-object1.php'
    })

})