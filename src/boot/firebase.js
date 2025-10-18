import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyAz67AAshlsFpzwkSadT_8PJS8lrBYqPLQ",
  authDomain: "teknosa-66d10.firebaseapp.com",
  projectId: "teknosa-66d10",
  storageBucket: "teknosa-66d10.appspot.com",
  messagingSenderId: "652090909864",
  appId: "1:652090909864:web:95ac224c8a8d003c654e9d"
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };
