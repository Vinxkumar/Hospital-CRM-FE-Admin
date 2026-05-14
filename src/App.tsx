import React from 'react'
import './App.css'
import Login from './Pages/login'
import HomePage from './Pages/HomePage'
import Profile from './Pages/Profile'
import { BrowserRouter, Route, Routes } from "react-router-dom"
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
