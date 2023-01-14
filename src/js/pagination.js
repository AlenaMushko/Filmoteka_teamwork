import Pagination from 'tui-pagination';
import { onMyButtonClick } from './scrolToTop';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { getSearchByFilters } from './menuFilters';
import { onMyButtonClick } from './scrolToTop';

const apiService = new ApiService();

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

export function paginationLoadMorePopularFilms(total_results) {
  pagination.reset(total_results);
  pagination.on('afterMove', loadMoreFilms);

  async function loadMoreFilms(event) {
    onMyButtonClick();
    const currentPage = event.page;
    apiService.pageNum = currentPage;

    const results = await apiService.getPopularFilms();
    console.log('Popul film pag');
    renderFilmCard(results);
  }
}

export function cleanPagination() {
  refs.paginationList.innerHTML = '';
}

export function paginatioLoadMoreSerchFilm(total_results) {
  // cleanPagination();
  pagination.reset(total_results);
  pagination.on('afterMove', loadMoreSearchFilms);

  async function loadMoreSearchFilms(event) {
    onMyButtonClick();
    const currentPage = event.page;
    apiService.pageNum = currentPage;
    const results = await apiService.getSearchFilms();
    console.log(results);
    console.log('Serch film pag');
    renderFilmCard(results);
  }
}

export function loadMoreSerchFilters(total_results) {
  console.log(total_results);
  pagination.reset(total_results);

  pagination.on('afterMove', loadMoreSelectedGenre);

  async function loadMoreSelectedGenre(event) {
    onMyButtonClick();
    const page = event.page;

    const results = await getSearchByFilters(page);
    console.log(results);
    console.log('Filtres pag');
    renderFilmCard(results);
  }
}
