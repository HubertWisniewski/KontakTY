import firebase from 'firebase'

export const readContactsFromApi = () =>
  firebase
    .database()
    .ref('contacts')
    .once('value').then(snapshot => snapshot.val())

  