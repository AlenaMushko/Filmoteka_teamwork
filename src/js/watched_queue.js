import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import ApiService from './fetchProdactsAPI';
import { MyLibrary } from './localStorage';
import { renderFilmCardLibrary } from './renderFunction';

// екземпляп класу який працює з localStorage
const myLibrary = new MyLibrary();
const apiService = new ApiService();

let arrWatchedFilms = myLibrary.getFromWatched();
let arrQueueFilms = myLibrary.getFromQueue();

export function btnLibraryWatchedOrQueue() {
  if (arrWatchedFilms.length !== 0) {
    onWatchedBtnClick();
  } else {
    Notify.info(`Your film list is empty`);
  }

  refs.btnWatched.addEventListener('click', onWatchedBtnClick);
  refs.btnQueue.addEventListener('click', onQueueBtnClick);
}

let pageNumber = ApiService.pageNum(newPage);
const amountFilmsOnPage = 2;

// фільми Watched
async function onWatchedBtnClick() {

  if (arrWatchedFilms.length !== 0) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = Math.ceil(arrWatchedFilms.length / amountFilmsOnPage);
    let filmsOnPage = arrWatchedFilms.slice((amountFilmsOnPage*pageNumber-2), (amountFilmsOnPage*pageNumber-2+amountFilmsOnPage));
    console.log(arrWatchedFilms);
    console.log(filmsOnPage);
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
    } catch (error) {
      console.log(error);
    }
  } else {
    cleanLibrary();
  }
}
//  фільми Queue
async function onQueueBtnClick() {
  if (arrQueueFilms.length !== 0) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = Math.ceil(arrQueueFilms.length / amountFilmsOnPage);
    let filmsOnPage = arrQueueFilms.slice((amountFilmsOnPage*pageNumber-2), (amountFilmsOnPage*pageNumber-2+amountFilmsOnPage));
    const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
    try {
      renderFilmCardLibrary(filmInfo);
    } catch (error) {
      console.log(error);
    }
  } else {
    cleanLibrary();
  }
}

function cleanLibrary() {
  Notify.info(`Your film list is empty`);
  refs.libraryEmpty.classList.remove('is-hidden');
  refs.movieLibrary.innerHTML = '';
}
