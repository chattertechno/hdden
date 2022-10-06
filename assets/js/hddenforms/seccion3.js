const Timeline_HddenFormSeccion3 = () => {

    const HfSeccion3 = document.querySelector('.seccion3')
    const HfSeccion3__objeto = HfSeccion3.querySelectorAll('.seccion3__objeto')

    const HfSeccion3__der = HfSeccion3.querySelector('.seccion3__img--der')
    const HfSeccion3__imgDer = HfSeccion3.querySelector('.seccion3__img--der img')
    const HfSeccion3__linkDer = HfSeccion3.querySelector('.seccion3__img--der a')

    const HfSeccion3__izq = HfSeccion3.querySelector('.seccion3__img--izq')
    const HfSeccion3__imgIzq = HfSeccion3.querySelector('.seccion3__img--izq img')
    const HfSeccion3__linkIzq = HfSeccion3.querySelector('.seccion3__img--izq a')

    // backup ---------------------------------------------------
    const Tl_HfSeccion3 = gsap.timeline({
        scrollTrigger: {
            trigger: HfSeccion3,
            scrub: 1.5,
            start: 'top-=700 top',
            end: 'bottom-=150 center+=200',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'crimson',
                endColor: 'blue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_HfSeccion3
        // entran ambas imagenes

        .from(HfSeccion3__linkDer, {
            x: 60,
            y: 0,
            duration: 2,
            ease: "expo",
            overwrite: "auto",
            display: 'flex'
        },'<')

        .from(HfSeccion3__imgDer, {
            x: 0,
            y: 120,
            duration: 2,
            ease: "expo",
            overwrite: "auto",
        }, '<')

        .from(HfSeccion3__linkIzq, {
            x: -60,
            y: 0,
            duration: 2,
            ease: "expo",
            overwrite: "auto",
            display: 'flex'
        }, '<')

        .from(HfSeccion3__imgIzq, {
            x: 0,
            y: -120,
            duration: 2,
            ease: "expo",
            overwrite: "auto",
        }, '<')

        .fromTo([HfSeccion3__linkDer, HfSeccion3__linkIzq],{
            display: 'flex',
        }, {
            display: 'none',
            duration: 0.5,
            ease: "power4.easeInOut",
        }, '-=1')

        .to([HfSeccion3__der], {
            y: function(index, target, targets) { //function-based value
                if(window.scrollHeight > 1500) {
                    return 1000; 
                } else{
                    return 700;  
                }
            },
            duration: 2,
            delay: 0.3,
            overwrite: "auto",
        }, '<')

        .to([HfSeccion3__izq], {
            y: function(index, target, targets) { //function-based value
                if(window.scrollHeight > 1500) {
                    return 1100; 
                } else{
                    return 800;  
                }
            },
            duration: 1.3,
            delay: 1.3,
            overwrite: "auto",
        }, '<')

    HfSeccion3__objeto.forEach(element => {
        element.addEventListener('mouseover', e => {
            gsap.to(element, {
                duration: 1.5,
                delay: 0.10,
                scale: 1.20,
                zIndex: 99,
                ease: "power4.easeInOut",
            })

            gsap.to(element.querySelector('.seccion3__objetoLink'), {
                display: 'flex',
                ease: "sine.out",
            },'<')
        });
    });

    HfSeccion3__objeto.forEach(element => {
        element.addEventListener('mouseleave', e => {

            gsap.to(element, {
                duration: 1.5,
                delay: 0.1,
                scale: 1,
                zIndex: 0,
                ease: "power4.easeInOut",
            })
            gsap.to(element.querySelector('.seccion3__objetoLink'), {
                display: 'none',
                duration: 0.8,
                ease: "power4.out",
            },'<')
        });
    });

    return Tl_HfSeccion3;
}