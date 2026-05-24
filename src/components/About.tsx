'use client';
import { useState, useRef } from 'react';

export default function About() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (cardRef.current) cardRef.current.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
  };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 16}deg) rotateX(${-y * 12}deg) translateZ(22px) scale(1.03)`;
    el.style.boxShadow = `${-x * 20}px ${-y * 15}px 40px rgba(17,17,17,0.2), 0 6px 24px rgba(17,17,17,0.12)`;
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease';
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  return (
    <section id="about">
      <div
        ref={cardRef}
        className="about-img-wrap reveal"
        onMouseEnter={onEnter}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ willChange: 'transform', cursor: 'default' }}
      >
        <div className="about-photo">
          <span className="about-initials" style={photoLoaded ? { display: 'none' } : {}}>DY</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photo.jpg"
            alt="Divyesh Yadav"
            onLoad={() => setPhotoLoaded(true)}
            onError={() => setPhotoError(true)}
            style={photoError ? { display: 'none' } : {}}
          />
        </div>
        <div className="about-stats-row">
          <div className="about-stat"><h4>2+</h4><p>Years designing</p></div>
          <div className="about-stat"><h4>20+</h4><p>Projects shipped</p></div>
          <div className="about-stat"><h4>15+</h4><p>Happy clients</p></div>
        </div>
      </div>
      <div className="about-content reveal">
        <div className="section-eyebrow">
          <span className="section-num">05 /</span>
          <span className="section-num">About</span>
        </div>
        <h2>I&apos;m Divyesh Yadav —<br />I design websites that<br /><em>do something.</em></h2>
        <p>Not just something that looks good in a screenshot. I build sites that get you calls, fill your tables, sell your products, and make people trust you before they&apos;ve even spoken to you.</p>
        <p>I&apos;ve worked with restaurant owners, gym founders, shop owners, and first-time entrepreneurs across India. Whatever stage you&apos;re at, I&apos;ll help you show up online like you mean it.</p>
        <p>Your website is your best salesperson — one that works 24/7 and never asks for a raise.</p>
        <div className="skills-wrap">
          {['HTML & CSS','JavaScript','Figma','WordPress','Shopify','Responsive Design','UI / UX','SEO Basics'].map(s => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
