import {} from './scss/index.scss';
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
import { onFirstLoadThemeLibrary } from './js/changeTheme';
// import { renderWatchedFilmInLibrary } from './js/functionsForFilms';
// import { renderQueueFilmInLibrary } from './js/functionsForFilms';

// import {} from './js/language';
// import { renderWatchedFilmInLibrary } from './js/watched_queue';

// -------------------------------------------header
libraryHeaderLinkBntLogic();
// рендириця картка фільму з id що в  localStorage
// renderWatchedFilmInLibrary();
// renderQueueFilmInLibrary();
//авторизація (тимчасове рішення)
localStorage.auth = 'yes';

//завантаження теми
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


