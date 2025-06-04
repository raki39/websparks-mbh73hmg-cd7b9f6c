import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-military-900 border-t border-olive-600 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-olive-500 to-olive-700 rounded-lg flex items-center justify-center">
                <i className="bi bi-shield-fill-check text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-white">SAS AMERICA</h3>
                <p className="text-olive-400 text-sm font-inter">ARMA REFORGER</p>
              </div>
            </div>
            <p className="text-olive-300 font-inter mb-6 max-w-md">
              O melhor servidor de ARMA Reforger da América do Sul. Junte-se à elite militar e viva experiências táticas únicas.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-military-800 rounded-lg flex items-center justify-center text-olive-400 hover:text-white hover:bg-olive-600 transition-colors"
              >
                <i className="bi bi-discord"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-military-800 rounded-lg flex items-center justify-center text-olive-400 hover:text-white hover:bg-olive-600 transition-colors"
              >
                <i className="bi bi-youtube"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-military-800 rounded-lg flex items-center justify-center text-olive-400 hover:text-white hover:bg-olive-600 transition-colors"
              >
                <i className="bi bi-twitch"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-military-800 rounded-lg flex items-center justify-center text-olive-400 hover:text-white hover:bg-olive-600 transition-colors"
              >
                <i className="bi bi-steam"></i>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#server" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Servidor
                </a>
              </li>
              <li>
                <a href="#vip" className="text-olive-300 hover:text-white font-inter transition-colors">
                  VIP
                </a>
              </li>
              <li>
                <a href="#stats" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#events" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Regras do Servidor
                </a>
              </li>
              <li>
                <a href="#" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Como Conectar
                </a>
              </li>
              <li>
                <a href="#" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Reportar Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-olive-300 hover:text-white font-inter transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-olive-300 hover:text-white font-inter transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-600 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-olive-400 font-inter text-sm">
            © 2024 SAS America. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-olive-400 hover:text-white font-inter text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-olive-400 hover:text-white font-inter text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
