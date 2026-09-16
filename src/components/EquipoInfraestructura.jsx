import { GraduationCap, Award } from 'lucide-react';

const teamMembers = [
  {
    id: 'coronel',
    name: 'DR. NICOLÁS A. CORONEL',
    role: 'SOCIO FUNDADOR',
    subtitle: 'Abogado (Universidad de Buenos Aires)',
    matrícula: 'Matrícula CPACF • CASI',
    specialty: 'Derecho Laboral & Empresario',
    description: 'Graduado en la Facultad de Derecho UBA. Especializado en derecho laboral para asesoramiento a empresas, PYMEs y trabajadores.',
    image: '/assets/founder.png',
  },
  {
    id: 'zalazar',
    name: 'DRA. MICAELA ZALAZAR',
    role: 'SOCIA JURÍDICA',
    subtitle: 'Abogada (Universidad de Buenos Aires)',
    matrícula: 'Matrícula CPACF',
    specialty: 'Derecho Corporativo & Laboral',
    description: 'Abogada graduada de la UBA, especializada en el asesoramiento jurídico a empresas nacionales e internacionales en materia Corporativa y Laboral.',
    image: '/assets/asociados/a2/a2.png',
  },
  {
    id: 'massarutto',
    name: 'DRA. PATRICIA MASSARUTTO',
    role: 'ESPECIALISTA SENIOR',
    subtitle: 'Abogada (Facultad de Derecho UBA)',
    matrícula: 'Matrícula CPACF • CASI',
    specialty: 'Derecho de la Salud & Previsional',
    description: 'Especialista en Amparos de salud, continuidad de Obra Social, Prepagas, PAMI, geriatría y asuntos previsionales.',
    image: '/assets/asociados/a3/a33.png',
  },
  {
    id: 'cutello',
    name: 'DR. TOMÁS CUTELLO',
    role: 'ASOCIADO SENIOR',
    subtitle: 'Abogado (Universidad de Buenos Aires)',
    matrícula: 'Matrícula CPACF',
    specialty: 'Derecho Civil & Penal',
    description: 'Abogado graduado de la UBA con experiencia en derecho civil y derecho penal enfocado en asesoramiento a individuos, PYMEs y empresas.',
    image: '/assets/asociados/a4/a44.png',
  },
  {
    id: 'rossi',
    name: 'DR. MATÍAS E. ROSSI',
    role: 'SOCIO CORPORATIVO',
    subtitle: 'Abogado (Universidad de Buenos Aires)',
    matrícula: 'Matrícula CPACF • CASI',
    specialty: 'Derecho Comercial & Societario',
    description: 'Especializado en derecho comercial, contrataciones societarias y estructuración patrimonial corporativa de alta complejidad.',
    image: '/assets/team_3.png',
  },
];

const EquipoInfraestructura = () => {
  return (
    <section
      id="equipo"
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
            NUESTRO EQUIPO JURÍDICO
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Abogados egresados de la <strong style={{ color: '#FFF' }}>Universidad de Buenos Aires (UBA)</strong> con amplia trayectoria en asesoramiento corporativo, litigios complejos y resguardo patrimonial.
          </p>
        </div>

        {/* 5 Team Members Equal Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px',
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                background: '#0D1117',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              className="hero-glass-card"
            >
              {/* Image Header */}
              <div
                style={{
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(5, 8, 14, 0.88)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '0.68rem',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {member.role}
                </div>
              </div>

              {/* Body Info */}
              <div
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      lineHeight: '1.25',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ color: '#E6EDF3', fontSize: '0.84rem', marginBottom: '4px', fontWeight: 400 }}>
                    {member.subtitle}
                  </p>
                  <p style={{ color: '#8A99AD', fontSize: '0.78rem', marginBottom: '14px', fontWeight: 500 }}>
                    {member.matrícula}
                  </p>
                  <p style={{ color: '#A0AEC0', fontSize: '0.84rem', lineHeight: '1.55', marginBottom: '18px' }}>
                    {member.description}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Award size={16} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 500 }}>
                    {member.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipoInfraestructura;
