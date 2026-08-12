import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
          {/* Custom Laurel Wreath Emblem matching mockup */}
          <svg
            width="46"
            height="46"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-logo-img"
            style={{ flexShrink: 0 }}
          >
            {/* Left Wreath */}
            <path d="M 46 86 C 24 78 12 56 16 34 C 18 24 24 16 32 10" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 32 10 C 30 18 36 22 36 22 C 30 24 25 20 22 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 24 28 C 19 34 25 40 25 40 C 19 40 15 34 16 29" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 17 46 C 11 52 17 60 17 60 C 12 58 9 52 10 47" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 18 64 C 15 72 23 79 23 79 C 17 76 14 69 15 64" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 27 79 C 29 86 39 89 39 89 C 33 86 29 81 27 77" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            {/* Right Wreath */}
            <path d="M 54 86 C 76 78 88 56 84 34 C 82 24 76 16 68 10" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 68 10 C 70 18 64 22 64 22 C 70 24 75 20 78 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 76 28 C 81 34 75 40 75 40 C 81 40 85 34 84 29" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 83 46 C 89 52 83 60 83 60 C 88 58 91 52 90 47" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 82 64 C 85 72 77 79 77 79 C 83 76 86 69 85 64" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 73 79 C 71 86 61 89 61 89 C 67 86 71 81 73 77" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            {/* Crossed ribbons */}
            <path d="M 38 86 L 62 94" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M 62 86 L 38 94" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            {/* C Emblem in Serif */}
            <text x="50" y="58" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontFamily="Playfair Display, Cinzel, Georgia, serif" fontSize="33" fontWeight="600">
              (C)
            </text>
          </svg>

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

        {/* Right CTA Button */}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFF',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(5, 8, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.6)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: activeTab === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: '#FFFFFF',
                border: activeTab === item.id ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                padding: '12px 16px',
                textAlign: 'left',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

