import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AreasPractica from './components/AreasPractica';
import EquipoInfraestructura from './components/EquipoInfraestructura';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [loading, setLoading] = useState(true);

  const handleNavigate = (sectionId) => {
    setActiveTab(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-dark)', color: 'var(--color-text-main)' }}>
      {/* Intro Preloader animation on load */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Dynamic Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} />

      {/* Main Single Page Content */}
      <main>
        <HeroBanner setActiveTab={handleNavigate} />
        <AreasPractica setActiveTab={handleNavigate} />
        <EquipoInfraestructura />
        <Contacto />
      </main>

      {/* Shared Footer */}
      <Footer setActiveTab={handleNavigate} />
    </div>
  );
}

export default App;
