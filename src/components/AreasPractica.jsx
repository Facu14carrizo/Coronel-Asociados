import React, { useState } from 'react';
import { Scale, Users, ScrollText, Briefcase, Landmark, PlusCircle, Check, ChevronDown } from 'lucide-react';

const practiceAreasData = [
  {
    id: 'laboral',
    title: 'DERECHO LABORAL',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: Scale,
    tabIcon: Scale,
    description: 'Asesoramiento integral para PYMEs, empresas y trabajadores en materia laboral.',
    servicesTitle: 'SERVICIOS CLAVE EN ESTA ESPECIALIDAD:',
    columns: [
      [
        'Contratos laborales',
        'Despidos',
        'Accidentes laborales',
        'Diferencias salariales',
      ]
    ]
  },
  {
    id: 'familia',
    title: 'DERECHO DE FAMILIA',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: Users,
    tabIcon: Users,
    description: 'Asesoramiento integral para personas y familias en todas las cuestiones vinculadas al derecho de familia.',
    servicesTitle: 'SERVICIOS CLAVE EN ESTA ESPECIALIDAD:',
    columns: [
      [
        'Divorcios',
        'Alimentos',
        'Compensación económica',
        'Responsabilidad parental',
        'Liquidación de los bienes de la comunidad',
      ],
      [
        'Atribución de la vivienda y canon locativo',
        'Uniones convivenciales y pactos de convivencia',
        'Regímenes patrimoniales y convenciones matrimoniales',
        'Vínculos filiatorios',
        'Determinación de la capacidad',
      ]
    ]
  },
  {
    id: 'sucesorio',
    title: 'DERECHO SUCESORIO',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: ScrollText,
    tabIcon: ScrollText,
    description: 'Asesoramiento integral en procesos sucesorios para garantizar una transición patrimonial ordenada y segura.',
    servicesTitle: 'SERVICIOS CLAVE EN ESTA ESPECIALIDAD:',
    columns: [
      [
        'Sucesiones',
        'Partición de herencia',
        'Planificación hereditaria',
        'Acciones de colación y de reducción',
        'Testamentos',
        'Contratos sobre herencia futura',
      ]
    ]
  },
  {
    id: 'comercial',
    title: 'DERECHO COMERCIAL',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: Briefcase,
    tabIcon: Briefcase,
    description: 'Asesoramiento integral para empresas, emprendedores y comerciantes en todas las cuestiones vinculadas al derecho comercial.',
    twoSections: true,
    section1Title: 'ASESORAMIENTO:',
    section1Items: ['Contratos', 'Societario', 'Tributario'],
    section2Title: 'LITIGIOS:',
    section2Items: [
      'acciones relacionadas con contratos comerciales',
      'incumplimientos contractuales',
      'juicios ejecutivos',
      'daños y perjuicios',
    ]
  },
  {
    id: 'previsional',
    title: 'DERECHO PREVISIONAL',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: Landmark,
    tabIcon: Landmark,
    description: 'Asesoramiento integral para proteger tus derechos previsionales y obtener el mejor beneficio posible.',
    servicesTitle: 'SERVICIOS CLAVE EN ESTA ESPECIALIDAD:',
    columns: [
      [
        'Reajuste',
        'Beneficios ley general',
        'Regímenes diferenciales',
        'Pensiones',
        'PUAM',
      ]
    ]
  },
  {
    id: 'salud',
    title: 'DERECHO DE LA SALUD',
    badge: 'ENFOQUE PRÁCTICO Y EFICAZ',
    badgeIcon: PlusCircle,
    tabIcon: PlusCircle,
    description: 'Asesoramiento integral para la protección de tus derechos en materia de salud, con un enfoque ágil, humano y eficiente.',
    servicesTitle: 'SERVICIOS CLAVE EN ESTA ESPECIALIDAD:',
    columns: [
      [
        'Amparos de salud.',
        'Cobertura de medicamentos.',
        'Reclamos contra obras sociales y prepagas.',
      ]
    ]
  }
];

