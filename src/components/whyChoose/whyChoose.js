import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaUsers, FaCertificate, FaHandshake } from 'react-icons/fa';

/**
 * WhyChoose - Composant présentant les raisons de choisir Ophir Technologies
 * 
 * Ce composant crée une section visuelle et interactive mettant en avant les principaux
 * avantages et points forts d'Ophir Technologies dans le domaine de la télémédecine.
 * 
 * Caractéristiques principales :
 * - Utilisation d'icônes thématiques pour une représentation visuelle claire des avantages
 * - Animations au survol pour une meilleure interaction et engagement de l'utilisateur
 * - Design responsive s'adaptant à différentes tailles d'écran (mobile, tablette, desktop)
 * - Mise en évidence alternée des cartes pour une meilleure lisibilité
 * 
 * Structure :
 * - Titre de section et texte d'introduction
 * - Grille de cartes présentant chaque avantage clé
 * 
 * Chaque carte contient :
 * - Une icône représentative
 * - Un titre court et accrocheur
 * - Une brève description de l'avantage
 * - Une animation de survol pour améliorer l'interactivité
 * 
 * Le composant utilise :
 * - Framer Motion pour les animations d'apparition et de survol
 * - React Icons pour les icônes thématiques
 * - Tailwind CSS pour le styling et la responsivité
 * 
 * Ce composant joue un rôle crucial dans la conversion des visiteurs en démontrant
 * clairement la valeur ajoutée et l'expertise d'Ophir Technologies.
 */
const WhyChoose = () => {
  const cards = [
    { title: 'SERVICES', description: 'Solutions de télémédecine innovantes pour les centres de santé et cliniques.', icon: FaStethoscope },
    { title: 'EQUIPE', description: 'Experts passionnés en technologie médicale à votre service.', icon: FaUsers },
    { title: 'CERTIFICATION', description: 'Produits certifiés répondant aux normes de santé les plus strictes.', icon: FaCertificate },
    { title: 'PARTENAIRES', description: 'Collaboration avec des leaders de l\'industrie pour des solutions optimales.', icon: FaHandshake },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pourquoi Choisir OPHIR Technologies</h2>
          <p className="text-gray-600 mb-3 sm:mb-4 max-w-5xl text-sm sm:text-base">Découvrez les raisons qui font d'OPHIR Technologies votre partenaire de confiance en solutions de télémédecine.</p>
          <p className="text-gray-600 max-w-5xl text-sm sm:text-base">Chez OPHIR Technologies, nous allions expertise médicale et innovation pour transformer les soins de santé. Notre engagement envers l'excellence garantit des solutions de télémédecine sûres et efficaces, améliorant l'accès aux soins.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-6 ${index === 1 || index === 3 ? 'bg-[#1c3c98] text-white' : 'bg-white'} group h-auto sm:h-64 flex flex-col justify-between`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center mb-3 sm:mb-4">
                <card.icon className="text-3xl sm:text-4xl mb-2" />
                <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
              </div>
              <div className="w-12 h-0.5 bg-current mb-3 sm:mb-4 transition-all duration-300 group-hover:w-full"></div>
              <p className={`${index === 1 || index === 3 ? 'text-gray-200' : 'text-gray-600'} text-center text-sm sm:text-base`}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
