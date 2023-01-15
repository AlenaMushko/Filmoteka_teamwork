import {} from './scss/index.scss'
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { onTeamModal } from './js/team_modal';
// логіка кнопок і посилань навігації хедера
import { libraryHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { btnClick } from './js/watched_queue';
import {
  giveLocalStorageToFirebaseStorage,
  deleteUserDataInFirebaseStorage,
} from './js/firebaseDatastorage';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import {} from './js/language';
// import { renderWatchedFilmInLibrary } from './js/watched_queue';

// -------------------------------------------header
libraryHeaderLinkBntLogic();
// рендириця картка фільму з id що в  localStorage
// renderWatchedFilmInLibrary();
//авторизація (тимчасове рішення)
localStorage.auth = 'yes';

//завантаження теми
import { onFirstLoadThemeLibrary } from './js/changeTheme';
onFirstLoadThemeLibrary();

//надсилання в сховище фаєрбейз кожні 10 секунд
setInterval(giveLocalStorageToFirebaseStorage, 10000);

//--------------------------------------------body
// слайлдер з фільмами, що зібрали найбільшу касу
sliderRevenueFilms();
// по кліку на кнопки рендериться відповідна інформація
btnClick();
// кнопка повернення догори
scrolToTop();

//------------------------------------------footer
// footer
onTeamModal();

// ---------------------------------

// import { MyLibrary } from './js/localStorage';

// import { renderFilmCard } from './js/renderFunction';
// import axios from 'axios';
// import genresId from './genres.json';
// import { refs } from './js/refs';

// const myLibrary = new MyLibrary();
// const KEY = '32432509d17cea42104bbb7507a382c7';
// const api_key = `?api_key=${KEY}`;
// const BASE_URL = 'https://api.themoviedb.org/3/';

// let arrWatchedFilms = myLibrary.getFromQueue();
// // let arrWatchedFilms = myLibrary.getFromWatched();
// console.log(arrWatchedFilms);

// async function getFilmFromLocalStorage(arrWatchedFilms) {
//   const data = await Promise.all(
//     arrWatchedFilms.map(idWatchedFilm => {
//       try {
//         const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images`;
//         return axios.get(url).then(response => {
//           if (!response) {
//             throw new Error(response.status);
//           }
//           return response.data;
//         });
//       } catch (error) {
//         console.error();
//       }
//     }));
//   return data;
// };

// renderWatchedFilmInLibrary();
// async function renderWatchedFilmInLibrary() {
//   const filmInfo = await getFilmFromLocalStorage(arrWatchedFilms);
//   try {
//     console.log(...filmInfo);
//     // renderFilmCard(filmInfo);
//     renderFilmCardLibrary(...filmInfo)

//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderFilmCardLibrary({ id, poster_path, title, original_title, original_name, release_date, first_air_date, genres, vote_average }) {
//   const filmGenre = genres.slice(0, 3).map(({ name }) => name)
//     .join(', ');
// const voteAverage = Number(vote_average).toFixed(1) 
// const foto = './images/poster_photo.png';
// const img = `<img   class='film__img lazyload' alt= '${title || original_title || original_name}' width='100%' loading="lazy"
//       data-src='https://image.tmdb.org/t/p/original${poster_path}'/>`;
// const imgPlug = `<img  class="film__img" '${title || original_title || original_name}' width='100%' 
//        src= '${foto}'`;

// const markup = `<li class="film__item" data-id=${id}>
//                   ${poster_path ? img : foto}
//                   <h2 class="films__title">${original_title || title || original_name} </h2>
//                   <p class="films__genres">${filmGenre || 'Not available'
//   }<span>|${(release_date || first_air_date || 'Not available').slice(
//     0,
//     4
//   )}</span></p>
//       <p class="films__voteaverage">${voteAverage}</p>
//               </li>`;
  
  
// // refs.movieLibrary.innerHTML = markup;
//   // console.log(markup);
//   refs.movieLibrary.insertAdjacentHTML('afterbegin', markup);
// }




