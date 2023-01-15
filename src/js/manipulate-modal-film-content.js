import { addEventListenerOnButtonaAddWatchedAndAddQueue } from './localStorage'

const refs = {
  imgEl: document.querySelector(".film-modal__img"),
  titleBigEl: document.querySelector(".film-modal__title"),
  votesEl: document.querySelector(".film-modal__votes"),
  popularityEl: document.querySelector(".film-modal__popularity"),
  titleSmallEl: document.querySelector(".film-modal__title--small"),
  genresEl: document.querySelector(".film-modal--genres"),
  overviewEl: document.querySelector(".film-modal__about-txt"),
};

let {
    imgEl,
    titleBigEl,
    votesEl,
    popularityEl,
    titleSmallEl,
    genresEl,
  overviewEl } = refs;

const unavailable = "Info unavailable";
const empty = "";

export function renderModalFilmCard(filmInfo) {

  const filmModalContent = document.querySelector('.film-modal__content');

  if (!filmInfo) {
    filmModalContent.innerHTML =
      "<p class='film-modal__error'>We are sorry but there is no detailed info about this movie.</p>";
    return;
  }

  const {
    id,
    poster_path,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = filmInfo;

  const filmGenres = genres
    .slice(0, 3)
    .map(({ name }) => name)
    .join(', ');

  if (poster_path === "originalnull") {
    imgEl.src = "./images/poster_photo.png";
    imgEl.alt = "poster already on the way";
  };
  imgEl.src = `https://image.tmdb.org/t/p/original${poster_path}`;
  imgEl.alt = original_title;

  if (!original_title) {
    titleBigEl.innerHTML = unavailable;
    titleSmallEl.innerHTML = unavailable;
  };
  titleBigEl.innerHTML = original_title;
  titleSmallEl.innerHTML = original_title;

  if (!vote_average || !vote_count) {
    votesEl.innerHTML = unavailable;
  };
  votesEl.innerHTML = `<span class="vote-average">${vote_average}</span>/<span class="vote-count">${vote_count}</span>`;

  if (!popularity) {
    popularityEl.innerHTML = unavailable;
  };
  popularityEl.innerHTML = popularity;

  if (genres === []) {
    genresEl.innerHTML = unavailable;
  };
  genresEl.innerHTML = filmGenres;

  if (overview === "") {
    overviewEl.innerHTML = unavailable;
  }
  overviewEl.innerHTML = overview;

  filmModalContent.setAttribute('film-modal-id', id);
  addEventListenerOnButtonaAddWatchedAndAddQueue();
}

export function clearModalFilmCard() {
  const filmModalContent = document.querySelector('.film-modal__content');

  imgEl.src = "./images/poster_photo.png";
  imgEl.alt = "poster already on the way";
  titleBigEl.innerHTML = empty;
  votesEl.innerHTML = empty;
  popularityEl.innerHTML = empty;
  titleSmallEl.innerHTML = empty;
  genresEl.innerHTML = empty;
  overviewEl.innerHTML = empty;

  filmModalContent.removeAttribute('film-modal-id');
}
