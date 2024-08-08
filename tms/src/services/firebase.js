// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyD7jNb2WLMlxT35rx7DYajP69v4j6DpNhE",
//     authDomain: "tms-service-54277.firebaseapp.com",
//     projectId: "tms-service-54277",
//     storageBucket: "tms-service-54277.appspot.com",
//     messagingSenderId: "780355453064",
//     appId: "1:780355453064:web:879eb6cccedab78ef7df3d",
//     measurementId: "G-QHFBKVBW9X"
//   };

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);


// export const getLoads = async () => {
//   const loads = [];
//   const querySnapshot = await getDocs(collection(firestore, "Loads"));
//   querySnapshot.forEach((doc) => {
//     loads.push({ id: doc.id, ...doc.data() });
//   });
//   return loads;
// };

// export const addLoadToFirestore = async (formData) => {
//   try {
//     // Convert FormData to a plain object
//     const loadDetails = Object.fromEntries(formData);

//     // Add document to Firestore with auto-generated ID
//     const docRef = await addDoc(collection(firestore, "Loads"), loadDetails);
//     console.log("Load document written with ID:", docRef.id);
//   } catch (error) {
//     console.error("Error adding load document:", error);
//   }
// };

// export const getEmployees = async () => {
//   const loads = [];
//   const querySnapshot = await getDocs(collection(firestore, "Employees"));
//   querySnapshot.forEach((doc) => {
//     loads.push({ id: doc.id, ...doc.data() });
//   });
//   return loads;
// };

// export const addEmployeeToFirestore = async (formData) => {
//   try {
//     // Convert FormData to a plain object
//     const loadDetails = Object.fromEntries(formData);

//     // Add document to Firestore with auto-generated ID
//     const docRef = await addDoc(collection(firestore, "Employee"), loadDetails);
//     console.log("Employee document written with ID:", docRef.id);
//   } catch (error) {
//     console.error("Error adding Employee document:", error);
//   }
// };


// export default firebase
