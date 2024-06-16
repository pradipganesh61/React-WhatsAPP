import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyB53aodX3a3cX11-JEMSPpgHVG6J9qnDOE",
    authDomain: "mywhatsapp-9580f.firebaseapp.com",
    databaseURL: "https://mywhatsapp-9580f.firebaseio.com",
    projectId: "mywhatsapp-9580f",
    storageBucket: "mywhatsapp-9580f.appspot.com",
    messagingSenderId: "673057394390",
    appId: "1:673057394390:web:247f55c21dfe81bed6c377",
    measurementId: "G-YDZKVHLG3N"

    // apiKey: "API_KEY",
    // authDomain: "PROJECT_ID.firebaseapp.com",
    // databaseURL: "https://PROJECT_ID.firebaseio.com",
    // projectId: "PROJECT_ID",
    // storageBucket: "PROJECT_ID.appspot.com",
    // messagingSenderId: "SENDER_ID",
    // appId: "APP_ID",
    // measurementId: "G-MEASUREMENT_ID",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  