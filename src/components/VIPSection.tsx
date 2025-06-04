import React from 'react';
import { motion } from 'framer-motion';

const VIPSection: React.FC = () => {
  const vipBenefits = [
    {
      icon: 'bi-star-fill',
      title: 'Acesso Prioritário',
      description: 'Entre no servidor mesmo quando estiver lotado'
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Kit VIP Exclusivo',
      description: 'Equipamentos e armas especiais para membros VIP'
    },
    {
      icon: 'bi-trophy-fill',
      title: 'XP Dobrado',
      description: 'Ganhe experiência 2x mais rápido que jogadores normais'
    },
    {
      icon: 'bi-chat-square-text-fill',
      title: 'Chat VIP',
      description: 'Canal de comunicação exclusivo para membros VIP'
    },
    {
      icon: 'bi-palette-fill',
      title: 'Skins Exclusivas',
      description: 'Uniformes e equipamentos únicos para VIPs'
    },
    {
      icon: 'bi-headset',
      title: 'Suporte Premium',
      description: 'Atendimento prioritário da equipe de administração'
    }
  ];

  const vipPlans = [
    {
      name: 'VIP Bronze',
      price: 'R$ 15',
      period: '/mês',
      color: 'from-amber-600 to-amber-700',
      features: ['Acesso Prioritário', 'Kit VIP Básico', 'XP +50%']
    },
    {
      name: 'VIP Silver',
      price: 'R$ 25',
      period: '/mês',
      color: 'from-gray-400 to-gray-600',
      features: ['Todos os Bronze', 'Chat VIP', 'XP +75%', 'Skins Exclusivas']
    },
    {
      name: 'VIP Gold',
      price: 'R$ 40',
      period: '/mês',
      color: 'from-gold-500 to-gold-600',
      features: ['Todos os Silver', 'XP Dobrado', 'Suporte Premium', 'Kit VIP Completo'],
      popular: true
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="vip"
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            Torne-se um <span className="text-gold-400">VIP</span>
          </h2>
          <p className="text-olive-300 text-lg font-inter max-w-2xl mx-auto">
            Desbloqueie vantagens exclusivas e tenha uma experiência premium no SAS America
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {vipBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-military-800 rounded-xl p-6 border border-olive-600 hover:border-gold-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <i className={`${benefit.icon} text-xl text-military-900`}></i>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-olive-300 font-inter">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* VIP Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`relative bg-military-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-gold-500' : 'border-olive-600'
              } hover:border-gold-400 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-military-900 px-4 py-1 rounded-full text-sm font-inter font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-orbitron font-bold text-gold-400">{plan.price}</span>
                  <span className="text-olive-300 font-inter ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <i className="bi bi-check-circle-fill text-gold-400"></i>
                    <span className="text-olive-200 font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Escolher {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VIPSection;
