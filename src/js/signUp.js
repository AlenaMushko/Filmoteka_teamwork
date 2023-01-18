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
    if(email === "" || password === "") {
      /*  */
      if (localStorage.language === 'en') {
        Notiflix.Notify.warning('For signing up you need to enter both E-mail and Password');

      } else if (localStorage.language === 'ua') {
        Notiflix.Notify.warning('Для того, щоб підписатись, необхідно ввести логін та пароль');

      } else {
        Notiflix.Notify.warning('For signing up you need to enter both E-mail and Password');
        
      };
      return;
      
    };

    checkUserRegistration(email, password).then(data => {
        if(data.registered === true){

            if (localStorage.language === 'en') {
              Notiflix.Report.failure(
                'User with such data already exists',
                'Please, sign in with your password or sign up with another mail',
                'Okay',);

            } else if (localStorage.language === 'ua') {
              Notiflix.Report.failure(
                'Введені дані вже використовуються',
                'Будь ласка, авторизуйтесь або зареєструйтеся, використовуючи іншу пошту',
                'Ок',);

            } else {
              Notiflix.Report.failure(
                'User with such data already exists',
                'Please, sign in with your password or sign up with another mail',
                'Okay',);

            };
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
        localStorage.authId = data.localId;
        localStorage.auth = "yes";
        //authWithEmailAndPassword();

            if (localStorage.language === 'en') {
              Notiflix.Report.success(
                'Successful registration ',
                'Welcome to more opportunities',
                'Let`s start',
                () => {
                        location.reload();
                },);
            } else if (localStorage.language === 'ua') {
              Notiflix.Report.success(
                'Реєстрація пройшла успішно ',
                'Ласкаво просимо до нових можливостей',
                'Почнімо',
                () => {
                        location.reload();
                },);
            } else {
              Notiflix.Report.success(
                'Successful registration ',
                'Welcome to more opportunities',
                'Let`s start',
                () => {
                        location.reload();
                },);
            };
    }).catch();
  });
};