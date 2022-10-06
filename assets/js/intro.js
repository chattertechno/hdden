gsap.registerPlugin(ScrollTrigger)

function init() {

    const tl_intro = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            start: 'top top',
            end: 'bottom+=300vh',
            scrub: true,
            pin: true,
            markers: false
        }
    })

    tl_intro
        .to('.intro__contenido__capa', {
            duration: 0.5,
            opacity: 0.5
        })
        .to('.intro__contenido__video', {
            duration: 0.5,
            display: 'none'
        })
        .to('.intro__contenido__capa', {
            duration: 0.5,
            opacity: 0
        })
        .to('.intro__contenido__capa', {
            duration: 0.5,
            display: 'none'
        }, )
        .to('.intro__contenido__imagen', {
            duration: 0.4,
            scale: 1.5
        }, '-=1')
        .to('.intro__contenido__marquesina', {
            opacity: 1
        }, '-=0.5')
}

window.addEventListener('load', function () {
    init();
    const intro__contenido__capa = document.querySelector(".intro__contenido__capa")
    const navbar__logohdden = document.querySelector(".navbar__logohdden")

    document.addEventListener("mousemove", positionCircle);
    navbar__logohdden.addEventListener("click", scrollToIntro);

    function positionCircle(e) {
        intro__contenido__capa.style.left = e.clientX + 'px';
        intro__contenido__capa.style.top = e.clientY + 'px';
    }
})
