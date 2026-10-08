import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, Copy, Check } from 'lucide-react';

const InstagramIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.15.679 4.14 1.838 5.773L2.5 21.5l3.864-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.062-1.11l-.291-.173-2.298.778.791-2.241-.189-.3a7.96 7.96 0 1 1 6.049 3.046z"/>
  </svg>
);

const Contacto = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('coronel.asociados.estudio@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappMessage = encodeURIComponent('Hola, quisiera realizar una consulta jurídica con el Estudio Coronel & Asociados.');
  const whatsappUrl = `https://wa.me/5491153698788?text=${whatsappMessage}`;
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

                {/* Telefono Directo - WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.2s ease',
                  }}
                  className="contact-whatsapp-link"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid rgba(37, 211, 102, 0.4)',
                      background: 'rgba(37, 211, 102, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25D366',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <WhatsAppIcon size={24} />
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
                      TELÉFONO DIRECTO • WHATSAPP
                    </span>
                    <p
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        marginTop: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span>11 5369-8788</span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: '#25D366',
                          background: 'rgba(37, 211, 102, 0.12)',
                          border: '1px solid rgba(37, 211, 102, 0.3)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontWeight: 500,
                        }}
                      >
                        Abrir Chat
                      </span>
                    </p>
                  </div>
                </a>

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
                  <div style={{ overflow: 'hidden', flexGrow: 1 }}>
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
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '4px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <a
                        href="mailto:coronel.asociados.estudio@gmail.com"
                        className="contact-value-text"
                        style={{
                          color: '#FFFFFF',
                          fontWeight: 500,
                          fontSize: 'clamp(0.78rem, 2.5vw, 0.92rem)',
                          textDecoration: 'none',
                          wordBreak: 'break-word',
                          overflowWrap: 'anywhere',
                        }}
                      >
                        coronel.asociados.estudio@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        title="Copiar correo electrónico"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: copiedEmail ? 'rgba(46, 204, 113, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                          border: `1px solid ${copiedEmail ? 'rgba(46, 204, 113, 0.5)' : 'rgba(255, 255, 255, 0.18)'}`,
                          borderRadius: '8px',
                          padding: '3px 10px',
                          color: copiedEmail ? '#2ECC71' : '#CBD5E1',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          outline: 'none',
                          lineHeight: '1.4',
                        }}
                      >
                        {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedEmail ? '¡Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
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

