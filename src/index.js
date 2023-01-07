import { refs } from './js/refs';
import ApiService from './js/fetchProdactsAPI';
import { renderFilmCard } from './js/rendarFunction';
import { sliderTopFilms } from './js/slideTopFilms';


const apiService = new ApiService();

sliderTopFilms(); 
// показувати коли на сторінці є  фільми інших категорій



import axios from "axios";


topFilms();

function topFilms(films) {
 apiService.getPopularFilms(films).then(renderFilmCard);
}

// ==>
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

// &with_genres=28 filter

// function getPopularFilms() {
//   const url = `${BASE_URL}discover/movie${api_key}&append_to_response=videos,images&sort_by = popularity.desc`;
//   return axios.get(url)
//     .then(response => {
//       if (!response) {
//         throw new Error(response.status);
//       };
//       return response.data;})
// }

function  getSearchFilms() {
    const url = `${BASE_URL}/search/movie?${api_key}&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }


