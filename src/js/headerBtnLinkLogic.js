import { refs } from './refs';
import { authEntranceBtnHandler } from './auth';
import {  addNewUser } from './signUp';

export function homeHeaderLinkBntLogic() {

    if(localStorage.auth === "yes") {
        refs.signInBtn.classList.add('is-hidden');
        refs.signInBtn.removeEventListener('click', signInBtnHandler);
        refs.signOutBtn.classList.remove('is-hidden');
        refs.signOutBtn.addEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.remove('is-hidden');
    } else if(localStorage.auth === "no") {

        refs.signInBtn.classList.remove('is-hidden');
        refs.signInBtn.addEventListener('click', signInBtnHandler);
        refs.signOutBtn.classList.add('is-hidden');
        refs.signOutBtn.removeEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.add('is-hidden');
        refs.authEntranceBtn.addEventListener('click', authEntranceBtnHandler);
        addNewUser();

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

function signInBtnHandler() {
    document.addEventListener( 'keyup', authWithEnter);
};

function authWithEnter(e) {
        if(e.code === 'Enter' ) {
            authEntranceBtnHandler(e);
            if(localStorage.auth === "yes") {
                document.removeEventListener( 'keyup', authWithEnter);
            }
        };
}