import React from 'react';
import { GraduationCap, Award, Shield, Cpu, MapPin, Building, Users, CheckCircle } from 'lucide-react';

const EquipoInfraestructura = () => {
  return (
    <section
      style={{
        padding: '100px 0',
        background: 'var(--color-bg-dark)',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="uba-badge" style={{ marginBottom: '14px' }}>
            <GraduationCap size={16} style={{ color: 'var(--color-gold)' }} />
            <span>Formación de Grado y Posgrado UBA</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-luxury)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#FFF',
              marginBottom: '18px',
            }}
          >
            Equipo Jurídico e Infraestructura Boutique
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Combina el respaldo institucional de la <strong style={{ color: '#FFF' }}>Facultad de Derecho UBA</strong> con salas de conferencia ejecutivas y tecnología de análisis legal de última generación.
          </p>
        </div>

        {/* Founder Feature Highlight Card */}
        <div
          style={{
            background: '#0D1117',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '70px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'stretch',
          }}
          className="responsive-grid-12"
        >
          {/* Photo */}
          <div
            style={{ gridColumn: 'span 5', height: '100%', minHeight: '400px' }}
            className="founder-photo-col col-span-5-resp"
          >
            <img
              src="/assets/founder.png"
              alt="Socio Fundador Dr. Nicolás Alberto Coronel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Bio Info */}
          <div
            style={{
              gridColumn: 'span 7',
              padding: '48px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="founder-bio-col col-span-7-resp padding-mobile-lg"
          >
            <div>
              <span
                style={{
                  color: '#8A99AD',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                SOCIO FUNDADOR
              </span>
              <h3
                style={{
                  fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                  fontSize: '2.4rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  lineHeight: '1.15',
                }}
              >
                NICOLÁS ALBERTO CORONEL
              </h3>

              <p style={{ color: '#E6EDF3', fontWeight: 400, fontSize: '1rem', marginBottom: '8px' }}>
                Abogado (Abogacía - Universidad de Buenos Aires)
              </p>
              <p style={{ color: '#E6EDF3', fontWeight: 400, fontSize: '1rem', marginBottom: '28px' }}>
                Matrícula CPACF • Matrícula CASI
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                <p style={{ color: '#A0AEC0', lineHeight: '1.65', fontSize: '0.98rem' }}>
                  Graduado en la Facultad de Derecho de la Universidad de Buenos Aires.
                </p>
                <p style={{ color: '#A0AEC0', lineHeight: '1.65', fontSize: '0.98rem' }}>
                  Especializado en derecho laboral para asesoramiento a empresas, PYMEs y trabajadores.
                </p>
              </div>
            </div>

            {/* Bottom Badges Divider & Icons */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '24px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
              }}
              className="inputs-grid-responsive"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} strokeWidth={1.5} />
                </div>
                <span style={{ fontSize: '0.92rem', color: '#E6EDF3', lineHeight: '1.3' }}>
                  Egresado Facultad de Derecho UBA
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <Shield size={22} strokeWidth={1.5} />
                </div>
                <span style={{ fontSize: '0.92rem', color: '#E6EDF3', lineHeight: '1.3' }}>
                  Miembro CPACF, CASI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Heritage & Office Infrastructure Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {/* Card 1: Sello UBA */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '14px' }}>
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              <img
                src="/assets/uba_faculty.png"
                alt="Facultad de Derecho UBA"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif-luxury)', fontSize: '1.4rem', color: '#FFF', marginBottom: '12px' }}>
              Herencia Académica UBA
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.6' }}>
              Nuestros profesionales se forman en las aulas más rigurosas del país. La Facultad de Derecho de la UBA aporta el respaldo dogmático y el pensamiento crítico esencial para liderar casos sin margen de error.
            </p>
          </div>

          {/* Card 2: Modern Office */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '14px' }}>
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              <img
                src="/assets/office.png"
                alt="Oficinas Ejecutivas Coronel & Asociados"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif-luxury)', fontSize: '1.4rem', color: '#FFF', marginBottom: '12px' }}>
              Infraestructura & Salas Ejecutivas
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.6' }}>
              Ubicados en zona estratégica de Buenos Aires, contamos con salas privadas de negociación, alta confidencialidad y tecnología de videoconferencia cifrada para clientes corporativos e internacionales.
            </p>
          </div>

          {/* Card 3: LegalTech & Data */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '14px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'rgba(0, 180, 216, 0.15)',
                color: 'var(--color-teal-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <Cpu size={28} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif-luxury)', fontSize: '1.4rem', color: '#FFF', marginBottom: '12px' }}>
              Tecnología Legal & Datos
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Implementamos análisis predictivo de fallos judiciales, auditoría digital de expedientes y actualización de novedades procesales en tiempo real.
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-teal-accent)' }} />
                <span>Seguimiento en línea de causas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-teal-accent)' }} />
                <span>Cifrado de documentos confidenciales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoInfraestructura;
