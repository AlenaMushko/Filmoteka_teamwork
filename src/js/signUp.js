import { refs } from './refs';
import { checkUserRegistration, authWithEmailAndPassword } from './auth';
import Notiflix from 'notiflix';

export function addNewUser() {
    refs.authRegistrationBtn.addEventListener('click', signUpBtnHandler);
    refs.authRegistrationBtn.removeAttribute('disabled');
    refs.authRegistrationBtn.setAttribute('type', 'button');
};

function signUpBtnHandler() {
    const email = refs.authEmailInput.value;
    const password = refs.authPasswordInput.value;
    checkUserRegistration(email, password).then(data => {
        if(data.registered === true){
            Notiflix.Report.failure(
                'User with such data already exists',
                'Please, sign in with your password or sign up with another mail',
                'Okay',).catch();
            return;
        }

        const apiKey = 'AIzaSyCh4IOUhN3RY5RpYi3dFrDkgc69KqBpI3o';

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
        returnSecureToken: true
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.localId);
        localStorage.auth === "yes";
        authWithEmailAndPassword();
        Notiflix.Report.success(
            'Successful registration ',
            'Welcome to more opportunities',
            'Let`s start',
            () => {
                    location.reload();
            },);
    }).catch();
  });
};