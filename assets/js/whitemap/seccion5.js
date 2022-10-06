
const Timeline_WhitepaperSeccion5  = () => {

    let whitepaperSection5 = document.querySelector('#whitepaperSection5')
    const WhitepaperSection6 = document.querySelector('#whitepaperSection6')
    let whitepaperSection5_circulos = whitepaperSection5.querySelectorAll('.whitepaperSection5_circulo')

    let whitepaperSection5_titulo = whitepaperSection5.querySelector('.whitepaperSection5_contenido h2')
    let whitepaperSection5_circulo_no_3 = whitepaperSection5.querySelector('.circulo-no-3')    
    let whitepaperSection5_circulo_no_4 = whitepaperSection5.querySelector('.circulo-no-4')
    let whitepaperSection5_circulo_no_1 = whitepaperSection5.querySelector('.circulo-no-1')

    let whitepaperSection5_titulo_no_3 = whitepaperSection5.querySelector('.circulo-no-3 .circulo-titulo')
    let whitepaperSection5_titulo_no_4 = whitepaperSection5.querySelector('.circulo-no-4 .circulo-titulo')
    let whitepaperSection5_titulo_no_1 = whitepaperSection5.querySelector('.circulo-no-1 .circulo-titulo')

    // circulo #2, dentro de seccion-5
    // let whitepaperSection5_circulo_no_2 = whitepaperSection5.querySelector('.circulo-no-2')
    // let whitepaperSection5_titulo_no_2 = whitepaperSection5_circulo_no_2.querySelector('.circulo-titulo')

    // circulo #2, dentro de seccion-6
    let whitepaperSection6_circulo_no_2 = WhitepaperSection6.querySelector('#whitepaperSection6  .whitepaperSection5_circulo.circulo-no-2')
    let whitepaperSection6_titulo_no_2 = whitepaperSection6_circulo_no_2.querySelector('.circulo-titulo')

        
    let Tl_whitepaperSection5 = gsap.timeline({
        ease: 'none',
        duration: '0',
        scrollTrigger: {
            trigger: whitepaperSection5,
            scrub: 3,
            pin: true,
            start: 'top top',
            end: 'bottom+=350vh',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson', //
                endColor: 'black',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection5
    .from(whitepaperSection5_titulo, {
        duration: 2,
        xPercent: 5,
        yPercent: 5,
        scale: 1.1,
    })

    // circulo-posicion-1 | #3 (governance tokens)
    .from(whitepaperSection5_circulo_no_3 , {
        duration: 2,
        opacity: 0,
        yPercent: -5,
        ease: "slow(0.7, 0.7, false)",
    }, '>')

    .from(whitepaperSection5_titulo_no_3,{
        yPercent: 10,
        opacity: 0,
    }, '>+=1')

    // circulo-posicion-2 | #4 (utility tokens)
    .from(whitepaperSection5_circulo_no_4 , {
        duration: 2,
        opacity: 0,
        xPercent: 5,
        ease: "slow(0.7, 0.7, false)"
    }, '>')

    .from(whitepaperSection5_titulo_no_4,{
        xPercent: -5,
        opacity: 0,
    }, '>+=5')

    // circulo-posicion-3 | #2 (hdden forms DAO)
        .from(whitepaperSection6_circulo_no_2 , {
            duration: 2,
            opacity: 0,
            yPercent: -3,
            ease: "slow(0.7, 0.7, false)",
            // backgroundColor: 'plum'
        }, '>')

        .from(whitepaperSection6_titulo_no_2,{
            yPercent: 3,
            opacity: 0,
        }, '>+=1.5')

    // circulo-posicion-4 | #1 (hdden forms Company)
    .from(whitepaperSection5_circulo_no_1 , {
        duration: 2,
        opacity: 0,
        xPercent: -5,
        ease: "slow(0.7, 0.7, false)"
    }, '>')

    .from(whitepaperSection5_titulo_no_1,{
        xPercent: 5,
        opacity: 0,
    }, '>+=1.5')

    .to([whitepaperSection5_titulo, whitepaperSection5_circulos], {
        duration: 3,
        scale: 1.05,
    }, '>+=2')

    return whitepaperSection5;
}