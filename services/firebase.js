// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXFxZWd18pNxsgbQaVUcL575HIcXez5Fo',
  authDomain: 'bth4-d5049.firebaseapp.com',
  databaseURL: 'https://bth4-d5049-default-rtdb.firebaseio.com',
  projectId: 'bth4-d5049',
  storageBucket: 'bth4-d5049.appspot.com',
  messagingSenderId: '24144431299',
  appId: '1:24144431299:web:9209482646946ee5edba76',
  measurementId: 'G-R7EXMD6CDK'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const fireStores = getFirestore(app)
export default app
