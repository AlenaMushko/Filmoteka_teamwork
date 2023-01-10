import { refs } from './refs';
import { onSearchFormSubmit } from './searchFilms';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';

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

 function topFilms(films) {
  apiService.getPopularFilms(films).then(renderFilmCard);
}