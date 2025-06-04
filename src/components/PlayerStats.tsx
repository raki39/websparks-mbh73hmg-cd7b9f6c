import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Player {
  id: number;
  name: string;
  kills: number;
  deaths: number;
  score: number;
  rank: string;
  isVip: boolean;
}

const PlayerStats: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'SAS_Commander', kills: 1247, deaths: 234, score: 15680, rank: 'Colonel', isVip: true },
    { id: 2, name: 'Alpha_Wolf', kills: 1156, deaths: 298, score: 14230, rank: 'Major', isVip: true },
    { id: 3, name: 'BravoSix', kills: 1089, deaths: 312, score: 13450, rank: 'Captain', isVip: false },
    { id: 4, name: 'Delta_Force', kills: 987, deaths: 267, score: 12890, rank: 'Lieutenant', isVip: true },
    { id: 5, name: 'Ghost_Recon', kills: 923, deaths: 289, score: 11670, rank: 'Sergeant', isVip: false },
  ]);

  const [activeTab, setActiveTab] = useState<'leaderboard' | 'recent'>('leaderboard');

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlayers(prev => prev.map(player => ({
        ...player,
        kills: player.kills + Math.floor(Math.random() * 3),
        score: player.score + Math.floor(Math.random() * 50)
      })));
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  const getRankIcon = (rank: string) => {
    const rankIcons: { [key: string]: string } = {
      'Colonel': 'bi-star-fill',
      'Major': 'bi-shield-fill',
      'Captain': 'bi-award-fill',
      'Lieutenant': 'bi-patch-check-fill',
      'Sergeant': 'bi-chevron-up'
    };
    return rankIcons[rank] || 'bi-person-fill';
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="stats"
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
            Estatísticas dos <span className="text-olive-400">Jogadores</span>
          </h2>
          <p className="text-olive-300 text-lg font-inter max-w-2xl mx-auto">
            Acompanhe o desempenho dos melhores soldados do SAS America
          </p>
        </motion.div>

        <div className="bg-military-800 rounded-xl border border-olive-600 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-olive-600">
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 px-6 py-4 font-inter font-semibold transition-colors ${
                activeTab === 'leaderboard'
                  ? 'bg-olive-600 text-white'
                  : 'text-olive-300 hover:text-white hover:bg-military-700'
              }`}
            >
              <i className="bi bi-trophy-fill mr-2"></i>
              Ranking
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex-1 px-6 py-4 font-inter font-semibold transition-colors ${
                activeTab === 'recent'
                  ? 'bg-olive-600 text-white'
                  : 'text-olive-300 hover:text-white hover:bg-military-700'
              }`}
            >
              <i className="bi bi-clock-fill mr-2"></i>
              Atividade Recente
            </button>
          </div>

          {/* Leaderboard */}
          {activeTab === 'leaderboard' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-olive-600">
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">#</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">Jogador</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">Rank</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">Kills</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">Deaths</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">K/D</th>
                      <th className="text-left py-3 px-4 font-orbitron font-bold text-olive-300">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, index) => (
                      <motion.tr
                        key={player.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b border-military-700 hover:bg-military-700 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className={`font-orbitron font-bold text-lg ${
                            index === 0 ? 'text-gold-400' : 
                            index === 1 ? 'text-gray-400' : 
                            index === 2 ? 'text-amber-600' : 'text-white'
                          }`}>
                            {index + 1}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-olive-500 to-olive-700 rounded-lg flex items-center justify-center">
                              <i className="bi bi-person-fill text-white"></i>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-inter font-semibold text-white">{player.name}</span>
                                {player.isVip && (
                                  <i className="bi bi-star-fill text-gold-400 text-sm"></i>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <i className={`${getRankIcon(player.rank)} text-olive-400`}></i>
                            <span className="font-inter text-olive-200">{player.rank}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-orbitron font-bold text-green-400">{player.kills}</td>
                        <td className="py-4 px-4 font-orbitron font-bold text-red-400">{player.deaths}</td>
                        <td className="py-4 px-4 font-orbitron font-bold text-white">
                          {(player.kills / player.deaths).toFixed(2)}
                        </td>
                        <td className="py-4 px-4 font-orbitron font-bold text-gold-400">
                          {player.score.toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Recent Activity */}
          {activeTab === 'recent' && (
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { player: 'SAS_Commander', action: 'eliminou', target: 'Alpha_Wolf', time: '2 min atrás' },
                  { player: 'BravoSix', action: 'capturou', target: 'Ponto Alpha', time: '5 min atrás' },
                  { player: 'Delta_Force', action: 'reviveu', target: 'Ghost_Recon', time: '8 min atrás' },
                  { player: 'Alpha_Wolf', action: 'destruiu', target: 'Veículo Inimigo', time: '12 min atrás' },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-military-700 rounded-lg border border-olive-700"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-olive-500 to-olive-700 rounded-lg flex items-center justify-center">
                        <i className="bi bi-person-fill text-white"></i>
                      </div>
                      <div>
                        <p className="font-inter text-white">
                          <span className="font-semibold text-olive-400">{activity.player}</span>
                          {' '}{activity.action}{' '}
                          <span className="font-semibold text-gold-400">{activity.target}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-olive-300 text-sm font-inter">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PlayerStats;
