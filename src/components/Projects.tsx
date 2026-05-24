'use client';
import StoryAnimation from './StoryAnimation';

export default function Projects() {
  return (
    <section id="projects">
      <StoryAnimation />

      <div className="section-eyebrow reveal">
        <span className="section-num">01 /</span>
        <h2 className="section-title">Work</h2>
      </div>

      <div className="projects-grid">
        <div className="project-card reveal">
          <span className="project-num">01</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#1a0e06,#3d1f0a)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=300&fit=crop&auto=format&q=80"
              alt="Spice Garden"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#1a0e06,#3d1f0a);color:#f5f0e8;">🍛</div>';
              }}
            />
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
        </div>

        <div className="project-card reveal">
          <span className="project-num">02</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#061208,#0e2918)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop&auto=format&q=80"
              alt="FitLife Gym"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#061208,#0e2918);color:#f5f0e8;">💪</div>';
              }}
            />
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
        </div>

        <div className="project-card reveal">
          <span className="project-num">03</span>
          <div className="project-img" style={{ background: 'linear-gradient(135deg,#0e0618,#1e0e30)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=300&fit=crop&auto=format&q=80"
              alt="Luxe Fashion"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="project-img-fallback" style="background:linear-gradient(135deg,#0e0618,#1e0e30);color:#f5f0e8;">👗</div>';
              }}
            />
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
        </div>
      </div>
    </section>
  );
}
