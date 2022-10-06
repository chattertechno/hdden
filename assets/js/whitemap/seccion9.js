
const Timeline_WhitepaperSeccion9  = () => {

    const WhitepaperSection9 = document.querySelector('#whitepaperSection9')
    const whitepaperSection9__h1 = document.querySelector('.whitepaperSection9_contenido h2')
    const whitepaperSection9__p1 = document.querySelector('.whitepaperSection9_contenido p:nth-of-type(1)')
    const whitepaperSection9__p2 = document.querySelector('.whitepaperSection9_contenido p:nth-of-type(2)')
    const whitepaperSection9__p3 = document.querySelector('.whitepaperSection9_contenido p:nth-of-type(3)')
    const WhitepaperSection9__lista1 = document.querySelectorAll('.whitepaperSection9_contenido .contenedor-lista ul:nth-of-type(1) li')
    const WhitepaperSection9__lista2 = document.querySelectorAll('.whitepaperSection9_contenido .contenedor-lista ul:nth-of-type(2) li')
    const WhitepaperSection9_ventaja = document.querySelectorAll('.whitepaperSection9_ventaja')
    const WhitepaperSection9__img1 = document.querySelector('.whitepaperSection9_contenido img')

    const Tl_whitepaperSection9 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection9,
            scrub: 2,
            pin: true,
            start: 'top top',
            end: 'bottom+=50vh',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'darkcyan', //
                endColor: 'darkblue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection9
    .from(whitepaperSection9__p1, {
        duration: 2,
        opacity: 0,
        xPercent: -30,
        scale: 1.05,
    })
    .from(whitepaperSection9__h1, {
        duration: 2,
        scale: 1.05,
        xPercent: -1,
    },'<+=1')
    .from([whitepaperSection9__p2, whitepaperSection9__p3], {
        duration: 2,
        opacity: 0,
        xPercent: 5,
    }, '<+=1')
    .from(WhitepaperSection9__lista1, {
        duration: 2,
        opacity: 0,
        stagger: 2,
    },'<')
    .from(WhitepaperSection9__lista2, {
        duration: 2,
        opacity: 0,
        stagger: 2,
    },'<+=1.5')
    .from(WhitepaperSection9_ventaja[0], {
        duration: 2,
        opacity: 0,
        xPercent: 40,
        scale: 0.9,
        ease: 'Circ.easeInOut',
    }, '>+=1')
    .from(WhitepaperSection9_ventaja[1], {
        duration: 2,
        opacity: 0,
        xPercent: 40,
        scale: 0.9,
        ease: 'Circ.easeInOut',
    }, '>+=1')
    .from(WhitepaperSection9_ventaja[2], {
        duration: 2,
        opacity: 0,
        xPercent: 40,
        scale: 0.9,
        ease: 'Circ.easeInOut',
    }, '>+=1')
    .from(WhitepaperSection9_ventaja[3], {
        duration: 2,
        opacity: 0,
        xPercent: 40,
        scale: 0.9,
        ease: 'Circ.easeInOut',
    }, '>+=1')
    .from(WhitepaperSection9_ventaja[4], {
        duration: 2,
        opacity: 0,
        xPercent: 40,
        scale: 0.9,
        ease: 'Circ.easeInOut',
    }, '>+=1')
    .from('.whitepaperSection9_pie', {
        delay: 2,
        duration: 2,
        opacity: 0,
        xPercent: 5,
    }, '<+=2')
    return Tl_whitepaperSection9;
}