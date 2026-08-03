import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

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
    window.open(`https://wa.me/5491112345678?text=${text}`, '_blank');
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
                      Av. del Libertador 4980, Piso 10
                    </p>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Ciudad Autónoma de Buenos Aires
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
                      Teléfonos Directos
                    </span>
                    <p style={{ color: '#FFF', fontWeight: 600, fontSize: '0.98rem', marginTop: '2px' }}>
                      +54 (11) 4800-9900 / 9901
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
                      contacto@coronelasociados.com.ar
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
                      Lunes a Viernes: 09:00 a 19:00 hs
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

          {/* Right Column: Interactive Evaluation Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col col-span-7-resp">
            <div className="glass-panel padding-mobile-lg" style={{ padding: '40px', borderRadius: '14px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(197, 160, 89, 0.2)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif-luxury)', fontSize: '1.8rem', color: '#FFF', marginBottom: '12px' }}>
                    Consulta Recibida
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Gracias por comunicarse con **Coronel & Asociados**. Un abogado especializado de nuestro equipo analizará su requerimiento y tomará contacto a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-luxury)',
                      fontSize: '1.6rem',
                      color: '#FFF',
                      marginBottom: '20px',
                    }}
                  >
                    Formulario de Evaluación Inicial de Caso
                  </h3>

                  <div className="inputs-grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Martín González"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(4, 20, 36, 0.8)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: '6px',
                          color: '#FFF',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                        Teléfono de Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+54 11 1234-5678"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(4, 20, 36, 0.8)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: '6px',
                          color: '#FFF',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ejemplo@empresa.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(4, 20, 36, 0.8)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '6px',
                        color: '#FFF',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                      Área de Consulta Principal
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(4, 20, 36, 0.9)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '6px',
                        color: '#FFF',
                        outline: 'none',
                      }}
                    >
                      <option value="Corporativo & Empresas">Derecho Corporativo & Empresa</option>
                      <option value="Litigios Complejos">Litigios Complejos & Arbitraje</option>
                      <option value="Derecho Civil & Patrimonial">Derecho Civil & Patrimonial</option>
                      <option value="Derecho Laboral Empresario">Derecho Laboral Empresario</option>
                      <option value="Derecho Administrativo">Derecho Administrativo & Regulatorio</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                      Resumen del Caso o Consulta *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describa brevemente la situación legal..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(4, 20, 36, 0.8)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '6px',
                        color: '#FFF',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }}>
                    <Send size={18} />
                    <span>Enviar Consulta Confidencial</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
