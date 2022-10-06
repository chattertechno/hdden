const Timeline_HddenFormSeccion5 = () => {

    const HfSeccion5 = document.querySelector('.seccion5')
    const HfSeccion5__link = document.querySelector('.seccion5__link')
    const HfSeccion5__objetoImg = document.querySelector('.seccion5__objetoImg')
    const HfSeccion5__objetoImg1 = document.querySelector('.seccion5__contenido img:nth-child(3)')
    const HfSeccion5__objetoImg2 = document.querySelector('.seccion5__contenido img:nth-child(4)')

    const Tl_HddenformSeccion5 = gsap.timeline({
        scrollTrigger: {
            trigger: HfSeccion5,
            scrub: true,
            start: 'top center+=100',
            end: 'top top+=100',            
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'purple',
                endColor: 'red',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false
        }
    })
    
    .from(HfSeccion5__objetoImg1, {
        x: -100,
        opacity: 0,
    }, '<')
    .from(HfSeccion5__objetoImg2, {
        x: 100,
    }, '<')
    .to(HfSeccion5__link, {
        rotate: -30,
        ease: "power1.in",
    }, '<') 
     .from(HfSeccion5__link, {
        y: -300,
        rotate: 30,
        rotateY: 180,
        scale: 1.5,
        ease: "power1.inOut",
    }, '<') 

    return Tl_HddenformSeccion5;
}