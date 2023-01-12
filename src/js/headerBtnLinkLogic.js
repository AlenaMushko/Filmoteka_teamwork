import { refs } from './refs';
// import функції відкриття модалки from './modal';


export function homeHeaderLinkBntLogic() {
    
    if(localStorage.auth === "yes") {
        refs.signInBtn.classList.add('is-hidden');
        refs.signInBtn.removeEventListener('click', signInBtnHandler);

        refs.signOutBtn.classList.remove('is-hidden');
        refs.signOutBtn.addEventListener('click', signOutBtnHandler);
        //refs.signOutBtn.forEach(function (btn) {btn.addEventListener('click', signOutBtnHandler)});

        refs.myLibraryLink.classList.remove('is-hidden');
        //refs.myLibraryLink.addEventListener('click', myLibraryLinkHandler);
    } else if(localStorage.auth === "no") {
        refs.signInBtn.classList.remove('is-hidden');
        refs.signInBtn.addEventListener('click', signInBtnHandler);

        refs.signOutBtn.classList.add('is-hidden');
        refs.signOutBtn.removeEventListener('click', signOutBtnHandler);
        //refs.signOutBtn.forEach(function (btn) {btn.removeEventListener('click', signOutBtnHandler)});

        refs.myLibraryLink.classList.add('is-hidden');
        //refs.myLibraryLink.removeEventListener('click', myLibraryLinkHandler);
    } else {
        // якщо в auth не є no/yes
    };  
};


export function libraryHeaderLinkBntLogic() {
    

    if(localStorage.auth === "yes") {


        refs.signOutBtn.classList.remove('is-hidden');
        refs.signOutBtn.addEventListener('click', signOutBtnHandler);
        //refs.signOutBtn.forEach(function (btn) {btn.addEventListener('click', signOutBtnHandler)});

        refs.myLibraryLink.classList.remove('is-hidden');
        //refs.myLibraryLink.addEventListener('click', myLibraryLinkHandler);
    } else if(localStorage.auth === "no") {
        

        refs.signOutBtn.classList.add('is-hidden');
        refs.signOutBtn.removeEventListener('click', signOutBtnHandler);
        //refs.signOutBtn.forEach(function (btn) {btn.removeEventListener('click', signOutBtnHandler)});

        refs.myLibraryLink.classList.add('is-hidden');
        //refs.myLibraryLink.removeEventListener('click', myLibraryLinkHandler);
    } else {
        // якщо в auth не є no/yes
        
    };  
};

function signInBtnHandler(e) {
    e.preventDefault();

    //замість наступного вставити функцію відкриття модалки
    localStorage.setItem('auth', "yes");
};

function signOutBtnHandler() {
    //функція відкриття модалки
    localStorage.setItem('auth', "no");
    //функція відкриття модалки

};

function myLibraryLinkHandler(e) {
    headerLogic();
}
