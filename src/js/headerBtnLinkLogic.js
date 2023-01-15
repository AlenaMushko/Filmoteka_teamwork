import { refs } from './refs';
import { authEntranceBtnHandler } from './auth';

export function homeHeaderLinkBntLogic() {
    
    if(localStorage.auth === "yes") {
        refs.signInBtn.classList.add('is-hidden');
        refs.signOutBtn.classList.remove('is-hidden');
        refs.signOutBtn.addEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.remove('is-hidden');

    } else if(localStorage.auth === "no") {
        
        refs.signInBtn.classList.remove('is-hidden');       
        refs.signOutBtn.classList.add('is-hidden');
        refs.signOutBtn.removeEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.add('is-hidden');
        refs.authEntranceBtn.addEventListener('click', authEntranceBtnHandler);

    };
};

export function libraryHeaderLinkBntLogic() {
    refs.signOutBtn.classList.remove('is-hidden');
    refs.signOutBtn.addEventListener('click', signOutBtnHandler);
    refs.myLibraryLink.classList.remove('is-hidden');
};

function signOutBtnHandler() {
    localStorage.clear();
    localStorage.setItem('auth', "no");
};
