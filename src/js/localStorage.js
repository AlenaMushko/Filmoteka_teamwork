class LocalStorage {

}

import ApiService from "./fetchProdactsAPI";

const apiService = new ApiService;

let moviesList = [];
const movies = apiService.getPopularFilms();

const newMoviesList =[];
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
            console.log(moviesList);
        }
    )
    .catch(err => {
        console.log(err);
    })
    
    moviesList.map(movie => {
        loc(movie);
    })

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMoviesList));
}

addToLoc();

if (parseSTORAGE_KEY) {
    console.log(parseSTORAGE_KEY);

    // if (parseSTORAGE_KEY.email) {
    //     formData.email = parseSTORAGE_KEY.email;
    //     inputEmail.value = formData.email;
    // };
    // if (parseSTORAGE_KEY.message) {
    //     formData.message = parseSTORAGE_KEY.message;
    //     inputTextarea.value = formData.message;
    // };
}

import { localStorage } from './js/localStorage';