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

  // scroll plug
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

// ** Temporary */
function navbar__onscroll(scroll) {
  let navbar = document.getElementById("navbar"),
    submenu = document.getElementById("submenu"),
    submenu__social = document.getElementById("submenu__social"),
    submenu_wrap = document.getElementById("submenu_wrap"),
    submenu_items = document.getElementById("submenu_items"),
    submenu_mint = document.getElementById("submenu__mint"),
    fulllogo = document.getElementById("fulllogo"),
    emblem = document.getElementById("emblem");

  if (scroll >= 150) {
    navbar.classList.add("navbar_scroll");
    submenu.classList.add("navbar_row");
    // submenu__social.classList.add("navbar_row");

    // styles
    navbar.style.height = "100%";
    navbar.style.padding = "3px 34px 3px 25px";
    submenu_wrap.style.padding = "0 45px";
    submenu_items.style.padding = "2px 0 0 0";
    submenu_mint.style.right = "160px";

    // logo switch to small
    fulllogo.classList.add("hide");
    emblem.classList.contains("hide") && emblem.classList.remove("hide");

    // submenu spacing
    for (const child of submenu.children) {
      child.style.padding = "0 8px";
    }

    for (const child of submenu__social.children) {
      child.style.padding = "0 8px";
    }
  } else if (scroll <= 149) {
    // logo switch to normal
    fulllogo.classList.contains("hide") && fulllogo.classList.remove("hide");
    emblem.classList.add("hide");

    // navbar remove scroll
    navbar.classList.remove("navbar_scroll");
    submenu.classList.remove("navbar_row");
    submenu__social.classList.remove("navbar_row");

    // submenu spacing
    for (const child of submenu.children) {
      child.style.padding = "0px";
    }

    // styles
    navbar.style.padding = "25px 30px 0px";
    submenu_wrap.style.padding = "45px 0px 0px 15px";
    submenu_items.style.padding = "0";
  }
}
