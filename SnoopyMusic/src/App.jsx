import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
     <NavBar/>
     <Home />
      <Routes>       
        <Route path="/obter" element={<div>Obtê-lo agora</div>} />
        <Route path="/premium" element={<div>Página Premium</div>} />
        <Route path="/login" element={<div>Entrar</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
