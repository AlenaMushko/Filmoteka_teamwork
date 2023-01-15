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
  Notify.info(`Your film list is empty`);
  if (
    refs.btnWatched.addEventListener('click', onWatchedBtnClick) ||
    refs.btnQueue.addEventListener('click', onQueueBtnClick)
  ) {
    refs.movieLibrary.innerHTML = '';
    refs.emptyTitle.classList.add('is-hidden');
    refs.emptyImg.classList.add('is-hidden');
  }
}

// фільми Watched
async function onWatchedBtnClick() {
  const filmInfo = await apiService.getFilmFromLocalStorage(arrWatchedFilms);
  try {
    renderFilmCardLibrary(filmInfo);
  } catch (error) {
    console.log(error);
  }
}
//  фільми Queue
async function onQueueBtnClick() {
  const filmInfo = await apiService.getFilmFromLocalStorage(arrQueueFilms);
  try {
    renderFilmCardLibrary(filmInfo);
  } catch (error) {
    console.log(error);
  }
}
