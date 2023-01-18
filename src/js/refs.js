export const refs = {
  searchForm: document.querySelector('.search'),
  btnSearchFilms: document.querySelector('.search__button'),
  glideSlides: document.querySelector('.glide__slides'),
  topFilms: document.querySelector('.top-films'),
  productsList: document.querySelector('.films'),
  filmsContainer: document.querySelector('.js-films-container'),
  searchFilms: document.querySelector('.search-films'),
  paginationContainer: document.querySelector('#tui-pagination-container'),
  arrowLeft: document.querySelector('.arrow_left'),
  arrowRight: document.querySelector('.arrow_right'),
  pageNumbers: document.querySelector('.page-numbers'),
  inputEl: document.getElementById('searchQuery'),
  infoTextEl: document.querySelector('.info-text'),
  btnLoadMoreEl: document.querySelector('.load-more'),
  teamModal: document.querySelector('.team_modal'),
  teamModalCloseBtn: document.querySelector('.teamModal__close__btn'),
  teamOpenModalBtn: document.querySelector('.team_modal_btn'),
  paginationList: document.querySelector('.tui-pagination'),
  buttonWatched: document.querySelector('.button-watched'),
  buttonQueue: document.querySelector('.button-queue'),
  //ссилки на дом вузли для логіки хедера
  signInBtn: document.querySelector('.js__sign-in-btn'),
  signOutBtn: document.querySelector('.js__sign-out-btn'),
  myLibraryLink: document.querySelector('.js__my-lirbary-link'),
  // !посилання на елементи в хедері
  filterByGenre: document.getElementById('genres-container'),
  filterByYear: document.getElementById('years-container'),
  resetButton: document.getElementById('button-reset'),
  warningContainer: document.getElementById('warning'),
  logoBtn: document.getElementById('logo'),

  //ссилки для авторизації

  authEmailInput: document.querySelector('.js-auth__email-input'),
  authPasswordInput: document.querySelector('.js-auth__password-input'),
  authEntranceBtn: document.querySelector('.js-auth__entrance-btn'),
  authRegistrationBtn: document.querySelector('.js-auth__registration-btn'),
  authAddToWatchedBtn: document.querySelector('.js-auth__add-to-watched-btn'),
  authAddToQueueBtn: document.querySelector('.js-auth__add-to-queue-btn'),
  authForm: document.querySelector('.js-auth__form'),

  // my-libtary
 btnQueue: document.querySelector('.btn__queue'),
  btnWatched: document.querySelector('.btn__watched'),
  movieLibrary: document.querySelector('.library-films'),
  libraryEmpty: document.querySelector('.library-empty'),
 
  // паролі
  modalSignIn: document.querySelector('.modal__log-in'),
  inputPassword: document.querySelector('#password'),
  buttonShowPassword: document.querySelector('#button_show_password'),
  iconForShowPassword: document.querySelector('#icon_show_password'),
  iconForUnShowPassword: document.querySelector('#icon_un_show_password'),

  goToTop: document.querySelector('.go-Top'),

  btnTheme: document.querySelector('#theme-btn'),
};
