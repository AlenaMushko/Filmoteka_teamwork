import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { backToTop } from './js/scrolToHome';
import { ShowFilms } from './js/functionsForFilms';
import { modalWindows } from './js/modal';
import { onTeamModal } from './js/team_modal';


// header


// main
sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу
ShowFilms();
// фільми топ, фільми за пошуком
modalWindows();
// виклик модалки

backToTop();
// кнопка повернення до гори


// footer
onTeamModal();
