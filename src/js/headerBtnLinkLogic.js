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

        //тимчасове рішення, поки немає авторизації
        refs.authEntranceBtn.addEventListener('click', authEntranceBtnHandler);
        //тимчасове рішення, поки немає авторизації

    };
};

export function libraryHeaderLinkBntLogic() {
    refs.signOutBtn.classList.remove('is-hidden');
    refs.signOutBtn.addEventListener('click', signOutBtnHandler);
    refs.myLibraryLink.classList.remove('is-hidden');
};

function signOutBtnHandler() {
    localStorage.setItem('auth', "no");
};
