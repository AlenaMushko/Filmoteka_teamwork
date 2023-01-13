const axios = require('axios').default;
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrailersByMovieId(movieID) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieID}/videos${api_key}`
    );
    return response.data.results.filter(value => value.type === 'Trailer');
  } catch (error) {
    console.log(error.message);
  }
}

export async function renderTrailersBtns(trailers) {
  const trailersBtnContainer = document.querySelector('.trailers-btns-list');
  console.log(trailersBtnContainer);
  const markup = trailers
    .slice(0, 3)
    .map(
      trailer =>
        `<li><button class="trailerButton">Watch ${trailer.name}</button></li>`
    )
    .join('');
  trailersBtnContainer.insertAdjacentHTML('beforeend', markup);
}

// renderTrailersBtns();
