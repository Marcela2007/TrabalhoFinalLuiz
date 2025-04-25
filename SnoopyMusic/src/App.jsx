import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Premium from './pages/Premium'; // importa a página Premium
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<div>Entrar</div>} />
      </Routes>
    </Router>
  );
}

export default App;
