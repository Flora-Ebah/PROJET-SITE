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

const MaxAboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const images = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];

  const stats = [
    { nombre: 8, texte: "Années d'expérience", icon: <FaCalendarAlt /> },
    { nombre: 50, texte: "Projets réalisés", icon: <FaProjectDiagram /> },
    { nombre: 1000, texte: "Patients bénéficiaires", icon: <FaUserMd /> },
    { nombre: 30, texte: "Partenaires de santé", icon: <FaHandshake /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold mb-6">À propos d'Ophir Technologie</h2>
              <p className="text-base text-gray-700 mb-4">
                Fondée en 2015 à Montréal, Ophir Technologie est leader en solutions technologiques pour la santé. Notre mission : révolutionner la télémédecine et améliorer l'accès aux soins mondialement.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 my-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  De 5 à 100+ experts, nous avons développé 20+ produits innovants, utilisés dans 500+ établissements au Canada et aux États-Unis. Notre croissance témoigne de notre engagement envers l'excellence et l'innovation.
                </p>
              </div>
              <p className="text-base text-gray-700">
                Chez Ophir, nous croyons au pouvoir de la technologie pour transformer les soins. Notre R&D continue et notre collaboration avec les professionnels de santé visent à optimiser les processus médicaux, améliorer l'efficacité des soins et sauver des vies.
              </p>
            </div>
            <div className="md:w-1/2">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden shadow-lg relative h-[500px]"
              >
                <img 
                  src={images[currentImage]} 
                  alt={`Ophir Technologie en action ${currentImage + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        index === currentImage ? 'bg-white' : 'bg-gray-400'
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Section des réalisations avec gradient, compteur et icônes */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default MaxAboutSection;
