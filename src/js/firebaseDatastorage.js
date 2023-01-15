import { refs } from './refs';

class UserStorage {

    // функція, яка додає в базу даних новий запис 
    // з вмістом newSaving 
    // під ім'ям response.name 
    // в папці users
    static create(newSaving) {
        return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/${localStorage.authId}.json`, {
          method: 'POST',
          body: JSON.stringify(newSaving),

        })
          .then(response => response.json())
          .then(response => {
            localStorage.savingId = response.name;
            
        })
    };

    // функція, яка забирає з бази даних
    static take() {
        return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/${localStorage.authId}.json?auth=${localStorage.authId}`)
        .then(response => response.json())
        .then(response => {
            const arrayOfSavings = Object.keys(response).map(key => ({
                ...response[key]
              }));
            const lastSaving = arrayOfSavings[0];
              for(const saving in lastSaving) {
                localStorage.saving = lastSaving[saving];
            };
            location.reload();
        })
    }

    /* static change(newChange) {
        return fetch(`https://filmoteka-25bd4-default-rtdb.firebaseio.com/users/${userId}.json`, {
          method: 'PATCH',
          body: JSON.stringify(newChange),

        })
          .then(response => response.json())
          .then(response1 => {
            userId = response1.name;
            console.log("відповідь оновлення:");console.log(response1);console.log(userId);
        })
    } */
}

// створення сховища для нового користувача на бекенді
export function giveLocalStorageToFirebaseStorage() {
    UserStorage.create(localStorage); 
};

// підтягування з бекенду сховища користувача, при авторизації
export function takeLocalStorageFromFirebaseStorage() {
    UserStorage.take();
};

//зміна сховища користувача на бекенді кожні 3 секунди
export function changeLocalStorageInFirebaseStorage() {
    if(localStorage.auth === "yes") {
        UserStorage.change(localStorage);
    };
}



// в класс

 /*  */


    /* static fetch(token) {
        if (!token) {
          return Promise.resolve('<p class="error">У вас нет токена</p>')
        }
        return fetch(`https://podcast-app-15663.firebaseio.com/questions.json?auth=${token}`)
          .then(response => response.json())
          .then(response => {
            if (response && response.error) {
              return `<p class="error">${response.error}</p>`
            }
    
            return response ? Object.keys(response).map(key => ({
              ...response[key],
              id: key
            })) : []
          })
      } */