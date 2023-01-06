// import { renderProdutsItems } from "./js/rendarFunction";
// import { ProductsAPI } from "./js/fetchProdactsAPI";

// import { getPageFilms } from "./js/pagination";

// const productsAPI = new ProductsAPI();

// productsAPI.getAllProducts()
//   .then((products) => {
//     renderProdutsItems(products);
// })


import { getTopFilms } from "./js/fetchProdactsAPI";
import { renderProdutsItems } from "./js/rendarFunction";


fetchTopFilms();
function fetchTopFilms() {
  getTopFilms()
    .then(film => { renderProdutsItems(film) })
  .catch(error => {console.log(error)})

}

 
console.log(getTopFilms().then(result => { console.log(result[0]);}));

