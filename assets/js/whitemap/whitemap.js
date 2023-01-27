window.addEventListener('load', function () {
    let BreakException = {};
    let isMobile = false

    // Uncomment code below to disable animation in mobile devices
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    //     isMobile = true

    let navbar = document.querySelector("header")
    let navbar__logohdden = navbar.querySelector(".navbar__logohdden")

    let scrollDown = document.querySelector('.scroll__down')
    let whitepaperSectionAll = document.querySelectorAll(".seccion__whitepaper")
    let whitepaperSection2 = document.querySelector('#whitepaperSection2')
    let whitepaperSection5 = document.querySelector('#whitepaperSection5')
    
    let whitepaper__circuloNo1 = whitepaperSection5.querySelector('.whitepaperSection5_circulo:nth-of-type(4)')
    let whitepaper__circuloNo2 = document.querySelector('#whitepaperSection6  .circulo-no-2')
    let Whitepaper__circuloNo3 = whitepaperSection5.querySelector('.whitepaperSection5_circulo:nth-of-type(1)')
    let whitepaper__circuloNo4 = whitepaperSection5.querySelector('.whitepaperSection5_circulo:nth-of-type(2)')
    let letter2 = whitepaperSection2.querySelector('.whitepaperSection2__marquee-inner span');


    if (isMobile === false) {
        Timeline_WhitepaperSeccion1()
        Timeline_WhitepaperSeccion2()
        Timeline_WhitepaperSeccion3()
        Timeline_WhitepaperSeccion4()
        Timeline_WhitepaperSeccion5()
        Timeline_WhitepaperSeccion6()
        Timeline_WhitepaperSeccion7()
        Timeline_WhitepaperSeccion8()
        Timeline_WhitepaperSeccion9()
        Timeline_WhitepaperSeccion10()

        for (counter = 1; counter <= 3; ++counter) {
            let clone = letter2.cloneNode(true);
            letter2.after(clone);
        }
    }
    navbar__logohdden.addEventListener("click", () => {
        this.window.location.href = 'index.php'
    })

    // Efecto fadeIn/fadeOut entre secciones
    const OptionsWhitepaper = {
        duration: 0,
        opacity: 0,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
            trigger: '',
            start: 'top bottom-=300',
            end: 'top center',
            toggleActions: 'play none none reverse',
        }
    }
    // Mostrar menú al cargar la pag.
    // gsap.to(navbar, { duration: 0.5, delay: 1, opacity: 1 }, '-=1')

    // Mostrar seccion-1 whitepaper
    OptionsWhitepaper.opacity = 1
    OptionsWhitepaper.scrollTrigger.trigger = whitepaperSectionAll[0].querySelector('img')
    gsap.to(whitepaperSectionAll[0], OptionsWhitepaper, '<')
    
    // Mostrar secciones c/efecto al usar scroll-down (despues de la 1)
    if (isMobile === false) {
        whitepaperSectionAll.forEach((section, index) => {
            if (index > 0) {
                // OptionsWhitepaper.opacity = 0.1
                // OptionsWhitepaper.scrollTrigger.trigger = section.querySelector('img')
                // gsap.from(section, OptionsWhitepaper)
            }
        })
    }
    // Mostrar/Ocultar contenido circulos-seccion-5
    const Whitepaper__componente1 = document.querySelector('.componente-1')
    const Whitepaper__componente2 = document.querySelector('.componente-2')
    const Whitepaper__componente3 = document.querySelector('.componente-3')
    const Whitepaper__componente4 = document.querySelector('.componente-4')

    const Whitepaper__componente1Cerrar = Whitepaper__componente1.querySelector('a.componente_cerrar')
    const Whitepaper__componente2Cerrar = Whitepaper__componente2.querySelector('a.componente_cerrar')
    const Whitepaper__componente3Cerrar = Whitepaper__componente3.querySelector('a.componente_cerrar')
    const Whitepaper__componente4Cerrar = Whitepaper__componente4.querySelector('a.componente_cerrar')

    //Flechas de contenido circulos-seccion-5 p/avanzar al sig. componente
    let flecha__componente1 = Whitepaper__componente1.querySelector('.componente-1__arrow1')
    let flecha__componente2 = Whitepaper__componente2.querySelector('.componente-2__arrow1')
    let flecha__componente3 = Whitepaper__componente3.querySelector('.componente-3__arrow1')
    let flecha__componente4 = Whitepaper__componente4.querySelector('.componente-4__arrow1')
    let cerrar__componente4 = Whitepaper__componente4.querySelector('.componente-4__cerrar1')

    if (isMobile === false) {
        whitepaper__circuloNo1.addEventListener('click', () => toggleComponente(Whitepaper__componente1, 'flex'))
        whitepaper__circuloNo2.addEventListener('click', () => toggleComponente(Whitepaper__componente2, 'flex'))
        Whitepaper__circuloNo3.addEventListener('click', () => toggleComponente(Whitepaper__componente3, 'flex'))
        whitepaper__circuloNo4.addEventListener('click', () => toggleComponente(Whitepaper__componente4, 'flex'))

        Whitepaper__componente1Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente1, 'none'))
        Whitepaper__componente2Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente2, 'none'))
        Whitepaper__componente3Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente3, 'none'))
        Whitepaper__componente4Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente4, 'none'))
        
        flecha__componente1.addEventListener('click', () => {
            toggleComponente(Whitepaper__componente1, 'none')
            toggleComponente(Whitepaper__componente2, 'flex')
        })

        flecha__componente2.addEventListener('click', () => {
            toggleComponente(Whitepaper__componente2, 'none')
            toggleComponente(Whitepaper__componente3, 'flex')
        })

        flecha__componente3.addEventListener('click', () => {
            toggleComponente(Whitepaper__componente3, 'none')
            toggleComponente(Whitepaper__componente4, 'flex')
        })

        cerrar__componente4.addEventListener('click', () => {
            toggleComponente(Whitepaper__componente4, 'none')
        })

   
    }

    //Seccion5 > circulo no. 4 > contenido-componente > mostrar/ocultar info. circulos (1 al 5) 
    let circulos = Whitepaper__componente4.querySelectorAll('li .asset-numero')
    let circulos_contenido = Whitepaper__componente4.querySelectorAll('.asset-contents .valuable-asset')

    circulos.forEach(item => {
        item.addEventListener('click', event => {
            let item_contenido = Whitepaper__componente4.querySelector(event.currentTarget.dataset.content)

            circulos.forEach(c => c.classList.remove('active'))
            circulos_contenido.forEach(cc => {
                cc.classList.remove('active'), cc.style.display = 'none'
            })

            item.classList.add('active')
            item_contenido.style.display = 'flex'
            item_contenido.classList.add('active')
        })
    })

    flecha__componente4.addEventListener('click', function () {

        try {
            circulos.forEach((circulo, i) => {

                if (circulo.classList.contains('active')) {
                    let indice_sig = i + 1
                    let circulo_sig = ''
                    let contenido_sig = ''

                    if (indice_sig <= 4) {
                        circulo_sig = circulos[indice_sig]
                        contenido_sig = Whitepaper__componente4.querySelector(circulos[indice_sig].dataset.content)
                    } else {
                        circulo_sig = circulos[0]
                        contenido_sig = Whitepaper__componente4.querySelector(circulos[0].dataset.content)
                    }

                    circulos.forEach(c => c.classList.remove('active'))
                    circulos_contenido.forEach(cc => {
                        cc.classList.remove('active'), cc.style.display = 'none'
                    })

                    circulo_sig.classList.add('active')
                    contenido_sig.style.display = 'flex'
                    contenido_sig.classList.add('active')

                    throw BreakException;
                }
            })
        } catch (error) {
            if (error !== BreakException) throw error;
        }

    })

    const toggleComponente = (componente, prop = 'none') => {
        componente.style.display = prop
    }

    //Color de cursor sobre componentes de seccion-5
    // let whitepaper__componentes = this.document.querySelectorAll('.componente')

    // whitepaper__componentes.forEach(componente => {
    //     componente.addEventListener('mouseover', () => {
    //         this.document.querySelector('.cursor').style.backgroundColor = 'white'
    //         this.document.querySelector('.cursor__follower').style.borderColor = 'white'
    //     })
    // });

    // whitepaper__componentes.forEach(componente => {
    //     componente.addEventListener('mouseout', () => {
    //         this.document.querySelector('.cursor').style.backgroundColor = 'black'
    //         this.document.querySelector('.cursor__follower').style.borderColor = 'black'
    //     })
    // });
})

