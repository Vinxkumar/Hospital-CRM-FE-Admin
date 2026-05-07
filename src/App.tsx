import React from 'react'
import './App.css'
import Login from './Pages/login'
import HomePage from './Pages/HomePage'
import Profile from './Pages/Profile'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
