import { initializeApp } from 'firebase/app'

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
stroageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINSENDERID,
appId: import.meta.env.VITE_FIREBASE_APPID

}

export const firebaseApp = initializeApp(firebaseConfig)