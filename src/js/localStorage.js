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
