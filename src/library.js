import {} from './scss/index.scss';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { onTeamModal } from './js/team_modal';
// логіка кнопок і посилань навігації хедера
import { libraryHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { btnLibraryWatchedOrQueue } from './js/watched_queue';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { onFirstLoadThemeLibrary } from './js/changeTheme';
import {} from './js/language';
import { filmCardModalWindow } from './js/modal-film';

// -------------------------------------------header
// рендириця картка фільму з id що в  localStorage
libraryHeaderLinkBntLogic();
//завантаження теми
import { getChengeLibraryThemeByClick } from './js/changeTheme';
onFirstLoadThemeLibrary();
getChengeLibraryThemeByClick();
//авторизація (тимчасове рішення)
localStorage.auth = 'yes';
//робота зі сховищем фаєрбейз
// import { firebaseRealtimeDatabase } from './js/firebaseDatastorage';
// firebaseRealtimeDatabase();

//--------------------------------------------body
// слайлдер з фільмами, що зібрали найбільшу касу
sliderRevenueFilms();
// по кліку на кнопки рендириця картка фільму з id що в  localStorage
btnLibraryWatchedOrQueue();
// кнопка повернення догори
scrolToTop();
// модалка карточки фільму
filmCardModalWindow();

//------------------------------------------footer
// footer
onTeamModal();
