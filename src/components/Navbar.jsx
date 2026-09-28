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
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? 'rgba(6, 9, 14, 0.94)'
          : 'linear-gradient(to bottom, rgba(6, 9, 14, 0.9) 0%, rgba(6, 9, 14, 0.5) 60%, transparent 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.14)' : '1px solid rgba(255, 255, 255, 0.04)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
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
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)'
                    : 'transparent',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent',
                  boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)' : 'none',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
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
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.38)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
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

