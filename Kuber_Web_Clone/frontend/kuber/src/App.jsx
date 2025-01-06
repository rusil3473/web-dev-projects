import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../screens/Home"
import Signup from "../screens/Sigup"
import Login from "../screens/Login"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>

    </>
  )
}

export default App
