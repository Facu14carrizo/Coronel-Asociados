import React from 'react';
import { Award, ShieldCheck, TrendingUp, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroBanner = ({ setActiveTab }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(180deg, rgba(2,10,20,0.4) 0%, rgba(2,10,20,0.95) 100%), url('/assets/hero_banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Decorative Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 30%, rgba(197, 160, 89, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

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
        <div style={{ maxWidth: '850px' }}>
          {/* UBA Badge */}
          <div className="uba-badge" style={{ marginBottom: '24px' }}>
            <Award size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <span className="uba-badge-text-desktop">Excelencia Académica • Egresados Facultad de Derecho UBA</span>
            <span className="uba-badge-text-mobile" style={{ display: 'none' }}>Egresados Facultad de Derecho UBA</span>
          </div>

          {/* Main Title Banner */}
          <h1
            style={{
              fontFamily: 'var(--font-serif-luxury)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            ESTUDIO JURÍDICO <br />
            <span className="gold-gradient-text">CORONEL & ASOCIADOS</span>
          </h1>

          {/* Subtitle Strategy Fusion */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#CBD5E1',
              lineHeight: 1.6,
              marginBottom: '36px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              maxWidth: '740px',
            }}
          >
            Fusionamos el rigor técnico y el prestigio de la <strong style={{ color: '#FFF' }}>escuela UBA</strong> con la agilidad estratégica moderna y el análisis cuantitativo corporativo. Resguardamos su patrimonio, empresas e intereses de alta complejidad.
          </p>

          {/* CTAs */}
          <div
            className="cta-buttons-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '60px',
            }}
          >
            <button
              onClick={() => {
                setActiveTab('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '16px 32px' }}
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
              style={{ fontSize: '1rem', padding: '16px 28px' }}
            >
              <span>Explorar Áreas de Práctica</span>
            </button>
          </div>

          {/* Value Highlights Cards (Merging Classical, Modern & Corporate) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <Scale style={{ color: 'var(--color-gold)' }} size={24} />
                <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFF' }}>
                  Autoridad UBA
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                Formación en la principal casa de estudios jurídicos de la Argentina. Solvencia técnica intachable.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <ShieldCheck style={{ color: 'var(--color-teal-accent)' }} size={24} />
                <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFF' }}>
                  Transparencia Absoluta
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                Informes en tiempo real y honorarios pactados con máxima previsibilidad y ética profesional.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <TrendingUp style={{ color: '#E3C17B' }} size={24} />
                <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif-luxury)', color: '#FFF' }}>
                  Éxito Cuantitativo
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
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
