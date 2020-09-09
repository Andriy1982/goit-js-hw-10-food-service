import listMenu from '../menu.json';
import itemTemplate from '../templates/menu.hbs';

const listRef = document.querySelector('.js-menu');

const markup = itemTemplate(listMenu);

listRef.insertAdjacentHTML('afterbegin', markup);
