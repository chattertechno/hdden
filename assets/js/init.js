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

  if (params.has("collection")) scrollToSection(".seccion2", 6);

  to__collection.on("click", () => scrollToSection(".seccion2", 6));

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

  // plug
  $(window).scroll((event) => {
    navbar__onscroll($(window).scrollTop());
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

function navbar__onscroll(scroll) {
  let navbar = document.getElementById("navbar"),
    submenu = document.getElementById("submenu"),
    submenu_wrap = document.getElementById("submenu_wrap");

  if (scroll >= 100) {
    navbar.classList.add("navbar_scroll");
    submenu.classList.add("navbar_row");

    // styles
    navbar.style.height = "100%";
    navbar.style.padding = "25px 35px 25px";
    submenu_wrap.style.padding = "0 45px";
    for (const child of submenu.children) {
      child.style.padding = "0 5px";
    }
    //
  } else if (scroll <= 99) {
    navbar.classList.remove("navbar_scroll");
    submenu.classList.remove("navbar_row");
    // styles
    navbar.style.padding = "25px 30px 0px";
    submenu_wrap.style.padding = "45px 0px 0px 15px";
  }
}
