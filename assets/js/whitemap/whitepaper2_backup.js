
window.addEventListener('load', function () {
    
    const Navbar = document.querySelector("header")
    let navbar__logohdden = Navbar.querySelector(".navbar__logohdden")

    const ScrollDown = document.querySelector('.scroll__down')
    const WhitepaperSectionAll = document.querySelectorAll(".seccion__whitepaper")
    const Whitepaper__circuloNo1 = document.querySelector('.whitepaperSection5_circulo:nth-of-type(4)')
    const Whitepaper__circuloNo2 = document.querySelector('.whitepaperSection5_circulo:nth-of-type(3)')
    const Whitepaper__circuloNo3 = document.querySelector('.whitepaperSection5_circulo:nth-of-type(1)')
    const Whitepaper__circuloNo4 = document.querySelector('.whitepaperSection5_circulo:nth-of-type(2)')

    Timeline_WhitepaperSeccion1(ScrollDown)
    Timeline_WhitepaperSeccion2()
    Timeline_WhitepaperSeccion3()
    Timeline_WhitepaperSeccion4()
    Timeline_WhitepaperSeccion5()
    Timeline_WhitepaperSeccion6()
    Timeline_WhitepaperSeccion7(Navbar)
    Timeline_WhitepaperSeccion8(Navbar)
    Timeline_WhitepaperSeccion9()
    Timeline_WhitepaperSeccion10()
    
    // Efecto fadeIn/fadeOut entre secciones
    const OptionsWhitepaper = {
        opacity: 0,
        yPercent: 2.5,
        scrollTrigger: {
            trigger: '',
            start: 'top bottom-=300',
            end: 'top center',
            toggleActions: 'play none none reverse',
        }
    }
    // Mostrar menú al cargar la pag.
    gsap.to(Navbar, {
        duration: 0.5,
        delay: 1,
        opacity: 1
    }, '-=1')

    // Avanzar siguiente seccion c/click sobre el indicador (total: 10 secciones)
    let no = 2
    ScrollDown.addEventListener("click", () => {
        scrollToSection('#whitepaperSection'+no)
        no+=1
        if(no == 11) { 
            no = 2
            ScrollDown.style.opacity = 0
        }
    })
    navbar__logohdden.addEventListener("click", () => {
        this.window.location.href = 'index.php'
    })

    // Mostrar la primera seccion de whitepaper
    OptionsWhitepaper.opacity = 1
    OptionsWhitepaper.scrollTrigger.trigger = WhitepaperSectionAll[0].querySelector('img')
    gsap.to(WhitepaperSectionAll[0], OptionsWhitepaper, '<')
    
    // Mostrar secciones c/efecto al usar scroll-down (exepto la 1)
    WhitepaperSectionAll.forEach((section, index) => {

        if (index > 0) {
            // mostrar sección en turno
            OptionsWhitepaper.opacity = 0.1
            OptionsWhitepaper.scrollTrigger.trigger = section.querySelector('img')
            gsap.from(section, OptionsWhitepaper)
        }
    })
    
    // Mostrar/Ocultar contenido circulos-seccion-5
    const Whitepaper__componente1 = document.querySelector('.componente-1')
    const Whitepaper__componente2 = document.querySelector('.componente-2')
    const Whitepaper__componente3 = document.querySelector('.componente-3')
    const Whitepaper__componente4 = document.querySelector('.componente-4')

    const Whitepaper__componente1Cerrar = Whitepaper__componente1.querySelector('a.componente_cerrar')
    const Whitepaper__componente2Cerrar = Whitepaper__componente2.querySelector('a.componente_cerrar')
    const Whitepaper__componente3Cerrar = Whitepaper__componente3.querySelector('a.componente_cerrar')
    const Whitepaper__componente4Cerrar = Whitepaper__componente4.querySelector('a.componente_cerrar')

    Whitepaper__circuloNo1.addEventListener('click', () => toggleComponente(Whitepaper__componente1, 'flex'))
    Whitepaper__circuloNo2.addEventListener('click', () => toggleComponente(Whitepaper__componente2, 'flex'))
    Whitepaper__circuloNo3.addEventListener('click', () => toggleComponente(Whitepaper__componente3, 'flex'))
    Whitepaper__circuloNo4.addEventListener('click', () => toggleComponente(Whitepaper__componente4, 'flex'))

    Whitepaper__componente1Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente1, 'none'))
    Whitepaper__componente2Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente2, 'none'))
    Whitepaper__componente3Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente3, 'none'))
    Whitepaper__componente4Cerrar.addEventListener('click', () => toggleComponente(Whitepaper__componente4, 'none'))

    //Seccion5 > circulo no. 4 > contenido-componente > mostrar/ocultar info. circulos (1 al 5) 
    let circulos = Whitepaper__componente4.querySelectorAll('li .asset-numero')
    let circulos_contenido = Whitepaper__componente4.querySelectorAll('.asset-contents .valuable-asset')

    circulos.forEach(item => {
        item.addEventListener('click', event => {
            let item_contenido = Whitepaper__componente4.querySelector(event.currentTarget.dataset.content)

            circulos.forEach(c => c.classList.remove('active'))
            circulos_contenido.forEach( cc => { cc.classList.remove('active'), cc.style.display = 'none' })
            
            item.classList.add('active')
            item_contenido.style.display = 'flex'
            item_contenido.classList.add('active')
        })
    })

    //Color de cursor sobre componentes de seccion-5
    let whitepaper__componentes = this.document.querySelectorAll('.componente')

    whitepaper__componentes.forEach(componente => {
        componente.addEventListener('mouseover', () => {
            this.document.querySelector('.cursor').style.backgroundColor = 'white'
            this.document.querySelector('.cursor__follower').style.borderColor = 'white'
         })
    });
    
    whitepaper__componentes.forEach(componente => {
        componente.addEventListener('mouseout', () => {
            this.document.querySelector('.cursor').style.backgroundColor = 'black'
            this.document.querySelector('.cursor__follower').style.borderColor = 'black'
         })
    });
})

const toggleComponente = (componente, prop = 'none') => {
    componente.style.display = prop
}