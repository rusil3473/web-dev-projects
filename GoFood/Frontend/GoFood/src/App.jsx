import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from '../screens/Home'
import Login from '../screens/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import SignUp from '../screens/SignUp';
import Cart from "../screens/Cart"
import { CartProvider } from '../components/ContextReducer';

function App() {


  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<SignUp />}></Route>
            <Route path='/myCart' element={<Cart />}></Route>
          </Routes>
        </div>
      </Router>
      </CartProvider>
   
  )
}

export default App
