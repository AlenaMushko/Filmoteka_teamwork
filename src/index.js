import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';

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
