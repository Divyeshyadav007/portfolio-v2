'use client';
import { useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Website Design',
    desc: 'A beautiful, fast website your customers will trust. Built to look great on every screen and load in a flash.',
    tags: ['Mobile-first', 'SEO-ready', 'Fast loading'],
    color: '#c0152a',
    bg: '#fff0f1',
    border: 'rgba(230,57,70,0.22)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="44" height="30" rx="4" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="17" x2="46" y2="17" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="12.5" r="1.5" fill="currentColor"/>
        <circle cx="13" cy="12.5" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="12.5" r="1.5" fill="currentColor"/>
        <rect x="10" y="22" width="14" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="10" y="27" width="20" height="2" rx="1" fill="currentColor" opacity="0.35"/>
        <rect x="10" y="32" width="16" height="2" rx="1" fill="currentColor" opacity="0.25"/>
        <line x1="18" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="38" x2="24" y2="42" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Landing Pages',
    desc: 'One page. One goal. Turn ad clicks into real leads with forms, WhatsApp CTAs, and copy that converts.',
    tags: ['Conversion-focused', 'WhatsApp CTA', 'Google Ads ready'],
    color: '#c2560a',
    bg: '#fff5ec',
    border: 'rgba(249,115,22,0.22)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="2" width="36" height="44" rx="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="13" y1="12" x2="35" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="13" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="13" y1="23" x2="29" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="13" y1="28" x2="26" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <rect x="13" y="35" width="22" height="7" rx="3.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'E-commerce Stores',
    desc: 'Sell your products 24/7 without lifting a finger. Full store with payments, catalog, and mobile shopping.',
    tags: ['Razorpay', 'Product catalog', 'Mobile shopping'],
    color: '#166534',
    bg: '#edfbf2',
    border: 'rgba(34,197,94,0.22)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8h4.5l5.5 22h20l5-16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="34" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="28" y1="16" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="24" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

function SvcCard({ svc }: { svc: typeof SERVICES[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (ref.current) {
      ref.current.style.willChange = 'transform';
      ref.current.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
    }
  };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 13}deg) translateZ(26px) scale(1.03)`;
    el.style.boxShadow = `${-x * 22}px ${-y * 16}px 48px rgba(0,0,0,0.14), 0 4px 20px rgba(0,0,0,0.08)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease';
    el.style.transform = '';
    el.style.boxShadow = '';
    el.style.willChange = 'auto';
  };

  return (
    <div
      ref={ref}
      className="svc-card reveal"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ background: svc.bg, borderColor: svc.border }}
    >
      <div className="svc-card-icon" style={{ color: svc.color }}>{svc.icon}</div>
      <h3 className="svc-card-title">{svc.title}</h3>
      <p className="svc-card-desc">{svc.desc}</p>
      <div className="svc-card-tags">
        {svc.tags.map(t => (
          <span key={t} className="svc-card-tag" style={{ borderColor: svc.border, color: svc.color }}>
            {t}
          </span>
        ))}
      </div>
      <a href="#contact" className="svc-card-cta" style={{ borderColor: svc.border, color: svc.color }}>
        Start Project <span className="svc-cta-arrow">→</span>
      </a>
      <div className="svc-card-accent" style={{ background: svc.color }} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="section-eyebrow reveal">
        <span className="section-num">02 /</span>
        <h2 className="section-title">Services</h2>
      </div>
      <div className="services-grid">
        {SERVICES.map(svc => <SvcCard key={svc.num} svc={svc} />)}
      </div>
    </section>
  );
}
