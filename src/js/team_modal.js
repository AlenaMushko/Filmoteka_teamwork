import Glide from '@glidejs/glide';
import { Modal } from './modal';
import { refs } from './refs';

const teamModalWindow = new Modal(
  '.team-modal-open',
  '.team-modal-close',
  '.team-modal-overlay',
  '.team-modal'
);
teamModalWindow.openBtn.addEventListener(
  'click',
  teamModalWindow.openModal.bind(teamModalWindow)
);

//slider
const teamSlider = new Glide('.teamSlider', {
  type: 'carousel',
  perView: 1,
  autoplay: 2500,
  keyboard: true,
  focusAt: 'center',
  hoverpause: true,
});

teamSlider.mount();
teamSlider.pause();

function onTeamModalstart() {
  teamSlider.play();
}
function onEscapeClickTM(e) {
  if (e.key === 'Escape') {
    teamModalClose();
    removeEventListeneronWindow();
  }
  function removeEventListeneronWindow() {
    window.removeEventListener('keydown', onEscapeClickTM);
  }
}
function teamModalClose() {
  teamSlider.pause();
  window.removeEventListener('keydown', onEscapeClickTM);
}
export function onTeamModal() {
  refs.teamOpenModalBtn.addEventListener('click', onTeamModalstart);
  const clickClose = document.querySelector('.team-modal-close');
  const clickOverlay = document.querySelector('.team-modal-overlay');
  window.addEventListener('keydown', onEscapeClickTM);
  clickClose.addEventListener('click', teamModalClose);
  clickOverlay.addEventListener('click', teamModalClose);
}
