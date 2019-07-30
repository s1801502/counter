import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDhnASddJkzCzGuIS4AVROIEAtHEAxlNQE",
    authDomain: "counter-8fdab.firebaseapp.com",
    databaseURL: "https://counter-8fdab.firebaseio.com",
    projectId: "counter-8fdab",
    storageBucket: "",
    messagingSenderId: "457526705318",
    appId: "1:457526705318:web:cb8e9ed329b8e42e"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase