import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { MyLibrary } from './localStorage';
// import ApiService from './fetchProdactsAPI';
import apiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';

const myLibrary = new MyLibrary();
// const apiService = new ApiService();

export function btnClick() {
  refs.btnWatched.addEventListener('click', onWatchedBtnClick);
  refs.btnQueue.addEventListener('click', onQueueBtnClick);
}

export function onWatchedBtnClick() {
  try {
    let arrWatchedFilms = myLibrary.getFromQueue();

    if (arrWatchedFilms) {
      // renderWatchedFilmInLibrary(arrWatchedFilms);
    } else {
      refs.emptyTitle.classList.remove('is-hidden');
      refs.emptyImg.classList.remove('is-hidden');
      Notify.info(`Your film list is empty`);
    }
  } catch (error) {
    console.log(error.message);
  }
  return;
}
// Queue

export function onQueueBtnClick() {
  try {
    let arrWatchedFilms = myLibrary.getFromWatched();
    if (queueMovie) {
      renderWatchedFilmInLibrary();
    } else {
      refs.emptyTitle.classList.remove('is-hidden');
      refs.emptyImg.classList.remove('is-hidden');
      Notiflix.Notify.info(`Your film list is empty`);
    }
  } catch (error) {
    console.log(error.message);
  }
  return;
}
// -------------
let arrWatchedFilms = myLibrary.getFromWatched();

// renderWatchedFilmInLibrary()
async function renderWatchedFilmInLibrary() {
  const results = await getFilmFromLocalStorage(arrWatchedFilms);
  console.log(results);
  console.log(arrWatchedFilms);
  try {
    renderFilmCard(results);
    pagination.reset(results.total_results);
  } catch (error) {
    console.log(error);
  }
}
