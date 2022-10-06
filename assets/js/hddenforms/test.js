function init() {
    let seccion__intro = document.querySelector('.seccion__intro')
    let intro__contenido__capa = seccion__intro.querySelector(".intro__contenido__capa")
    let intro__contenido__logohdden = seccion__intro.querySelector('.intro__contenido__logohdden')
    let intro__contenido__imagen = seccion__intro.querySelector('.intro__contenido__imagen')
    let intro__contenido__marquesina = seccion__intro.querySelector('.intro__contenido__marquesina')
    let intro__contenido__video = seccion__intro.querySelector('.intro__contenido__video')
    let letter1 = seccion__intro.querySelector('.intro__contenido__marquesina p');

    let hfseccion3 = this.document.querySelector('.seccion3')
    let hfseccion3__objeto1 = hfseccion3.querySelectorAll('.seccion3__objeto')
    let hfseccion3__objeto2 = hfseccion3.querySelector('.seccion3__img--der')

    let main__LogoCollection_cnt = document.querySelector('.main__contenedorLogoCollection')
    let main__logocollection_img = document.querySelector('.main__logocollection')

    intro__contenido__capa.style.left = 50 + '%'
    intro__contenido__capa.style.top = 50 + '%'

    for (counter = 1; counter <= 12; ++counter) {
        let clone = letter1.cloneNode(true);
        letter1.after(clone);
    }

    document.addEventListener("mousemove", positionCircle);
    intro__contenido__logohdden.addEventListener('click', () => scrollToSection(1160));

    hfseccion3__objeto2.addEventListener('click', function () {
        window.location.href = 'entombment-object1.php'
    })
    hfseccion3__objeto1.forEach(element => {
        element.addEventListener('mouseover', e => {
            gsap.to(element, {
                duration: 1.5,
                delay: 0.10,
                scale: 1.20,
                zIndex: 99,
                ease: "power4.easeInOut",
            })

            gsap.to(element.querySelector('.seccion3__objetoLink'), {
                display: 'flex',
                ease: "sine.out",
            }, '<')
        });
    });

    hfseccion3__objeto1.forEach(element => {
        element.addEventListener('mouseleave', e => {
            gsap.to(element, {
                duration: 1.5,
                delay: 0.1,
                scale: 1,
                zIndex: 0,
                ease: "power4.easeInOut",
            })

            gsap.to(element.querySelector('.seccion3__objetoLink'), {
                display: 'none',
                duration: 0.8,
                ease: "power4.out",
            }, '<')
        });
    });

    //---------------------------------------------------------------
    let tl_1 = gsap.timeline({
            scrollTrigger: {
                trigger: seccion__intro,
                start: 'top top',
                end: 'bottom+=300vh',
                scrub: true,
                pin: true,
                toggleActions: 'play none none reverse',
                markers: {
                    startColor: 'red', //crimson
                    endColor: 'red',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                },
                markers: false,
            }
        }).to(intro__contenido__capa, {
            duration: 0.5,
            opacity: 0.5
        }, '>')
        .to(intro__contenido__video, {
            duration: 0.5,
            display: 'none'
        }, '>')
        .to(intro__contenido__capa, {
            duration: 0.5,
            opacity: 0
        }, '>')
        .to(intro__contenido__capa, {
            duration: 0.5,
            display: 'none'
        }, '<')
        .fromTo(intro__contenido__imagen, {
            scale: 1.3
        }, {
            duration: 0.4,
            scale: 1
        }, '>')
        .from(intro__contenido__marquesina, {
            opacity: 0,
        }, '<')
    // -----------------------------------------
    let tl_2 = gsap.timeline({
            scrollTrigger: {
                trigger: main__LogoCollection_cnt,
                scrub: 2,
                start: 'top+=200vh top',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
                markers: {
                    startColor: 'crimson', //crimson
                    endColor: 'blue',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                },
                markers: false,
            }
        }).to(main__logocollection_img, {
            left: "calc(83.92% - 123.6px)",
            top: "calc(32.14% - -393.39px)",
            scale: 0.7,
        })

        .to(main__logocollection_img, {
            left: "calc(48% - 220px)",
            top: "calc(57% - -380px)",
            scale: 0.9,
        })
}

function positionCircle(e) {
    intro__contenido__capa.style.left = e.clientX + 'px';
    intro__contenido__capa.style.top = e.clientY + 'px';
}

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 2.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);
    init();

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () {
                animateFrom(elem, -1)
            },
            onLeave: function () {
                hide(elem)
            } // assure that the element is hidden when scrolled into view
        });
    });

});