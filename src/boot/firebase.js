import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyC-pEr4bm9UVYtvSAI_ohgCPYDCUEnD1Q0",
  authDomain: "lpcurso.firebaseapp.com",
  projectId: "lpcurso",
  storageBucket: "lpcurso.firebasestorage.app",
  messagingSenderId: "218210236639",
  appId: "1:218210236639:web:6f8e2946020bd09368116a",
  measurementId: "G-D6SH3SNBT0",
};
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
import { EventBus } from "quasar";
const bus = new EventBus();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus;
    },
  },
});

// debugger;
// import Vue from "vue";
// const firebase = require("firebase");
// const firebaseui = require("firebaseui");

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// require("firebase/firestore");
// require("firebaseui/dist/firebaseui.css");

// const EventBus = new Vue();
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get: function () {
//       return EventBus;
//     },
//   },
// });

// debugger;

// const appfirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appfirebase);
// // const messaging = firebase.messaging()
// // // messaging.onMessage(function (payload) {
// // //   console.log('onMessage', payload)
// // // })
// // messaging.requestPermission()
// //   .then(function () {
// //     messaging.getToken()
// //       .then(function (currentToken) {
// //         if (currentToken) {
// //           console.log(currentToken)
// //         } else {
// //           console.log('Erro')
// //         }
// //       })
// //       .catch(function (err) {
// //         console.log('An error occurred while retrieving token. ', err)
// //       })
// //   })
// //   .catch(function (err) {
// //     console.log('Unable to get permission to notify.', err)
// //   })
// Vue.prototype.$fb = firebase;
// Vue.prototype.$fbui = firebaseui;
// var db = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// db.settings(settings);
// Vue.prototype.$db = db;
// // Vue.prototype.$dbserverTimestamp = firebase.firestore.FieldValue.serverTimestamp()
// // firebase.firestore().enablePersistence()
// //   .then(function () {
// //     var db = firebase.firestore()
// //     console.log(db)
// //   })
// //   .catch(function (err) {
// //     if (err.code === 'failed-precondition') {
// //       console.log(err)
// //     } else if (err.code === 'unimplemented') {
// //       console.log(err)
// //     }
// //   })
