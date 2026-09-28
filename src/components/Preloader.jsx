import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation after 1000ms
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 1000);

    // Completely unmount after fade-out finishes (1500ms total)
    const removeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#06090E',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fadingOut ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'preloaderZoom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle glowing ring behind logo */}
          <div
            style={{
              position: 'absolute',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
              filter: 'blur(16px)',
              animation: 'preloaderGlow 1.2s ease-in-out infinite alternate',
            }}
          />
          <img
            src="/assets/nicologo.webp"
            alt="Coronel & Asociados"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            style={{
              height: '100px',
              width: 'auto',
              position: 'relative',
              filter: 'drop-shadow(0 0 24px rgba(255, 255, 255, 0.45))',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes preloaderZoom {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes preloaderGlow {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.25);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
