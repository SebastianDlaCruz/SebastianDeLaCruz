import Glide from '@glidejs/glide';
export const carrusel = (doc, carrusel, btnDerecha, btnIzquierda, icons) => {

  /*     const $carrusel = doc.getElementById(carrusel),
          $btnDerecha = doc.getElementById(btnDerecha),
          $btnIzquierda = doc.getElementById(btnIzquierda);
  
      let $icons = doc.querySelectorAll(icons);
  
  
  
      const DIRECTION = {
          RIGHT: 'RIGHT',
          LEFT: 'LEFT'
      }
  
      const movieSlider = direction => {
  
          if (direction === 'RIGHT') {
              $carrusel.insertBefore($icons[$icons.length - 1], $icons[0]);
              $icons = doc.querySelectorAll(icons);
          } else if (direction === 'LEFT') {
  
              $carrusel.appendChild($icons[0]);
              $icons = doc.querySelectorAll(icons);
          }
      }
  
      $btnDerecha.addEventListener('click', () => { movieSlider(DIRECTION.RIGHT) });
      $btnIzquierda.addEventListener('click', () => { movieSlider(DIRECTION.LEFT) });
       */

  const glide = new Glide(carrusel, {
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })

  glide.mount();

  const prevButton = document.querySelector(btnDerecha);
  const nextButton = document.querySelector(btnIzquierda);
  // opciones personalizadas del botón anterior
  prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    glide.go('<');
  });

  // opciones personalizadas en el botón siguiente
  nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    glide.go('>');
  });

}