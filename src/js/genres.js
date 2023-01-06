

// const KEY = '32432509d17cea42104bbb7507a382c7';
// const api_key = `?api_key=${KEY}`;
// const BASE_URL = 'https://api.themoviedb.org/3/';

// export function getGenrisFilms() {
// const url = `${BASE_URL}genre/movie/list${api_key}`;
//     return fetch(url)
//       .then((response) => response.json())
//       .then((results) => {
//         const genresNames = results.genres;
//         const myMapGenres = new Map();
      
//         for (let i = 0; i < genresNames.length; i+=1) {
//           let element = Object.values(genresNames[i]);
//           myMapGenres.set(element[0], element[1])
//         };
//         console.log(myMapGenres);
//         return myMapGenres
//       });
// };