// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {
  doc,
  updateDoc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  addDoc,
  query
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDatabase, child, get } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
import functionStore from './functionStore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
}

// Initialize Firebase
const app= initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig)
export const fireStores = getFirestore(app)
const fireStorages = getStorage(app)
// export const fireData = getDatabase(app)

const dbProduct = collection(fireStores, 'coffe')
const dbUser = collection(fireStores, 'users')
const dbCart = collection(fireStores, 'cart')
const dbOtherHome = collection(fireStores, 'otherHome')
const dbDiscount = collection(fireStores, 'discount')
const dbContact = collection(fireStores, 'contact')

const dbImgProduct = 'coffee'
const dbImgAvatar = 'avatar'
const dbImgOtherHome ='OtherBanner'
const functionFire = {
  FireStore:{
    Product:functionStore(dbProduct),
    User:functionStore(dbUser),
    Cart:functionStore(dbCart),
    Discount :functionStore(dbDiscount),
    OtherHome:functionStore(dbOtherHome),
    Contact:functionStore(dbContact)
  },

  FireStorages:{
    otherHome:functionStore(fireStorages,dbImgOtherHome),
    avatar:functionStore(fireStorages,dbImgAvatar)
  }

}

export default functionFire
