import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FLAREACT_PUBLIC_FIREBASE_API_KEY,
    projectId: process.env.FLAREACT_PUBLIC_FIREBASE_PROJECT_ID
  })
}

export default firebase
