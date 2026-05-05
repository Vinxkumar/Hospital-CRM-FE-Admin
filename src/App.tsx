import React from 'react'
import './App.css'
import Login from './Pages/login'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
