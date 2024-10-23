import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './ServiceHero.css';

const ServiceHero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Ophir Technologie
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Solutions technologiques innovantes pour la télémédecine
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <p className="text-lg mb-8">
              Nous proposons des produits technologiques de pointe pour les centres de santé, 
              cliniques et établissements médicaux, facilitant la pratique de la télémédecine.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={scrollToServices}
      >
        <div className="bg-white rounded-full p-3 shadow-md w-14 h-14 flex items-center justify-center">
          <FaChevronDown className="text-3xl text-[#1c3c98] cursor-pointer" />
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
