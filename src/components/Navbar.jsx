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
          {/* Clean Premium Laurel Wreath Emblem */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-logo-img"
            style={{ flexShrink: 0 }}
          >
            {/* Outer Laurel Wreath Circles & Leaves */}
            <path
              d="M 50 90 C 26 90 12 70 12 48 C 12 30 22 16 36 10"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 50 90 C 74 90 88 70 88 48 C 88 30 78 16 64 10"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Left Leaf Clusters */}
            <path d="M 22 75 C 16 70 15 62 20 58 C 22 64 28 68 22 75 Z" fill="#FFFFFF" />
            <path d="M 14 56 C 10 49 11 41 17 38 C 18 44 23 50 14 56 Z" fill="#FFFFFF" />
            <path d="M 18 36 C 16 28 20 21 27 20 C 26 26 29 32 18 36 Z" fill="#FFFFFF" />
            <path d="M 30 20 C 30 12 36 7 43 9 C 40 15 41 22 30 20 Z" fill="#FFFFFF" />
            {/* Right Leaf Clusters */}
            <path d="M 78 75 C 84 70 85 62 80 58 C 78 64 72 68 78 75 Z" fill="#FFFFFF" />
            <path d="M 86 56 C 90 49 89 41 83 38 C 82 44 77 50 86 56 Z" fill="#FFFFFF" />
            <path d="M 82 36 C 84 28 80 21 73 20 C 74 26 71 32 82 36 Z" fill="#FFFFFF" />
            <path d="M 70 20 C 70 12 64 7 57 9 C 60 15 59 22 70 20 Z" fill="#FFFFFF" />
            {/* Bottom Tie */}
            <path d="M 44 88 L 50 93 L 56 88" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Elegant Serif Letter C */}
            <text
              x="50"
              y="53"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FFFFFF"
              fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
              fontSize="40"
              fontWeight="600"
            >
              C
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

