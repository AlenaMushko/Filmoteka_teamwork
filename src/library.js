// import './scss/index.scss';
// import './scss/index-dark.scss';
import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { scrolToTop } from './js/scrolToTop';
import { onTeamModal } from './js/team_modal';
// логіка кнопок і посилань навігації хедера
import { libraryHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
import { onWatchedBtnClick } from './js/watched_queue';


sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу

// btnClick();

scrolToTop();
// кнопка повернення до гори

//авторизація (тимчасове рішення)
localStorage.auth = "yes";


onWatchedBtnClick();

libraryHeaderLinkBntLogic();



// footer
onTeamModal();





