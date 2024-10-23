import React from 'react';
import { motion } from 'framer-motion';

const CompanyCVM = () => {
  const cards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'CULTURE',
      description: 'Notre culture d\'entreprise favorise l\'innovation et la collaboration',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'VISION',
      description: 'Notre vision est de transformer l\'industrie par l\'innovation technologique',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'MISSION',
      description: 'Notre mission est d\'offrir des solutions durables qui améliorent la vie de nos clients',
    },
  ];

  return (
    <section className="py-8 bg-white mx-6 sm:mx-8 md:mx-12 lg:mx-16"> {/* Marges augmentées */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 text-white opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-center mb-4">{card.description}</p>
                <motion.button
                  className="bg-white text-black px-4 py-2 font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EN SAVOIR PLUS
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCVM;
