let seccion__intro = document.querySelector('.seccion__intro')
let intro__contenido__capa = seccion__intro.querySelector(".intro__contenido__capa")
let intro__contenido__logohdden = seccion__intro.querySelector('.intro__contenido__logohdden')
let intro__contenido__imagen = seccion__intro.querySelector('.intro__contenido__imagen')
let intro__contenido__marquesina = seccion__intro.querySelector('.intro__contenido__marquesina')
let intro__contenido__video = seccion__intro.querySelector('.intro__contenido__video')
let letter1 = seccion__intro.querySelector('.intro__contenido__marquesina p');

let hfseccion3 = this.document.querySelector('.seccion3')
let hfseccion3__red_whitemap = hfseccion3.querySelectorAll('.seccion3__link')
let hfseccion3__objetos = hfseccion3.querySelectorAll('.seccion3__objeto')

let hfseccion3__objeto1 = hfseccion3.querySelector('.seccion3__objeto.obj1')
let hfseccion3__objeto2 = hfseccion3.querySelector('.seccion3__objeto.obj2')

function init() {
    intro__contenido__capa.style.left = 50 + '%'
    intro__contenido__capa.style.top = 50 + '%'

    for (counter = 1; counter <= 12; ++counter) {
        let clone = letter1.cloneNode(true);
        letter1.after(clone);
    }

    document.addEventListener("mousemove", positionCircle);
    intro__contenido__logohdden.addEventListener('click', () => scrollToSection(580));

    // objeto-1 --------------------------------------------------------------------
    hfseccion3__objeto1.addEventListener('mouseover', e => {
        hfseccion3__objeto1.querySelector('img').src = './assets/img/collection/objs/photo_obj1-naranja.jpg';
 
         gsap.to( hfseccion3__objeto1.querySelector('img'), {
             duration: 1,
             delay: 0.10,
             scale: 1.20,
             zIndex: 1,
             ease: "power4.easeInOut",
         })
     });

     hfseccion3__objeto1.addEventListener('mouseleave', e => {
         hfseccion3__objeto1.querySelector('img').src = './assets/img/collection/objs/photo_obj1.jpg';
         gsap.to( hfseccion3__objeto1.querySelector('img'), {
             duration: 1,
             delay: 0.1,
             scale: 1,
             zIndex: 0,
             ease: "power4.easeInOut",
         })
     });

     hfseccion3__objeto1.addEventListener("click", () => {
        this.window.location.href = 'coming-soon.php'
    })
    
    // objeto-2 --------------------------------------------------------------------
    hfseccion3__objeto2.addEventListener('mouseover', e => {
       hfseccion3__objeto2.querySelector('img').src = './assets/img/collection/objs/photo_obj2-naranja.jpg';

        gsap.to( hfseccion3__objeto2.querySelector('img'), {
            duration: 1,
            delay: 0.10,
            scale: 1.20,
            zIndex: 1,
            ease: "power4.easeInOut",
        })
    });
    hfseccion3__objeto2.addEventListener('mouseleave', e => {
        hfseccion3__objeto2.querySelector('img').src = './assets/img/collection/objs/photo_obj2.jpg';
        gsap.to( hfseccion3__objeto2.querySelector('img'), {
            duration: 1,
            delay: 0.1,
            scale: 1,
            zIndex: 0,
            ease: "power4.easeInOut",
        })
    });
  
    hfseccion3__objeto2.addEventListener("click", () => {
        this.window.location.href = 'entombment-object2.php'
    })
}

function positionCircle(e) {
    intro__contenido__capa.style.left = e.clientX + 'px';
    intro__contenido__capa.style.top = e.clientY + 'px';
}

function animateIntro() {
    gsap.timeline({
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
            opacity: 0.75
        }, '>')

        .to(intro__contenido__capa, {
            duration:1,
            opacity: 0
        }, '>')

        .to(intro__contenido__video, {
            duration: 0.5,
            opacity: 0
        }, '>+=1')

        // .to(intro__contenido__capa, {
        //     duration: 0.5,
        //     opacity: 0
        // }, '>')
        // .to(intro__contenido__capa, {
        //     duration: 0.5,
        //     display: 'none'
        // }, '<')
        .fromTo(intro__contenido__imagen, {
            scale: 1.3
        }, {
            duration: 0.4,
            scale: 1
        }, '>')
        .from(intro__contenido__marquesina, {
            opacity: 0,
        }, '<')
}

function animateMoverLogo() {
    
    let main__LogoCollection_cnt = document.querySelector('.main__contenedorLogoCollection')
    let main__logocollection_img = main__LogoCollection_cnt.querySelector('.main__logocollection')
    let screen_width = window.screen.width
    let mov_top = 'calc(50% - -157px)'
    let mov_left = 'calc(50% - 507px)'

    console.log(`width: ${screen_width}`)

    if (screen_width > 1900) {
        console.log('top and left changed')
        mov_top = 'calc(50% - -244px)'
        mov_left = 'calc(50% - 484px)'
    }
    
    gsap.timeline({
        scrollTrigger: {
            trigger: main__LogoCollection_cnt,
            scrub: 2,
            start: 'top+=300vh top',
            end: 'center+=100',
            
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson', //crimson
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })
    .to(main__logocollection_img, {
        top: mov_top,
        left: mov_left,
        scale: 1.4
    })
}

function animateMovimientoLogo(elemento, noX, noY, time) {
   
    const array = document.querySelectorAll(elemento);
    const randomX = random(noX, 20);
    const randomY = random(noY, 30);
    const randomTime = random(time, 5);

    array.forEach( item => {
        TweenLite.set(item, {
            x: randomX(-1),
            y: randomX(1),
        });
        moveX(item, 1);
        moveY(item, -1);
    });

    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;;
    } 
}

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("an_revelar_izq")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("an_revelar_der")) {
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

function ocultar(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}
document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);
    init()
    animateIntro()
    animateMoverLogo()
    animateMovimientoLogo("img.main__logocollection", 20, 10, 3)
    animateMovimientoLogo("a.seccion3__link", 19, 29, 4)
    animateMovimientoLogo("div.obj1 > *",10, 20, 5)
    animateMovimientoLogo("div.obj2 .img", 20, 10, 3)

    $(window).resize(function() {
        animateMoverLogo()
    });

    
    gsap.utils.toArray(".an_revelar").forEach(function (elem) {
        ocultar(elem); // asegurar que el elemento se oculta cuando se desplaza a la vista
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () {
                animateFrom(elem, -1)
            },
            onLeave: function () {
                ocultar(elem)
            } // asegurar que el elemento se oculta cuando se desplaza a la vista
        });
    });
});