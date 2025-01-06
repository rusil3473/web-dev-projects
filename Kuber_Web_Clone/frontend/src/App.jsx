import { useContext, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../screens/Home"
import Signup from "../screens/Signup"
import Login from "../screens/Login"
import './App.css'
import { loginContext, LoginContextProvider } from '../screens/ContextReducer'
import Dashboard from '../screens/Dashboard'
import Settings from '../screens/Settings'
import AddMaster from '../screens/AddMaster'
function App() {
  const { state } = useContext(loginContext);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={state.isLogin ? <Dashboard /> : <Navigate to="/login" />}></Route>
        <Route path='/settings' element={state.isLogin ? <Settings /> : <Navigate to="/login" />}></Route>
        <Route path='/add-master' element={state.isLogin ? <AddMaster /> : <Navigate to="/login" />}></Route>
      </Routes>
    </>
  )
}

export default App
