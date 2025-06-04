import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.6)), url('https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-olive-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 leading-tight"
          >
            SAS <span className="text-olive-400">AMERICA</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-gold-400 mb-4">
              ARMA REFORGER SERVER
            </h2>
            <p className="text-lg md:text-xl text-olive-200 font-inter max-w-2xl mx-auto leading-relaxed">
              Experimente o combate militar mais realista da América do Sul. 
              Junte-se à elite e prove seu valor no campo de batalha.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-military-800/80 backdrop-blur-sm rounded-xl p-6 border border-olive-600">
              <div className="text-3xl font-orbitron font-bold text-gold-400 mb-2">47/64</div>
              <div className="text-olive-300 font-inter">Jogadores Online</div>
            </div>
            <div className="bg-military-800/80 backdrop-blur-sm rounded-xl p-6 border border-olive-600">
              <div className="text-3xl font-orbitron font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-olive-300 font-inter">Servidor Ativo</div>
            </div>
            <div className="bg-military-800/80 backdrop-blur-sm rounded-xl p-6 border border-olive-600">
              <div className="text-3xl font-orbitron font-bold text-gold-400 mb-2">23ms</div>
              <div className="text-olive-300 font-inter">Ping Médio</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(157, 176, 96, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-olive-600 to-olive-700 hover:from-olive-500 hover:to-olive-600 text-white px-8 py-4 rounded-lg font-inter font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <i className="bi bi-play-fill mr-2"></i>
              Conectar Agora
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-military-900 px-8 py-4 rounded-lg font-inter font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <i className="bi bi-star-fill mr-2"></i>
              Tornar-se VIP
            </motion.button>
          </motion.div>

          {/* Server IP */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <p className="text-olive-300 font-inter mb-2">IP do Servidor:</p>
            <div className="bg-military-800/80 backdrop-blur-sm rounded-lg p-4 border border-olive-600 inline-block">
              <code className="text-gold-400 font-orbitron font-bold text-lg">
                sas-america.com:2302
              </code>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 text-olive-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText('sas-america.com:2302')}
              >
                <i className="bi bi-clipboard"></i>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-olive-400 text-2xl"
        >
          <i className="bi bi-chevron-down"></i>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
