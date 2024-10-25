import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ImageSlider - Composant de carrousel d'images avancé
 * 
 * Ce composant crée un carrousel d'images interactif et dynamique, mettant en valeur
 * les différentes solutions de télémédecine offertes par Ophir Technologies.
 * 
 * Caractéristiques principales :
 * - Défilement automatique des images avec transition fluide
 * - Contrôle manuel via des points de navigation
 * - Superposition de texte descriptif sur chaque image
 * - Animations de transition entre les slides pour une expérience visuelle améliorée
 * - Design responsive s'adaptant à différentes tailles d'écran
 * 
 * Structure de chaque slide :
 * - Image de fond à plein écran
 * - Titre de la solution mis en évidence
 * - Description courte de la solution
 * - Overlay semi-transparent pour améliorer la lisibilité du texte
 * 
 * Fonctionnalités techniques :
 * - Utilisation de useState pour gérer l'état du slide actif
 * - useEffect pour le défilement automatique et la gestion du cycle de vie
 * - Framer Motion pour les animations de transition entre les slides
 * - Contrôles de navigation permettant aux utilisateurs de choisir un slide spécifique
 * 
 * Ce composant joue un rôle clé dans la présentation visuelle des solutions d'Ophir Technologies,
 * offrant une expérience utilisateur engageante et informative.
 */
const solutions = [
  { 
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', 
    titre: 'Téléconsultation Avancée', 
    description: 'Des solutions de pointe pour des consultations à distance efficaces et sécurisées' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28', 
    titre: 'Monitoring à Distance', 
    description: 'Surveillance en temps réel des patients pour une prise en charge optimale' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842', 
    titre: 'Gestion des Données Médicales', 
    description: 'Systèmes sécurisés pour le stockage et l\'analyse des données de santé' 
  },
];

const ImageSlider = () => {
  const [indexCourant, setIndexCourant] = useState(0);

  useEffect(() => {
    const minuterie = setInterval(() => {
      setIndexCourant((indexPrecedent) => (indexPrecedent + 1) % solutions.length);
    }, 6000); // Change d'image toutes les 6 secondes

    return () => clearInterval(minuterie);
  }, []);

  return (
    <div className="relative w-full h-[95vh] md:h-[80vh] sm:h-[70vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={indexCourant}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={solutions[indexCourant].url}
            alt={solutions[indexCourant].titre}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="bg-gradient-to-t from-black to-transparent p-4 sm:p-5 md:p-6 rounded-lg shadow-lg w-full">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white text-center"
              >
                {solutions[indexCourant].titre}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center mx-auto max-w-2xl"
              >
                {solutions[indexCourant].description}
              </motion.p>
              <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center space-x-2">
                {solutions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      index === indexCourant ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    onClick={() => setIndexCourant(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
