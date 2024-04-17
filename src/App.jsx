import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Home from './assets/Pages/Home/Home'
import Menu from './assets/Pages/Menu/Menu'

function App() {

  return (
    <>

      <h1>holaaa =))</h1>
      <Router>
        {/* ESTO ES UN MENU */}
        <Menu></Menu>
        {/* ESTO ES LA DECLARACIÓN DE RUTAS */}
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
