import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'areas', label: 'Áreas de Práctica' },
    { id: 'equipo', label: 'Equipo e Infraestructura' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(5, 8, 14, 0.95)'
          : 'linear-gradient(to bottom, rgba(5, 8, 14, 0.85) 0%, rgba(5, 8, 14, 0.4) 60%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        padding: scrolled ? '12px 0' : '18px 0',
      }}
    >
      <div
        className="nav-header-container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNavClick('inicio')}
          className="nav-logo-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
          }}
        >
          <img
            src="/assets/nicologo.webp"
            alt="Coronel & Asociados Logo"
            className="nav-logo-img"
            decoding="async"
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />

          <div>
            <div
              className="nav-logo-title"
              style={{
                fontFamily: 'var(--font-serif-luxury)',
                fontSize: '1.2rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                lineHeight: '1.1',
              }}
            >
              CORONEL & ASOCIADOS
            </div>
            <div
              className="nav-logo-subtitle"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                color: '#94A3B8',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginTop: '3px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>ESTUDIO JURÍDICO</span>
              <span>•</span>
              <span>ABOGADOS UBA</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-item-btn"
                style={{
                  background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.35)' : '1px solid transparent',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Phone button on desktop and mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-actions-container">
          <button
            onClick={() => handleNavClick('contacto')}
            className="nav-consulta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#FFFFFF',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <Phone size={15} strokeWidth={1.75} />
            <span className="nav-cta-text">Consulta Urgente</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

