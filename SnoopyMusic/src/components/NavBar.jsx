import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        Snoopy Music
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav>
      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
        <li><Link to="/premium" onClick={() => setMenuOpen(false)}>Premium</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Entrar</Link></li>
      </ul>

      </nav>
    </header>
  );
};

export default NavBar;