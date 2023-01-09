
// npm install --save tui-pagination
// https://github.com/nhn/tui.pagination#-install
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';

import { refs } from './refs';


import ApiService from './fetchProdactsAPI';
const apiService = new ApiService();

refs.btnLoadMoreEl.addEventListener('click', onBtnLoadMoreElClick);

export async function onBtnLoadMoreElClick() {
    const results = await apiService.getSearchFilms(apiService.query, apiService.page);
  try {
    renderFilmCard(results);
   apiService.page += 1;
    let remainder = await apiService.totalResults - 20 * (apiService.page - 2)
    if (remainder < 40) {
    refs.btnLoadMoreEl.classList.add('is-hidden');
    refs.infoTextEl.classList.remove('is-hidden');
  } else {
    refs.btnLoadMoreEl.classList.remove('is-hidden');
     refs.infoTextEl.classList.add('is-hidden');
  };
  } catch (error) {
    console.log(error);
  }
}


// export function getPageFilms(ids, itemsPerPage, currentPage) {
//   const start = currentPage * itemsPerPage;
//   const end = start + itemsPerPage;

//   return ids.slice(start, end);
// }

// export function createLibraryPagination(items, renderFn, totalItems) {
//   const container = document.getElementById('pagination');
//   const itemsPerPage = 20;
//   const options = {
//     totalItems: totalItems || items.length,
//     itemsPerPage,
//     visiblePages: 4,
//     centerAlign: false,
//   };

//   const pagination = new Pagination(container, options);

//   pagination.on('beforeMove', event => {
//     renderFn(getPageFilms(items, itemsPerPage, event.page - 1));
//   });

//   pagination.movePageTo(0);
// }

// export function createHomePagination(renderFn) {
//   const container = document.getElementById('pagination');
//   const itemsPerPage = 20;
//   const options = {
//     totalItems: 200,
//     itemsPerPage,
//     visiblePages: 4,
//     centerAlign: false,
//   };

//   filmsApi
//     .fetchTrending(true)
//     .then(data => {
//       renderFn(getPageFilms(data.results, itemsPerPage, 0));
//     })
//     .catch(console.log);

//   const pagination = new Pagination(container, options);

//   pagination.on('beforeMove', event => {
//     filmsApi.page = event.page;
//     filmsApi
//       .fetchTrending(true)
//       .then(data => {
//         // console.log(data, renderFn)
//         renderFn(data.results);
//       })
//       .catch(console.log);
//   });

//   pagination.movePageTo(0);
// }



