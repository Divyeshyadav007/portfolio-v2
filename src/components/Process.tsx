'use client';
import { useEffect } from 'react';

export default function Process() {
  useEffect(() => {
    const truck    = document.getElementById('ship-truck-g');
    const fillLine = document.getElementById('ship-fill-line');
    const m2       = document.getElementById('ship-m2');
    const m2num    = document.getElementById('ship-m2-num');
    const m3       = document.getElementById('ship-m3');
    const m3num    = document.getElementById('ship-m3-num');
    if (!truck) return;

    const TOTAL = 740, DUR = 6200;
    const ACCENT = '#E63946', DIM = 'rgba(245,240,232,0.1)', DIM_TXT = 'rgba(245,240,232,0.35)', LIT_TXT = '#F5F0E8';
    let start: number | null = null;
    let rafId: number;

    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const progress = (t: number) => {
      if (t <= 0.07) return 0;
      if (t <= 0.43) return ease((t - 0.07) / 0.36) * 0.5;
      if (t <= 0.57) return 0.5;
      if (t <= 0.93) return 0.5 + ease((t - 0.57) / 0.36) * 0.5;
      return 1;
    };

    const frame = (ts: number) => {
      if (!start) start = ts;
      const p = progress(((ts - start) % DUR) / DUR);
      const x = p * TOTAL;
      truck.setAttribute('transform', `translate(${x},0)`);
      fillLine?.setAttribute('stroke-dashoffset', (TOTAL - x).toFixed(1));
      const at2 = p >= 0.5, at3 = p >= 1;
      m2?.setAttribute('fill', at2 ? ACCENT : DIM);
      m2num?.setAttribute('fill', at2 ? LIT_TXT : DIM_TXT);
      m3?.setAttribute('fill', at3 ? ACCENT : DIM);
      m3num?.setAttribute('fill', at3 ? LIT_TXT : DIM_TXT);
      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="process" className="process-section">
      <div className="process-heading reveal">
        <span className="section-num">03 /</span>
        <h2>How I Work</h2>
      </div>
      <p className="process-sub reveal">From first message to live site — here&apos;s the route.</p>
      <div className="shipping-line-wrap reveal">
        <svg className="shipping-svg" viewBox="0 0 900 210" xmlns="http://www.w3.org/2000/svg" aria-label="Project delivery process: Discover, Design, Launch">
          <line x1="80" y1="105" x2="820" y2="105" stroke="rgba(245,240,232,0.1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="105" x2="820" y2="105" stroke="rgba(245,240,232,0.06)" strokeWidth="1" strokeDasharray="6 12" />
          <line id="ship-fill-line" x1="80" y1="105" x2="820" y2="105" stroke="#E63946" strokeWidth="3" strokeLinecap="round" strokeDasharray="740" strokeDashoffset="740" />

          <circle id="ship-m1" cx="80" cy="105" r="22" fill="#E63946" />
          <text x="80" y="110" textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono,monospace" fontSize="11" fontWeight="700" fill="#F5F0E8">01</text>
          <text x="80" y="142" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="15" fontWeight="700" fill="#F5F0E8">Discover</text>
          <text x="80" y="160" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9.5" fill="rgba(245,240,232,0.4)">We talk, you brief me</text>

          <circle id="ship-m2" cx="450" cy="105" r="22" fill="rgba(245,240,232,0.1)" />
          <text id="ship-m2-num" x="450" y="110" textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono,monospace" fontSize="11" fontWeight="700" fill="rgba(245,240,232,0.35)">02</text>
          <text x="450" y="142" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="15" fontWeight="700" fill="#F5F0E8">Design</text>
          <text x="450" y="160" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9.5" fill="rgba(245,240,232,0.4)">I build your full site</text>

          <circle id="ship-m3" cx="820" cy="105" r="22" fill="rgba(245,240,232,0.1)" />
          <text id="ship-m3-num" x="820" y="110" textAnchor="middle" dominantBaseline="middle" fontFamily="IBM Plex Mono,monospace" fontSize="11" fontWeight="700" fill="rgba(245,240,232,0.35)">03</text>
          <text x="820" y="142" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontSize="15" fontWeight="700" fill="#F5F0E8">Launch</text>
          <text x="820" y="160" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9.5" fill="rgba(245,240,232,0.4)">Go live &amp; grow</text>

          <g id="ship-truck-g">
            <rect x="44" y="70" width="52" height="30" rx="3" fill="#F5F0E8" />
            <line x1="58" y1="74" x2="58" y2="96" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
            <line x1="72" y1="74" x2="72" y2="96" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
            <line x1="86" y1="74" x2="86" y2="96" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />
            <rect x="96" y="70" width="24" height="30" rx="3" fill="#F5F0E8" />
            <line x1="96" y1="70" x2="96" y2="100" stroke="rgba(17,17,17,0.15)" strokeWidth="1.5" />
            <rect x="98" y="74" width="16" height="13" rx="2" fill="rgba(17,17,17,0.55)" />
            <rect x="50" y="100" width="62" height="3" rx="1.5" fill="rgba(17,17,17,0.08)" />
            <circle cx="64" cy="108" r="9" fill="#111111" />
            <circle cx="64" cy="108" r="4" fill="#E63946" />
            <circle cx="64" cy="108" r="1.5" fill="#111111" />
            <circle cx="106" cy="108" r="9" fill="#111111" />
            <circle cx="106" cy="108" r="4" fill="#E63946" />
            <circle cx="106" cy="108" r="1.5" fill="#111111" />
          </g>
        </svg>
      </div>
    </section>
  );
}
