import Pagination from 'tui-pagination';
import { onMyButtonClick } from './scrolToTop';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { getSearchByFilters } from './menuFilters';

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

export function PGloadMorePopFilms(total_results) {
  pagination.reset(total_results);
  pagination.on('afterMove', loadMoreFilms);

  async function loadMoreFilms(event) {
    onMyButtonClick();
    const currentPage = event.page;
    apiService.pageNum = currentPage;
    const results = await apiService.getPopularFilms();
    renderFilmCard(results);
    console.log('It is PG_More_Pop_Films');
  }
}

export function PGloadMoreBySerch(total_results, query) {
  apiService.query = query;
  pagination.reset(total_results);
  pagination.on('afterMove', loadMoreSearchFilms);

  async function loadMoreSearchFilms(event) {
    console.log(event);
    onMyButtonClick();
    const currentPage = event.page;
    apiService.pageNum = currentPage;
    console.log(currentPage);
    const results = await apiService.getSearchFilms();

    renderFilmCard(results);
    console.log('It is PG by Serch');
  }
}

export function PGLoadMoreByFiltres(query, genre, year) {
  pagination.on('afterMove', loadMoreByFilters);

  async function loadMoreByFilters(event) {
    onMyButtonClick();
    const page = event.page;
    const data = await getSearchByFilters(page, query, genre, year);
    const results = data.results;
    pagination.reset(data.total_results);

    renderFilmCard(results);
    console.log('It is PG by Filters');
  }
}

export function cleanPagination() {
  refs.paginationList.innerHTML = '';
}
