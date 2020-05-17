import firebase from 'firebase'
import { firestore } from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8JJ3OC3eqkwFAmiI19S7e5D0QsA0IBl0",
    authDomain: "chatbot-dcc72.firebaseapp.com",
    databaseURL: "https://chatbot-dcc72.firebaseio.com",
    projectId: "chatbot-dcc72",
    storageBucket: "chatbot-dcc72.appspot.com",
    messagingSenderId: "593853695617",
    appId: "1:593853695617:web:fdb6b1b589f12363d4ef80",
    measurementId: "G-MF1LFPNHQX"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();
export default firebaseApp.firestore()