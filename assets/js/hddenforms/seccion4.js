const Timeline_HddenFormSeccion4 = () => {

    const HfSeccion4__objetoImg = document.querySelector('.seccion4__objetoImg')
    const HfSeccion4__objeto = document.querySelector('.seccion4__objeto')
    const HfSeccion4__objetoA = document.querySelector('.seccion4__objeto a')

    const Tl_HddenformSeccion4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.seccion4',
            scrub: 1.5,
            start: 'top+=100 center',
            end: 'bottom-=400 center',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'blueviolet',
                endColor: 'black',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false
        }
    })

    Tl_HddenformSeccion4
    .from(HfSeccion4__objeto, {
        y: -130,
    },'<')
    .from(HfSeccion4__objetoA, {
        opacity: 0,
        y: 120,
    }, '<')
    .from(HfSeccion4__objetoImg, {
        opacity: 0.1,
        xPercent: 40,
    }, '<')
    .to([HfSeccion4__objeto, HfSeccion4__objetoImg], {
        y: 50,
        ease: "power1.in"
    })
    return Tl_HddenformSeccion4;
}