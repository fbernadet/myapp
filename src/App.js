import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/PresentationPersonnel';
import Projets from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Contenu des pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

