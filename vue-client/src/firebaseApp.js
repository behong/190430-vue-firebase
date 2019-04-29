import firebase from 'firebase/app'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.appspot.com`
}
const FirebaseApp = firebase.initializeApp(config)

console.log('FIREBASE Project ID : ', FirebaseApp.options.projectId)
// eslint-disable-next-line no-multiple-empty-lines
console.log('SEVER :', process.env.VUE_APP_FIREBASE_SERVER)
// if (process.env.VUE_APP_FIREBASE_SERVER === 'prod') alert('prod')

export default {
  FirebaseApp: FirebaseApp
}
