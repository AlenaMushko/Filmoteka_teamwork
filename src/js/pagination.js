import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { topFilms } from './functionsForFilms';

const paginationList = document.querySelector('.tui-pagination');

export function getPagination({ page, total_results }) {
  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 10,
    page: page,
    centerAlign: false,
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

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    console.log(currentPage);
    const apiService = new ApiService(currentPage);
    async function topFilms() {
      const results = await apiService.getPopularFilms();
      console.log(results);
      try {
        renderFilmCard(results);
        getPagination(results);
      } catch (error) {
        console.log(error);
      }
    }
    topFilms();
  });
}

export function cleanPagination() {
  paginationList.innerHTML = '';
}
