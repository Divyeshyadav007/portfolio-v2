'use client';
import { useRef, useState, useCallback } from 'react';

type Phase = 'card' | 'playing' | 'fadeOut' | 'done';

export default function VideoIntro() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const tiltRef    = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('card');

  const startFadeOut = useCallback(() => {
    setPhase('fadeOut');
    setTimeout(() => setPhase('done'), 1000);
  }, []);

  const handleCardClick = () => {
    setPhase('playing');
    videoRef.current?.play().catch(() => {});
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transition = 'transform 0.08s ease';
    el.style.transform  = `perspective(900px) rotateY(${x * 22}deg) rotateX(${-y * 16}deg) scale(1.04)`;
    el.style.boxShadow  = `${-x * 28}px ${-y * 20}px 60px rgba(230,57,70,0.35), 0 0 0 1px rgba(230,57,70,0.25)`;
  };

  const onMouseLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.55s ease, box-shadow 0.55s ease';
    el.style.transform  = '';
    el.style.boxShadow  = '';
  };

  if (phase === 'done') return null;

  const isCard   = phase === 'card';
  const isFading = phase === 'fadeOut';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#080808',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: isFading ? 0 : 1,
      transition: isFading ? 'opacity 1s ease' : 'none',
      pointerEvents: isFading ? 'none' : 'auto',
    }}>

      {/* Video — pre-mounted, fades in when playing */}
      <video
        ref={videoRef}
        src="/hi-lets-go.mp4"
        playsInline
        preload="auto"
        onEnded={startFadeOut}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'contain',
          opacity: isCard ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Floating 3D card */}
      {isCard && (
        <div style={{ animation: 'vi-float 3.2s ease-in-out infinite' }}>
          <div
            ref={tiltRef}
            onClick={handleCardClick}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              width: 'min(300px, 82vw)',
              background: 'linear-gradient(145deg, #1c1c1c 0%, #111 60%, #1a0a0a 100%)',
              border: '1.5px solid rgba(230,57,70,0.45)',
              borderRadius: '22px',
              padding: '36px 28px 28px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '18px',
              cursor: 'pointer',
              userSelect: 'none',
              boxShadow: '0 24px 64px rgba(230,57,70,0.18), 0 0 0 1px rgba(230,57,70,0.12)',
            }}
          >
            {/* Top label */}
            <span style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.6rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)',
              alignSelf: 'flex-start',
            }}>
              divyesh.dev
            </span>

            {/* Avatar area */}
            <div style={{
              width: 96, height: 96, borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #3a1a1a, #1a0808)',
              border: '2px solid rgba(230,57,70,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem',
              boxShadow: '0 0 30px rgba(230,57,70,0.25)',
            }}>
              👋
            </div>

            {/* Name + title */}
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.5rem', fontWeight: 700,
                color: '#F5F0E8', letterSpacing: '-1px', margin: '0 0 6px',
              }}>Hi, I&apos;m Divyesh</p>
              <p style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)',
                letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
              }}>Web Designer · India · 2025</p>
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(245,240,232,0.07)' }} />

            {/* Play button */}
            <div style={{
              width: 58, height: 58, borderRadius: '50%',
              border: '2px solid rgba(230,57,70,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem', color: '#E63946',
              animation: 'vi-pulse 2s ease-in-out infinite',
              background: 'rgba(230,57,70,0.08)',
            }}>▶</div>

            <p style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.6rem', color: 'rgba(245,240,232,0.25)',
              letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0,
            }}>click to meet me</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes vi-float {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-14px); }
        }
        @keyframes vi-pulse {
          0%,100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(230,57,70,0.5); }
          50%      { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(230,57,70,0);  }
        }
      `}</style>
    </div>
  );
}
