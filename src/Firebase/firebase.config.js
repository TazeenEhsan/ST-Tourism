// console.log('key ', process.env.REACT_APP_FIREBASE_API_KEY);
const firebaseConfig = {

    // apiKey: "AIzaSyBEuuqRFKdtTNUlaQRAZvxFCDKk4lJw4FM",
    // authDomain: "st-medical.firebaseapp.com",
    // projectId: "st-medical",
    // storageBucket: "st-medical.appspot.com",
    // messagingSenderId: "453039763257",
    // appId: "1:453039763257:web:0acfc151ba30c7b45482e8"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID


    // apiKey: "AIzaSyDn1viMDRme3tH82q93y6XIKJQempayuWA",
    // authDomain: "st-tourism.firebaseapp.com",
    // projectId: "st-tourism",
    // storageBucket: "st-tourism.appspot.com",
    // messagingSenderId: "739079265506",
    // appId: "1:739079265506:web:2cffa9cacea395c9bd52bb"

};

export default firebaseConfig;



// REACT_APP_FIREBASE_API_KEY = "AIzaSyDn1viMDRme3tH82q93y6XIKJQempayuWA"
// REACT_APP_FIREBASE_AUTH_DOMAIN = "st-tourism.firebaseapp.com"
// REACT_APP_FIREBASE_PROJECT_ID = "st-tourism"
// REACT_APP_FIREBASE_STORAGE_BUCKET = "st-tourism.appspot.com"
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "739079265506"
// REACT_APP_FIREBASE_APP_ID = "1:739079265506:web:2cffa9cacea395c9bd52bb"


