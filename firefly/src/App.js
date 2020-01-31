import React from "react";
import "./App.css";
import { MainPage } from "./RouterHelper";
import { Banner } from "./Banner";
import ContactList from "./components/ContactList";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAODK8Pb4SdEY0ps3uPwFey0SLH4WyIBWc",
  authDomain: "firefly-tutorial.firebaseapp.com",
  databaseURL: "https://firefly-tutorial.firebaseio.com",
  projectId: "firefly-tutorial",
  storageBucket: "firefly-tutorial.appspot.com",
  messagingSenderId: "701289228352",
  appId: "1:701289228352:web:a89749ced1e215793817a5"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const contactData = [
    {
      name: "Jane Bird",
      email: "jbird@aol.com",
      phone: "2223334444",
      lastPurchase: "Jan 1 2019",
      pieciesBoughtYear: 2,
      piecesBoughtTotal: 4
    },
    {
      name: "Bob Marley",
      email: "bmarley@aol.com",
      phone: "2243335444",
      lastPurchase: "June 12 2018",
      pieciesBoughtYear: 1,
      piecesBoughtTotal: 7
    },
    {
      name: "Josh Brown",
      email: "jbrown@google.com",
      phone: "1233489324",
      lastPurchase: "Jan 27 2019",
      pieciesBoughtYear: 3,
      piecesBoughtTotal: 6
    },
    {
      name: "Lebron james",
      email: "ljames@google.com",
      phone: "2247289032",
      lastPurchase: "Feb 11 2019",
      pieciesBoughtYear: 0,
      piecesBoughtTotal: 5
    }
  ];

  return (
    <div>
      <Banner />
      <MainPage />
    </div>
  );
};

export default App;
