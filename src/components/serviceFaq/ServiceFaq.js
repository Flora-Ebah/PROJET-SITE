import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Qu'est-ce que la télémédecine ?",
    answer: "La télémédecine est une pratique médicale utilisant les technologies de l'information et de la communication pour permettre une consultation à distance entre un professionnel de santé et un patient."
  },
  {
    question: "Quels sont les avantages des produits d'Ophir Technologie ?",
    answer: "Les produits d'Ophir Technologie offrent des solutions innovantes pour la télémédecine, améliorant l'accès aux soins, réduisant les coûts et augmentant l'efficacité des centres de santé et des cliniques."
  },
  {
    question: "Comment Ophir Technologie assure-t-elle la sécurité des données ?",
    answer: "Ophir Technologie utilise des protocoles de cryptage avancés et respecte les normes de sécurité les plus strictes pour protéger les données sensibles des patients et des professionnels de santé."
  },
  {
    question: "Quels types d'établissements peuvent bénéficier des solutions d'Ophir Technologie ?",
    answer: "Nos solutions sont adaptées à une variété d'établissements de santé, incluant les hôpitaux, les cliniques, les cabinets médicaux, les centres de soins de longue durée et les services de santé en entreprise."
  },
  {
    question: "Les solutions d'Ophir Technologie sont-elles compatibles avec les systèmes existants ?",
    answer: "Oui, nos solutions sont conçues pour s'intégrer facilement aux systèmes d'information hospitaliers (SIH) et aux dossiers médicaux électroniques (DME) existants, assurant une transition en douceur."
  },
  {
    question: "Quelle formation est nécessaire pour utiliser les produits d'Ophir Technologie ?",
    answer: "Nous offrons des programmes de formation complets et un support technique continu pour assurer que votre personnel puisse utiliser efficacement nos solutions, quel que soit leur niveau de compétence technique."
  },
  {
    question: "Comment Ophir Technologie aide-t-elle à améliorer l'expérience patient ?",
    answer: "Nos solutions facilitent l'accès aux soins, réduisent les temps d'attente et permettent un suivi plus régulier, ce qui améliore considérablement l'expérience et la satisfaction des patients."
  },
];

const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 py-4"
      initial={false}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl">{isActive ? '-' : '+'}</span>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600 text-left"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    indicatif: '+33', // Ajout de l'indicatif par défaut (France)
    numero: '',
    fonction: '',
    message: ''
  });

  // Liste des indicatifs téléphoniques mise à jour avec plus de pays africains
  const indicatifs = [
    { code: '+33', pays: 'France', format: '1 23 45 67 89' },
    { code: '+1', pays: 'États-Unis', format: '(555) 123-4567' },
    { code: '+44', pays: 'Royaume-Uni', format: '7911 123456' },
    { code: '+225', pays: 'Côte d\'Ivoire', format: '01 23 45 67 89' },
    { code: '+221', pays: 'Sénégal', format: '70 123 45 67' },
    { code: '+237', pays: 'Cameroun', format: '6 12 34 56 78' },
    { code: '+243', pays: 'RDC', format: '81 234 5678' },
    { code: '+212', pays: 'Maroc', format: '0612 345678' },
    { code: '+216', pays: 'Tunisie', format: '20 123 456' },
    { code: '+234', pays: 'Nigeria', format: '0801 234 5678' },
    { code: '+254', pays: 'Kenya', format: '0712 345678' },
    { code: '+27', pays: 'Afrique du Sud', format: '071 123 4567' },
    // Vous pouvez ajouter d'autres pays selon vos besoins
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleIndicatifChange = (e) => {
    const selectedIndicatif = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      indicatif: selectedIndicatif,
      numero: '' // Réinitialiser le numéro lors du changement d'indicatif
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter le formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      nom: '',
      prenom: '',
      indicatif: '+33', // Réinitialiser l'indicatif par défaut
      numero: '',
      fonction: '',
      message: ''
    });
  };

  return (
    <section className="bg-white pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mx-4 md:mx-8 lg:mx-20">
          <div className="flex flex-col items-start">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 text-left uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Questions fréquentes
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-6 text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ophir Technologie transforme la télémédecine pour les centres de santé et cliniques. Découvrez nos solutions innovantes pour améliorer l'accès aux soins et l'efficacité médicale.
            </motion.p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.button 
                className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.button>
              <motion.button 
                className="bg-white text-blue-600 px-6 py-2 border border-blue-600 hover:bg-blue-50 transition duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous contacter
              </motion.button>
            </div>
            
            <motion.form 
              className="mt-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-semibold mb-4 text-left">Posez-nous votre question</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="border p-2 focus:outline-none focus:border-blue-500 transition-colors duration-300 w-full"
                  required
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  className="border p-2 focus:outline-none focus:border-blue-500 transition-colors duration-300 w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <select
                  name="indicatif"
                  value={formData.indicatif}
                  onChange={handleIndicatifChange}
                  className="border p-2 focus:outline-none focus:border-blue-500 transition-colors duration-300 w-full"
                >
                  {indicatifs.map((indicatif) => (
                    <option key={indicatif.code} value={indicatif.code}>
                      {indicatif.pays} ({indicatif.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="numero"
                  placeholder={indicatifs.find(i => i.code === formData.indicatif)?.format || 'Numéro de téléphone'}
                  value={formData.numero}
                  onChange={handleInputChange}
                  className="border p-2 sm:col-span-2 focus:outline-none focus:border-blue-500 transition-colors duration-300 w-full"
                  required
                />
              </div>
              <input
                type="text"
                name="fonction"
                placeholder="Fonction ou entreprise"
                value={formData.fonction}
                onChange={handleInputChange}
                className="border p-2 w-full mb-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleInputChange}
                className="border p-2 w-full h-32 mb-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                required
              ></textarea>
              <div className="text-left">
                <motion.button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer
                </motion.button>
              </div>
            </motion.form>
          </div>
          <motion.div 
            className="bg-white p-6 shadow-lg mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {faqData.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
