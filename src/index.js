import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';
import { filmCardModalWindow } from './js/modal-film';
// import { filmTrailerModalWindow } from './js/modal-trailer';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { renderTrailersBtns } from './js/getTrailers';


renderTrailersBtns();


// Note: Never import/require the *.min.js files from the npm package.

// header
registrationModalOpen();
// main
sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу
ShowFilms();
// фільми топ, фільми за пошуком

filmCardModalWindow();
// модалка карточки фільму

scrolToTop();
// кнопка повернення до гори

// footer
onTeamModal();

//авторизація (тимчасове рішення)
import { authHandler } from './js/auth';
authHandler();

// логіка кнопок і посилань навігації хедера
import { homeHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
homeHeaderLinkBntLogic();
