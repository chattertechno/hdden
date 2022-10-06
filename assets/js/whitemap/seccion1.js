
const Timeline_WhitepaperSeccion1  = () => {

    const WhitepaperSection1 = document.querySelector('#whitepaperSection')
    const WhitepaperSection_contenido = document.querySelector('.whitepaperSection_contenido')
    
    const WhitepaperSection1__h1 = document.querySelector('.whitepaperSection_contenido h1')
    const WhitepaperSection1__texto1 = document.querySelector('.whitepaperSection_contenido--text')
    const WhitepaperSection1__img1 = document.querySelector('.whitepaperSection_contenido--share img')

    const Tl_whitepaperSection1 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection1,
            // scrub: 0.5,
            toggleActions: 'play none none reverse',
            // markers: false,
        }
    })

    Tl_whitepaperSection1
    .to(WhitepaperSection1__h1, { opacity: 1,  delay: '0.5' }, '<')
    .from(WhitepaperSection1__h1,  { x: -25 }, '<')

    .to(WhitepaperSection1__texto1, {opacity: 1, delay: '0.6' }, '<')
    .from(WhitepaperSection1__texto1, { y: -25,}, '<')

    .to(WhitepaperSection1__img1, { opacity: 1, delay: '0.7' }, '<')
    .from(WhitepaperSection1__img1, { y: -25}, '<')
    .to('.scroll__down', {opacity:1},)
    .to('.scroll__down', {opacity:0, duration: 1, delay: 2}, '>')
    return Tl_whitepaperSection1;
}