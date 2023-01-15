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

// // let arrQueueFilms = myLibrary.getFromQueue();
//  let arrWatchedFilms = myLibrary.getFromWatched();
// console.log(arrWatchedFilms);

// async function getFilmFromLocalStorage(arrWatchedFilms) {
//     Promise.all(arrWatchedFilms.map((idWatchedFilm) => {
//       try {
//         const url = `${BASE_URL}movie/${idWatchedFilm}${api_key}&append_to_response=images`;
//         return axios.get(url).then(response => {
//           if (!response) {
//             throw new Error(response.status);
//           }
//           console.log(response.data);
//           return response.data;
//         });
//       } catch (error) {
//         console.error();
//       }
//     }))
// };
// filmCardToLibrary();
// function filmCardToLibrary( id, poster_path, title, original_title, original_name, release_date, first_air_date, genre_ids ) {
//   let filmGenreId = '';
//   if (genre_ids) {
//     filmGenreId = genresId
//       .filter(({ id }) => genre_ids.includes(id))
//       .map(({ name }) => name)
//       .join(', ');
//   }
//   console.log(filmGenreId);
//   return `
//       <li class="glide__slide" data-id=${id}>
//       <a class="glide__link" href= "">
//       <div class="glide__container">
//                  <img   class='glide__img' alt= '${title || original_title || original_name}' width='360' loading="lazy"
//                   src='https://image.tmdb.org/t/p/original${poster_path}'/>
//                   <div class="glide__text">
//                   <h2 class="glide__title">${title || original_title || original_name}</h2>
//                   <p class="glide__genres">${filmGenreId}<span>|${(
//         release_date || first_air_date|| 'Not available'
//       ).slice(0, 4)}</span></p></div></div></a>
//               </li>`;
// }

// function renderCard(film) {
//     const markup = filmCardToLibrary(film);
//     refs.glideSlides.innerHTML = markup;
//     // console.log(markup);
//     // console.log(film);
// }
// renderWatchedFilmInLibrary()
// function renderWatchedFilmInLibrary() {
//   getFilmFromLocalStorage(arrWatchedFilms).then(result => {
//     // console.log(result);
//     renderCard(result);
//    }).catch((error)=> {
//     console.log(error);
//   })
// }

// // renderCard()

