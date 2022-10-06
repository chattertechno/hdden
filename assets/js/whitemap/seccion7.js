const Timeline_WhitepaperSeccion7  = (Navbar) => {

    const WhitepaperSection7 = document.querySelector('#whitepaperSection7')
    const WhitepaperSection7_titulo = document.querySelector('.whitepaperSection7_titulo')
    const WhitepaperSection7_tituloSpan = document.querySelector('.whitepaperSection7_titulo span')

    const Tl_whitepaperSection7 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection7,
            scrub: 3,
            start: 'top-=15 center',
            end: 'center center',
            toggleActions: 'play none none reverse',
            // markers: {
            //     startColor: 'plum', //
            //     endColor: 'red',
            //     fontSize: '2rem',
            //     fontWeight: 'bold'
            // },
            markers: false,
        }
    })

    Tl_whitepaperSection7
    .from(WhitepaperSection7_titulo, {
        duration: 2,
        y:50,
        x:60,
    })
    .from(WhitepaperSection7_titulo, {
        color: '#00ff00',
        duration: 2
    }, '<')
    .from(WhitepaperSection7_tituloSpan, {
        color: '#000000',
        duration: 1.5,
        delay: 1
    }, '<')

    return Tl_whitepaperSection7;
}

// const Timeline_WhitepaperSeccion7  = (Navbar) => {
//     const WhitepaperSection7 = document.querySelector('#whitepaperSection7')
//     const WhitepaperSection7_titulo = document.querySelector('.whitepaperSection7_titulo')
//     const WhitepaperSection7_tituloSpan = document.querySelector('.whitepaperSection7_titulo span')
//     const Tl_whitepaperSection7 = gsap.timeline({
//         scrollTrigger: {
//             trigger: WhitepaperSection7,
//             scrub: 2,
//             start: 'top center',
//             end: 'center+=100 center',
//             toggleActions: 'play none none reverse',
//             markers: {
//                 startColor: 'plum', //
//                 endColor: 'red',
//                 fontSize: '2rem',
//                 fontWeight: 'bold'
//             },
//             markers: false,
//         }
//     })
//     Tl_whitepaperSection7
//     .from(WhitepaperSection7_titulo, {
//         duration: 2,
//         y:50,
//         x:60,
//     })
//     .from(WhitepaperSection7_titulo, {
//         color: '#00ff00'
//     }, '<')
//     .from(WhitepaperSection7_tituloSpan, {
//         color: '#000000'
//     }, '<')
//     return Tl_whitepaperSection7;
// }