import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import ApiService from './fetchProdactsAPI';
import { MyLibrary } from './localStorage';
import { renderFilmCardLibrary } from './renderFunction';
import { pagination } from './pagination';
import { cleanPagination } from './pagination';

// екземпляп класу який працює з localStorage
const myLibrary = new MyLibrary();
const apiService = new ApiService();

export function btnLibraryWatchedOrQueue() {
  let listCount = refs.movieLibrary.childElementCount;
  let arrWatchedFilms = myLibrary.getFromWatched();
  if (arrWatchedFilms === null || arrWatchedFilms.length === 0) {
    notifyInfoEmpty();
    cleanPagination();
    refs.libraryEmpty.classList.remove('is-hidden');
  } else {
    onWatchedBtnClick();
    if (localStorage.getItem('language') === 'en') {
        Notify.info(`Your have ${arrWatchedFilms.length} films`);
      } else if (localStorage.getItem('language') === 'ua') {
        Notify.info(`Ви маєте ${arrWatchedFilms.length} фільмів`);
      }
  }
  refs.btnWatched.addEventListener('click', onWatchedBtnClick);
  refs.btnQueue.addEventListener('click', onQueueBtnClick);
}

// фільми Watched
export async function onWatchedBtnClick() {
  let arrWatchedFilms = myLibrary.getFromWatched();
  refs.btnQueue.classList.remove('current');
  refs.btnWatched.classList.add('current');
  let filmsOnPage = apiService.getArrWatchedId();
  if (arrWatchedFilms === null || arrWatchedFilms.length === 0) {
    cleanLibrary();
  } else {
    refs.libraryEmpty.classList.add('is-hidden');
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
      pagination.reset(arrWatchedFilms.length);
    } catch (error) {
      console.log(error);
    }
  }
}

//  фільми Queue
export async function onQueueBtnClick() {
  let arrQueueFilms = myLibrary.getFromQueue();
  refs.btnWatched.classList.remove('current');
  refs.btnQueue.classList.add('current');
  let filmsOnPage = apiService.getArrQueueId();
  if (arrQueueFilms === null || arrQueueFilms.length === 0) {
    cleanLibrary();
  } else {
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
      pagination.reset(arrQueueFilms.length);
    } catch (error) {
      console.log(error);
    }
  }
}

function cleanLibrary() {
  refs.libraryEmpty.classList.remove('is-hidden');
  refs.movieLibrary.innerHTML = '';
  cleanPagination();
}

function notifyInfoEmpty() {
  if (localStorage.getItem('language') === 'en') {
    Notify.info(`Your film list is empty`);
  } else if (localStorage.getItem('language') === 'ua') {
    Notify.info(`Покищо, ваша бібліотека порожня`);
  }
}

