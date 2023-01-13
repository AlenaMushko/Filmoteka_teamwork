
import { Modal } from './modal';

export function registrationModalOpen() {
  const logInModalWindow = new Modal(
    '.navigation__open--btn',
    '.modal__log-in--close-btn',
    '.overlay__log-in',
    '.modal__log-in'
  );

  // Щоб модалка відкривалась, вішаємо слухача кліка на кнопку відкриття модалки

  logInModalWindow.openBtn.addEventListener(
    'click',
    logInModalWindow.openModal.bind(logInModalWindow)
  );
}
