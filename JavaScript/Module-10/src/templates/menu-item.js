import menuTemplate from '../templates/menuTemplate.hbs';
import menu from '../menu.json';
const itemRef = document.querySelector('.js-menu');
const markup = menuTemplate(menu);
itemRef.insertAdjacentHTML('beforeend', markup);
