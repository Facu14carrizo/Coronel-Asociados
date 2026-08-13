import React from 'react';
import { Award, ShieldCheck, TrendingUp, Scale, ArrowRight } from 'lucide-react';

const HeroBanner = ({ setActiveTab }) => {
  return (
    <section className="hero-section">
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* UBA Badge */}
          <div
            className="uba-badge"
            style={{
              marginBottom: '26px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              borderRadius: '9999px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Award size={16} strokeWidth={1.75} style={{ color: '#FFFFFF', flexShrink: 0 }} />
            <span className="uba-badge-text-desktop" style={{ color: '#E2E8F0', fontSize: '0.8rem', letterSpacing: '0.06em', fontWeight: 600 }}>
              EXCELENCIA ACADÉMICA • EGRESADOS FACULTAD DE DERECHO UBA
            </span>
            <span className="uba-badge-text-mobile" style={{ display: 'none', color: '#E2E8F0', fontSize: '0.75rem', fontWeight: 600 }}>
              EGRESADOS FACULTAD DE DERECHO UBA
            </span>
          </div>

          {/* Main Title Banner */}
          <h1
            style={{
              fontFamily: 'var(--font-serif-editorial), var(--font-serif-luxury), serif',
              fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '24px',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            ESTUDIO JURÍDICO <br />
            CORONEL & <br />
            ASOCIADOS
          </h1>

          {/* Subtitle Strategy Fusion */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: '#CBD5E1',
              lineHeight: 1.65,
              marginBottom: '38px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              maxWidth: '680px',
            }}
          >
            Fusionamos el rigor técnico y el prestigio de la <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>escuela UBA</strong> con la agilidad estratégica moderna y el análisis cuantitativo corporativo. Resguardamos su patrimonio, empresas e intereses de alta complejidad.
          </p>

          {/* CTAs */}
          <div
            className="cta-buttons-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '54px',
            }}
          >
            <button
              onClick={() => {
                setActiveTab('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                background: '#FFFFFF',
                color: '#060A10',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Solicitar Evaluación de Caso</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => {
                setActiveTab('areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 500,
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Explorar Áreas de Práctica</span>
            </button>
          </div>

          {/* Value Highlights Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
              maxWidth: '920px',
            }}
          >
            <div
              className="hero-glass-card"
              style={{
                background: 'rgba(8, 14, 24, 0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '24px 22px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <Scale style={{ color: '#FFFFFF', flexShrink: 0 }} size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Autoridad UBA
                </h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.55' }}>
                Formación en la principal casa de estudios jurídicos de la Argentina. Solvencia técnica intachable.
              </p>
            </div>

            <div
              className="hero-glass-card"
              style={{
                background: 'rgba(8, 14, 24, 0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '24px 22px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <ShieldCheck style={{ color: '#FFFFFF', flexShrink: 0 }} size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Transparencia Absoluta
                </h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.55' }}>
                Informes en tiempo real y honorarios pactados con máxima previsibilidad y ética profesional.
              </p>
            </div>

            <div
              className="hero-glass-card"
              style={{
                background: 'rgba(8, 14, 24, 0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '24px 22px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <TrendingUp style={{ color: '#FFFFFF', flexShrink: 0 }} size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Éxito Cuantitativo
                </h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: '1.55' }}>
                +94% de efectividad litigiosa y resolución corporativa eficiente respaldada por datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

