const Timeline_HddenFormSeccionIntro = () => {
      
let seccion__intro = document.querySelector('.seccion__intro')
let intro__contenido__capa = seccion__intro.querySelector('.intro__contenido__capa')
let intro__contenido__imagen = seccion__intro.querySelector('.intro__contenido__imagen')
let intro__contenido__marquesina = seccion__intro.querySelector('.intro__contenido__marquesina')
let intro__contenido__video = seccion__intro.querySelector('.intro__contenido__video')

    // Sección intro ---------------------------------------------
    const Tl__hfIntro = gsap.timeline({
        scrollTrigger: {
            trigger: '.seccion__intro',
            start: 'top top',
            end: 'bottom+=300vh',
            scrub: true,
            pin: true,
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'red', //crimson
                endColor: 'red',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl__hfIntro
        .to(intro__contenido__capa, {
            duration: 0.5,
            opacity: 0.5
        },'>')
        .to(intro__contenido__video, {
            duration: 0.5,
            display: 'none'
        },'>')

        .to(intro__contenido__capa, {
            duration: 0.5,
            opacity: 0
        },'>')
        .to(intro__contenido__capa, {
            duration: 0.5,
            display: 'none'
        },'<')
        .fromTo(intro__contenido__imagen, {
            scale: 1.3
        },{
            duration: 0.4,
            scale: 1
        },'>')
        .from(intro__contenido__marquesina, {
            // yPercent: 100,
            opacity: 0,
        },'<')

    // Seccion1 ---------------------------------------------
    const Tl__hfSeccion1 = gsap.timeline({
        opacity: 0,
        yPercent: 5,
        scrollTrigger: {
            trigger: '.seccion1',
            start: 'top bottom',
            end: 'center center',
            scrub: 1.8,
            toggleActions: 'play none none reverse',
          //   markers: {
          //       startColor: 'cornflowerblue',
          //       endColor: 'blue',
          //       fontSize: '2rem',
          //       fontWeight: 'bold'
          //   },
            markers: false,
        }
    })

    return Tl__hfIntro;
}