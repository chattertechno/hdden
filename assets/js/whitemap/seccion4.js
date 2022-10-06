const Timeline_WhitepaperSeccion4 = () => {

    let Tl_whitepaperSection4 = gsap.timeline()
    let whitepaperSection4 = document.querySelector('#whitepaperSection4')
    let whitepaperSection4_texto1 = whitepaperSection4.querySelector('.whitepaperSection4_contenido span')
    let whitepaperSection4_parrafo1 = whitepaperSection4.querySelector('.whitepaperSection4_contenido p')

    let whitepaperSection4_flecha1 = whitepaperSection4.querySelector('.whitepaperSection4_contenido-flecha:nth-of-type(1)')
    let whitepaperSection4_flecha2 = whitepaperSection4.querySelector('.whitepaperSection4_contenido-flecha:nth-of-type(2)')
    let whitepaperSection4_flecha3 = whitepaperSection4.querySelector('.whitepaperSection4_contenido-flecha:nth-of-type(3)')

    //paso 1
    let whitepaperSection4_paso1 = whitepaperSection4.querySelector('.whitepaperSection4_contenido_step:nth-of-type(1)')
    let whitepaperSection4_img1 = whitepaperSection4_paso1.querySelector('.whitepaperSection4_contenido_step:nth-of-type(1) img')
    let whitepaperSection4_p1 = whitepaperSection4_paso1.querySelector('.whitepaperSection4_contenido_step:nth-of-type(1) p')
    //paso 2
    let whitepaperSection4_paso2 = whitepaperSection4.querySelector('.whitepaperSection4_contenido_step:nth-of-type(2)')
    let whitepaperSection4_img2 = whitepaperSection4_paso2.querySelector('.whitepaperSection4_contenido_step:nth-of-type(2) img')
    let whitepaperSection4_p2 = whitepaperSection4_paso2.querySelector('.whitepaperSection4_contenido_step:nth-of-type(2) p')
    //paso 3
    let whitepaperSection4_paso3 = whitepaperSection4.querySelector('.whitepaperSection4_contenido_step:nth-of-type(3)')
    let whitepaperSection4_img3 = whitepaperSection4_paso3.querySelector('.whitepaperSection4_contenido_step:nth-of-type(3) img')
    let whitepaperSection4_p3 = whitepaperSection4_paso3.querySelector('.whitepaperSection4_contenido_step:nth-of-type(3) p')

    let seccion4 = {
        trigger: whitepaperSection4_paso1,
        scrub: 2.5,
        start: 'top-=250 center',
        end: 'bottom+=400 center',
        toggleActions: 'play none none reverse',
        markers: {
            startColor: 'purple',
            endColor: 'red',
            fontSize: '2rem',
            fontWeight: 'bold'
        },
        markers: false
    }

    Tl_whitepaperSection4
        
        // Paso 1 ----- (Own a Governance Token)
        .from(whitepaperSection4_img1, {
            xPercent: -50,
            duration: 2
        })
        .from(whitepaperSection4_p1, {
            xPercent: 50,
            duration: 2
        }, '<')
        .from(whitepaperSection4_flecha1, {
            duration: 2,
            opacity: 0,
            y: 20, // yPercent: -50,
            x: 4, // xPercent: -50,
            rotate: 30,
        }, '<+=1')

        .to([whitepaperSection4_paso1], {
            scale: 1.08,
        }, '<')

        // intermedio -----
        .to([whitepaperSection4_texto1, whitepaperSection4_parrafo1], {
            duration: 2,
            scale: 1.05,
            opacity: 0.8,
        }, '>')

        // Paso 2 ----- (That allows access to the auction of Utility NFT’s)
        .from(whitepaperSection4_img2, {
            xPercent: 50,
            duration: 2,
        }, '<')
        .from(whitepaperSection4_p2, {
            xPercent: -50,
            duration: 2,
        }, '<')
        .from(whitepaperSection4_flecha2, {
            opacity: 0,
            x: -110,
            y: 90,
            rotate: -30,
        }, '<+=1')

        .to([whitepaperSection4_paso2], {
            scale: 1.08,
        }, '<')

        // Paso 3 ----- (And counts as 1 vote in the Hdden Forms DAO)
        .from(whitepaperSection4_img3, {
            xPercent: -50,
            duration: 2,
        }, '>')
        .from(whitepaperSection4_p3, {
            xPercent: 50,
            duration: 2,
        }, '<')
        .from(whitepaperSection4_flecha3, {
            opacity: 0,
            x: 0,
            y: -30,
            rotate: 30,
        }, '<+=1')

        .to([whitepaperSection4_paso3], {
            scale: 1.08,
        }, '<')

    seccion4.animation = Tl_whitepaperSection4
    ScrollTrigger.create(seccion4)
}