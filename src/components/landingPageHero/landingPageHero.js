import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

/**
 * LandingPageHero - Section d'en-tête de la page d'accueil
 * 
 * Ce composant crée une section hero attrayante pour la page d'accueil.
 * Il présente un carrousel d'images en arrière-plan et un appel à l'action principal.
 * 
 * Caractéristiques :
 * - Carrousel d'images automatique
 * - Bouton CTA pour découvrir les solutions
 * - Icônes de contact flottantes (pour les écrans larges)
 * - Animations pour une expérience utilisateur dynamique
 * 
 * Le composant utilise :
 * - useState et useEffect pour gérer le carrousel d'images
 * - Framer Motion pour les animations
 * - React Icons pour les icônes de contact
 */
const LandingPageHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Télémédecine en action' },
    { image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Centre de santé moderne' },
    { image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Technologie de santé avancée' },
    { image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Consultation médicale à distance' },
    { image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', alt: 'Équipement médical de pointe' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions-section');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden border-2 border-yellow-400">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="bg-black bg-opacity-20 p-8 shadow-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 text-left">Ophir Technologie</h1>
          <p className="text-xl mb-8 text-left">
            Solutions innovantes de télémédecine. Nous révolutionnons l'accès aux soins en combinant expertise médicale et technologie avancée.
          </p>
          <div className="text-left">
            <button 
              className="mt-8 bg-white text-blue-500 font-bold py-3 px-6 hover:bg-blue-100 transition duration-300"
              onClick={scrollToSolutions}
            >
              Découvrir nos solutions
            </button>
          </div>
        </div>

        {/* Icônes de contact alignées verticalement et poussées vers le haut */}
        <motion.div 
          className="absolute top-1/3 right-8 flex-col space-y-4 hidden md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://wa.me/votrenuméro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 p-3 rounded-full"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="tel:votrenuméro"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 p-3 rounded-full"
          >
            <FaPhone className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="mailto:votreemail@exemple.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 p-3 rounded-full"
          >
            <FaEnvelope className="text-white text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPageHero;
