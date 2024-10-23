import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
 
const FormContact = () => {
  const [selectedPrefix, setSelectedPrefix] = useState('+33');

  const handlePrefixChange = (e) => {
    setSelectedPrefix(e.target.value);
  };

  // Modifiez cette classe CSS pour les champs de saisie en enlevant 'rounded'
  const inputClasses = "w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition duration-200";

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 xl:gap-48 mx-4 sm:mx-8 lg:mx-16">
        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12 text-left"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contactez-nous</h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label htmlFor="firstName" className="block mb-1 text-left">Prénom</label>
                <input type="text" id="firstName" className={inputClasses} />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="lastName" className="block mb-1 text-left">Nom</label>
                <input type="text" id="lastName" className={inputClasses} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/3">
                <label htmlFor="phonePrefix" className="block mb-1 text-left">Pays</label>
                <select 
                  id="phonePrefix" 
                  className={inputClasses}
                  onChange={handlePrefixChange}
                  value={selectedPrefix}
                >
                  <option value="+33">France (+33)</option>
                  <option value="+1">États-Unis (+1)</option>
                  <option value="+44">Royaume-Uni (+44)</option>
                  <option value="+49">Allemagne (+49)</option>
                  <option value="+39">Italie (+39)</option>
                  <option value="+34">Espagne (+34)</option>
                  {/* Ajoutez d'autres options selon vos besoins */}
                </select>
              </div>
              <div className="w-full sm:w-2/3">
                <label htmlFor="phone" className="block mb-1 text-left">Téléphone</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300">
                    {selectedPrefix}
                  </span>
                  <input 
                    type="tel" 
                    id="phone" 
                    className={inputClasses}
                    placeholder="123456789"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-left">Email</label>
              <input type="email" id="email" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-left">Message</label>
              <textarea id="message" rows="4" className={inputClasses}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
              Envoyer
            </button>
          </form>
        </motion.div>

        {/* Coordonnées et heures d'ouverture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12 text-left mt-8 lg:mt-0"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Nos coordonnées</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-500" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" />
              <span>123 Rue Example, 75000 Paris</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-4">Heures d'ouverture</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaClock className="mr-2 text-blue-500" />
              <span>Lundi - Vendredi : 9h00 - 18h00</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-blue-500" />
              <span>Samedi : 10h00 - 14h00</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-blue-500" />
              <span>Dimanche : Fermé</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FormContact;
