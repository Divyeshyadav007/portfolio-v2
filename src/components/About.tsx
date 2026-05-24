'use client';
import { useState } from 'react';

export default function About() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about">
      <div className="about-img-wrap reveal">
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
