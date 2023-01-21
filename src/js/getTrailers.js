import * as basicLightbox from 'basiclightbox';
const axios = require('axios').default;
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

let trailerKey = '';

export async function getTrailersByMovieId(movieID) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieID}/videos${api_key}`
  );
  const result = response.data.results.filter(
    value => value.type === 'Trailer' && value.site === 'YouTube'
  );
  return result;
}

export async function renderTrailersBtns(trailers) {
  const trailersBtnContainer = document.querySelector('.trailers-btns-list');
  const trailersHeader = document.querySelector(
    '.film-modal__watch-trailers-title'
  );
  trailersHeader.classList.remove('visually-hidden__title');
  if (trailers.length === 0) {
    trailersHeader.classList.add('visually-hidden__title');
  }
  const markup = trailers
    .slice(0, 4)
    .reverse()
    .map(trailer => {
      let name = trailer.name;
      if (trailer.name.length > 30) {
        name = trailer.name.slice(0, 30).concat('', '...');
      }
      return `<li class="trailers-btns-list__item"><button class="trailers-btns-list__btn btn__modal" data-key=${trailer.key} title="${trailer.name}">${name}</button></li>`;
    })
    .join('');
  trailersBtnContainer.innerHTML = markup;
}

export function trailerBtnsEventWorker() {
  const trailersBtnsList = document.querySelector('.trailers-btns-list');
  trailersBtnsList.addEventListener('click', onTrailerBtnClick);
}

function onTrailerBtnClick(e) {
  trailerKey = e.target.dataset.key;
  trailerModal(trailerKey);
}

export function trailerModal(trailerKey) {
  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${trailerKey}" width="782" height="515" frameborder="0"></iframe>
`);
  instance.show();
}
