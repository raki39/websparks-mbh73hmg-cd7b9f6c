import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ServerData {
  status: 'online' | 'offline';
  players: number;
  maxPlayers: number;
  map: string;
  ping: number;
  uptime: string;
}

const ServerStatus: React.FC = () => {
  const [serverData, setServerData] = useState<ServerData>({
    status: 'online',
    players: 47,
    maxPlayers: 64,
    map: 'Everon',
    ping: 23,
    uptime: '7d 14h 32m'
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setServerData(prev => ({
        ...prev,
        players: Math.floor(Math.random() * 10) + 40,
        ping: Math.floor(Math.random() * 20) + 15
      }));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-military-800 rounded-xl p-6 border border-olive-600"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-orbitron font-bold text-white">Status do Servidor</h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${serverData.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className={`font-inter font-medium ${serverData.status === 'online' ? 'text-green-400' : 'text-red-400'}`}>
            {serverData.status === 'online' ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-military-700 rounded-lg p-4 border border-olive-700"
        >
          <div className="flex items-center space-x-3">
            <i className="bi bi-people-fill text-2xl text-olive-400"></i>
            <div>
              <p className="text-olive-300 text-sm font-inter">Jogadores</p>
              <p className="text-white text-xl font-orbitron font-bold">
                {serverData.players}/{serverData.maxPlayers}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-military-700 rounded-lg p-4 border border-olive-700"
        >
          <div className="flex items-center space-x-3">
            <i className="bi bi-geo-alt-fill text-2xl text-olive-400"></i>
            <div>
              <p className="text-olive-300 text-sm font-inter">Mapa</p>
              <p className="text-white text-xl font-orbitron font-bold">{serverData.map}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-military-700 rounded-lg p-4 border border-olive-700"
        >
          <div className="flex items-center space-x-3">
            <i className="bi bi-speedometer2 text-2xl text-olive-400"></i>
            <div>
              <p className="text-olive-300 text-sm font-inter">Ping</p>
              <p className="text-white text-xl font-orbitron font-bold">{serverData.ping}ms</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-military-700 rounded-lg p-4 border border-olive-700"
        >
          <div className="flex items-center space-x-3">
            <i className="bi bi-clock-fill text-2xl text-olive-400"></i>
            <div>
              <p className="text-olive-300 text-sm font-inter">Uptime</p>
              <p className="text-white text-xl font-orbitron font-bold">{serverData.uptime}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-olive-600 hover:bg-olive-500 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors"
        >
          <i className="bi bi-play-fill mr-2"></i>
          Conectar ao Servidor
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-military-700 hover:bg-military-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors border border-olive-600"
        >
          <i className="bi bi-clipboard-fill mr-2"></i>
          Copiar IP
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ServerStatus;
