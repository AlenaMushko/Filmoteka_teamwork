const refs = {
  imgContainerEl: document.querySelector(".film-modal__img-container"),
  titleBigEl: document.querySelector(".film-modal__title"),
  votesEl: document.querySelector(".film-modal__votes"),
  popularityEl: document.querySelector(".film-modal__popularity"),
  titleSmallEl: document.querySelector(".film-modal__title--small"),
  genresEl: document.querySelector(".film-modal--genres"),
  overviewEl: document.querySelector(".film-modal__about-txt"),
};

let {
    imgContainerEl,
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

  if (!poster_path) {
    imgContainerEl.innerHTML = `<p>${unavailable}</p>`;
  };
  imgContainerEl.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" class="film-modal__img" width="240" height="357">`;

  if (!original_title) {
    titleBigEl.innerHTML = unavailable;
    titleSmallEl.innerHTML = unavailable;
  };
  titleBigEl.innerHTML = original_title;
  titleSmallEl.innerHTML = original_title;

  if (!vote_average || !vote_count) {
    votesEl.innerHTML = unavailable;
  };
  votesEl.innerHTML = `<span>${vote_average}</span> / <span>${vote_count}</span>`;

  if (!popularity) {
    popularityEl.innerHTML = unavailable;
  };
  popularityEl.innerHTML = popularity;

  if (!genres) {
    genresEl.innerHTML = unavailable;
  };
  genresEl.innerHTML = filmGenres;

  if (!overview) {
    overviewEl.innerHTML = unavailable;
  }
  overviewEl.innerHTML = overview;



  
  // const markup = `<img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}"
  //   class="film-modal__img" width="240" height="357">
  // <div class="film-modal__info">
  //   <h2 class="film-modal__title">${original_title}</h2>
  //   <ul class="film-modal__stats-list">
  //     <li class="film-modal__stats-item">
  //       <p class="film-modal__txt--left">Vote / Votes</p>
  //       <p class="film-modal__txt--right votes-info"><span>${vote_average}</span> / <span>${vote_count}</span></p>
  //     </li>
  //     <li class="film-modal__stats-item">
  //       <p class="film-modal__txt--left">Popularity</p>
  //       <p class="film-modal__txt--right">${popularity}</p>
  //     </li>
  //     <li class="film-modal__stats-item">
  //       <p class="film-modal__txt--left">Original title</p>
  //       <p class="film-modal__txt--right uppercase-info">${original_title}</p>
  //     </li>
  //     <li class="film-modal__stats-item">
  //       <p class="film-modal__txt--left">Genre</p>
  //       <p class="film-modal__txt--right">${filmGenres}</p>
  //     </li>
  //   </ul>
  //   <div class="film-modal__about">
  //     <h3 class="film-modal__about-title">About</h3>
  //     <p class="film-modal__about-txt">${overview}</p>
  //   </div>
  //   <div class="film-modal__buttons">
  //     <button type="button">add to watched</button>
  //     <button type="button">add to queue</button>
  //   </div>
  //   <ul class="trailers-btns-list"></ul>
  //   </div>`;

  // filmModalContent.innerHTML = markup;
  filmModalContent.setAttribute('film-modal-id', id);
}

export function clearModalFilmCard() {
  const filmModalContent = document.querySelector('.film-modal__content');

  imgContainerEl.innerHTML = empty;
  titleBigEl.innerHTML = empty;
  votesEl.innerHTML = empty;
  popularityEl.innerHTML = empty;
  titleSmallEl.innerHTML = empty;
  genresEl.innerHTML = empty;
  overviewEl.innerHTML = empty;

  filmModalContent.removeAttribute('film-modal-id');
}

