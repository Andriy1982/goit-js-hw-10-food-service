import listMenu from '../menu.json';
import itemTemplate from '../templates/menu.hbs';

// console.log(itemTemplate);
// console.log(listMenu);

const listRef = document.querySelector('.js-menu');
// console.log(articleRef);

// console.log(obj);

const markup = itemTemplate(listMenu);

// // const markup = itemTemplate({ items: ['ggg', 'fgffd', 'hhhg'] });
// // const markup = obj
// //   .map(el => {
// //     //   console.log(el, index);
// //     return `<li><a href="">${el.id}</a></li>`;
// //   })
// //   .join('');

// console.log(markup);
// // const el = '<li><a href="">Hello</a></li>';

// // // articleRef.innerHTML = el;
listRef.insertAdjacentHTML('afterbegin', markup);
