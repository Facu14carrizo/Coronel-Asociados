import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const InstagramIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contacto = () => {
  return (
    <section
      id="contacto"
      style={{
        padding: '100px 0 120px',
        background: '#090C10',
        color: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header matching image */}
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
            ATENCIÓN PRIORITARIA & CONFIDENCIAL
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
            CONTACTO & EVALUACIÓN DE CASO
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
            Inicie su consulta directamente con nuestro equipo de abogados de la <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>UBA</strong>.
            <br />
            Garantizamos absoluta reserva y respuesta en menos de 24 horas hábiles.
          </p>
        </div>

        {/* 2-Column Main Container */}
        <div
          className="responsive-grid-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Canales de atención */}
          <div
            style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(180deg, #0D1117 0%, #080C11 100%)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '16px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            className="col-span-5-resp"
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '32px',
                }}
              >
                CANALES DE ATENCIÓN
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {/* Sede Principal */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#6E7C91',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      SEDE PRINCIPAL
                    </span>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '4px', lineHeight: '1.3' }}>
                      Int. Tomkinson 2910, San Isidro
                    </p>
                    <span style={{ fontSize: '0.85rem', color: '#8A99AD', display: 'block', marginTop: '2px' }}>
                      Provincia de Buenos Aires
                    </span>
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}></div>

                {/* Telefono Directo */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#6E7C91',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      TELÉFONO DIRECTO
                    </span>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem', marginTop: '4px' }}>
                      11 5369-8788
                    </p>
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}></div>

                {/* Correo Electrónico */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} strokeWidth={1.5} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#6E7C91',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      CORREO ELECTRÓNICO
                    </span>
                    <a
                      href="mailto:coronel.asociados.estudio@gmail.com"
                      className="contact-value-text"
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 500,
                        fontSize: 'clamp(0.78rem, 2.5vw, 0.92rem)',
                        marginTop: '4px',
                        display: 'block',
                        textDecoration: 'none',
                        wordBreak: 'break-word',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      coronel.asociados.estudio@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}></div>

                {/* Instagram */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <InstagramIcon size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#6E7C91',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'block',
                      }}
                    >
                      INSTAGRAM
                    </span>
                    <p style={{ marginTop: '4px' }}>
                      <a
                        href="https://instagram.com/coronel.asociados"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#FFFFFF',
                          fontWeight: 500,
                          fontSize: '0.98rem',
                          textDecoration: 'none',
                        }}
                      >
                        @coronel.asociados
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Dark Styled Container */}
          <div
            style={{
              gridColumn: 'span 8',
              background: 'linear-gradient(180deg, #0D1117 0%, #080C11 100%)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '16px',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '480px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            className="col-span-7-resp"
          >
            {/* Top Bar inside Map Frame */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                zIndex: 5,
                position: 'relative',
                pointerEvents: 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  margin: 0,
                  background: 'rgba(5, 8, 14, 0.2)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                UBICACIÓN DEL ESTUDIO
              </h3>
            </div>

            {/* Dark Styled Google Maps Background */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
              }}
            >
              <iframe
                title="Ubicación Estudio Coronel & Asociados"
                src="https://maps.google.com/maps?q=-34.4662497,-58.5393246&z=15&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(92%) hue-rotate(180deg) grayscale(85%) contrast(120%) brightness(80%)',
                  pointerEvents: 'auto',
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Bottom Subtle "Cómo Llegar" Button */}
            <div
              style={{
                position: 'relative',
                zIndex: 5,
                display: 'flex',
                justifyContent: 'flex-end',
                pointerEvents: 'auto',
              }}
            >
              <a
                href="https://maps.google.com/?q=Int.+Tomkinson+2910,+San+Isidro,+Provincia+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  background: 'rgba(13, 17, 23, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '30px',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#0D1117';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(13, 17, 23, 0.85)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <Navigation size={14} />
                <span>Cómo Llegar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

