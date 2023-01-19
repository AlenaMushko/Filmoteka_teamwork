import { refs } from './refs';
import { authEntranceBtnHandler } from './auth';
import { rewritingStorage } from './firebaseDatastorage';
import {  addNewUser } from './signUp';

export function homeHeaderLinkBntLogic() {
    
    if(localStorage.auth === "yes") {
        refs.signInBtn.classList.add('is-hidden');
        refs.signInBtn.removeEventListener('click', signInBtnHandler);
        refs.signOutBtn.classList.remove('is-hidden');
        refs.signOutBtn.addEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.remove('is-hidden');
        //refs.buttonWatched.addEventListener('click', rewritingStorage);
        //refs.buttonQueue.addEventListener('click', rewritingStorage); 
        //refs.btnTheme.addEventListener('click', rewritingStorage);
        

    } else if(localStorage.auth === "no") {
        
        refs.signInBtn.classList.remove('is-hidden');
        refs.signInBtn.addEventListener('click', signInBtnHandler);       
        refs.signOutBtn.classList.add('is-hidden');
        refs.signOutBtn.removeEventListener('click', signOutBtnHandler);
        refs.myLibraryLink.classList.add('is-hidden');
        refs.authEntranceBtn.addEventListener('click', authEntranceBtnHandler);
        //refs.buttonWatched.removeEventListener('click', rewritingStorage);
        //refs.buttonQueue.removeEventListener('click', rewritingStorage); 
        //refs.btnTheme.removeEventListener('click', rewritingStorage);
        addNewUser();

    };
};

export function libraryHeaderLinkBntLogic() {
    refs.signOutBtn.classList.remove('is-hidden');
    refs.signOutBtn.addEventListener('click', signOutBtnHandler);
    refs.myLibraryLink.classList.remove('is-hidden');
};

function signOutBtnHandler() {
    //localStorage.clear();
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