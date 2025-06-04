import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServerStatus from './components/ServerStatus';
import VIPSection from './components/VIPSection';
import PlayerStats from './components/PlayerStats';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-military-900">
      <Header />
      <main>
        <Hero />
        <section id="server" className="py-16 bg-military-900">
          <div className="container mx-auto px-4">
            <ServerStatus />
          </div>
        </section>
        <VIPSection />
        <PlayerStats />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
