export class MyLibrary {
    getFromWatched() {
        return JSON.parse(localStorage.getItem("watchedMovies"));
    }

    addToWatched() {
        let newMovieID = myLibrary.getMovieID();
        let localWatchedMovies = myLibrary.getFromWatched();
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
        let newMovieID = myLibrary.getMovieID();
        if (!newMovieID) {
            return;
        } else {
            myLibrary.removeFromLocalStorage(myLibrary.getFromWatched, 'watchedMovies');
        }
    }
    
    getFromQueue() {
        return JSON.parse(localStorage.getItem('queueMovies'));
    }

    addToQueue() {
        let newMovieID = myLibrary.getMovieID();
        let localQueueList = myLibrary.getFromQueue();
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

    removeFromQueue() {
    let newMovieID = myLibrary.getMovieID();
        if (!newMovieID) {
            return;
        } else {
            myLibrary.removeFromLocalStorage(myLibrary.getFromQueue, 'queueMovies');
        }
    }

    getMovieID() {
    const filmModalContent = document.querySelector('.film-modal__content');
    return filmModalContent.getAttribute('film-modal-id');
    }

    removeFromLocalStorage(libraryArrey, lybraryName) {
    const getLibraryArrey = libraryArrey;
    const newLibraryArrey = getLibraryArrey();
    const newMovieID = myLibrary.getMovieID();
    if(!newLibraryArrey.includes(newMovieID)){
        return;
    } else {
        const movieToRemoveIndex = newLibraryArrey.indexOf(newMovieID);
        newLibraryArrey.splice(movieToRemoveIndex, 1);
        localStorage.setItem(lybraryName, JSON.stringify(newLibraryArrey));
        }
    }
}
const myLibrary = new MyLibrary;

// function getMovieID() {
//     const filmModalContent = document.querySelector('.film-modal__content');
//     return filmModalContent.getAttribute('film-modal-id');
// }

// function removeFromLocalStorage(libraryArrey, lybraryName) {
//     const getLibraryArrey = libraryArrey;
//     const newLibraryArrey = getLibraryArrey();
//     const newMovieID = getMovieID();
//     if(!newLibraryArrey.includes(newMovieID)){
//         return;
//     } else {
//         const movieToRemoveIndex = newLibraryArrey.indexOf(newMovieID);
//         newLibraryArrey.splice(movieToRemoveIndex, 1);
//         localStorage.setItem(lybraryName, JSON.stringify(newLibraryArrey));
//     }
// }
// import { btnLibraryWatchedOrQueue } from './watched_queue';

// export function addEventListenerOnButtonaAddWatchedAndAddQueue() {
//     const authAddToWatched = document.querySelector('.button-watched');
//     const authAddToQueue = document.querySelector('.button-queue');
//     const openReg = document.querySelector('.navigation__open--btn');
    
//     checkAuthUser();

//     function checkAuthUser() {
//         if (localStorage.auth === 'no') {
//             authAddToQueue.addEventListener('click', () => {
//                 openAuthModal();
//             });
//             authAddToWatched.addEventListener('click', () => {
//                 openAuthModal();
//             });
//             return;
//         } else {
//             checkLocalMoviesList(myLybrary.getFromWatched, 'watched', authAddToWatched, myLybrary.removeFromWatched, myLybrary.addToWatched);
//             checkLocalMoviesList(myLybrary.getFromQueue, 'queue', authAddToQueue, myLybrary.removeFromQueue, myLybrary.addToQueue);
//         }
//     }

//     function openAuthModal() {
//         authAddToWatched.addEventListener('click', openReg.click());
//         authAddToQueue.addEventListener('click', openReg.click());
//         const overlayLogin = document.querySelector('.overlay__log-in');
//         overlayLogin.style.zIndex = '30';
//     }
    
//     // btnLibraryWatchedOrQueue()

//     function addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
//         btnName.textContent = `add to ${lybraryName}`;
//         const newAddFunction = addFunc;
//         function onClick() {
//             newAddFunction();
//             // chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
//             btnLibraryWatchedOrQueue();
//             btnName.removeEventListener('click', onClick);
//         };
//         btnName.addEventListener('click', onClick);
//     }
    
//     function chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
//         const newRemoveFunction = removeFunc;
//         btnName.textContent = `Remove from ${lybraryName}`;
//         function onClick() {
//             newRemoveFunction();
//             addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
//             btnName.removeEventListener('click', onClick);
//         };
//         btnName.addEventListener('click', onClick);
//     }

//     function checkLocalMoviesList(libraryArrey, lybraryName, btnName, removeFunc, addFunc) {
//         const newLibraryArrey = libraryArrey;
//         const newMovieID = getMovieID();
//         if (!newLibraryArrey()) {
//             addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
//             return;
//         }
//         else if (newLibraryArrey().includes(newMovieID)) {
//             chengeBtnToRemove(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
//             return;
//         }
//         else {
//             addMovieToLocalStorage(libraryArrey, lybraryName, btnName, removeFunc, addFunc);
//         }
//     }
// }