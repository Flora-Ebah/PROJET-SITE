import React from 'react';
import { motion } from 'framer-motion';
import './ProduitsHero.css';

const ProduitsHero = () => {

  return (
    <div className="bg-white text-[#1c3c98] py-20 relative overflow-hidden">
      <div className="color-blob blue"></div>
      <div className="color-blob yellow"></div>
      <div className="color-blob green"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-8 md:mx-16 lg:mx-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nos Produits Innovants
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Équipements de pointe pour une télémédecine efficace
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <p className="text-lg mb-8">
              Découvrez notre gamme de produits technologiques conçus pour révolutionner 
              la pratique de la télémédecine dans les centres de santé, cliniques et 
              établissements médicaux. Des solutions performantes pour des soins à distance de qualité.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProduitsHero;
