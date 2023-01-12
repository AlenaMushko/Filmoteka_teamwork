
import Glide from '@glidejs/glide';
import { Modal } from './modal';
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
const checkbox = document.querySelector('.options-bound-checkbox');
const teamSlider = new Glide('.teamSlider', {
  type: 'carousel',
  bound: checkbox.checked,
  perView: 1,
  autoplay: 2500,
  keyboard: true,
  focusAt: 'center',
  hoverpause: true,
  breakpoints: {
    800: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});

// teamSlider.mount();

checkbox.addEventListener('change', function () {
  teamSlider.update({
    bound: checkbox.checked,
  });
});

export function onTeamModal() {
  teamSlider.mount();
  checkbox.addEventListener('change', function () {
    teamSlider.update({
      bound: checkbox.checked,
    });
  });
}
