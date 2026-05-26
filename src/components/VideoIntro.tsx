'use client';
import { useRef, useEffect, useState, useCallback } from 'react';

type Phase = 'black' | 'fadeIn' | 'fadeOut' | 'done';

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>('black');
  const [needsClick, setNeedsClick] = useState(false);

  const startFadeOut = useCallback(() => {
    setPhase('fadeOut');
    setTimeout(() => setPhase('done'), 1200);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase('fadeIn');
      videoRef.current?.play().catch(() => setNeedsClick(true));
    }, 300);
    return () => clearTimeout(t);
  }, []);

  function handleClick() {
    if (!needsClick) return;
    setNeedsClick(false);
    videoRef.current?.play();
  }

  if (phase === 'done') return null;

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'fadeOut' ? 0 : 1,
        transition: phase === 'fadeOut' ? 'opacity 1.2s ease' : 'none',
        cursor: needsClick ? 'pointer' : 'default',
        pointerEvents: phase === 'fadeOut' ? 'none' : 'auto',
      }}
    >
      <video
        ref={videoRef}
        src="/hi-lets-go.mp4"
        playsInline
        preload="auto"
        onEnded={startFadeOut}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: phase === 'black' ? 0 : 1,
          transition: 'opacity 0.9s ease',
        }}
      />

      {needsClick && (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            userSelect: 'none',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              color: '#fff',
              animation: 'vi-pulse 2s ease-in-out infinite',
            }}
          >
            ▶
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Tap to play
          </p>
        </div>
      )}

      <style>{`
        @keyframes vi-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50%       { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
