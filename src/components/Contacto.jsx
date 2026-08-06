import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    area: 'Corporativo & Empresas',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Estudio Jurídico Coronel & Asociados, me gustaría solicitar una consulta jurídica sobre: ${formData.area}`
    );
    window.open(`https://wa.me/5491153698788?text=${text}`, '_blank');
  };

  return (
    <section
      style={{
        padding: '100px 0',
        background: 'var(--color-bg-dark)',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
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
            Atención Prioritaria & Confidencial
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
            Contacto & Evaluación de Caso
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Inicie su consulta directamente con nuestro equipo de abogados de la <strong style={{ color: '#FFF' }}>UBA</strong>. Garantizamos absoluta reserva y respuesta en menos de 24 horas hábiles.
          </p>
        </div>

        <div
          className="responsive-grid-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info & WhatsApp */}
          <div style={{ gridColumn: 'span 5' }} className="contact-info-col col-span-5-resp">
            <div
              className="glass-panel-gold padding-mobile-lg"
              style={{
                padding: '36px',
                borderRadius: '14px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif-luxury)',
                  fontSize: '1.5rem',
                  color: '#FFF',
                  marginBottom: '24px',
                }}
              >
                Canales de Atención
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Sede Principal
                    </span>
                    <p style={{ color: '#FFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                      Int. Tomkinson 2910, San Isidro
                    </p>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Provincia de Buenos Aires
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Teléfono Directo
                    </span>
                    <p style={{ color: '#FFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                      11 5369-8788
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Correo Electrónico
                    </span>
                    <p className="contact-value-text" style={{ color: '#FFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                      coronel.asociados.estudio@gmail.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    {/* Instagram logo via inline svg or Lucide-react Instagram if available, but let's check Lucide-react imports first */}
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Instagram
                    </span>
                    <p style={{ marginTop: '2px' }}>
                      <a href="https://instagram.com/coronel.asociados" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-light)', fontWeight: 600, fontSize: '0.98rem', textDecoration: 'none' }}>
                        @coronel.asociados
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                      Horarios de Atención
                    </span>
                    <p style={{ color: '#FFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                      Lunes a Viernes: 10:00 a 18:00 hs
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div style={{ marginTop: '32px' }}>
                <button
                  onClick={handleWhatsApp}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    background: '#25D366',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.25)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <MessageSquare size={20} />
                  <span>Consulta Inmediata por WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Secretarial / Security Guarantee */}
            <div className="glass-panel" style={{ padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-gold)' }} />
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                Toda comunicación vertida en este medio está amparada por el secreto profesional ley 23.187.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Wireframe */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col col-span-7-resp">
            {/* Inject pulse animation */}
            <style>{`
              @keyframes pulse {
                0% { transform: scale(0.95); opacity: 0.5; }
                50% { transform: scale(1.3); opacity: 0.2; }
                100% { transform: scale(1.6); opacity: 0; }
              }
            `}</style>
            <div 
              className="glass-panel padding-mobile-lg" 
              style={{ 
                padding: '24px', 
                borderRadius: '14px',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                background: 'rgba(2, 10, 20, 0.6)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
                height: 'clamp(380px, 60vh, 520px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Header inside the map container */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', zIndex: 5, pointerEvents: 'none', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif-luxury)', fontSize: '1.4rem', margin: 0, textAlign: 'right' }}>
                    Ubicación del Estudio
                  </h3>
                  <div style={{ 
                    background: 'rgba(197, 160, 89, 0.15)', 
                    border: '1px solid var(--color-gold)', 
                    padding: '6px 12px', 
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    color: 'var(--color-gold-light)',
                    fontWeight: 600,
                    width: 'fit-content',
                    marginTop: '4px'
                  }}>
                    ZONA NORTE
                  </div>
                </div>
              </div>

              {/* Real Google Maps Embed */}
              <div 
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <iframe
                  title="Mapa de Google Maps de Coronel & Asociados"
                  src="https://maps.google.com/maps?q=-34.4662497,-58.5393246&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0,
                    // Subtly darkens the map to integrate seamlessly with the page dark theme
                    filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(95%) opacity(85%)',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Bottom CTA to open external maps */}
              <div style={{ zIndex: 5, position: 'relative' }}>
                <a 
                  href="https://maps.google.com/?q=Int.+Tomkinson+2910,+San+Isidro,+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <ExternalLink size={18} />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
