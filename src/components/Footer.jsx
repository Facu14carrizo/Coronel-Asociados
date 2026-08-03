import React from 'react';
import { Award, Shield, MapPin, Scale } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer
      style={{
        background: '#01060D',
        borderTop: '1px solid var(--border-gold)',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/assets/logo.png"
                alt="Logo Coronel & Asociados"
                style={{ height: '40px', width: '40px', borderRadius: '4px' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif-luxury)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFF',
                }}
              >
                CORONEL & ASOCIADOS
              </span>
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
              Av. del Libertador 4980, Piso 10<br />
              CABA, Argentina
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
