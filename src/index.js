import { refs } from './js/refs';
import ApiService from './js/fetchProdactsAPI';
import { renderFilmCard } from './js/rendarFunction';
import { sliderTopFilms } from './js/slideTopFilms';


const apiService = new ApiService();

// sliderTopFilms();  
// показувати коли на сторінці є  фільми інших категорій

// topFilms();

// function topFilms(films) {
//  apiService.getPopularFilms(films).then(renderFilmCard);
// };


import axios from "axios";






// // ==>
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

// // &with_genres=28 filter

let pageNumber = 1;
let searchQuery = '';
let totalHits = 0;
let inputSpace = '';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
// refs.btnLoadMoreEl.addEventListener('click', onBtnLoadMoreElClick);

refs.searchForm.addEventListener('keydown', e => {
  inputSpace = e.code;
});

 function onSearchFormSubmit(e) {
  e.preventDefault();
  searchQuery = refs.searchForm.elements.searchQuery.value;
  // У разі пошуку за новим ключовим словом, значення page повернути до початкового
  pageNumber = 1;
  //  refs.galleryEl.innerHTML = '';

  if (searchQuery === '' || searchQuery === 'Space') {
    return;
   }
   console.log(searchQuery);
   searchFilms();
}


// const KEY = '32432509d17cea42104bbb7507a382c7';
// const api_key = `?api_key=${KEY}`;
// const BASE_URL = 'https://api.themoviedb.org/3/';
// url = `${BASE_URL}search/movie${api_key}&page=${this.page}&query=${this.searchQuery}`;



function searchFilms(films) {
getSearchFilms(films).then(renderFilmCard);
};

function getSearchFilms(searchQuery) {

    const url = `${BASE_URL}search/movie${api_key}&query=${searchQuery}`;
    return axios.get(url)
      .then(response => {
      if (!response) {
        throw new Error(response.status);
        };
        console.log(response.data);
      return response.data;})
}