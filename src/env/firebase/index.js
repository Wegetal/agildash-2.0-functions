import admin from "firebase-admin";

export const app = admin.initializeApp({
    apiKey: "AIzaSyDgjeA0zmt9YU-ORRMSCMVtfukMd325GjQ",
    authDomain: "agildash-qd5nvullpwu53ibt4mfy.firebaseapp.com",
    databaseURL: "https://agildash-qd5nvullpwu53ibt4mfy.firebaseio.com",
    projectId: "agildash-qd5nvullpwu53ibt4mfy",
    storageBucket: "agildash-qd5nvullpwu53ibt4mfy.appspot.com",
    messagingSenderId: "810076089022",
    appId: "1:810076089022:web:9dfe5b0aa120c2cad5ccef"
  }),
  fs = app.firestore();
