import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * ProduitSection - Section de présentation des produits
 * 
 * Ce composant affiche une grille de produits avec des détails extensibles.
 * Chaque produit peut être sélectionné pour afficher plus d'informations.
 * 
 * Fonctionnalités :
 * - Affichage en grille des produits
 * - Carrousel d'images pour chaque produit
 * - Détails extensibles pour chaque produit
 * - Animations fluides lors des interactions
 * 
 * Le composant utilise :
 * - useState pour gérer la sélection des produits et des images
 * - useRef pour le défilement automatique vers les détails
 * - Framer Motion pour les animations
 * - react-slick pour le carrousel d'images
 */
const ProduitSection = () => {
  const [selectedProduit, setSelectedProduit] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const descriptionRef = useRef(null);

  const produits = [
    {
      titre: "Station de Téléconsultation Avancée",
      images: [
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      description: "Notre Station de Téléconsultation Avancée est une solution complète pour les professionnels de santé souhaitant offrir des consultations à distance de haute qualité. Équipée de caméras HD, d'un écran tactile intuitif et de dispositifs médicaux connectés, elle permet un diagnostic précis et une interaction fluide avec les patients. Idéale pour les cliniques, hôpitaux et cabinets médicaux cherchant à étendre leur portée et à améliorer l'accès aux soins.",
      caracteristiques: [
        "Caméra HD avec zoom optique",
        "Écran tactile 4K de 27 pouces",
        "Stéthoscope numérique intégré",
        "Connexion sécurisée et cryptée",
        "Compatible avec les principaux logiciels de télémédecine"
      ],
    },
    {
      titre: "Kit de Monitoring à Distance",
      images: [
        "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      description: "Le Kit de Monitoring à Distance est conçu pour permettre un suivi continu et précis des patients à domicile. Ce kit compact et facile à utiliser comprend des dispositifs de mesure des signes vitaux connectés, permettant aux professionnels de santé de surveiller l'état de santé de leurs patients en temps réel. Idéal pour le suivi post-opératoire, la gestion des maladies chroniques et les soins préventifs.",
      caracteristiques: [
        "Tensiomètre connecté",
        "Oxymètre de pouls",
        "Thermomètre sans contact",
        "Application mobile pour le patient",
        "Tableau de bord en temps réel pour les professionnels de santé"
      ],
    },
    {
      titre: "Plateforme de Télémédecine Sécurisée",
      images: [
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      description: "Notre Plateforme de Télémédecine Sécurisée offre une solution complète pour la gestion des consultations en ligne. Conçue pour répondre aux besoins des professionnels de santé et des patients, elle garantit des échanges sécurisés, une gestion efficace des rendez-vous et un accès facile aux dossiers médicaux. Cette plateforme s'intègre parfaitement avec nos autres solutions de télésanté pour une expérience utilisateur optimale.",
      caracteristiques: [
        "Vidéoconférence HD sécurisée",
        "Gestion des rendez-vous intégrée",
        "Dossier médical électronique",
        "Prescription électronique",
        "Rapports et analyses pour les professionnels de santé"
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleProduitClick = (index) => {
    setSelectedProduit(index);
    setSelectedImage(0); // Reset selected image when changing product
    setTimeout(() => {
      descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produits.map((produit, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-lg overflow-hidden h-[550px] flex flex-col ${
                selectedProduit === index ? 'border-4 border-yellow-500' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Slider {...settings} className="w-full h-[400px]">
                {produit.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="w-full h-[400px]">
                    <img 
                      src={image} 
                      alt={produit.titre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-3 text-left">{produit.titre}</h3>
                <button 
                  onClick={() => handleProduitClick(index)}
                  className="mt-2 text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduit !== null && (
            <motion.div
              ref={descriptionRef}
              key={selectedProduit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-white shadow-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-2/3 pr-6">
                  <h3 className="text-2xl font-bold mb-4 text-left">{produits[selectedProduit].titre}</h3>
                  <p className="text-gray-600 mb-6 text-left">{produits[selectedProduit].description}</p>
                  
                  <h4 className="text-xl font-semibold mb-3 text-left">Caractéristiques principales :</h4>
                  <ul className="list-disc list-inside mb-6 text-left">
                    {produits[selectedProduit].caracteristiques.map((carac, index) => (
                      <li key={index} className="text-gray-600">{carac}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600 transition duration-300 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Contactez-nous
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <div className="mb-4 h-96 overflow-hidden">
                    <img 
                      src={produits[selectedProduit].images[selectedImage]} 
                      alt={produits[selectedProduit].titre}
                      className="w-full h-full object-cover shadow-md"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {produits[selectedProduit].images.map((image, index) => (
                      <div 
                        key={index}
                        className={`w-24 h-24 overflow-hidden shadow-md cursor-pointer ${selectedImage === index ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${produits[selectedProduit].titre} - Miniature ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProduitSection;
