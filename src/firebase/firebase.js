import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = await firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message)
    }

  }
  
  return userRef
}

export const saveCountToProfile = async (id, count) => {
  
  const userRef = await firestore.doc(`users/${id}`)
  
  await userRef.update({counter: count})

  
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase