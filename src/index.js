import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './js/fetchProdactsAPI';
import { renderFilmCard } from './js/renderFunction';
import { sliderTopFilms } from './js/slideTopFilms';
import { onSearchFormSubmit } from './js/searchFilms';
// import { onBtnLoadMoreElClick } from './js/pagination';

const apiService = new ApiService();

// sliderTopFilms();
// показувати коли на сторінці є  фільми інших категорій

// topFilms();

// function topFilms(films) {
//  apiService.getPopularFilms(films).then(renderFilmCard);
// };



refs.btnLoadMoreEl.addEventListener('click', onBtnLoadMoreElClick);

onSearchFormSubmit();



// // onBtnLoadMoreElClick();

import axios from "axios";

// // ==>
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

// // &with_genres=28 filter


// async function onBtnLoadMoreElClick() {
 
//   console.log(apiService.page);
//    apiService.page += 1;
//    console.log(apiService.page);
 
//    console.log(  apiService.searchQuery);
//      const url = await `${BASE_URL}search/movie${api_key}&query=${this.searchQuery}&page=${this.page}`;
//    return axios.get(url)
//      .then(response => {
//       if (!response) {
//         throw new Error(response.status);
//       }
//       console.log(response.data);
//     //  apiService.page += 1;
//     console.log(apiService.page);
//       return response.data;
//     })
//    .catch (error => { console.log(error); });
//   }


  // const results = await apiService.getSearchFilms(apiService.query, apiService.page);
  // console.log(results);
  // try {
  //   renderFilmCard(results);
  //   console.log(results);
  //   apiService.page += 1;
  //   console.log(apiService.page);
  //   let remainder = await apiService.totalResults - 20 * (apiService.page - 2)
  //   if (remainder < 40) {
  //   refs.btnLoadMoreEl.classList.add('is-hidden');
  //   refs.infoTextEl.classList.remove('is-hidden');
  // } else {
  //   refs.btnLoadMoreEl.classList.remove('is-hidden');
  //    refs.infoTextEl.classList.add('is-hidden');
  // };
  // } catch (error) {
  //   console.log(error);
  // }




