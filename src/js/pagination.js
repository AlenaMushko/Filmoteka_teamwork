import Pagination from 'tui-pagination';
import { onMyButtonClick } from './scrolToTop';
import ApiService from './fetchProdactsAPI';
import { MyLibrary } from './localStorage';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { getSearchByFilters } from './menuFilters';
import { renderFilmCardLibrary } from './renderFunction';

const apiService = new ApiService();
const myLibrary = new MyLibrary();
const myLibraryBtnCurrent = refs.myLibraryLink.classList.contains(
  'navigation__link--current-page'
);

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
export const pagination = new Pagination('pagination', options);
pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(event) {
  onMyButtonClick();
  const page = event.page;

  if (!myLibraryBtnCurrent) {
    if (
      !localStorage.getItem('year-value') &&
      !localStorage.getItem('genre-value') &&
      !localStorage.getItem('query-value')
    ) {
      apiService.pageNum = page;
      const results = await apiService.getPopularFilms();
      renderFilmCard(results);
    } else if (
      !localStorage.getItem('year-value') &&
      !localStorage.getItem('genre-value') &&
      localStorage.getItem('query-value')
    ) {
      apiService.query = localStorage.getItem('query-value');
      apiService.pageNum = page;
      const results = await apiService.getSearchFilms();
      renderFilmCard(results);
    } else {
      const results = await getSearchByFilters(
        page,
        localStorage.getItem('query-value'),
        localStorage.getItem('genre-value'),
        localStorage.getItem('year-value')
      );
      renderFilmCard(results);
    }
  } else {
    if (!refs.btnQueue) {
      return;
    } else {
      const QueueBtn = refs.btnQueue.classList.contains('current');
      apiService.pageNum = page;
      if (QueueBtn) {
        let filmsOnPage = apiService.getArrQueueId();
        const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
        renderFilmCardLibrary(filmInfo);
      } else {
        let filmsOnPage = apiService.getArrWatchedId();
        const filmInfo = await apiService.getFilmFromLocalStorage(filmsOnPage);
        renderFilmCardLibrary(filmInfo);
      }
    }
  }
}

export function cleanPagination() {
  refs.paginationList.innerHTML = '';
}
