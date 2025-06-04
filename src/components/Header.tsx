import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-military-900 border-b-2 border-olive-600 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-olive-500 to-olive-700 rounded-lg flex items-center justify-center">
              <i className="bi bi-shield-fill-check text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="font-orbitron font-bold text-xl text-white">SAS AMERICA</h1>
              <p className="text-olive-400 text-sm font-inter">ARMA REFORGER</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-olive-400 transition-colors font-inter font-medium">
              Início
            </a>
            <a href="#server" className="text-white hover:text-olive-400 transition-colors font-inter font-medium">
              Servidor
            </a>
            <a href="#vip" className="text-white hover:text-olive-400 transition-colors font-inter font-medium">
              VIP
            </a>
            <a href="#stats" className="text-white hover:text-olive-400 transition-colors font-inter font-medium">
              Estatísticas
            </a>
            <a href="#events" className="text-white hover:text-olive-400 transition-colors font-inter font-medium">
              Eventos
            </a>
          </nav>

          {/* VIP Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-gold-500 to-gold-600 text-military-900 px-6 py-2 rounded-lg font-inter font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300"
          >
            <i className="bi bi-star-fill mr-2"></i>
            Tornar-se VIP
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-military-800 rounded-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-olive-400 transition-colors font-inter">
                Início
              </a>
              <a href="#server" className="text-white hover:text-olive-400 transition-colors font-inter">
                Servidor
              </a>
              <a href="#vip" className="text-white hover:text-olive-400 transition-colors font-inter">
                VIP
              </a>
              <a href="#stats" className="text-white hover:text-olive-400 transition-colors font-inter">
                Estatísticas
              </a>
              <a href="#events" className="text-white hover:text-olive-400 transition-colors font-inter">
                Eventos
              </a>
              <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-military-900 px-6 py-2 rounded-lg font-inter font-semibold w-full">
                <i className="bi bi-star-fill mr-2"></i>
                Tornar-se VIP
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
