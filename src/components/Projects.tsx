'use client';
import { useRef } from 'react';
import StoryAnimation from './StoryAnimation';

function Card3D({ children }: { children: React.ReactNode }) {
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
    el.style.transform = `perspective(900px) rotateY(${x * 20}deg) rotateX(${-y * 14}deg) translateZ(28px) scale(1.04)`;
    el.style.boxShadow = `${-x * 24}px ${-y * 18}px 48px rgba(0,0,0,0.38), 0 8px 32px rgba(0,0,0,0.22)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease';
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  return (
    <div
      ref={ref}
      className="project-card reveal"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <StoryAnimation />

      <div className="section-eyebrow reveal">
        <span className="section-num">01 /</span>
        <h2 className="section-title">Work</h2>
      </div>

      <div className="projects-grid">

        <Card3D>
          <span className="project-num">01</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#1a0e06,#3d1f0a)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=300&fit=crop&auto=format&q=80" alt="Spice Garden"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#1a0e06,#3d1f0a);color:#f5f0e8;">🍛</div>'; }} />
          </div>
          <div className="project-body">
            <div className="project-meta">
              <span className="proj-tag">Restaurant</span>
              <span className="proj-tag">Landing Page</span>
            </div>
            <h3>Spice Garden Restaurant</h3>
            <p>Online menu, table booking, and location page. Helped the owner get more reservations than ever before.</p>
            <a href="spice-garden.html" className="project-link">View Project →</a>
          </div>
        </Card3D>

        <Card3D>
          <span className="project-num">02</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#061208,#0e2918)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop&auto=format&q=80" alt="FitLife Gym"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#061208,#0e2918);color:#f5f0e8;">💪</div>'; }} />
          </div>
          <div className="project-body">
            <div className="project-meta">
              <span className="proj-tag">Fitness</span>
              <span className="proj-tag">Website</span>
            </div>
            <h3>FitLife Gym Website</h3>
            <p>Membership plans, class schedule, trainer profiles, and a WhatsApp lead capture that fills the gym.</p>
            <a href="fitlife-gym.html" className="project-link">View Project →</a>
          </div>
        </Card3D>

        <Card3D>
          <span className="project-num">03</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#0e0618,#1e0e30)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=300&fit=crop&auto=format&q=80" alt="Luxe Fashion"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#0e0618,#1e0e30);color:#f5f0e8;">👗</div>'; }} />
          </div>
          <div className="project-body">
            <div className="project-meta">
              <span className="proj-tag">E-commerce</span>
              <span className="proj-tag">Store</span>
            </div>
            <h3>Luxe Fashion Store</h3>
            <p>Full e-commerce store with product catalog, cart, and Razorpay checkout — sales doubled in month one.</p>
            <a href="luxe-fashion.html" className="project-link">View Project →</a>
          </div>
        </Card3D>

        <Card3D>
          <span className="project-num">04</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#0a0a1a,#1a1a3d)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop&auto=format&q=80" alt="Rent My Brain"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#0a0a1a,#1a1a3d);color:#f5f0e8;">🧠</div>'; }} />
          </div>
          <div className="project-body">
            <div className="project-meta">
              <span className="proj-tag">SaaS</span>
              <span className="proj-tag">Consulting</span>
            </div>
            <h3>Rent My Brain</h3>
            <p>A platform to book expert consultation sessions — built with Next.js and deployed on Vercel.</p>
            <a href="https://rent-my-brain.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
          </div>
        </Card3D>

      </div>
    </section>
  );
}
