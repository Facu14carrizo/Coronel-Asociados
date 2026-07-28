import React, { useState, useEffect } from 'react';
import { Scale, Phone, Menu, X, ShieldCheck, Award } from 'lucide-react';

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
          ? 'rgba(2, 10, 20, 0.95)'
          : 'linear-gradient(to bottom, rgba(2,10,20,0.9), rgba(2,10,20,0))',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div
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
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Coronel & Asociados Logo"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.4))',
              transition: 'transform 0.3s ease',
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif-luxury)',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#FFF',
                lineHeight: '1.1',
              }}
            >
              CORONEL <span style={{ color: 'var(--color-gold)' }}>&</span> ASOCIADOS
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginTop: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>ESTUDIO JURÍDICO</span>
              <span style={{ color: 'var(--color-gold)' }}>•</span>
              <span style={{ color: 'var(--color-gold-light)' }}>ABOGADOS UBA</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(197, 160, 89, 0.15)' : 'transparent',
                  color: isActive ? 'var(--color-gold-light)' : 'var(--color-text-muted)',
                  border: isActive ? '1px solid var(--color-gold)' : '1px solid transparent',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => handleNavClick('contacto')}
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
            }}
          >
            <Phone size={16} />
            <span>Consulta Urgente</span>
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
            background: 'var(--color-navy-dark)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: activeTab === item.id ? 'rgba(197, 160, 89, 0.2)' : 'transparent',
                color: activeTab === item.id ? 'var(--color-gold-light)' : '#FFF',
                border: 'none',
                padding: '12px 16px',
                textAlign: 'left',
                borderRadius: '6px',
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
