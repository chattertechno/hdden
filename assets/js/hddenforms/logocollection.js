
const  Timeline_LogoCollection = (Main__logocollection) => {

    // contendor p/timeline-animation y mover img-logocollection entre secciones de 2 a la 5
    const Main__LogoCollection = document.querySelector('.main__contenedorLogoCollection')
    let main__logocollection = document.querySelector('.main__logocollection')

    const Tl__Logocollection = gsap.timeline({
        scrollTrigger: {
            trigger: Main__LogoCollection,
            scrub: 2,
            start: 'top+=200vh top',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson', //crimson
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })
    Tl__Logocollection

    .to(main__logocollection, {
        left: "calc(83.92% - 123.6px)",
        top: "calc(32.14% - -393.39px)",
        scale: 0.7,
    })

    .to(main__logocollection, {
        left: "calc(48% - 220px)",
        top: "calc(57% - -380px)",
        scale: 0.9,
    })
    return Tl__Logocollection
}