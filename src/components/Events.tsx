import React from 'react';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Operação Tempestade',
      description: 'Missão especial de resgate em território hostil',
      date: '2024-01-20',
      time: '20:00',
      participants: 32,
      maxParticipants: 40,
      type: 'PvE',
      difficulty: 'Hard',
      rewards: ['XP Dobrado', 'Kit Especial', 'Medalha Exclusiva']
    },
    {
      id: 2,
      title: 'Torneio PvP Semanal',
      description: 'Competição entre esquadrões pelo domínio do mapa',
      date: '2024-01-22',
      time: '19:30',
      participants: 28,
      maxParticipants: 32,
      type: 'PvP',
      difficulty: 'Expert',
      rewards: ['Prêmio em Dinheiro', 'Título Especial', 'Skin Exclusiva']
    },
    {
      id: 3,
      title: 'Treinamento de Recrutas',
      description: 'Sessão de treinamento para novos membros',
      date: '2024-01-25',
      time: '18:00',
      participants: 15,
      maxParticipants: 20,
      type: 'Training',
      difficulty: 'Easy',
      rewards: ['Certificado', 'Kit Iniciante', 'Acesso VIP Temporário']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Hard': return 'text-yellow-400 bg-yellow-400/20';
      case 'Expert': return 'text-red-400 bg-red-400/20';
      default: return 'text-olive-400 bg-olive-400/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PvE': return 'text-blue-400 bg-blue-400/20';
      case 'PvP': return 'text-red-400 bg-red-400/20';
      case 'Training': return 'text-green-400 bg-green-400/20';
      default: return 'text-olive-400 bg-olive-400/20';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="events"
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
            Eventos e <span className="text-olive-400">Missões</span>
          </h2>
          <p className="text-olive-300 text-lg font-inter max-w-2xl mx-auto">
            Participe de operações especiais e eventos exclusivos do SAS America
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-military-800 rounded-xl border border-olive-600 hover:border-olive-500 transition-all duration-300 overflow-hidden"
            >
              {/* Event Header */}
              <div className="bg-gradient-to-r from-olive-600 to-olive-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-white">{event.title}</h3>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-inter font-semibold ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-inter font-semibold ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-olive-100 font-inter">{event.description}</p>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="bi bi-calendar-event text-olive-400"></i>
                    <span className="text-white font-inter">
                      {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <i className="bi bi-people-fill text-olive-400"></i>
                    <span className="text-white font-inter">
                      {event.participants}/{event.maxParticipants} participantes
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-military-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-olive-500 to-olive-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Rewards */}
                <div className="mb-6">
                  <h4 className="text-olive-300 font-inter font-semibold mb-3">Recompensas:</h4>
                  <div className="space-y-2">
                    {event.rewards.map((reward, rewardIndex) => (
                      <div key={rewardIndex} className="flex items-center space-x-2">
                        <i className="bi bi-gift-fill text-gold-400 text-sm"></i>
                        <span className="text-olive-200 font-inter text-sm">{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-olive-600 to-olive-700 hover:from-olive-500 hover:to-olive-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300"
                >
                  <i className="bi bi-plus-circle-fill mr-2"></i>
                  Participar do Evento
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-military-800 rounded-xl border border-olive-600 p-6"
        >
          <h3 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">
            Calendário de Eventos
          </h3>
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Calendar Header */}
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
              <div key={day} className="p-2 font-inter font-semibold text-olive-300">
                {day}
              </div>
            ))}
            
            {/* Calendar Days */}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 5; // Adjust for month start
              const hasEvent = [15, 17, 20, 22, 25].includes(day);
              
              return (
                <motion.div
                  key={i}
                  whileHover={hasEvent ? { scale: 1.1 } : {}}
                  className={`p-2 rounded-lg font-inter ${
                    day > 0 && day <= 31
                      ? hasEvent
                        ? 'bg-olive-600 text-white cursor-pointer hover:bg-olive-500'
                        : 'text-olive-200 hover:bg-military-700'
                      : 'text-military-600'
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                  {hasEvent && (
                    <div className="w-2 h-2 bg-gold-400 rounded-full mx-auto mt-1"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;
