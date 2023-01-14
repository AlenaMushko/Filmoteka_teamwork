export class MyLibrary {
    myWatchedMovies = "watchedMovies"
    myQueueList = 'queueMovies'

    getFromWatched() {
        return JSON.parse(localStorage.getItem(this.myWatchedMovies));
    }

    addToWatched() {
        const filmModalContent = document.querySelector('.film-modal__content');
        let newMovieID = filmModalContent.getAttribute('film-modal-id');
        let localWatchedMovies = myLybrary.getFromWatched();
        if (!localWatchedMovies) {
            localWatchedMovies = [newMovieID]
            localStorage.setItem(this.myWatchedMovies, JSON.stringify(localWatchedMovies));
        }
    else if(localWatchedMovies.includes(newMovieID)){
            return
        }else{
        localWatchedMovies.push(newMovieID);
        localStorage.setItem(this.myWatchedMovies, JSON.stringify(localWatchedMovies));
        }
    }

    removeFromWatched() {
        localStorage.removeItem(this.myWatchedMovies)
    }

    addToQueue() {
        const filmModalContent = document.querySelector('.film-modal__content');
        let newMovieID = filmModalContent.getAttribute('film-modal-id');
        let localQueueList = myLybrary.getFromQueue();
        if (!localQueueList) {
            localQueueList = [newMovieID]
            localStorage.setItem(this.myQueueList, JSON.stringify(localQueueList));
        }
    else if(localQueueList.includes(newMovieID)){
            return
        }else{
        localQueueList.push(newMovieID);
        localStorage.setItem(this.myQueueList, JSON.stringify(localQueueList));
        }
    }

    getFromQueue() {
        return JSON.parse(localStorage.getItem(this.myQueueList));
    }

    removeFromQueue() {
        localStorage.removeItem(this.myQueueList);
    }
}

// function removeFromLocalStorage(movieID){
//     let localMoviesList = myLybrary.getFromWatched();
//     console.log(movieID);
//     if(!localMoviesList.includes(movieID[0])){
//         console.log('this film is not there');
//             return
//         }else{
//             let delMovie = localMoviesList.indexOf(movieID[0]);
//             localMoviesList.splice(delMovie);
//             myLybrary.addToWatched(localMoviesList);
//         }
// }

const myLybrary = new MyLibrary;

// myLybrary.removeFromQueue();
// myLybrary.removeFromWatched();


export function addEventListenerOnButtonaAddWatchedAndAddQueue() {
    const authAddToWatched = document.querySelector(
    '.js-auth__add-to-watched-btn'
    );
    const authAddToQueue = document.querySelector('.js-auth__add-to-queue-btn');
    const openReg = document.querySelector('.navigation__open--btn');
    authAddToWatched.addEventListener('click', checkAuthUser);
    authAddToQueue.addEventListener('click', checkAuthUser);
    function checkAuthUser() {
    if (localStorage.auth === 'no') {
        authAddToWatched.addEventListener('click', openReg.click());
        authAddToQueue.addEventListener('click', openReg.click());
        const overlayLogin = document.querySelector('.overlay__log-in');
        overlayLogin.style.zIndex = '30';
    }
    //логіка додавання в локалсторидж
        authAddToWatched.addEventListener('click', myLybrary.addToWatched());
        authAddToQueue.addEventListener('click', myLybrary.addToQueue());
    }
}