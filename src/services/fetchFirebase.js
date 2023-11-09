// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUG1GzSXgBAgfHlkwDLi42kwabVLmN5iU",
  authDomain: "scout-51810.firebaseapp.com",
  projectId: "scout-51810",
  storageBucket: "scout-51810.appspot.com",
  messagingSenderId: "672318576901",
  appId: "1:672318576901:web:d7210decdebb1fbbdfff6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const fetchPlanificacionesFireBase = async () => {
    const storage = getStorage(app);
    const planificacionesRef = ref(storage, 'Planificacion-Prueba.docx');
    const url = await getDownloadURL(planificacionesRef);
    console.log(url);
}