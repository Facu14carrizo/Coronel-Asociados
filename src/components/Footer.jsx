import React from 'react';
import { Award, Shield, MapPin, Scale } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer
      style={{
        background: '#06080B',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 0 30px',
        color: 'var(--color-text-muted)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              {/* Clean Premium Laurel Wreath Emblem matching Navbar */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
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
                <path d="M 22 75 C 16 70 15 62 20 58 C 22 64 28 68 22 75 Z" fill="#FFFFFF" />
                <path d="M 14 56 C 10 49 11 41 17 38 C 18 44 23 50 14 56 Z" fill="#FFFFFF" />
                <path d="M 18 36 C 16 28 20 21 27 20 C 26 26 29 32 18 36 Z" fill="#FFFFFF" />
                <path d="M 30 20 C 30 12 36 7 43 9 C 40 15 41 22 30 20 Z" fill="#FFFFFF" />
                <path d="M 78 75 C 84 70 85 62 80 58 C 78 64 72 68 78 75 Z" fill="#FFFFFF" />
                <path d="M 86 56 C 90 49 89 41 83 38 C 82 44 77 50 86 56 Z" fill="#FFFFFF" />
                <path d="M 82 36 C 84 28 80 21 73 20 C 74 26 71 32 82 36 Z" fill="#FFFFFF" />
                <path d="M 70 20 C 70 12 64 7 57 9 C 60 15 59 22 70 20 Z" fill="#FFFFFF" />
                <path d="M 44 88 L 50 93 L 56 88" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                <span
                  style={{
                    fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#FFF',
                    display: 'block',
                    lineHeight: '1.1',
                  }}
                >
                  CORONEL & ASOCIADOS
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    color: '#8A99AD',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    marginTop: '3px',
                    display: 'block',
                  }}
                >
                  ESTUDIO JURÍDICO • ABOGADOS UBA
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Estudio jurídico especializado en asesoramiento corporativo, litigios complejos y resguardo patrimonial.
            </p>
            <div className="uba-badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
              <Award size={14} style={{ color: 'var(--color-gold)' }} />
              <span>Egresados Universidad de Buenos Aires (UBA)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: '#FFF', fontFamily: 'var(--font-serif-luxury)', marginBottom: '16px', fontSize: '1rem' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li>
                <button
                  onClick={() => { setActiveTab('inicio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('areas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  Áreas de Práctica
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('equipo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  Equipo e Infraestructura
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  Contacto & Evaluación
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div>
            <h4 style={{ color: '#FFF', fontFamily: 'var(--font-serif-luxury)', marginBottom: '16px', fontSize: '1rem' }}>
              Especializaciones
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>Derecho Corporativo & Empresa</li>
              <li>Litigios Complejos & Arbitraje</li>
              <li>Derecho Civil & Patrimonial</li>
              <li>Derecho Laboral Empresario</li>
              <li>Derecho Administrativo & Regulatorio</li>
            </ul>
          </div>

          {/* Col 4: Location & CPACF */}
          <div>
            <h4 style={{ color: '#FFF', fontFamily: 'var(--font-serif-luxury)', marginBottom: '16px', fontSize: '1rem' }}>
              Sede Central
            </h4>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '10px' }}>
              Int. Tomkinson 2910, San Isidro<br />
              Provincia de Buenos Aires
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)' }}>
              Matrículas CPACF / San Isidro / Fuero Federal
            </p>
          </div>
        </div>

        <div
          className="footer-bottom-responsive"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
          }}
        >
          <span>© {new Date().getFullYear()} Estudio Jurídico Coronel & Asociados. Todos los derechos reservados.</span>
          <span>Desarrollado con Excelencia Jurídica & Diseño Vanguardista</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
