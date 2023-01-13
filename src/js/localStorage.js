import Notiflix from "notiflix";
const asd = 'this is success!!!!';
const qwe = '';
const newMoviesList =[];

class MyLibrary {
    myWatchedMovies = "watchedMovies"

    constructor(movieID) {
        this.movieID = movieID;
    }

    getFromWatched() {
        let watchedMovies = JSON.parse(localStorage.getItem(this.myWatchedMovies));
        if (watchedMovies) {
            console.log('Hello!!! ', watchedMovies);
        } else {
            Notiflix.Notify.failure("There is no movie");
            console.log("error");
        }
    }

    addToWatched(newMovieID) {
        this.movieID = newMovieID;
        localStorage.setItem(this.myWatchedMovies, JSON.stringify(this.movieID));
        // console.log(this.movieID);
    }

    removeFromWatched() {
        localStorage.removeItem(this.myWatchedMovies)
    }

    addToQueue() {
        return
    }

    getFromQueue() {
        return
    }
}

function checkLocalStorage(movieID) {
    
}

const myLybrary = new MyLibrary;

// myLybrary.removeFromWatched();
// myLybrary.getFromWatched();

import ApiService from "./fetchProdactsAPI";
const apiService = new ApiService;
let moviesList = [];
const movies = apiService.getPopularFilms();

const STORAGE_KEY = "watchedFilms";
const parseSTORAGE_KEY = JSON.parse(localStorage.getItem(STORAGE_KEY));

function loc(movie){
    let movieID = movie.id;
    newMoviesList.push(movieID);
}

async function addToLoc(){
    await movies.then(
        response => {
            moviesList = response.results;
        }
    )
    .catch(err => {
        console.log(err);
    })
    
    moviesList.map(movie => {
        loc(movie);
    })
    console.log(newMoviesList);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMoviesList));
    console.log(parseSTORAGE_KEY);

    myLybrary.addToWatched(newMoviesList);
    myLybrary.getFromWatched();
}

addToLoc();

let df = [76600, 315162, 593643, 661374, 800815, 436270, 156902, 119051, 19995, 536554, 361743, 877269, 674324, 112581];
// , 640146, 899112, 505642, 653851, 111837, 116135];

if (parseSTORAGE_KEY) {
    console.log(parseSTORAGE_KEY);

    if (parseSTORAGE_KEY.email) {
        formData.email = parseSTORAGE_KEY.email;
        inputEmail.value = formData.email;
    };
    if (parseSTORAGE_KEY.message) {
        formData.message = parseSTORAGE_KEY.message;
        inputTextarea.value = formData.message;
    };
}

// import { localStorage } from './js/localStorage';
