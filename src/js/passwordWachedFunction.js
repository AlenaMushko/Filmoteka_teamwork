import { refs } from './refs';

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
