import * as basicLightbox from 'basiclightbox';
const axios = require('axios').default;
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrailersByMovieId(movieID) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieID}/videos${api_key}`
  );
  return response.data.results.filter(value => value.type === 'Trailer');
}

export async function renderTrailersBtns(trailers) {
  const trailersBtnContainer = document.querySelector('.trailers-btns-list');
  const markup = trailers
    .slice(0, 3)
    .map(
      trailer =>
        `<li class="trailers-btns-list__item"><button class="trailers-btns-list__btn btn__modal" data-key=${trailer.key}>${trailer.name}</button></li>`
    )
    .join('');
  trailersBtnContainer.innerHTML = markup;
}

export function TrailerModal(trailerKey) {
  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${trailerKey}" width="782" height="515" frameborder="0"></iframe>
`);
  instance.show();
}
