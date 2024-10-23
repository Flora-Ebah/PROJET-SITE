import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCommentDots } from 'react-icons/fa';

const ProductCard = ({ product }) => (
  <motion.div
    className="bg-white shadow-md p-4 m-2 w-72 h-80 flex-shrink-0 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-2">
      <h3 className="text-lg font-semibold text-center text-white">{product.name}</h3>
    </div>
  </motion.div>
);

const ProductSection = () => {
  const products = [
    { id: 1, name: "Stéthoscope connecté", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" },
    { id: 2, name: "Tablette médicale", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: 3, name: "Moniteur de signes vitaux", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: 4, name: "Caméra de téléconsultation", image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: 5, name: "Logiciel de télémédecine", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  ];

  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalProducts = products.length;

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;
    let lastScrollPosition = 0;

    const scroll = () => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }

      const currentScrollPosition = carousel.scrollLeft;
      if (currentScrollPosition !== lastScrollPosition) {
        const newPage = Math.round(currentScrollPosition / (carousel.clientWidth / totalProducts));
        setCurrentPage(newPage % totalProducts);
        lastScrollPosition = currentScrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const startScroll = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    const stopScroll = () => {
      cancelAnimationFrame(animationFrameId);
    };

    carousel.addEventListener('mouseenter', stopScroll);
    carousel.addEventListener('mouseleave', startScroll);

    startScroll();

    return () => {
      stopScroll();
      carousel.removeEventListener('mouseenter', stopScroll);
      carousel.removeEventListener('mouseleave', startScroll);
    };
  }, [totalProducts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (carouselRef.current) {
      const scrollAmount = (newPage * carouselRef.current.clientWidth) / totalProducts;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white mt-8 md:mt-16 mx-4 md:mx-8 lg:mx-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Côté gauche avec le texte */}
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Solutions innovantes pour la télémédecine</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-left">
              Chez Ophir Technologie, nous sommes fiers de proposer des produits technologiques de pointe 
              pour les centres de santé et les cliniques. Notre gamme d'équipements et de logiciels est 
              conçue pour faciliter et améliorer la pratique de la télémédecine.
            </p>
            <div className="text-left flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4">
                Explorer tous nos produits
              </button>
              <button className="bg-[#1c3c98] hover:bg-[#1c3c98] text-white font-bold py-2 px-4 flex items-center justify-center">
                <FaCommentDots className="mr-2 text-xl" /> Contactez-nous
              </button>
            </div>
          </div>

          {/* Côté droit avec le carrousel de produits */}
          <div className="w-full md:w-1/2 overflow-hidden mt-8 md:mt-0">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {products.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
              ))}
            </div>
            {/* Pagination avec des traits */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalProducts }).map((_, index) => (
                <div
                  key={index}
                  className={`mx-1 w-6 md:w-8 h-1 rounded-full cursor-pointer ${
                    currentPage === index ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                  onClick={() => handlePageChange(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
