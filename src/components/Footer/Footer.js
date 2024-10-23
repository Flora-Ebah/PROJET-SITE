import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Importez les icônes nécessaires
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.footer 
      className="bg-[#1c3c98] text-white py-8 pl-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex flex-wrap justify-between" variants={containerVariants}>
          <motion.div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0 pr-4 text-left" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Notre entreprise</h3>
            <p className="text-sm mb-4">
              Votre Entreprise est leader dans son domaine, offrant des solutions innovantes et durables depuis plus de 20 ans. Notre engagement envers l'excellence et la satisfaction client guide chacune de nos actions.
            </p>
          </motion.div>
          <motion.div className="w-full sm:w-1/2 lg:w-1/5 mb-6 lg:mb-0 text-left" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <motion.li variants={itemVariants}>
                <Link to="/a-propos" className="hover:text-yellow-300 transition-colors duration-300">À propos</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/services" className="hover:text-yellow-300 transition-colors duration-300">Services</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/produits" className="hover:text-yellow-300 transition-colors duration-300">Produits</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link to="/contacts" className="hover:text-yellow-300 transition-colors duration-300">Nous contacter</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div className="w-full sm:w-1/2 lg:w-1/5 mb-6 lg:mb-0 text-left" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <motion.li variants={itemVariants}><a href="mailto:info@entreprise.com" className="hover:text-gray-300">info@entreprise.com</a></motion.li>
              <motion.li variants={itemVariants}><a href="tel:+33123456789" className="hover:text-gray-300">+33 1 23 45 67 89</a></motion.li>
              <motion.li variants={itemVariants}>123 Rue de l'Innovation,</motion.li>
              <motion.li variants={itemVariants}>75000 Paris, France</motion.li>
            </ul>
          </motion.div>
          <motion.div className="w-full sm:w-1/2 lg:w-1/5 mb-6 lg:mb-0 text-left" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="bg-white text-yellow-400 rounded-full p-2 hover:bg-yellow-400 hover:text-white transition-colors duration-300"
                  variants={itemVariants} 
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-600 mt-8 pt-8 text-center sm:text-left"
          variants={itemVariants}
        >
          <p>&copy; 2023 Votre Entreprise. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
