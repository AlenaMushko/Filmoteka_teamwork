import { refs } from './refs';
import genresId from '../genres.json';

export function renderSliderFilmCard({ results }) {
  const markup = results
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
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
                  <p class="glide__genres">${filmGenreId}<span>|${(
        release_date || '2022'
      ).slice(0, 4)}</span></p>
              </li>`;
    })
    .join('');
  refs.glideSlides.innerHTML = markup;
}

export function renderFilmCard({ results }) {
   const markup = results
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
      let filmGenreId = '';
if (genre_ids.length >= 4) {
          // console.log(">=4");
  let newGenre_ids = genre_ids.splice(1, 3, 'other');
  genre_ids = newGenre_ids;
}
// else {
//         genre_ids = genre_ids;
//         }       
      console.log(genre_ids);
      if (genre_ids) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => {
         
           return name
          })
          // .join(', ');
      
      }

          
            // genre_ids.length >= 4 ? genre_ids : genre_ids.includes(id);
            // console.log(genre_ids);
            // console.log(genre_ids.slise(0, 2));
           
      const img = `<img   class='film__img' alt= '${title}' width='100%'
      src='https://image.tmdb.org/t/p/original${poster_path}'/>`;

      return `<li class="film__item" data-id=${id}>
                  ${poster_path ? img : '<p>Poster is not available.</p>'}
                  <h2 class="films__title">${title}</h2>
                  <p class="films__genres">${
                    filmGenreId || 'Not available'
                  }<span>|${(release_date || 'Not available').slice(
        0,
        4
      )}</span></p>
              </li>`;
    })
    .join('');
  refs.topFilms.innerHTML = markup;
}
