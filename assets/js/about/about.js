var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}


function init() {

    const navbar = document.querySelector(".navbar")
    let navbar__logohdden = navbar.querySelector('.navbar__logohdden')

    // Sección about ---------------------------------------------
    const aboutSection = document.querySelector("#aboutSection")
    const about__titulo = aboutSection.querySelector("h1.about-titulo")
    const about__texto1 = aboutSection.querySelector("p.txt-1")
    const about__texto2 = aboutSection.querySelector("p.txt-2")
    const about__texto3 = aboutSection.querySelector("p.txt-3")
    const about__photoizq = aboutSection.querySelector('.figura-gris--izq')

    const about__equipoH2 = aboutSection.querySelectorAll(".about-equipo h2")

    const about__photoder = aboutSection.querySelector('.figura-gris--der')
    const about__equipoLink = aboutSection.querySelectorAll(".about-equipo a")

    navbar__logohdden.addEventListener("click", () => {
        this.window.location.href = 'index.php'
    })

    gsap.fromTo(about__titulo, {
        yPercent: -5,
        opacity:0
    }, {
        yPercent: 0,
        opacity: 1,
    }, '>')

    gsap.fromTo([about__texto1], {
        yPercent: -5,
        opacity:0
    }, {
        yPercent: 0,
        opacity: 1,
    }, '>')

    gsap.fromTo([about__texto2], {
        yPercent: -5,
        opacity:0
    }, {
        yPercent: 0,
        opacity: 1,
    }, '>')

    gsap.fromTo([about__photoder], {
        yPercent: -5,
        opacity:0
    }, {
        yPercent: 0,
        opacity: 1,
    }, '>')

    

    

    if (isMobile == false) {
        // scrollToSection('.about-texto')
        about__titulo.classList.opacity =  0;

        const tl__aboutSection = gsap.timeline({
            scrollTrigger: {
                trigger: '.aboutSection_contenido',
                scrub: 2.5,
                toggleActions: 'play none none reverse',
                start: 'top+=200 center',
                end: 'bottom-=100 center',
                markers: false,
            }
        })

        tl__aboutSection
            .from(about__titulo, {
                y: 50
            },'-=0.5')
            .from(about__texto1, {
                duration: 1,
                y: 50,
                x: 50,
            }, '<')

            .from([about__texto2], {
                duration: 1.5,
                x: 50,
            }, '<-=0.5')

            .from([about__texto3], {
                y: -50,
                opacity: 0,
                duration: 1.5,
            }, '<')

            // .from(about__photoizq, {
            //     duration: 1.5,
            //     y: 200,
            // }, '<')

         
            .from(about__photoder, {
                yPercent: 36
            }, '<')

            .from([about__equipoLink], {
                stagger: 0.2,
                x: -20,
                delay: 0.5,
                opacity:0,
            }, '<')

              .from(about__equipoH2, {
                duration: 1.5,
                y: -50,
            }, '<')

    }
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
        return (direction = 1) => (min + delta * Math.random()) * direction;
    } 
}

document.addEventListener("DOMContentLoaded", function () {
    init()
    animateMovimientoLogo(".figura-gris--izq", 20, 10, 3)
})

// window.addEventListener('load', function () {
    
// })