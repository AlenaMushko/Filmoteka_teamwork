import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Note: Never import/require the *.min.js files from the npm package.

// header
registrationModalOpen();
// main
sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу
ShowFilms();
// фільми топ, фільми за пошуком
scrolToTop();
// кнопка повернення до гори

// footer
onTeamModal();
