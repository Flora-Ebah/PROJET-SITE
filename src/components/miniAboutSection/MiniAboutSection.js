import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaProjectDiagram, FaUserMd, FaHandshake } from 'react-icons/fa';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16); // 16ms is roughly 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const MiniAboutSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const stats = [
    { nombre: 8, texte: "Années d'expérience", icon: <FaCalendarAlt /> },
    { nombre: 50, texte: "Projets réalisés", icon: <FaProjectDiagram /> },
    { nombre: 1000, texte: "Patients bénéficiaires", icon: <FaUserMd /> },
    { nombre: 30, texte: "Partenaires de santé", icon: <FaHandshake /> }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="container mx-auto px-8 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full md:w-1/3 mb-10 md:mb-0 md:pr-10"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-left leading-tight uppercase">
              OPHIR TECHNOLOGIE : SOLUTIONS INNOVANTES POUR LA TÉLÉMÉDECINE
            </h2>
            <div className="text-left mt-6 md:mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1c3c98] text-white font-semibold py-2 px-6 text-base sm:text-lg hover:bg-[#162f75] transition duration-300">
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-2/3 md:pl-10"
          >
            <p className="text-sm sm:text-base lg:text-lg mb-8 text-left leading-relaxed">
              Fondée en 2015, Ophir Technologie est leader dans le domaine de la télémédecine. Notre équipe passionnée développe des solutions technologiques de pointe pour les établissements de santé, améliorant l'accès aux soins et la qualité des services médicaux. De la téléconsultation à la gestion des données médicales, nous intégrons les dernières avancées pour répondre aux défis actuels et futurs du secteur de la santé. Notre mission : faire de la technologie un outil essentiel pour des soins de santé accessibles et efficaces pour tous.
            </p>
          </motion.div>
        </div>
        
        {/* Section des réalisations avec couleur unique et compteur */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1c3c98]"></div>
          <div className="relative z-10 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 flex justify-center">
                    {item.icon}
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                    <Counter end={item.nombre} duration={2000} />
                    {item.nombre >= 1000 ? '+' : ''}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">{item.texte}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MiniAboutSection;
