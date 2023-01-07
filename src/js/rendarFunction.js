import { refs } from "./refs";
import genresId from '../genres.json';

export  function renderSliderFilmCard({ results }) {
  const markup = results.map(({ id, poster_path, title, release_date, genre_ids }) => {
      let filmGenreId = '';
    if (genre_ids) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .join(', ');
      }
      return `<li class="glide__slide" data-id=${id}>
                 <img   class='glide__img' alt= '${title}' width='100%'
                  src='https://image.tmdb.org/t/p/original${poster_path}'/>
                  <h2 class="glide__title">${title}</h2>
                  <p class="glide__genres">${filmGenreId}<span>|${(release_date || '2022').slice(0,4)}</span></p>
              </li>`;
    })
    .join('');
  console.log(markup);
  refs.glideSlides.insertAdjacentHTML('beforeend', markup);
}



export  function renderFilmCard({ results }) {
  const markup = results.map(({ id, poster_path, title, release_date, genre_ids }) => {
      let filmGenreId = '';
    if (genre_ids) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .join(', ');
      }
      return `<li class="film__item" data-id=${id}>
                 <img   class='film__img' alt= '${title}' width='100%'
                  src='https://image.tmdb.org/t/p/original${poster_path}'/>
                  <h2 class="films__title">${title}</h2>
                  <p class="films__genres">${filmGenreId}<span>|${(release_date || '2022').slice(0,4)}</span></p>
              </li>`;
    })
    .join('');
  console.log(markup);
  refs.topFilms.insertAdjacentHTML('beforeend', markup);
}

