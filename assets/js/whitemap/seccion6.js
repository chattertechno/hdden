const Timeline_WhitepaperSeccion6 = () => {

    const WhitepaperSection6 = document.querySelector('#whitepaperSection6')
    // contenido 1
    const WhitepaperSection6__contenido1 = document.querySelector('.whitepaperSection6_contenido-1')
    const WhitepaperSection6__contenido1H2 = document.querySelector('.whitepaperSection6_contenido-1 h2')
    const WhitepaperSection6__contenido1Img1 = document.querySelector('.whitepaperSection6_contenido-1 img')
    const WhitepaperSection6__contenido1Texto1 = document.querySelector('.whitepaperSection6_contenido-1 p')
    // contenido 2
    const WhitepaperSection6__contenido2 = document.querySelector('.whitepaperSection6_contenido-2')
    const WhitepaperSection6__contenido2H2 = document.querySelector('.whitepaperSection6_contenido-2 h2')
    const WhitepaperSection6__contenido2Img1 = document.querySelector('.whitepaperSection6_contenido-2 img')
    const WhitepaperSection6__contenido2Textos = document.querySelectorAll('.whitepaperSection6_contenido-2 p')

    let whitepaperSection6_circulo_no_2 = WhitepaperSection6.querySelector('#whitepaperSection6  .whitepaperSection5_circulo.circulo-no-2')
    let whitepaperSection6_titulo_no_2 = whitepaperSection6_circulo_no_2.querySelector('.circulo-titulo')

    const Tl_whitepaperSection6 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection6,
            scrub: 2,
            start: 'top-=50 center',
            end: 'center+=25 center',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'purple', //
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection6
        // contenido-1 -----
        .from([WhitepaperSection6__contenido1H2, WhitepaperSection6__contenido1Img1], {
            duration:2,
            opacity: 0,
            y: -50,
            x:-50,
        }, '-=0.5')
        .from([WhitepaperSection6__contenido1Texto1], {
            duration:2,
            opacity: 0,
            y: -50,
            x:-50,
        }, '<+=1')
        .to(whitepaperSection6_circulo_no_2, {
            opacity:0
        },'>')
        // contenido-2 -----
        .from([WhitepaperSection6__contenido2H2], {
            duration:2,
            opacity: 0,
            y: -50,
            x:-50,
        }, '<+=1')
        .from([WhitepaperSection6__contenido2Img1, WhitepaperSection6__contenido2Textos], {
            duration:2,
            y: -50,
            x: -50,
        }, '<')
        // segunda parte --------------

        .from([WhitepaperSection6__contenido1H2, WhitepaperSection6__contenido2H2 ], {
            duration:2,
            scale: 1.05,
        }, '<')
        return Tl_whitepaperSection6;
}