function init() {
    let navbar = document.querySelector("header")
    let object1Section2__link = document.querySelector(".object1Section2_link")
    let object1Section2__modal = document.querySelector(".modal-reminder")
    let object1Section2__linkclose = document.querySelector(".modal_close")
    let object1Himg__svgPath = document.querySelector('.object1Himg path')
    let navbar__logohdden = navbar.querySelector(".navbar__logohdden")

    // index -----
    navbar__logohdden.addEventListener("click", () => {
        this.window.location.href = 'index.php'
    })

    //svg -----
    object1Himg__svgPath.classList.add('animacion__letraH')
    gsap.to(window, {
        scrollTo: 1000,
        delay: 3.5,
        duration: 3,
        ease: 'power4.in'
    })

    //Set-an-auction-reminder -----
    object1Section2__link.addEventListener("click", () => {
        object1Section2__modal.classList.add('open')
    })

    object1Section2__linkclose.addEventListener("click", () => {
        object1Section2__modal.classList.remove('open')
    })
    // end set-an-auction-reminder

    // LetraH -----
    let object1Hero = document.querySelector("#object1Hero")
    let object1Himg__svg = document.querySelector(".object1Himg")
    let object1Hero__bg = document.querySelector(".object1Hero__bg")
    let object1Hero__titulo = document.querySelector(".object1Hero__titulo")

    let tl__object1Hero = gsap.timeline({
        scrollTrigger: {
            trigger: object1Hero,
            start: 'top top',
            end: 'bottom+=300vh',
            scrub: 2,
            pin: true,
            toggleActions: 'play none none reverse',
        }
    })
    tl__object1Hero
        .to([object1Himg__svg], {
            duration: 0.5,
            opacity: 1
        }, '-=0.5')
        .fromTo(object1Himg__svg, {
            opacity: 1
        }, {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            display: 'none',
        }, '-=0.5')
        .from(object1Hero__bg, {
            scale: 1.3
        }, '-=0.5')
        .from(object1Hero__titulo, {
            opacity: 0,
            yPercent: -50
        })
    // end letraH -----
}

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 2.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

document.addEventListener("DOMContentLoaded", function () {

    let isMobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        isMobile = true
    
    init()
    let object1Section2__modal = document.querySelector(".modal-reminder")
    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 1500 || document.documentElement.scrollTop < 1500 || document.body.scrollTop < 1500 && isMobile == false)
            object1Section2__modal.classList.remove('open')
    })

    if (isMobile == false) {

        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view
            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () {
                    animateFrom(elem)
                },
                onEnterBack: function () {
                    animateFrom(elem, -1)
                },
                onLeave: function () {
                    hide(elem)
                } // assure that the element is hidden when scrolled into view
            });
        });

       
    } // end
});