'use client';
import { useRef } from 'react';

function Card3D({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (ref.current) ref.current.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
  };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 13}deg) translateZ(24px) scale(1.04)`;
    el.style.boxShadow = `${-x * 22}px ${-y * 16}px 44px rgba(17,17,17,0.22), 0 6px 24px rgba(17,17,17,0.14)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease';
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  return (
    <div ref={ref} className={className} onMouseEnter={onEnter} onMouseMove={onMove} onMouseLeave={onLeave} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-eyebrow reveal">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Pricing</h2>
      </div>
      <div className="pricing-grid">
        <Card3D className="pricing-card reveal">
          <div className="pricing-tier">Starter</div>
          <div className="price">&#8377;4,999 <small>/ project</small></div>
          <p className="price-note">If you&apos;re just getting online</p>
          <hr className="pricing-divider" />
          <ul className="pricing-features">
            <li>1-page Landing Page</li>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>WhatsApp Button</li>
            <li className="no">E-commerce</li>
            <li className="no">Custom Animations</li>
          </ul>
          <a href="#contact" className="btn-plan">Get Started</a>
        </Card3D>

        <Card3D className="pricing-card featured reveal">
          <span className="star-badge">★ Most popular</span>
          <div className="pricing-tier">Business</div>
          <div className="price">&#8377;12,999 <small>/ project</small></div>
          <p className="price-note">For businesses that want to stand out</p>
          <hr className="pricing-divider" />
          <ul className="pricing-features">
            <li>Up to 5 Pages</li>
            <li>Mobile Responsive</li>
            <li>Contact Form + WhatsApp</li>
            <li>Custom Animations</li>
            <li>Google Maps</li>
            <li className="no">E-commerce</li>
          </ul>
          <a href="#contact" className="btn-plan btn-plan-accent">Get Started</a>
        </Card3D>

        <Card3D className="pricing-card reveal">
          <div className="pricing-tier">E-commerce</div>
          <div className="price">&#8377;24,999 <small>/ project</small></div>
          <p className="price-note">Sell your products round the clock</p>
          <hr className="pricing-divider" />
          <ul className="pricing-features">
            <li>Full Online Store</li>
            <li>Product Catalog</li>
            <li>Payment Gateway</li>
            <li>Admin Dashboard</li>
            <li>Mobile Shopping</li>
            <li>1 Month Support</li>
          </ul>
          <a href="#contact" className="btn-plan">Get Started</a>
        </Card3D>
      </div>
    </section>
  );
}
