import './App.css';
import  Home from './pages/index'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/pages/layout/navigation.css'
import Search from './pages/Search';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link  } from "react-router-dom";
import Contact from './pages/Contact';

import NavigationBar from './pages/layout/nav';
import Product from './pages/Product';


function App() {

  const [cartItems, setCartItems] = useState(1);

  const addItemToCart = () => {
    // Your logic to add the item to the cart goes here.
    // For simplicity, we'll just increment the cart item count by 1.
    setCartItems(cartItems + 1);
  };

  return (
    <Router> 
    <div className="App"> 
    <NavigationBar cartItems={cartItems}/>
    <Routes> 
            <Route exact path='/' element={< Home />}></Route> 
            <Route exact path='/contact' element={< Contact />}></Route> 
            <Route exact path='/product' element={< Product addToCart={addItemToCart} />}></Route> 
    </Routes> 
    </div> 
</Router> 
  );
}


export default App;
