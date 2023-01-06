import axios from "axios";

// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Fireworks } from './canvas';

// const can = document.querySelector('#blow');

const KEY = '32432509d17cea42104bbb7507a382c7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTopFilms(allData = false) {
  try {
    const { data } = await axios(`/discover/movie?api_key=${KEY}&sort_by=popularity.desc`);
    return allData ? console.log(data)  : data.results;
    } catch (error) {
      console.log(error);
    }
  }




// export class API_service {
//   // language = localStorage.getItem('language');
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     // this.language;
//     this.id = null;
//     this.genreId = null;
//   }

//   // fetchTrending
//   async getTopFilms(allData = false) {
//     try {
   
// // URL: /discover/movie?sort_by=popularity.desc
//       Loading.pulse({
//         svgColor: 'orange',
//       });
//       const { data } = await axios('trending/movie/day', {
//         params: {
//           api_key: API_KEY,
//           language: this.language,
//           page: this.page,
//         },
//       });

//       Loading.remove();

//       return allData ? data : data.results;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // fetchMoviesByKeyword
//   async getFilmsByKeyword() {
//     try {
//       Loading.pulse({
//         svgColor: 'orange',
//       });
//       const { data } = await axios('search/movie', {
//         params: {
//           api_key: API_KEY,
//           query: this.searchQuery,
//           language: this.language,
//         },
//       });

//       Loading.remove();

//       if (this.searchQuery.toLowerCase() === 'goit') {
//         can.classList.remove('is-hidden');
//         new Fireworks().run();

//         const closeClick = () => {
//           can.classList.add('is-hidden');
//           window.removeEventListener('click', closeClick);
//         };
//         setTimeout(closeClick, 12000);
//         window.addEventListener('click', closeClick);
//       }

//       return data.results; //returns an OBJECT. e.g.{page: 1, results: Array(20), total_pages: 8, total_results: 147}
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async fetchMovieById() {
//     //will throw an error if title "undefined";
//     try {
//       Loading.pulse({
//         svgColor: 'orange',
//       });
//       const { data } = await axios(`movie/${this.id}`, {
//         //for this to work make sure this.searchQuery type is number!!!
//         params: {
//           api_key: API_KEY,
//           language: this.language,
//         },
//       });
//       Loading.remove();

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async fetchMovieByIdForTV() {
//     try {
//       Loading.pulse({
//         svgColor: 'orange',
//       });
//       const { data } = await axios(`tv/${this.id}`, {
//         params: {
//           api_key: API_KEY,
//           language: this.language,
//         },
//       });
//       Loading.remove();

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async fetchMovieByGenre() {
//     try {
//       Loading.pulse({
//         svgColor: 'orange',
//       });
//       const { data } = await axios(`discover/movie`, {
//         params: {
//           api_key: API_KEY,
//           language: this.language,
//           with_genres: this.genreId,
//         },
//       });
//       Loading.remove();

//       return data.results;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async fetchYoutube(){
//     try{
//         let {data} = await axios(`/movie/${this.id}/videos`,{
//             params: {
//             api_key: API_KEY,
//             language: "en - US",
//             }
//         });
//         // console.log(data);
//         return data;
//     }
//    catch(error){
//        console.log("error");
//    }
  
   
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   get movieId() {
//     return this.id;
//   }

//   set movieId(newId) {
//     this.id = newId;
//   }
// }