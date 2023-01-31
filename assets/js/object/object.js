window.addEventListener("load", function () {
  let isMobile = false;
  // // Uncomment code below to disable animation in mobile devices
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //     isMobile = true;
  // }

  // modal ----------------------
  const object1Section2__link = document.querySelector(".object1Section2_link");
  const object1Section2__linkclose = document.querySelector(".modal_close");
  const object1Section2__modal = document.querySelector(".modal-reminder");

  object1Section2__link.addEventListener("click", () => {
    object1Section2__modal.classList.add("open");
  });

  object1Section2__linkclose.addEventListener("click", () => {
    object1Section2__modal.classList.remove("open");
  });

  window.addEventListener("scroll", () => {
    if (
      window.pageYOffset < 1500 ||
      document.documentElement.scrollTop < 1500 ||
      (document.body.scrollTop < 1500 && isMobile == false)
    )
      object1Section2__modal.classList.remove("open");
  });

  // init()
  const Navbar = document.querySelector("header");
  let navbar__logohdden = Navbar.querySelector(".navbar__logohdden");

  // Sección object1Hero ---------------------------------------------
  const object1Hero = document.querySelector("#object1Hero");
  const Object1Himg__svg = document.querySelector(".object1Himg");
  const Object1Himg__svgPath = document.querySelector(".object1Himg path");
  const Object1Himg__svgPathSto_one = document.querySelector(
    ".object1Himg .object1Himg__sto_one"
  );
  const object1Hero__titulo = document.querySelector(".object1Hero__titulo");
  const object1Hero__bg = document.querySelector(".object1Hero__bg");

  navbar__logohdden.addEventListener("click", () => {
    this.window.location.href = "index.php";
  });

  //Color del cursor sobre SVG de letra H
  Object1Himg__svgPathSto_one.addEventListener("mouseover", () => {
    this.document.querySelector(".cursor").style.backgroundColor = "white";
    this.document.querySelector(".cursor__follower").style.borderColor =
      "white";
  });

  Object1Himg__svgPathSto_one.addEventListener("mouseout", () => {
    this.document.querySelector(".cursor").style.backgroundColor = "white";
    this.document.querySelector(".cursor__follower").style.borderColor =
      "white";
  });

  Object1Himg__svgPath.classList.add("animacion__letraH_one");

  // Mostrar menú al cargar la pag.
  // gsap.to(Navbar, {
  //     duration: 0.5,
  //     delay: 0.5,
  //     opacity: 1
  // }, '-=1')

  // Avanzar en scroll, p/mostrar titutlo y ocultar H
  gsap.to(window, {
    scrollTo: 1000,
    delay: 3.5,
    duration: 3,
    ease: "power4.in",
  });

  if (isMobile == false) {
    const tl__object1Hero = gsap.timeline({
      scrollTrigger: {
        trigger: object1Hero,
        start: "top top",
        end: "bottom+=300vh",
        scrub: 2,
        pin: true,
        toggleActions: "play none none reverse",
      },
    });
    tl__object1Hero
      .to(
        [Object1Himg__svg],
        {
          duration: 0.5,
          opacity: 1,
        },
        "-=0.5"
      )
      .fromTo(
        Object1Himg__svg,
        {
          opacity: 1,
        },
        {
          duration: 0.5,
          scale: 0,
          opacity: 0,
          display: "none",
        },
        "-=0.5"
      )
      .from(
        object1Hero__bg,
        {
          scale: 1.3,
        },
        "-=0.5"
      )
      .from(object1Hero__titulo, {
        opacity: 0,
        yPercent: -50,
      });

    // Sección object1Section1 ---------------------------------------------
    const object1Section1 = document.querySelector("#object1Section1");
    const object1Section1__titulo = document.querySelector(
      ".object1Section1__titulo"
    );
    const object1Section1__ul = document.querySelector(".object1Section1__ul");
    const object1Section1__photo = document.querySelector(
      ".object1Section1__photo"
    );

    const tl__object1Section1 = gsap.timeline({
      scrollTrigger: {
        trigger: object1Section1,
        start: "top top",
        end: "bottom+=150vh",
        scrub: 2,
        pin: true,
        toggleActions: "play none none reverse",
      },
    });
    tl__object1Section1
      .from(
        object1Section1__titulo,
        {
          opacity: 0,
          yPercent: 5,
        },
        "<"
      )
      .from(
        object1Section1__photo,
        {
          xPercent: 5,
        },
        "<"
      )
      .from(
        object1Section1__ul,
        {
          xPercent: -5,
        },
        "<"
      );

    // Sección object1Section2 ---------------------------------------------
    const object1Section2 = document.querySelector("#object1Section2");
    const object1Section2__photo1 = document.querySelector(
      ".object1Section2__photo1"
    );
    const object1Section2__photo2 = document.querySelector(
      ".object1Section2__photo2"
    );
    const object1Section2__link = document.querySelector(
      ".object1Section2_link"
    );

    const tl__object1Section2 = gsap.timeline({
      scrollTrigger: {
        trigger: object1Section2,
        start: "top bottom",
        end: "center center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    tl__object1Section2
      .from(
        object1Section2__link,
        {
          duration: 2.5,
          rotate: -90,
        },
        "-=2.5"
      )
      // .from(object1Section2__photo1, {
      //     opacity: 0,
      //     duration: 2.5,
      //     yPercent: -30,
      // }, '-=2.5')
      .from(
        object1Section2__photo2,
        {
          opacity: 0,
          duration: 2.5,
          xPercent: 30,
        },
        "-=2.5"
      );

    // Sección object1Section2 ---------------------------------------------

    const object1Section3 = document.querySelector("#object1Section3");
    const object1Section3__titulo = document.querySelector(
      ".object1Section3__titulo"
    );
    const object1Section3__photo1 = document.querySelector(
      ".object1Section3__photo1"
    );

    const tl__object1Section3 = gsap.timeline({
      scrollTrigger: {
        trigger: object1Section3,
        start: "top bottom",
        end: "center center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    tl__object1Section3.from(
      object1Section3__titulo,
      {
        opacity: 0,
        yPercent: -40,
        delay: 1,
      },
      "<"
    );
    // .from(object1Section3__photo1, {
    //     opacity: 0,
    //     duration: 2.5,
    //     yPercent: -40,
    // }, '-=2.5')
  }
});
