import React from 'react';
import { Award, Shield, MapPin, Scale } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer
      style={{
        background: '#05070A',
        borderTop: '1px solid rgba(255, 255, 255, 0.14)',
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
              <img
                src="/assets/nicologo.webp"
                alt="Coronel & Asociados Logo"
                loading="lazy"
                decoding="async"
                style={{ height: '44px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />

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
              <li>Derecho Laboral</li>
              <li>Derecho de Familia</li>
              <li>Derecho Sucesorio</li>
              <li>Derecho Comercial</li>
              <li>Derecho Previsional</li>
              <li>Derecho de la Salud</li>
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
            gap: '16px',
            fontSize: '0.82rem',
          }}
        >
          <span>© {new Date().getFullYear()} Estudio Jurídico Coronel & Asociados. Todos los derechos reservados.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>Desarrollado por</span>
            <a
              href="https://waveframe.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              WaveFrame Studio
            </a>
            <model-viewer
              src="/3D/waveframelogo3dmodel.glb"
              alt="WaveFrame Studio Logo 3D"
              auto-rotate
              rotation-per-second="50deg"
              camera-controls
              disable-zoom
              interaction-prompt="none"
              style={{
                width: '38px',
                height: '38px',
                minWidth: '38px',
                minHeight: '38px',
                flexShrink: 0,
                background: 'transparent',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            ></model-viewer>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
