import { MyLibrary } from './localStorage';
import { langArr } from './translation';
import { onWatchedBtnClick } from './watched_queue';
import { onQueueBtnClick } from './watched_queue';

const myLibrary = new MyLibrary();
const renderFunctions = {
  watched: onWatchedBtnClick,
  queue: onQueueBtnClick,
};

export function addEventListenerOnButtonaAddWatchedAndAddQueue() {
  const authAddToWatched = document.querySelector('.button-watched');
  const authAddToQueue = document.querySelector('.button-queue');
  const openReg = document.querySelector('.navigation__open--btn');

  checkAuthUser();

  function changeBtnName(btnAction, lybraryName) {
    const currentLang = localStorage.getItem('language') || 'en';
    const newBtnName = langArr[`${btnAction}-${lybraryName}`][currentLang];
    return newBtnName;
  }

  function checkAuthUser() {
    if (localStorage.auth === 'no') {
      authAddToQueue.addEventListener('click', () => {
        openAuthModal();
      });
      authAddToWatched.addEventListener('click', () => {
        openAuthModal();
      });
      return;
    } else {
      checkLocalMoviesList(
        myLibrary.getFromWatched,
        'watched',
        authAddToWatched,
        myLibrary.removeFromWatched,
        myLibrary.addToWatched
      );
      checkLocalMoviesList(
        myLibrary.getFromQueue,
        'queue',
        authAddToQueue,
        myLibrary.removeFromQueue,
        myLibrary.addToQueue
      );
    }
  }

  function openAuthModal() {
    authAddToWatched.addEventListener('click', openReg.click());
    authAddToQueue.addEventListener('click', openReg.click());
    const overlayLogin = document.querySelector('.overlay__log-in');
    overlayLogin.style.zIndex = '30';
  }

  function addMovieToLocalStorage(
    libraryArrey,
    lybraryName,
    btnName,
    removeFunc,
    addFunc
  ) {
    const newAddFunction = addFunc;
    const btnAction = 'add';
    const newBtnName = changeBtnName(btnAction, lybraryName);
    btnName.textContent = newBtnName;
    function onClick() {
      const currentPageTitle = document.querySelector('title');
      const currentFunction = renderFunctions[lybraryName];
      newAddFunction();
      if (currentPageTitle.textContent === 'My-library') {
        const currentLibrary = document
          .querySelector('.current')
          .getAttribute('data-lang');
        if (currentLibrary === lybraryName) {
          currentFunction();
        }
      }
      chengeBtnToRemove(
        libraryArrey,
        lybraryName,
        btnName,
        removeFunc,
        addFunc
      );
      btnName.removeEventListener('click', onClick);
    }
    btnName.addEventListener('click', onClick);
  }

  function chengeBtnToRemove(
    libraryArrey,
    lybraryName,
    btnName,
    removeFunc,
    addFunc
  ) {
    const newRemoveFunction = removeFunc;
    const btnAction = 'remove';
    const newBtnName = changeBtnName(btnAction, lybraryName);
    btnName.textContent = newBtnName;
    function onClick() {
      const currentPageTitle = document.querySelector('title');
      const currentFunction = renderFunctions[lybraryName];
      newRemoveFunction();
      if (currentPageTitle.textContent === 'My-library') {
        const currentLibrary = document
          .querySelector('.current')
          .getAttribute('data-lang');
        if (currentLibrary === lybraryName) {
          currentFunction();
        }
      }
      addMovieToLocalStorage(
        libraryArrey,
        lybraryName,
        btnName,
        removeFunc,
        addFunc
      );
      btnName.removeEventListener('click', onClick);
    }
    btnName.addEventListener('click', onClick);
  }

  function checkLocalMoviesList(
    libraryArrey,
    lybraryName,
    btnName,
    removeFunc,
    addFunc
  ) {
    const newLibraryArrey = libraryArrey;
    const newMovieID = myLibrary.getMovieID();
    if (!newLibraryArrey()) {
      addMovieToLocalStorage(
        libraryArrey,
        lybraryName,
        btnName,
        removeFunc,
        addFunc
      );
      return;
    } else if (newLibraryArrey().includes(newMovieID)) {
      chengeBtnToRemove(
        libraryArrey,
        lybraryName,
        btnName,
        removeFunc,
        addFunc
      );
      return;
    } else {
      addMovieToLocalStorage(
        libraryArrey,
        lybraryName,
        btnName,
        removeFunc,
        addFunc
      );
    }
  }
}
