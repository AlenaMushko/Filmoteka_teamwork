import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import ApiService from './fetchProdactsAPI';
import { MyLibrary } from './localStorage';
import { renderFilmCardLibrary } from './renderFunction';
import { pagination } from './pagination';

// екземпляп класу який працює з localStorage
const myLibrary = new MyLibrary();
const apiService = new ApiService();
let arrWatchedFilms = myLibrary.getFromWatched();
let arrQueueFilms = myLibrary.getFromQueue();
export function btnLibraryWatchedOrQueue() {
  if (arrWatchedFilms !== null) {
    onWatchedBtnClick();
    // apiService.onWatchedBtnClick();
  } else {
    notifyInfo();
  }

  refs.btnWatched.addEventListener('click', onWatchedBtnClick);
  refs.btnQueue.addEventListener('click', onQueueBtnClick);

  // refs.btnWatched.addEventListener('click', apiService.onWatchedBtnClick);
  // refs.btnQueue.addEventListener('click', apiService.onQueueBtnClick);
}

let pageNumber = apiService.page;
// фільми Watched
async function onWatchedBtnClick() {
  let filmsOnPage = [];
  if (arrWatchedFilms !== null) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = arrWatchedFilms.length;
    if (pageNumber === 1) {
      filmsOnPage = arrWatchedFilms.slice(
        2 * (pageNumber - 1),
        12 * pageNumber
      );
    } else {
      filmsOnPage = arrWatchedFilms.slice(
        12 * (pageNumber - 1),
        12 * pageNumber + 1
      );
    }
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
      pagination.reset(totalPages);
    } catch (error) {
      console.log(error);
    }
  } else {
    cleanLibrary();
  }
}
//  фільми Queue
async function onQueueBtnClick() {
  let filmsOnPage = [];
  if (arrWatchedFilms !== null) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = arrQueueFilms.length;
    if (pageNumber === 1) {
      filmsOnPage = arrQueueFilms.slice(2 * (pageNumber - 1), 12 * pageNumber);
    } else {
      filmsOnPage = arrQueueFilms.slice(
        12 * (pageNumber - 1),
        12 * pageNumber - 1 + 1
      );
    }
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
      pagination.reset(totalPages);
    } catch (error) {
      console.log(error);
    }
  } else {
    cleanLibrary();
  }
}
function cleanLibrary() {
  notifyInfo();
  refs.libraryEmpty.classList.remove('is-hidden');
  refs.movieLibrary.innerHTML = '';
}

function notifyInfo() {
  if (localStorage.getItem('language') === 'en') {
    Notify.info(`Your film list is empty`);
  } else if (localStorage.getItem('language') === 'ua') {
    Notify.info(`Покищо, ваша бібліотека порожня`);
  }
}
