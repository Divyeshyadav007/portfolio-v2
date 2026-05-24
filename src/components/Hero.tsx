'use client';
import { useEffect, useRef } from 'react';

const WORDS = ['work.', 'sell.', 'convert.', 'impress.'];

export default function Hero() {
  const cycleRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cycleRef.current;
    if (!el) return;
    let idx = 0;
    const interval = setInterval(() => {
      el.style.clipPath = 'inset(0 0 100% 0)';
      el.style.opacity = '0';
      setTimeout(() => {
        idx = (idx + 1) % WORDS.length;
        el.textContent = WORDS[idx];
        el.style.transition = 'none';
        el.style.clipPath = 'inset(100% 0 0 0)';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.transition = 'clip-path 0.45s ease, opacity 0.3s';
          el.style.clipPath = 'inset(0 0 0% 0)';
          el.style.opacity = '1';
        }));
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;
    const animate = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const step = target / (1500 / 16);
      let current = 0;
      const update = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current < target) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('h3[data-target]').forEach(animate);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-label">— WEB DESIGNER · INDIA · 2025</p>
        <h1>
          <span className="line">I make websites</span>
          <span className="line">that actually</span>
          <span className="line">
            <span className="word-cycle-wrapper">
              <span className="word-cycle" id="cycleWord" ref={cycleRef}>work.</span>
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Hey, I&apos;m Divyesh. I build websites for restaurants, gyms, shops and startups that
          look sharp and actually bring in customers — not just compliments.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary"><span>View My Work &rarr;</span></a>
          <a href="#contact" className="btn-secondary">Let&apos;s Talk</a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <h3 data-target="20" data-suffix="+">20+</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat-item">
            <h3 data-target="15" data-suffix="+">15+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3 data-target="100" data-suffix="%">100%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-logo-area">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="DY Logo" />
        </div>
        <div className="hero-card-details-section">
          <h4>Divyesh Yadav</h4>
          <span className="mono-label">Web Designer</span>
          <div className="hero-card-details">
            <span>divyeshyadav27@gmail.com</span>
            <span>+91 85291 60552</span>
          </div>
          <a href="https://wa.me/918529160552" target="_blank" rel="noopener noreferrer" className="hero-card-wa">
            💬 WhatsApp Me
          </a>
          <div className="hero-card-avail">
            <div className="status-dot" />
            Available now
          </div>
        </div>
      </div>
    </section>
  );
}
