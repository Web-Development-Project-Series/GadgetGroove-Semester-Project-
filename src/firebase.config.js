import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAezMMshPN4Zfr926Iy5AqXHZJ0GvPSz4U",
  authDomain: "gadget-groove-2d09f.firebaseapp.com",
  projectId: "gadget-groove-2d09f",
  storageBucket: "gadget-groove-2d09f.appspot.com",
  messagingSenderId: "871935927688",
  appId: "1:871935927688:web:135b020572018d7c63c63d",
  measurementId: "G-8VQXCDDLNS"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
