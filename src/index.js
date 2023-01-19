import { showOrHidePasswordonClick } from './js/passwordWachedFunction';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';
import { filmCardModalWindow } from './js/modal-film';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { homeHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { authHandler } from './js/auth';
import { onFirstLoadTheme } from './js/changeTheme';

import {} from './js/language';
import { authHandler } from './js/auth';
import './js/menuFilters'; /* тимчасово поки імпортую все*/

registrationModalOpen();
// логіка кнопок і посилань навігації хедера
homeHeaderLinkBntLogic();
//завантаження теми
import { getChengeMainThemeByClick } from './js/changeTheme';
onFirstLoadTheme();
getChengeMainThemeByClick();
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

//----------------------------footer
onTeamModal();
//робота зі сховищем фаєрбейз
// import { firebaseRealtimeDatabase } from './js/firebaseDatastorage';
// firebaseRealtimeDatabase();
