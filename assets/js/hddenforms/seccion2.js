const Timeline_HddenFormSeccion2 = (Main__logocollection) => {

    let seccion2 = document.querySelector('.seccion2')
    let seccion2__p = seccion2.querySelector('.seccion2__parrafo')
    let seccion2__img1 = seccion2.querySelector('.seccion2__img1')
    let seccion2__img2 = seccion2.querySelector('.seccion2__img2')
    let seccion2__img3 = seccion2.querySelector('.seccion2__img3')

    const Tl_HddenformSeccion2 = gsap.timeline({
        scrollTrigger: {
            trigger: seccion2,
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'mediumturquoise',
                endColor: 'fuchsia',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })
    Tl_HddenformSeccion2

        .from(seccion2__img1, {
            x: -145,
        })
        .from(seccion2__p, {
            opacity: 0,
            y: -72,
        }, '<')
        .from(seccion2__img2, {
            opacity: 0,
            y: 72,
        }, '<')
        .from(seccion2__img3, {
            xPercent: 50,
        }, '<')
        .from(Main__logocollection, {
            x: 50,
            opacity: 0,
        }, '<')

    return Tl_HddenformSeccion2;
}