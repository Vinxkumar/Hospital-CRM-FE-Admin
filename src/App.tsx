import './App.css'
import Login from './Pages/login'
import HomePage from './Pages/HomePage'
import Profile from './Pages/Profile'
import {Route, Routes } from "react-router-dom"
import HomeNavBar from './components/HomeNavBar'
import Doctor from './Pages/Doctor'
import { useState, useEffect } from 'react'



function App() {

  // In App.tsx Webpage component, add:
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<main>
            <HomeNavBar scrollY={scrollY}/>
            <HomePage/>
            <Doctor/>
          </main>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default App
