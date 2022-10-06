function init() {

    const navbar = document.querySelector(".navbar")
    const whitepaperSection = document.querySelectorAll(".seccion__whitepaper")
    const scroll__down = document.querySelector('.scroll__down')
    let no = 2
    scroll__down.addEventListener("click", () => {
        scrollToSection('#whitepaperSection'+no)
        no+=1
        if(no == 11) { 
            no = 2
            scroll__down.style.opacity = 0
        }
    });

    const options = {
        opacity: 0,
        yPercent: 5,
        scrollTrigger: {
            trigger: '',
            start: 'top bottom-=300',
            end: 'top center',
            toggleActions: 'play none none reverse',
            markers: false
        }
    }
    // gsap.to(navbar, {
    //     duration: 0.5,
    //     delay: 1,
    //     opacity: 1
    // }, '-=1')

    options.scrollTrigger.trigger = whitepaperSection[0].querySelector('img')
    gsap.to(whitepaperSection[0], options)

    whitepaperSection.forEach((section, index) => {
        if (index > 0) {
            options.scrollTrigger.trigger = section.querySelector('img')
            gsap.from(section, options)
        }
    })
}

window.addEventListener('load', function () {
    init()
})