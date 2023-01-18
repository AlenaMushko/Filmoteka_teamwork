import { refs } from './refs';
import genresId from '../genres.json';
import genresIdUa from '../genres-ua.json';

let currentLang = localStorage.getItem('language');
export function renderSliderFilmCard({ results }) {
  const markup = results
    .map(
      ({
        id,
        poster_path,
        title,
        original_title,
        original_name,
        release_date,
        first_air_date,
        genre_ids,
      }) => {
        let filmGenreId = '';
        if (genre_ids) {
          currentLang === "en"
            ? (filmGenreId = genresId
              .filter(({ id }) => genre_ids.includes(id))
              .map(({ name }) => name)
              .join(', '))
            : filmGenreId = genresIdUa
              .filter(({ id }) => genre_ids.includes(id))
              .map(({ name }) => name)
              .join(', ');
        }
        return `
      <li class="glide__slide revenue__slider" data-id=${id}>
      <a class="glide__link" href= "">
      <div class="glide__container">
                 <img   class='glide__img' alt= '${
                   title || original_title || original_name
                 }' width='360' height='345px' loading="lazy"
                  src='https://image.tmdb.org/t/p/w342${poster_path}'/>
                  <div class="glide__text">
                  <h3 class="glide__title">${
                    title || original_title || original_name
                  }</h3>
                  <p class="glide__genres">${filmGenreId}<span>|${(
          release_date ||
          first_air_date ||
          'Not available'
        ).slice(0, 4)}</span></p></div></div></a>
              </li>`;
      }
    )
    .join('');
  refs.glideSlides.innerHTML = markup;
}
export function renderFilmCard({ results }) {
  cleanTopFilmsMarkUp();
  const markup = results
    .map(
      ({
        id,
        poster_path,
        title,
        original_title,
        original_name,
        release_date,
        first_air_date,
        genre_ids,
      }) => {
        let filmGenre = '';
        if (genre_ids) {
          let filmGenreId = "";
          currentLang === "en"
            ? (filmGenreId = genresId
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name))
            : (filmGenreId = genresIdUa
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name));
          if (filmGenreId.length >= 4) {
            filmGenre = `${filmGenreId.slice(0, 2).join(', ')},  Others`;
          } else {
            filmGenre = filmGenreId.join(', ');
          }
        }
        if (title.length > 25 || original_title > 25) {
          title = title.slice(0, 25).concat('', '...');
          original_title = original_title.slice(0, 25).concat('', '...');
        }
        const foto = `<img   class='film__img lazyload' alt= '${
          title || original_title || original_name
        }' width='390px' height='580px' loading="lazy"
      data-src="https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"/>`;
        const img = `<img   class='film__img lazyload' alt= '${
          title || original_title || original_name
        }' width='390px' height='580px'  loading="lazy"
      data-src='https://image.tmdb.org/t/p/w500${poster_path}'/>`;
        const imgPlug = `<img  class="film__img" '${
          title || original_title || original_name
        }' width='100%'
       src= '${foto}'`;
        return `<li class="film__item" data-id=${id}>
                  ${poster_path !== null ? img : foto}
                  <h3 class="films__title">${
                    title || original_title || original_name
                  } </h3>
                  <p class="films__genres">${
                    filmGenre || 'Not available'
                  }<span>|${(
          release_date ||
          first_air_date ||
          'Not available'
        ).slice(0, 4)}</span></p>
              </li>`;
      }
    )
    .join('');
  refs.topFilms.insertAdjacentHTML('afterbegin', markup);
}
export function renderFilmCardLibrary(films) {
  const markup = films
    .map(film => {
      const {
        id,
        poster_path,
        title,
        original_title,
        original_name,
        release_date,
        first_air_date,
        genres,
        vote_average,
      } = film;
      let filmGenre = '';
      let filmGenreAll = film.genres.map(({ name }) => name);
      if (film.genres.length >= 4) {
        if (currentLang === 'en') {
          filmGenre = `${filmGenreAll.join(', ')},  Others`;
        } else if (currentLang === 'ua') {
          filmGenre = `${filmGenreAll.slice(0, 2).join(', ')}, інші`;
        }
      } else {
        filmGenre = `${filmGenreAll}`;
      }
      // console.log(film.genres.length);
      // console.log(filmGenre);
      const voteAverage = Number(vote_average).toFixed(1);
      const foto = `<img   class='film__img lazyload' alt= '${
        title || original_title || original_name
      }' width='390px' height='580px' loading="lazy"
      data-src="https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"/>`;
      const img = `<img   class='film__img lazyload' alt= '${
        title || original_title || original_name
      }' width='390px' height='580px' loading="lazy"
      data-src='https://image.tmdb.org/t/p/w500${poster_path}'/>`;
      return `<li class="film__item" data-id=${id}>
      <p class="films__voteaverage">${voteAverage}</p>
                           ${poster_path !== null ? img : foto}
                  <h3 class="films__title">${
                    title || original_title || original_name
                  } </h3>
                  <p class="films__genres">${
                    filmGenre || 'Not available'
                  }<span>|${(
        release_date ||
        first_air_date ||
        'Not available'
      ).slice(0, 4)}</span></p>
              </li>`;
    })
    .join('');
  refs.movieLibrary.innerHTML = markup;
}
function cleanTopFilmsMarkUp() {
  refs.topFilms.innerHTML = '';
}
