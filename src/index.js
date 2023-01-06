import { refs } from './js/refs';

const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

// &with_genres=28 filter

function getPopularFilms() {
  const url = `${BASE_URL}discover/movie${api_key}&append_to_response=videos,images&sort_by = popularity.desc`;
  return fetch(url)
    .then(response => response.json())
    .then(results => {
      return results;
    });
}

topFilms();

function topFilms(film) {
  getPopularFilms(film).then(renderProdutsItems);
}

async function renderProdutsItems({ results }) {
  const markup = await results
    .map(result => {
      // console.log(result);
      return getFilmCard(result);
    })
    .join('');

  refs.topFilms.insertAdjacentHTML('beforeend', markup);
}

 function getFilmCard({ id, poster_path, title, release_date, genre_ids }) {
  
  let genre_id = ' '.split(',');
  for (let i = 0; i <= genre_ids.length - 1; i += 1) {
    genre_id +=  getGenrisFilms(genre_ids[i])+',';
   };
   console.log(genre_id);
  const filmCard =  `
  <li class='products__item' data-action='${id}' data-modal-open>
  <img   class='products__img'
      src='https://image.tmdb.org/t/p/original${poster_path}'
      alt= '${title}'
      width='100%'/>
  <h2 class='product__title'>${title}</h2>
  <p class='product__text'>${genre_id}</p>
  <p class='product__text'>${release_date || first_air_date}</p>
  </li>
  `;
  console.log(filmCard);

  return filmCard;
}
function getGenrisFilms(a) {
  const url = `${BASE_URL}genre/movie/list${api_key}`;
  return fetch(url)
    .then(response => response.json())
    .then(results => {
      const genresNames = results.genres;
      let myObjGenre = {};
      for (let i = 0; i < genresNames.length; i += 1) {
        let element = Object.values(genresNames[i]);
        myObjGenre[element[0]] = element[1];
        a === element[0] ? (a = element[1]) : '';
      };
      return a;
    });
}


