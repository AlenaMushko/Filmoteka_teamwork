import { refs } from "./refs";


// export function renderProdutsItems(products) {
//   const markup = products.map(
//     ({ images, description, discountPercentage, brand, price, title }) => {
//       return `
//   <li class='products__item'>
//   <img src='${images[0]}' alt='${description}' />
//   <p class='product__text'>description: <span>${description}</span></p>
//   <p class='product__text'>discount: <span>${discountPercentage}</span></p>
//   <p class='product__text'>price: <span>${price}</span></p>
//    <p class='product__text'>brand:<span>${brand}</span></p>
//     <p class='product__text'>title:<span>${title}</span></p>
//   </li>
//   `
//     }).join('');
//   refs.productsList.insertAdjacentHTML('beforeend',markup);
// }