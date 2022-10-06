const Timeline_WhitepaperSeccion10 = (Navbar) => {

    const WhitepaperSection10 = document.querySelector('#whitepaperSection10')
    const WhitepaperSection10_titulo = document.querySelector('.whitepaperSection10_titulo')

    const Tl_whitepaperSection10 = gsap.timeline({
        scrollTrigger: {
            trigger: WhitepaperSection10,
            scrub: 2,
            start: 'top+=100 center',
            end: 'center+=100 center',
            toggleActions: 'play none none reverse',
            markers: {
                startColor: 'darkcyan', //
                endColor: 'darkblue',
                fontSize: '2rem',
                fontWeight: 'bold'
            },
            markers: false,
        }
    })

    Tl_whitepaperSection10
        .from('.whitepaperSection9_pie', {
            scale: 1.05
        })
        .from(WhitepaperSection10_titulo, {
            duration: 2,
            delay: 1,
            opcity: 0.5,
            y: -50,
            x: 60,
            color: "#00ff00",
            ease: "slow(0.7, 0.7, false)",
        })
    return Tl_whitepaperSection10;
}