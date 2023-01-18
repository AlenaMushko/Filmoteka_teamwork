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
  let arrWatchedFilms = myLibrary.getFromWatched();
  if (arrWatchedFilms !== null) {
    onWatchedBtnClick();
    // apiService.onWatchedBtnClick();
  } else {
    notifyInfo();
    cleanPagination();
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
  if (arrWatchedFilms !== null) {
    refs.libraryEmpty.classList.add('is-hidden');
  const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
  try {
    renderFilmCardLibrary(filmInfo);
    pagination.reset(arrWatchedFilms.length);
  } catch (error) {
    console.log(error);
    } 
  } else {
    cleanLibrary();
  }
}

//  фільми Queue
export async function onQueueBtnClick() {
  let arrQueueFilms = myLibrary.getFromQueue();
  refs.btnWatched.classList.remove('current');
  refs.btnQueue.classList.add('current');
  let filmsOnPage = apiService.getArrQueueId();
  if (arrQueueFilms !== null) {
  const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
  try {
    renderFilmCardLibrary(filmInfo);
    pagination.reset(arrQueueFilms.length);
    console.log('if');
    console.log(arrQueueFilms);
  } catch (error) {
    console.log(error);
  }
  } else {
    console.log('else');
    cleanLibrary();
  }
}

function cleanLibrary() {
  notifyInfo();
  refs.libraryEmpty.classList.remove('is-hidden');
  refs.movieLibrary.innerHTML = '';
  cleanPagination();
}

function notifyInfo() {
  if (localStorage.getItem('language') === 'en') {
    Notify.info(`Your film list is empty`);
  } else if (localStorage.getItem('language') === 'ua') {
    Notify.info(`Покищо, ваша бібліотека порожня`);
  }
}


