import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';

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
  console.log(results);
  apiService.totalResults = results.total_results;
  if (apiService.totalResults < 20) {
    refs.btnLoadMoreEl.classList.add('is-hidden');
    refs.infoTextEl.classList.remove('is-hidden');
  } else {
    refs.btnLoadMoreEl.classList.remove('is-hidden');
    refs.infoTextEl.classList.add('is-hidden');
  }

  try {
    renderFilmCard(results);
    if (apiService.totalResults === 0) {
      Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
      return;
    }
    if (apiService.totalResults >= 1) {
      Notify.success(`Hooray! We found ${apiService.totalResults} films.`);
    }
    apiService.page += 1;
  } catch (error) {
    console.log(error);
  }
}
