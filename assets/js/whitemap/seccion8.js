const Timeline_WhitepaperSeccion8 = (Navbar) => {

    const WhitepaperSection8 = document.querySelector('#whitepaperSection8')
    const WhitepaperSection8__contenido = document.querySelector('.whitepaperSection8_contenido')
    const WhitepaperSection8__h2 = document.querySelector('.whitepaperSection8_contenido h2')
    const WhitepaperSection8__contenidoP1 = document.querySelector('.whitepaperSection8_contenido p:nth-of-type(1)')
    const WhitepaperSection8__contenidoP2 = document.querySelector('.whitepaperSection8_contenido p:nth-of-type(2)')
    const WhitepaperSection8__lista1 = document.querySelectorAll('.whitepaperSection8_contenido .contenedor-lista ul:nth-of-type(1)')
    const WhitepaperSection8__lista2 = document.querySelectorAll('.whitepaperSection8_contenido .contenedor-lista ul:nth-of-type(2)')
    const WhitepaperSection8__img1 = document.querySelector('.whitepaperSection8_contenido img:nth-of-type(1)')
    const WhitepaperSection8__img2 = document.querySelector('.whitepaperSection8_contenido img:nth-of-type(2)')
    const WhitepaperSection8__link = document.querySelector('.whitepaperSection8_contenido a')

    const Tl_whitepaperSection8 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection8,

            scrub: 2,
            start: 'top-=50 center',
            end: 'center+=200 center',
            // start: 'top-=50 center',
            // end: 'center+=50 center',

            // scrub: true,
            // pin: true,
            // start: 'top top',
            // end: 'bottom+=50vh',

            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'orange', //
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection8
    .from(WhitepaperSection8__contenidoP1, {
        duration: 2,
        opacity: 0,
        y: -50,
        x: -50,
        scale: 2.05
    })
    .from(WhitepaperSection8__h2, {
        duration: 2,
        opacity: 0,
        y: -50,
        x: -50,
        scale: 1.05
    }, '<')
    .from(WhitepaperSection8__contenidoP2, {
        duration: 2,
        opacity: 0,
        y: -50,
        x: -50,
        scale: 1.05
    }, '<+=0.5')
    .from(WhitepaperSection8__lista1, {
        duration: 2,
        yPercent: -25,
        // scale: 0.5,
    }, '<+=0.5')
    .from(WhitepaperSection8__lista2, {
        duration: 2,
        yPercent: 25,
        // scale: 0.5,
    }, '<')
    .from([WhitepaperSection8__img1, WhitepaperSection8__img2], {
        duration: 2,
        opacity:0,
        xPercent: 25,
        yPercent: -25,
    }, '<')

    .from(WhitepaperSection8__link, {
        duration: 2,
        opacity: 0,
        xPercent: -25,
    }, '<+=1')


    // .from(WhitepaperSection8__contenidoP1, {
    //     duration: 2,
    //     xPercent: -10,
    //     opacity: 0.5,
    // })
    // .from(WhitepaperSection8__h2, {
    //     duration: 2,
    //     xPercent: -10,
    //     opacity: 0,
    // }, '>+=0.5')
    // .from(WhitepaperSection8__contenidoP2, {
    //     duration: 2,
    //     xPercent: -10,
    //     opacity: 0.5,
    // }, '>+=0.5')
    // .from(WhitepaperSection8__lista1, {
    //     duration: 2,
    //     y: -50
    // }, '<')
    // .from(WhitepaperSection8__lista2, {
    //     duration: 2,
    //     yPercent: 50
    // }, '<')
    // .fromTo(WhitepaperSection8__img1, {
    //     xPercent: -10,
    //     yPercent: 50,
    // }, {
    //     duration: 2,
    //     x: 0,
    //     y: 0,
    //     ease: "circ.inOut",
    // }, '<')
    // .fromTo(WhitepaperSection8__img2, {
    //     x: 95,
    //     opacity: 0,
    // }, {
    //     x: 0,
    //     opacity: 1,
    //     ease: "circ.inOut",
    // }, '<')
    // .from(WhitepaperSection8__link, {
    //     duration: 2,
    //     opacity: 0,
    //     y: 52,
    //     scale: 1.05,
    // }, '<')



    // .to([WhitepaperSection8__link, WhitepaperSection8__img2, WhitepaperSection8__img1,
    //     WhitepaperSection8__lista2, WhitepaperSection8__lista1, WhitepaperSection8__contenidoP2,
    //     WhitepaperSection8__h2, WhitepaperSection8__contenidoP1
    // ], {
    //     duration: 2,
    //     scale: 1.05,
    // },'<-=0.5')

    return Tl_whitepaperSection8;
}