  const Timeline_HddenFormSeccion1 = () => {

      let seccion1 = document.querySelector('.seccion1')
      let seccion1__titulo_span = seccion1.querySelectorAll('.seccion1__titulo span')
      let seccion1__parrafo = seccion1.querySelector('.seccion1__parrafo')
      let seccion1__imagen = seccion1.querySelector('.seccion1__imagen')

      const Tl__hfSeccion1 = gsap.timeline({
          scrollTrigger: {
              trigger: seccion1,
              scrub: true,
              pin: false,
        
                toggleActions: 'play none none reverse', //
              markers: {
                  startColor: 'plum',
                  endColor: 'blue',
                  fontSize: '2rem',
                  fontWeight: 'bold'
              },
                markers: false,
          }
      })

      Tl__hfSeccion1
          .from(seccion1__titulo_span, {
              duration: 2,
              stagger: 1.5,
              xPercent: -10,
              yPercent: -10,
          }, '>')
          .from(seccion1__parrafo, {
              duration: 2,
              xPercent: 10,
              yPercent: -10,
          }, "-=1")
          .from(seccion1__imagen, {
              duration: 2,
              xPercent: 10,
              yPercent: -10,
          }, "-=1");

      return Tl__hfSeccion1;
  }