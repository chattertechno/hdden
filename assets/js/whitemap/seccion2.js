
const Timeline_WhitepaperSeccion2  = () => {

    const WhitepaperSection2 = document.querySelector('#whitepaperSection2')
    const WhitepaperSection2_contenido = document.querySelector('.whitepaperSection2_contenido')
    
    const WhitepaperSection2_img1 = document.querySelector('.whitepaperSection2_based-imagen')
    const WhitepaperSection2_img2 = document.querySelector('.whitepaperSection2_img2')
    const WhitepaperSection2_texto1 = document.querySelector('.whitepaperSection2_texto1')
    

    const Tl_whitepaperSection2 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection2,
            scrub: 1.8,
            start: 'top+=50 center',
            end: 'center+=200 center+=150vh',
            // end: 'bottom',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson', //
                endColor: 'red',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection2
    //     .from(WhitepaperSection2_img1, {
    //     xPercent: 10,
    //     yPercent: -10,
    //     opacity: 0.2
    // }, '<')
    .from(WhitepaperSection2_contenido, {
        xPercent: -10,
        yPercent: 10,
        opacity: 0.2
    }, '<')
    .from(WhitepaperSection2_img2, {
        yPercent: 10,
        opacity: 0.2
    }, '<')

    .to([WhitepaperSection2_texto1, WhitepaperSection2_img2], {
        yPercent: -20,
    },'<')
    // .to(WhitepaperSection2_img2, {
    //     yPercent: 30,
    //     rotate: 15
    // }, )

    return Tl_whitepaperSection2;
}