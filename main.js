import 'normalize.css';
import { carrusel } from "./src/js/carrusel";
import { menu } from "./src/js/menu";

const doc = document;



doc.addEventListener('DOMContentLoaded', () => {
  menu(doc, 'menu');

  carrusel(doc, '.glide',
    '.glide__arrow--left',
    '.glide__arrow--right',
    '#carrusel-1 .ul__li');


});

