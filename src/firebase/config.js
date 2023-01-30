// import * as firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCIX-Lkt4ELv3XCrz94lKZgFEDwNNT_l1k",
//   authDomain: "mygalleryy-6e2ae.firebaseapp.com",
//   projectId: "mygalleryy-6e2ae",
//   storageBucket: "mygalleryy-6e2ae.appspot.com",
//   messagingSenderId: "954825227060",
//   appId: "1:954825227060:web:0f88fe2c46a894a0f20361",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore, timestamp };

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIX-Lkt4ELv3XCrz94lKZgFEDwNNT_l1k",
  authDomain: "mygalleryy-6e2ae.firebaseapp.com",
  projectId: "mygalleryy-6e2ae",
  storageBucket: "mygalleryy-6e2ae.appspot.com",
  messagingSenderId: "954825227060",
  appId: "1:954825227060:web:0f88fe2c46a894a0f20361",
};

const app = initializeApp(firebaseConfig);

const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

export { projectStorage, app, projectFirestore };
