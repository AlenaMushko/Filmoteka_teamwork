import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import { cleanPagination } from './pagination';

const apiService = new ApiService();

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
  if (apiService.query === '') {
    return;
  }

  const results = await apiService.getSearchFilms();
  apiService.totalResults = results.total_results;
  // if (apiService.totalResults < 20) {
  //   refs.btnLoadMoreEl.classList.add('is-hidden');
  //   refs.infoTextEl.classList.remove('is-hidden');
  // } else {
  //   refs.btnLoadMoreEl.classList.remove('is-hidden');
  //   refs.infoTextEl.classList.add('is-hidden');
  // }

  try {
    renderFilmCard(results);
    pagination.reset(results.total_results);
    //додаю пагінацію для рендерінга додаткових сторінок при пошуку
    pagination.on('afterMove', loadMoreSearchFilms);

    async function loadMoreSearchFilms(event) {
      const currentPage = event.page;
      apiService.pageNum = currentPage;
      const results = await apiService.getSearchFilms();
      renderFilmCard(results);
    }
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
    // apiService.page += 1;
  } catch (error) {
    console.log(error);
  }
}
