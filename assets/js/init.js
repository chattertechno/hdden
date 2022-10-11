gsap.registerPlugin(ScrollTrigger);

/* Parámetro de posición ---------------------------------------------
|   <   :insertar en el INICIO de la animación anterior
|   >   :insertar al FINAL de la animación anterior
|   +=1 :insertar 1 segundo después del final de la línea de tiempo
|   -=1 :insertar 1 segundo antes del final de la línea de tiempo
|--------------------------------------------------------------------*/

/* Toggle Actions -----------------------------------------------------
|   onEnter : al entrar
|   onLeave : al salir
|   onEnterBack : al volver a entrar
|   onLeaveBack : al volver a salir
|--------------------------------------------------------------------*/

//https://greensock.com/position-parameter

jQuery(function () {
  let cursor = $(".cursor"),
    follower = $(".cursor__follower"),
    scroll__down = $(".scroll__down"),
    nav = $(".nav"),
    navbar__logohdden = $(".navbar__logohdden"),
    navbar__menuTogle = $(".navbar__menu-togle"),
    params = new URLSearchParams(window.location.search),
    to__collection = $(".to__collection"),
    btn_conectToWallet = $("a.nav__item--wallet");
  video_wrap = $(".video_wrap");
  seccion2 = $(".seccion2");

  if (params.has("collection")) {
    video_wrap.addClass("hide");
    seccion2.addClass("seccion2_backdrop");
    scrollToSection(".seccion2", 6);
  }

  to__collection.on("click", () => {
    video_wrap.addClass("hide");
    seccion2.addClass("seccion2_backdrop");
    scrollToSection(".seccion2", 6);
  });

  navbar__logohdden.on("click", () => scrollToSection(0));

  navbar__menuTogle.click(function () {
    nav.toggleClass("mobile__nav");
    $(this).toggleClass("is-active");
  });

  btn_conectToWallet.on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active"))
      $(this).html("").html("<span>isxO98....8786</span>");
    else $(this).html("").html("<span>Connect to Wallet</span>");
  });
});

// Functions -----------------------------------

function scrollToSection(param, seconds = 2.5) {
  gsap.to(window, {
    duration: seconds,
    delay: 0.6,
    scrollTo: {
      y: param,
    },
  });
}
