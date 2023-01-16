import { showOrHidePasswordonClick } from './js/passwordWachedFunction';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';
import { filmCardModalWindow } from './js/modal-film';
// import { filmTrailerModalWindow } from './js/modal-trailer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { homeHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { authHandler } from './js/auth';
import { onFirstLoadTheme } from './js/changeTheme';
import { getChengeThemeByClick } from './js/changeTheme';
// import {} from './js/language';
import { authHandler } from './js/auth';

// -------------------------header
import * as menuFilters from './js/menuFilters'; /* тимчасово поки імпортую все*/
registrationModalOpen();
// логіка кнопок і посилань навігації хедера
homeHeaderLinkBntLogic();
//завантаження теми
onFirstLoadTheme();
getChengeThemeByClick();
//авторизація
authHandler();

// ---------------------------main
// слайлдер з фільмами, що зібрали найбільшу касу
sliderRevenueFilms();
// фільми топ, фільми за пошуком
ShowFilms();
// модалка карточки фільму
filmCardModalWindow();
// кнопка повернення до гори
scrolToTop();
// форма з паролями
showOrHidePasswordonClick();
// модалка з трейлерами
// renderTrailersBtns();

//----------------------------footer
onTeamModal();

//надсилання в сховище фаєрбейз кожні 10 секунд
/* import { giveLocalStorageToFirebaseStorage, deleteUserDataInFirebaseStorage } from './js/firebaseDatastorage';
setInterval(giveLocalStorageToFirebaseStorage, 10000); */
