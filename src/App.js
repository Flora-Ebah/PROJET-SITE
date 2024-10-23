import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/landingPage/LandingPage';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import Apropos from './pages/A-propos/A-propos';
import Produits from './pages/Produits/Produits';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/produits" element={<Produits />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
