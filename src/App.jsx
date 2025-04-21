import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import SignIn from './pages/sign-in'
import SignOut from './pages/sign-out'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/sign-in' element={<SignIn />}/>
    <Route path='/sign-out' element={<SignOut />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
