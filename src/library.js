import {} from './scss/index.scss';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { onTeamModal } from './js/team_modal';
// логіка кнопок і посилань навігації хедера
import { libraryHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { btnLibraryWatchedOrQueue } from './js/watched_queue';
import {
  giveLocalStorageToFirebaseStorage,
  deleteDataFromFirebaseStorage,
} from './js/firebaseDatastorage';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { onFirstLoadThemeLibrary } from './js/changeTheme';
// import {} from './js/language';

// -------------------------------------------header
// рендириця картка фільму з id що в  localStorage
libraryHeaderLinkBntLogic();
//завантаження теми
onFirstLoadThemeLibrary();
//авторизація (тимчасове рішення)
localStorage.auth = 'yes';
//надсилання в сховище фаєрбейз кожні 10 секунд і видалення записаного 10 секунд назад
setInterval(deleteDataFromFirebaseStorage, 10000);
setInterval(giveLocalStorageToFirebaseStorage, 10000);

//--------------------------------------------body
// слайлдер з фільмами, що зібрали найбільшу касу
sliderRevenueFilms();
// по кліку на кнопки рендириця картка фільму з id що в  localStorage
btnLibraryWatchedOrQueue();
// кнопка повернення догори
scrolToTop();

//------------------------------------------footer
// footer
onTeamModal();

