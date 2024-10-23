import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope } from 'react-icons/fa';

const services = [
  {
    title: "Solutions de Téléconsultation",
    description: "Plateformes sécurisées pour des consultations médicales à distance, adaptées aux besoins des cliniques et des patients. Nos solutions offrent une expérience fluide et intuitive, permettant une communication efficace entre médecins et patients, tout en garantissant la confidentialité des données médicales.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Systèmes de Gestion des Dossiers Médicaux",
    description: "Logiciels intuitifs pour la gestion électronique des dossiers patients, assurant confidentialité et accessibilité. Notre système permet une organisation optimale des informations médicales, facilitant le suivi des patients et la collaboration entre professionnels de santé, tout en respectant les normes de sécurité les plus strictes.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Équipements de Télémédecine",
    description: "Dispositifs médicaux connectés pour le diagnostic et le suivi à distance des patients. Notre gamme d'équipements innovants permet aux professionnels de santé de réaliser des examens précis à distance, d'analyser les données en temps réel et de fournir des soins de qualité, quel que soit l'emplacement du patient.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Formation et Support",
    description: "Programmes de formation et support technique continu pour optimiser l'utilisation de nos solutions. Nous offrons des sessions de formation personnalisées, des ressources en ligne et une assistance technique 24/7 pour garantir que votre équipe maîtrise parfaitement nos outils et puisse les utiliser efficacement au quotidien.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Intégration et Personnalisation",
    description: "Services d'intégration sur mesure pour adapter nos solutions aux processus existants des centres de santé. Notre équipe d'experts travaille en étroite collaboration avec vous pour comprendre vos besoins spécifiques, personnaliser nos solutions et les intégrer harmonieusement à votre infrastructure existante, assurant une transition en douceur.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ServiceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services-section" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <motion.h2 
          className="text-[40px] text-[#2f3659ff] font-bold mb-16 text-left pl-4 md:pl-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nos Solutions pour la Télémédecine
        </motion.h2>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-24 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img
                src={service.image}
                alt={service.title}
                className="shadow-lg w-full h-96 object-cover"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div 
              className="md:w-1/2 md:px-12 text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-6"
                whileHover={{ scale: 1.05, color: "#4a5568" }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              >
                {service.description}
              </motion.p>
              <motion.button
                className="bg-blue-100 hover:bg-blue-200 text-[#1c3c98] font-bold py-2 px-4 inline-flex items-center border-2 border-[#1c3c98]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-2" />
                Contactez-nous
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
