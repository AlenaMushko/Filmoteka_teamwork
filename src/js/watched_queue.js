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
const amountFilmsOnPage = 6;
console.log('befor function', apiService.page);
// фільми Watched
export async function onWatchedBtnClick(pageNumber = 1) {
  // let pageNumber = apiService.page;
  let filmsOnPage = [];
  if (arrWatchedFilms.length !== 0) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = arrWatchedFilms.length;
    if (pageNumber === 1) {
      filmsOnPage = arrWatchedFilms.slice(
        2 * (pageNumber - 1),
        amountFilmsOnPage * pageNumber
      );
    } else {
      filmsOnPage = arrWatchedFilms.slice(
        amountFilmsOnPage * (pageNumber - 1),
        amountFilmsOnPage * pageNumber + 1
      );
    }
    console.log('in fetch function', apiService.page);
    console.log('in fetch pageNum', pageNumber);
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
async function onQueueBtnClick(pageNumber = 1) {
  let filmsOnPage = [];
  if (arrQueueFilms.length !== 0) {
    refs.libraryEmpty.classList.add('is-hidden');
    let totalPages = arrQueueFilms.length;
    if (pageNumber === 1) {
      filmsOnPage = arrQueueFilms.slice(
        2 * (pageNumber - 1),
        amountFilmsOnPage * pageNumber
      );
    } else {
      filmsOnPage = arrQueueFilms.slice(
        amountFilmsOnPage * (pageNumber - 1),
        amountFilmsOnPage * pageNumber - 1 + 1
      );
    }
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
