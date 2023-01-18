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

// // фільми Watched
// async function onWatchedBtnClick() {
//   refs.btnQueue.classList.remove('current');
//   refs.btnWatched.classList.add('current');

//   let filmsOnPage = [];
//   if (arrWatchedFilms !== null) {
//     refs.libraryEmpty.classList.add('is-hidden');
//     let totalPages = arrWatchedFilms.length;
//     if (pageNumber === 1) {
//       filmsOnPage = arrWatchedFilms.slice(
//         2 * (pageNumber - 1),
//         12 * pageNumber
//       );
//     } else {
//       filmsOnPage = arrWatchedFilms.slice(
//         12 * (pageNumber - 1),
//         12 * pageNumber + 1
//       );
//     }
//     const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
//     try {
//       renderFilmCardLibrary(filmInfo);
//       pagination.reset(totalPages);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     cleanLibrary();
//   }
// }
// //  фільми Queue
// async function onQueueBtnClick() {
//   refs.btnWatched.classList.remove('current');
//   refs.btnQueue.classList.add('current');
//    let filmsOnPage = [];
//   if (arrQueueFilms !== null) {
//     refs.libraryEmpty.classList.add('is-hidden');
//     let totalPages = arrQueueFilms.length;
//     if (pageNumber === 1) {
//       filmsOnPage = arrQueueFilms.slice(2 * (pageNumber - 1), 12 * pageNumber);
//     } else {
//       filmsOnPage = arrQueueFilms.slice(
//         12 * (pageNumber - 1),
//         12 * pageNumber - 1 + 1
//       );
//     }
//     const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
//     try {
//       renderFilmCardLibrary(filmInfo);
//       pagination.reset(totalPages);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     cleanLibrary();
//   }
// }
// function cleanLibrary() {
//   notifyInfo();
//   refs.libraryEmpty.classList.remove('is-hidden');
//   refs.movieLibrary.innerHTML = '';
// }

// function notifyInfo() {
//   if (localStorage.getItem('language') === 'en') {
//     Notify.info(`Your film list is empty`);
//   } else if (localStorage.getItem('language') === 'ua') {
//     Notify.info(`Покищо, ваша бібліотека порожня`);
//   }

// }


// фільми Watched
export async function onWatchedBtnClick() {
  let arrWatchedFilms = myLibrary.getFromWatched();
  refs.btnQueue.classList.remove('current');
  refs.btnWatched.classList.add('current');
  let filmsOnPage = apiService.getArrWatchedId();
  const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
  try {
    renderFilmCardLibrary(filmInfo);
    pagination.reset(arrWatchedFilms.length);
  } catch (error) {
    console.log(error);
  }
}

//  фільми Queue
export async function onQueueBtnClick() {
  let arrQueueFilms = myLibrary.getFromQueue();
  refs.btnWatched.classList.remove('current');
  refs.btnQueue.classList.add('current');
  let filmsOnPage = apiService.getArrQueueId();
  const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
  try {
    renderFilmCardLibrary(filmInfo);
    pagination.reset(arrQueueFilms.length);
  } catch (error) {
    console.log(error);
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


