export class MyLibrary {
    getFromWatched() {
        return JSON.parse(localStorage.getItem("watchedMovies"));
    }

    addToWatched() {
        let newMovieID = getMovieID();
        let localWatchedMovies = myLybrary.getFromWatched();
        if (!localWatchedMovies) {
            localWatchedMovies = [newMovieID]
            localStorage.setItem("watchedMovies", JSON.stringify(localWatchedMovies));
        }
    else if(localWatchedMovies.includes(newMovieID)){
            return;
        }else{
        localWatchedMovies.push(newMovieID);
        localStorage.setItem("watchedMovies", JSON.stringify(localWatchedMovies));
        }
    }

    removeFromWatched() {
        removeFromLocalStorage(myLybrary.getFromWatched, 'watchedMovies');
    }

    addToQueue() {
        let newMovieID = getMovieID();
        let localQueueList = myLybrary.getFromQueue();
        if (!localQueueList) {
            localQueueList = [newMovieID]
            localStorage.setItem('queueMovies', JSON.stringify(localQueueList));
        }
    else if(localQueueList.includes(newMovieID)){
            return;
        }else{
        localQueueList.push(newMovieID);
        localStorage.setItem('queueMovies', JSON.stringify(localQueueList));
        }
    }

    getFromQueue() {
        return JSON.parse(localStorage.getItem('queueMovies'));
    }

    removeFromQueue() {
        removeFromLocalStorage(myLybrary.getFromQueue, 'queueMovies');
    }
}
const myLybrary = new MyLibrary;

function getMovieID() {
    const filmModalContent = document.querySelector('.film-modal__content');
    return filmModalContent.getAttribute('film-modal-id');
}

function removeFromLocalStorage(libraryArrey, lybraryName) {
    const getLibraryArrey = libraryArrey;
    const newLibraryArrey = getLibraryArrey();
    const newMovieID = getMovieID();
    if(!newLibraryArrey.includes(newMovieID)){
        return;
    } else {
        const movieToRemoveIndex = newLibraryArrey.indexOf(newMovieID);
        newLibraryArrey.splice(movieToRemoveIndex, 1);
        localStorage.setItem(lybraryName, JSON.stringify(newLibraryArrey));
    }
}

export function addEventListenerOnButtonaAddWatchedAndAddQueue() {
    const authAddToWatched = document.querySelector('.button-watched');
    const authAddToQueue = document.querySelector('.button-queue');
    const openReg = document.querySelector('.navigation__open--btn');
    
    checkAuthUser();

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
            checkLocalMoviesList(myLybrary.getFromWatched, 'watched', authAddToWatched, myLybrary.removeFromWatched, myLybrary.addToWatched);
            checkLocalMoviesList(myLybrary.getFromQueue, 'queue', authAddToQueue, myLybrary.removeFromQueue, myLybrary.addToQueue);
        }
    }

    function openAuthModal() {
        authAddToWatched.addEventListener('click', openReg.click());
        authAddToQueue.addEventListener('click', openReg.click());
        const overlayLogin = document.querySelector('.overlay__log-in');
        overlayLogin.style.zIndex = '30';
    }

    function addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
        btnName.textContent = `add to ${lybraryName}`;
        const newAddFunction = addFunc;
        btnName.addEventListener('click', () => {
            newAddFunction();
            chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
        });
    }

    function chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
        const newRemoveFunction = removeFunc;
        btnName.textContent = `Remove from ${lybraryName}`;
        btnName.addEventListener('click', () => {
            newRemoveFunction();
            addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
        });
        return;
    }

    function checkLocalMoviesList(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
        const newLibraryArrey = libraryArrey;
        const newMovieID = getMovieID();
        if (!newLibraryArrey()) {
            addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
        }
        else if (newLibraryArrey().includes(newMovieID)) {
            chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
        }
        else {
            addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
        }
    }
}