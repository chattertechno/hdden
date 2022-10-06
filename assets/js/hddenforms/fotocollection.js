const Timeline_FotoCollection = (Main__logocollection) => {

    // contendor p/línea de tiempo, fijarlo y mover fotos entre secciones de 3 a 5 
    const Main__FotoCollection = document.querySelector('.main__contendorFotoCollection')
    const Main__FotoCollectionSeccion3 = document.querySelector('.main__contendorFotoCollection .seccion3')

    const Tl__FotoCollection = gsap.timeline({
        scrollTrigger: {
            trigger: Main__FotoCollection,
            scrub: 1.5,
            pin: true,
            // start: 'top+=200vh top',
            end: 'bottom+=300vh',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson', //crimson
                endColor: 'darkblue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            // markers: false,
        }
    })

    Tl__FotoCollection
    .to(Main__FotoCollectionSeccion3,{
        backgroundColor: 'purple',
        display: 'none',
    })
    .to(Main__FotoCollectionSeccion4,{
        backgroundColor: 'red',
        display: 'none',
    })
    .to(Main__FotoCollectionSeccion5,{
        backgroundColor: 'cyan',
        display: 'none',
    })
    return Tl__FotoCollection
}