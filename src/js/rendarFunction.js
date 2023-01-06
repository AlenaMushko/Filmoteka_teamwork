import { refs } from "./refs";

export function renderProdutsItems(products) {
  const markup = products.map(
    ({ id, poster_path, title, release_date, genre_ids }) => {
      return `
  <li class='products__item' data-action='${id}' data-modal-open>
  <img   class='products__img'
      src='${poster_path}'
      alt= '${title}'
      width='100%'/>
  <h2 class='product__title'>${title}</h2>
  <p class='product__text'>${genre_ids}</p>
  <p class='product__text'>${release_date}</p>
  </li>
  `
    }).join('');
  refs.topFilms.insertAdjacentHTML('beforeend', markup);
}