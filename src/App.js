import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LandingPage = lazy(() => import('./pages/landingPage/LandingPage'));
const Services = lazy(() => import('./pages/Services/Services'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Apropos = lazy(() => import('./pages/A-propos/A-propos'));
const Produits = lazy(() => import('./pages/Produits/Produits'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost/BlogPost'));

/**
 * App - Composant principal de l'application
 * 
 * Ce composant est le point d'entrée de notre application React.
 * Il définit la structure globale de l'app, incluant le routage,
 * le header et le footer qui sont présents sur toutes les pages.
 * 
 * On utilise React Router pour gérer la navigation entre les différentes pages.
 * Chaque Route correspond à un chemin URL et au composant à afficher pour ce chemin.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