const AreasPractica = ({ setActiveTab }) => {
  const [openAreaId, setOpenAreaId] = useState('laboral');

  const toggleAccordion = (id) => {
    setOpenAreaId((prev) => {
      const nextId = prev === id ? null : id;
      if (nextId) {
        setTimeout(() => {
          const el = document.getElementById(`accordion-item-${nextId}`);
          if (el) {
            const yOffset = -90; // Navbar offset
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 80);
      }
      return nextId;
    });
  };

  return (
    <section
      id="areas"
      style={{
        padding: '100px 0 120px',
        background: '#090C10',
        color: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
          <span
            style={{
              color: '#8A99AD',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            ESPECIALIZACIÓN Y SOLVENCIA TÉCNICA
          </span>
          <h2
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: '1.15',
              letterSpacing: '0.04em',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            ÁREAS DE PRÁCTICA JURÍDICA
          </h2>
          <p
            style={{
              color: '#A0AEC0',
              fontSize: '1.08rem',
              lineHeight: '1.6',
              maxWidth: '720px',
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            Nuestra formación académica en la <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>UBA</strong> nos permite abordar
            <br />
            problemáticas legales complejas con absoluta precisión.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {practiceAreasData.map((area) => {
            const TabIcon = area.tabIcon;
            const isOpen = openAreaId === area.id;

            return (
              <div
                key={area.id}
                id={`accordion-item-${area.id}`}
                style={{
                  background: 'linear-gradient(180deg, #0D1117 0%, #080C11 100%)',
                  border: isOpen
                    ? '1px solid rgba(255, 255, 255, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isOpen
                    ? '0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                    : '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Accordion Header / Button */}
                <div
                  onClick={() => toggleAccordion(area.id)}
                  style={{
                    padding: '24px 28px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    background: isOpen ? '#141A23' : 'transparent',
                    transition: 'background 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        border: isOpen ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.15)',
                        background: isOpen ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <TabIcon size={22} strokeWidth={1.5} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      {area.title}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div
                    style={{
                      padding: '32px 36px 40px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      animation: 'fadeIn 0.3s ease forwards',
                    }}
                  >
                    {/* Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        color: '#D0D7DE',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                      }}
                    >
                      {React.createElement(area.badgeIcon, { size: 14, strokeWidth: 1.5 })}
                      <span>{area.badge}</span>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        color: '#A0AEC0',
                        fontSize: '1.02rem',
                        lineHeight: '1.65',
                        marginBottom: '32px',
                        fontWeight: 400,
                      }}
                    >
                      {area.description}
                    </p>

                    {/* Services Items Layout */}
                    {area.twoSections ? (
                      <div
                        className="area-services-two-cols"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '36px',
                          marginBottom: '36px',
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: '0.78rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: '#6E7C91',
                              fontWeight: 600,
                              marginBottom: '18px',
                            }}
                          >
                            {area.section1Title}
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {area.section1Items.map((item, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    flexShrink: 0,
                                  }}
                                >
                                  <Check size={12} strokeWidth={2} />
                                </div>
                                <span style={{ color: '#E6EDF3', fontSize: '0.95rem' }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontSize: '0.78rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: '#6E7C91',
                              fontWeight: 600,
                              marginBottom: '18px',
                            }}
                          >
                            {area.section2Title}
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {area.section2Items.map((item, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    flexShrink: 0,
                                  }}
                                >
                                  <Check size={12} strokeWidth={2} />
                                </div>
                                <span style={{ color: '#E6EDF3', fontSize: '0.95rem' }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h4
                          style={{
                            fontSize: '0.78rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#6E7C91',
                            fontWeight: 600,
                            marginBottom: '20px',
                          }}
                        >
                          {area.servicesTitle}
                        </h4>

                        <div
                          className="area-services-two-cols"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: area.columns.length > 1 ? '1fr 1fr' : '1fr',
                            gap: area.columns.length > 1 ? '30px' : '14px',
                            marginBottom: '36px',
                          }}
                        >
                          {area.columns.map((col, colIdx) => (
                            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                              {col.map((service, sIdx) => (
                                <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <div
                                    style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      border: '1.5px solid rgba(255, 255, 255, 0.4)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#FFFFFF',
                                      flexShrink: 0,
                                    }}
                                  >
                                    <Check size={12} strokeWidth={2} />
                                  </div>
                                  <span style={{ color: '#E6EDF3', fontSize: '0.95rem' }}>{service}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bottom Footer Branding Line inside Accordion Item */}
                    <div
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        paddingTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                        }}
                      >
                        <Landmark size={16} strokeWidth={1.5} />
                      </div>
                      <span style={{ fontSize: '0.85rem', color: '#8A99AD', fontWeight: 500 }}>
                        Estudio Coronel & Asociados
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasPractica;

