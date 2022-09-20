// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  doc,
  updateDoc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  addDoc,
  query,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDatabase, child, get } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
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
  measurementId: process.env.measurementId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const fireStores = getFirestore(app)
export const fireStorage = getStorage(app)
export const fireData = getDatabase(app)

// const dbProduct= collection(fireStores, 'products') User
const dbProduct = collection(fireStores, 'User')

const dbUser = collection(fireStores, 'users')
const dbOtherHome = collection(fireStores, 'otherHome')
const functionFire = {
  getAllProduct: async function () {
    const citySnapshot = await getDocs(dbProduct)
    citySnapshot.docs.map((doc) => {
      const object = {
        id: doc.id,
        data: doc.data(),
      }
      return object
    })
  },
  getProductById: async function (id) {
    const temp = doc(fireStores, 'User', id)
    const data = await getDoc(temp)
    return data.data()
  },
  addProduct: async function (data) {
    const add = await addDoc(dbProduct, data)
    if (add) {
      return true
    }
  },
  updateProduct: async function (id, name, key) {
    const ob = {}
    ob[name] = key
    const temp = await doc(dbProduct, id)
    await updateDoc(temp, ob)
  },
  deleteProduct: async function (id) {
    await deleteDoc(doc(dbProduct, id))
  },
  getPathImg: async function (name) {
    const path =`images/${name}`
    return getDownloadURL(ref(fireStorage, `fsdfsdf.png`))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest()
        // xhr.responseType = 'blob'
        // xhr.onload = (event) => {
        //   const blob = xhr.response
        // }
        // xhr.open('GET', url)
        // xhr.send()
        return url    
      })
      .catch((error) => {
        // Handle any errors
      })
  },
  updateImg: async function (file) {
    const storage = fireStorage
    const storageRef = ref(storage, 'coffee')
    await uploadBytes(storageRef, file).then((snapshot) => {
      return true
    })
  },
}
export default functionFire
