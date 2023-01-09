import { refs } from './js/refs';
import { onSearchFormSubmit } from './js/searchFilms';
import { sliderTopFilms } from './js/slideTopFilms';
import ApiService from './js/fetchProdactsAPI';
import { renderFilmCard } from './js/renderFunction';
import { backToTop } from './js/scrolToHome';

const apiService = new ApiService();

sliderTopFilms();
ShowFilms();
function ShowFilms() {
  topFilms();
  if (apiService.query !== '') {
    refs.searchForm.addEventListener('submit', onSearchFormSubmit);
    return;
  }
}

function topFilms(films) {
  apiService.getPopularFilms(films).then(renderFilmCard);
}

backToTop();

browserslist.clearCaches();
