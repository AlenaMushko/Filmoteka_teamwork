import { Notify } from 'notiflix/build/notiflix-notify-aio';
import apiService from './fetchProdactsAPI';
// import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import { cleanPagination } from './pagination';

// const apiService = new ApiService();

refs.inputEl.addEventListener('click', onSearchFormReset);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormReset() {
  if (apiService.query !== '') {
    refs.searchForm.reset();
    return;
  }
}

export async function onSearchFormSubmit(e) {
  e.preventDefault();

  apiService.page = 1;
  apiService.query = refs.inputEl ? refs.inputEl.value.trim() : '';
  localStorage.setItem('query-value', apiService.query);

  if (apiService.query === '') {
    // 1) відправляється запит з query
    // 2) я видаляю query і сабмічу
    // 3) нічого не відбувається, бо квері пусте, а має відправлятись запит без query
    return;
  }

  const results = await apiService.getSearchFilms();
  apiService.totalResults = results.total_results;
  try {
    renderFilmCard(results);
    //додаю пагінацію
    pagination.reset(results.total_results);

    if (apiService.totalResults === 0) {
      cleanPagination();
      Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
      return;
    }
    if (apiService.totalResults >= 1) {
      Notify.success(`Hooray! We found ${apiService.totalResults} films.`);
    }
  } catch (error) {
    console.log(error);
  }
}

export const resetQuery = () => {
  refs.inputEl.value = '';
  localStorage.removeItem('query-value');
  apiService.query = '';
};
