import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AreasPractica from './components/AreasPractica';
import EquipoInfraestructura from './components/EquipoInfraestructura';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-dark)', color: 'var(--color-text-main)' }}>
      {/* Dynamic Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area switching by tab or scrolling full presentation */}
      <main>
        {activeTab === 'inicio' && (
          <>
            <HeroBanner setActiveTab={setActiveTab} />
            <AreasPractica setActiveTab={setActiveTab} />
            <EquipoInfraestructura />
            <Contacto />
          </>
        )}

        {activeTab === 'areas' && (
          <div style={{ paddingTop: '80px' }}>
            <AreasPractica setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'equipo' && (
          <div style={{ paddingTop: '80px' }}>
            <EquipoInfraestructura />
          </div>
        )}

        {activeTab === 'contacto' && (
          <div style={{ paddingTop: '80px' }}>
            <Contacto />
          </div>
        )}
      </main>

      {/* Shared Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
