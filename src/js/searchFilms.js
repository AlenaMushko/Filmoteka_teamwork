import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import { cleanPagination } from './pagination';
const apiService = new ApiService();

if (!refs.inputEl) {
  return;
} else {
  refs.inputEl.addEventListener('click', onSearchFormReset);
  refs.searchForm.addEventListener('submit', onSearchFormSubmit);
}

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
    if (localStorage.getItem('language') === 'en') {
        Notify.failure(
      'Sorry, You need to write something in search query. Please try again.'
    );
        console.log('en');
      } else if (localStorage.getItem('language') === 'ua') {
       Notify.failure(
      'Вибачте, вам потрібно написати щось в пошуковому полі. Спробуйте знову.'
    );
      }

    // попередження яке є на макеті хочеш розкоментує а хочеш не
    refs.warningContainer.classList.remove('is-hidden');
   
    return;
  }
  const results = await apiService.getSearchFilms();
  apiService.totalResults = results.total_results;
  try {
    renderFilmCard(results);
    // !замість фунціі яка закоментована внизу просто ресетимо інпут
    refs.inputEl.value = '';
    // resetQuery();

    //додаю пагінацію
    pagination.reset(results.total_results);
    if (apiService.totalResults === 0) {
      cleanPagination();
      if (localStorage.getItem('language') === 'en') {
        Notify.failure(
          'Sorry, there are no films matching your search query. Please try again.'
        );
        console.log('en');
      } else if (localStorage.getItem('language') === 'ua') {
        Notify.info(
          `Вибачте, не знайдено жодного філльму по вашому запиту. Будь ласка, спробуйте ще`
        );
      }

      return;
    }
    if (apiService.totalResults >= 1) {
      if (localStorage.getItem('language') === 'en') {
        Notify.success(`Hooray! We found ${apiService.totalResults} films.`);
      } else if (localStorage.getItem('language') === 'ua') {
        Notify.success(
          `Ура! Ми знайшли по вашому запиту ${apiService.totalResults} результатів.`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}

