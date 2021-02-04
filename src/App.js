import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Navbar } from './Components/navbar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/orderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import {Context } from './Components/context';
const firebaseConfig = {
  apiKey: "AIzaSyDPyWP-JhtL79p7d1IhAK9A-5KWtHZ6qGQ",
  authDomain: "mrdonalds-1d20a.firebaseapp.com",
  databaseURL: "https://mrdonalds-1d20a.firebaseio.com",
  projectId: "mrdonalds-1d20a",
  storageBucket: "mrdonalds-1d20a.appspot.com",
  messagingSenderId: "737079081973",
  appId: "1:737079081973:web:7b9949dbe48080ade47ebc"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;

  const auth =  useAuth(authFirebase);

  const openItem = useOpenItem();
  const orders = useOrders();
  // console.log('Item :', openItem);

  useTitle(openItem.openItem);
  const orderConfirm = useOrderConfirm();
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase:firebase.database
    }}>
    <div className="App">
     <GlobalStyle />
     <Navbar />
     <Order/>
     <Menu />
     {openItem.openItem && <ModalItem/>}
     {orderConfirm.openOrderConfirm &&  <OrderConfirm />}
    </div>
    </Context.Provider>
  );
}

export default App;
