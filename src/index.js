import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './js/fetchProdactsAPI';
import { renderFilmCard } from './js/renderFunction';
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
let query = '';
let totalResults = 0;




const inputEl = document.getElementsByName('searchQuery')[0];

 inputEl.addEventListener('click', onSearchFormReset);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);


function onSearchFormReset() {
  if (apiService.query !== '') {
    refs.searchForm.reset();
    // refs.productsList.innerHTML = ''
  }
  
   
}
 async function onSearchFormSubmit(e) {
   e.preventDefault();
   pageNumber = 1;

 apiService.query = e.currentTarget.elements.searchQuery.value.trim();
  // У разі пошуку за новим ключовим словом, значення page повернути до початкового
  //  apiService.resetPage();
   console.log(  refs.filmsContainer);
  // refs.filmsContainer.innerHTML = ''
  if (apiService.query === '' || apiService.query === 'Space') {
    return;
   }
   
   const results = await apiService.getSearchFilms(apiService.query);
   totalResults =  results.total_results;
   if (totalResults < 20) {
    refs.btnLoadMoreEl.classList.add('is-hidden');
    refs.infoTextEl.classList.remove('is-hidden');
  } else {
    refs.btnLoadMoreEl.classList.remove('is-hidden');
    refs.infoTextEl.classList.add('is-hidden');
   };

   try {
    renderFilmCard(results);
    if (totalResults === 0) {
      Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
      return;
    }
    if (totalResults >= 1) {
      Notify.success(`Hooray! We found ${totalResults} films.`);
      loadingLazy();
    }
    pageNumber += 1;
  } catch (error) {
    console.log(error);
  }
}

function loadingLazy() {
  const { height: cardHeight } = document.querySelector('.top-films')
    .firstElementChild.getBoundingClientRect();
  // Метод getBoundingClientRect()повертає розмір елемента та його положення відносно вікна перегляду
  window.scrollBy({
    top: cardHeight * -1,
    behavior: 'smooth',
    // прокручування анімується плавно
  });
}
