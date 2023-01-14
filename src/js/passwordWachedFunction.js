// Перенести у  index.js:
// // Для можливості показувати та приховувати пароль
// import { showOrHidePasswordonClick } from './js/passwordWachedFunction';
// Запустити у  index.js:
// // Для показування або приховування введення паролю
// showOrHidePasswordonClick();

// Розкоментувати імпорт
// import { refs } from './refs';

// Додати в refs = {
//   modalSignIn: document.querySelector('.modal__log-in'),
//   inputPassword: document.querySelector('#password'),
//   buttonShowPassword: document.querySelector('#button_show_password'),
//   iconForShowPassword: document.querySelector('#icon_show_password'),
//   iconForUnShowPassword: document.querySelector('#icon_un_show_password'),
// };

export function showOrHidePasswordonClick() {
  refs.buttonShowPassword.addEventListener('click', showPassword);

  function showPassword() {
    if (refs.inputPassword.getAttribute('type') === 'password') {
      refs.inputPassword.removeAttribute('type');
      refs.inputPassword.setAttribute('type', 'text');
      refs.iconForShowPassword.classList.add('visually-hidden');
      refs.iconForUnShowPassword.classList.remove('visually-hidden');
    } else {
      refs.inputPassword.removeAttribute('type');
      refs.inputPassword.setAttribute('type', 'password');
      refs.iconForShowPassword.classList.remove('visually-hidden');
      refs.iconForUnShowPassword.classList.add('visually-hidden');
    }
  }

  //   refs.buttonShowPassword.removeEventListener('click', showPassword);
}
