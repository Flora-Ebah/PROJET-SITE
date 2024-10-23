import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Service', path: '/services' },
    { name: 'Produit', path: '/produits' },
    { name: 'A propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white text-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 font-roboto-mono">
      <div className="h-1 bg-green-500 absolute top-0 left-0 right-0"></div>
      <nav className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            <Link to="/" className="hover:text-green-500 transition duration-300">
              <img src="/logo.png" alt="Logo" className="h-10 sm:h-12" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-5 sm:space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`transition duration-300 text-lg sm:text-xl font-semibold pb-2 ${
                    location.pathname === item.path ? 'text-black' : 'text-gray-800 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-all duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2"
              aria-label="Menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 text-sm sm:text-base transition duration-300 ${
                      location.pathname === item.path
                        ? 'text-yellow-400 font-semibold'
                        : 'text-gray-800 hover:text-yellow-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="h-0.5 bg-yellow-400 mx-4"></div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
