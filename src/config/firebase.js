import firebase from "firebase/compat/app"
// import "firebase/auth"
import "firebase/compat/firestore"
// import "firebase/performance"
// import "firebase/messaging"


const firebaseConfig = {
    //Firebase Config File
    apiKey: "AIzaSyC-ogksoBoaJHkfX5Fj_4ja3lfkFPnm06A",
    authDomain: "vue-https-demo-e51ba.firebaseapp.com",
    databaseURL: "https://vue-https-demo-e51ba-default-rtdb.firebaseio.com",
    projectId: "vue-https-demo-e51ba",
    storageBucket: "vue-https-demo-e51ba.appspot.com",
    messagingSenderId: "791065777779",
    appId: "1:791065777779:web:e8a28fbe91d8af8d1dfc06"
};


firebase.initializeApp(firebaseConfig);
firebase
.firestore()
.enablePersistence({synchronizeTabs: !0 })
.catch(() => {
    console.warn("DB offline support not available.");
});

export default {
    firestore: firebase.firestore()
}