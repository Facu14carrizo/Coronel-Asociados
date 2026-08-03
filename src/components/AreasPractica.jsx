import React, { useState } from 'react';
import { Briefcase, Building2, ShieldAlert, Gavel, FileCheck, ArrowRight, Sparkles, Check } from 'lucide-react';

const practiceAreasData = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo & Empresa',
    icon: Building2,
    badge: 'Enfoque Estratégico',
    description: 'Asesoramiento integral para empresas, startups y PYMEs en estructuración societaria, fusiones, adquisiciones y gobernanza.',
    details: [
      'Constitución y reorganización de sociedades comerciales',
      'Contratos mercantiles nacionales e internacionales',
      'Compliance regulatorio y prevención de riesgos legales',
      'Gobierno corporativo y pactos de socios'
    ],
    cases: 'Más de 140 empresas asesoradas de forma permanente.'
  },
  {
    id: 'litigios',
    title: 'Litigios Complejos & Arbitraje',
    icon: Gavel,
    badge: 'Defensa de Alto Impacto',
    description: 'Representación técnica rigurosa en juicios civiles, comerciales y procesos arbitrales de gran envergadura patrimonial.',
    details: [
      'Litigios societarios y conflictos entre accionistas',
      'Demandas por incumplimiento contractual y daños',
      'Arbitraje comercial institucional y ad-hoc',
      'Recursos extraordinarios y fuero federal'
    ],
    cases: '94% de tasa de resoluciones favorables e interdictos.'
  },
  {
    id: 'patrimonial',
    title: 'Derecho Civil & Patrimonial',
    icon: ScaleIconCustom,
    badge: 'Protección Familiar y de Bienes',
    description: 'Planificación sucesoria, estructuración de fideicomisos, patrimonios familiares y negocios inmobiliarios.',
    details: [
      'Sucesiones complejas con bienes en múltiples jurisdicciones',
      'Fideicomisos inmobiliarios y de administración',
      'Protección de activos familiares y blindaje patrimonial',
      'Contratación de emprendimientos reales'
    ],
    cases: 'Resguardo integral garantizado con máxima confidencialidad.'
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral Empresario',
    icon: Briefcase,
    badge: 'Gestión de Capital Humano',
    description: 'Asesoramiento preventivo y litigioso para la parte empleadora. Minimización de pasivos laborales y negociaciones colectivas.',
    details: [
      'Auditorías de pasivo laboral y prevención de reclamos',
      'Negociaciones con representaciones sindicales',
      'Estructuración de desvinculaciones ejecutivas',
      'Defensa judicial ante el Fuero del Trabajo'
    ],
    cases: 'Reducción comprobada del 40% en contingencias judiciales.'
  },
  {
    id: 'defensa',
    title: 'Derecho Administrativo & Regulatorio',
    icon: ShieldAlert,
    badge: 'Relación con el Estado',
    description: 'Defensa técnica ante organismos de contralor, licitaciones públicas, amparos y recursos administrativos.',
    details: [
      'Impugnación de actos administrativos y multas',
      'Representación en procesos de licitación pública',
      'Acciones de amparo y medidas cautelares contra el Estado',
      'Asesoramiento en marcos regulatorios de energía y servicios'
    ],
    cases: 'Amplia solvencia técnica en regulaciones locales y federales.'
  }
];

function ScaleIconCustom(props) {
  return <Briefcase {...props} />;
}

const AreasPractica = ({ setActiveTab }) => {
  const [selectedArea, setSelectedArea] = useState(practiceAreasData[0]);

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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <span
            style={{
              color: 'var(--color-gold)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Especialización y Solvencia Técnica
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif-luxury)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#FFF',
              marginTop: '10px',
              marginBottom: '18px',
            }}
          >
            Áreas de Práctica Jurídica
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Nuestra formación académica en la <strong style={{ color: '#FFF' }}>UBA</strong> nos otorga el fundamento dogmático para abordar problemáticas legales complejas con absoluta precisión.
          </p>
        </div>

        {/* Practice Areas Grid Layout */}
        <div
          className="responsive-grid-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Selector list */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            className="area-list-col col-span-5-resp"
          >
            {practiceAreasData.map((area) => {
              const IconComp = area.icon;
              const isSelected = selectedArea.id === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => {
                    setSelectedArea(area);
                    if (window.innerWidth < 992) {
                      const element = document.getElementById('area-details-container');
                      if (element) {
                        const offset = 80; // height of navbar
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                  style={{
                    padding: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(197, 160, 89, 0.2) 0%, rgba(10, 30, 54, 0.9) 100%)'
                      : 'rgba(8, 22, 40, 0.6)',
                    border: isSelected
                      ? '1px solid var(--color-gold)'
                      : '1px solid var(--border-glass)',
                    boxShadow: isSelected ? '0 10px 30px rgba(197, 160, 89, 0.15)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        background: isSelected ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.05)',
                        color: isSelected ? '#041424' : 'var(--color-gold)',
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontFamily: 'var(--font-serif-luxury)',
                          color: isSelected ? 'var(--color-gold-light)' : '#FFF',
                          fontWeight: 600,
                        }}
                      >
                        {area.title}
                      </h3>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
                        {area.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Selected Area */}
          <div
            id="area-details-container"
            style={{ gridColumn: 'span 7' }}
            className="area-detail-col col-span-7-resp"
          >
            <div
              className="glass-panel-gold padding-mobile-lg"
              style={{
                padding: '40px',
                borderRadius: '14px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--color-gold-light)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                <Sparkles size={14} />
                <span>{selectedArea.badge}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-luxury)',
                  fontSize: '2rem',
                  color: '#FFF',
                  marginBottom: '16px',
                }}
              >
                {selectedArea.title}
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '30px',
                }}
              >
                {selectedArea.description}
              </p>

              <h4
                style={{
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '16px',
                }}
              >
                Servicios Clave en esta Especialidad:
              </h4>

              <div style={{ display: 'grid', gap: '14px', marginBottom: '36px' }}>
                {selectedArea.details.map((detail, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        minWidth: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(197, 160, 89, 0.2)',
                        color: 'var(--color-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} />
                    </div>
                    <span style={{ color: '#E2E8F0', fontSize: '0.95rem' }}>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Success metric badge for corporate fusion */}
              <div
                style={{
                  padding: '16px 20px',
                  background: 'rgba(2, 10, 20, 0.6)',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '30px',
                }}
              >
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  {selectedArea.cases}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                  Estudio Coronel & Asociados
                </span>
              </div>

              <button
                onClick={() => {
                  setActiveTab('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <span>Consultar por {selectedArea.title}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasPractica;
