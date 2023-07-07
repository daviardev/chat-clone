import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID
}

export const app =
    !getApps().length
      ? initializeApp(firebaseConfig)
      : getApp()
