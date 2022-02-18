import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBixa9N2z1byERcDwTT-UOA8KrnptjAqDs",
  authDomain: "complaint-forum-39fdf.firebaseapp.com",
  projectId: "complaint-forum-39fdf",
  storageBucket: "complaint-forum-39fdf.appspot.com",
  messagingSenderId: "183119193907",
  appId: "1:183119193907:web:ae2cffc1cb6b76f068c046"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

