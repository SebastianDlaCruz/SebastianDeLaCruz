export const menu = (doc, nav) => {
  const $nav = doc.getElementById(nav);
  doc.addEventListener('click', (event) => {
    if (event.target.matches('#btn')) {
      $nav.classList.toggle('menu__active');
    }
    if (event.target.matches('.menu__link')) {
      $nav.classList.remove('menu__active');
    }

  });
};