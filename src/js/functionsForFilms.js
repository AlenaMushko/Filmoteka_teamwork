import { refs } from './refs';
import { onSearchFormSubmit } from './searchFilms';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { pagination } from './pagination';

import { MyLibrary } from './localStorage';
import { renderFilmCardLibrary } from './renderFunction';


const myLibrary = new MyLibrary();
// екземпляп класу який працює з localStorage
const apiService = new ApiService();
// екземпляр класу в який пишемо виклики фільмів по потребі

export function ShowFilms() {
  topFilms();
  if (apiService.query !== '') {
    refs.searchForm.getNewFilms('submit', onSearchFormSubmit);
    return;
  }
}
// фільми топ, фільми за пошуком

async function topFilms() {
  const results = await apiService.getPopularFilms();
  try {
    renderFilmCard(results);
    //додаю пагінацію
    pagination.reset(results.total_results);
  } catch (error) {
    console.log(error);
  }
}

// фільми Watched
let arrWatchedFilms = myLibrary.getFromWatched();

export async function renderWatchedFilmInLibrary() {
  const filmInfo = await apiService.getFilmFromLocalStorage(arrWatchedFilms);
  try {
    renderFilmCardLibrary(filmInfo);
  } catch (error) {
    console.log(error);
  }
}
//  фільми Queue
let arrQueueFilms = myLibrary.getFromQueue();

export async function renderQueueFilmInLibrary() {
  const filmInfo = await apiService.getFilmFromLocalStorage(arrQueueFilms);
  try {
    renderFilmCardLibrary(filmInfo);
  } catch (error) {
    console.log(error);
  }
}



