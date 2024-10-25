import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "L'avenir de la télémédecine",
      excerpt: "Découvrez comment Ophir Technologie révolutionne les soins à distance.",
      date: "15 mai 2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Nos solutions pour les centres de santé",
      excerpt: "Explorez notre gamme de produits conçus pour optimiser les cliniques modernes.",
      date: "2 juin 2023",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
    },
    {
      title: "Témoignage : La télémédecine en action",
      excerpt: "Un médecin partage son expérience avec nos technologies innovantes.",
      date: "20 juin 2023",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    },
    {
      title: "Innovation en imagerie médicale",
      excerpt: "Découvrez nos dernières avancées en matière d'imagerie pour un diagnostic plus précis.",
      date: "5 juillet 2023",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Colonne de gauche */}
          <motion.div 
            className="md:w-1/3 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-montserrat font-semibold text-base leading-[19.2px] text-[#174EA2] mb-6">
              DERNIER BLOG
            </h2>
            <h3 className="font-montserrat font-bold text-4xl leading-[50.4px] text-[#282828] mb-4">
              CENTRE <br/> D'ACTUALITÉS
            </h3>
            <p className="font-normal text-sm leading-[23.8px] text-[#666666] mb-6">
              OPHIR Technologies fournit des produits de haute qualité et un bon service. 
              OPHIR Technologies souhaite établir une coopération commerciale gagnant-gagnant 
              avec des distributeurs du monde entier.
            </p>
            <Link to="/blog">
              <motion.button 
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir plus <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Colonne de droite */}
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div 
                  key={index}
                  className="bg-white shadow-md overflow-hidden relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white text-left">{post.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white p-6 text-left w-full">
                      <p className="mb-4">{post.excerpt}</p>
                      <motion.button 
                        className="flex items-center text-blue-300 hover:text-blue-100 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir plus <FaArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
