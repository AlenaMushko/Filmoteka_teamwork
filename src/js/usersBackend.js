export class UserStorage {
    /* consctructor ({userStorage}) {
        this.userStorage = local.Storage;
    } */

    static create(newSaving) {
        return fetch('https://filmoteka-25bd4-default-rtdb.firebaseio.com/users.json', {
          method: 'POST',
          body: JSON.stringify(newSaving),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(response => {console.log(response)})/* {
            newUser.id = response.name;
            return newUser;
          })
          .then(addToLocalStorage)
          .then(User.renderList) */
      }


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
}
