// import './scss/index.scss';
// import './scss/index-dark.scss';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { onTeamModal } from './js/team_modal';
// логіка кнопок і посилань навігації хедера
import { libraryHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { btnClick } from './js/watched_queue';
import  'lazysizes' ; 
// імпорт плагіна 
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { renderWatchedFilmInLibrary } from './js/watched_queue';

sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу


scrolToTop();
// кнопка повернення до гори

//авторизація (тимчасове рішення)
localStorage.auth = 'yes';

btnClick();
// по кліку на кнопки рендериться відповідна інформація
libraryHeaderLinkBntLogic();

// рендириця картка фільму з id що в  localStorage
// renderWatchedFilmInLibrary(); 


// footer
onTeamModal();

//завантаження теми
import { onFirstLoadTheme } from './js/changeTheme';
onFirstLoadTheme();





// ---------------------------------


import MyLibrary from './js/localStorage';
import { renderFilmCard } from './js/renderFunction';
import axios from 'axios';

const myLibrary = new MyLibrary();
const KEY = '32432509d17cea42104bbb7507a382c7';
const api_key = `?api_key=${KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getFilmFromLocalStorage(arrWatchedFilms) {
    Promise.all(arrWatchedFilms.map((idWatchedFilm) => {
      try {
        const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images`;
        return axios.get(url).then(response => {
          if (!response) {
            throw new Error(response.status);
          }
          console.log(response.data);
          return response.data;
        });
      } catch (error) {
        console.error();
      }
    }))
  }
let arrWatchedFilms = myLibrary.getFromWatched();

renderWatchedFilmInLibrary()
 async function renderWatchedFilmInLibrary() {
    const results = await getFilmFromLocalStorage(arrWatchedFilms);
  console.log(results);
  console.log(arrWatchedFilms);
  try {
    renderFilmCard(results);
    pagination.reset(results.total_results);
  } catch (error) {
    console.log(error);
  }
}







