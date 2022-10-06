const Timeline_WhitepaperSeccion3 = () => {

    const WhitepaperSection3 = document.querySelector('#whitepaperSection3')
    const WhitepaperSection3_img1 = document.querySelector('.whitepaperSection3_circle')
    const WhitepaperSection3_titulo = document.querySelector('.whitepaperSection3_contenido-title')
    const WhitepaperSection3_parrafo1 = document.querySelector('.whitepaperSection3_contenido-text')
    const WhitepaperSection3_img2 = document.querySelector('.whitepaperSection3_contenido-hex')

    let whitepaperSection2_img2 = document.querySelector('.whitepaperSection2_img2')

    const Tl_whitepaperSection3 = gsap.timeline({

        scrollTrigger: {
            trigger: WhitepaperSection3,
            scrub: 1.8,
            start: 'top center',
            end: 'bottom',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'blue',
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false
        },
    })

    Tl_whitepaperSection3

    .from(WhitepaperSection3_img1, {
        yPercent: -100,
        opacity: 0.01,
        duration: 2.5,
        ease: "expo.out",
    })
    .from([WhitepaperSection3_titulo], {
        xPercent: 15,
    }, '<')
    .from(WhitepaperSection3_parrafo1, {
        xPercent: 10,
        duration: 0.5,
    }, '<')
    .from(WhitepaperSection3_img2, {
        xPercent: -50,
        yPercent: -50,
    }, '<')

    return Tl_whitepaperSection3
}