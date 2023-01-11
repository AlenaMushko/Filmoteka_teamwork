import { refs } from './refs';

export function onTeamModal() {
  refs.teamOpenModalBtn.addEventListener('click', openTeamModal);
}

function teamModalClose() {
  refs.teamModal.classList.add('is-hidden');
}
function onEscapeClickTM(e) {
  if (e.key === 'Escape') {
    teamModalClose();
    window.removeEventListener('keydown', onEscapeClickTM);
  }
}
function openTeamModal() {
  teamModalOpen();
  refs.teamModalCloseBtn.addEventListener('click', teamModalClose);
  window.addEventListener('keydown', onEscapeClickTM);
}
function teamModalOpen() {
  refs.teamModal.classList.remove('is-hidden');
 
 

}
