export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-eyebrow reveal">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Pricing</h2>
      </div>
      <div className="pricing-grid">
        <div className="pricing-card reveal">
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
        </div>
        <div className="pricing-card featured reveal">
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
        </div>
        <div className="pricing-card reveal">
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
        </div>
      </div>
    </section>
  );
}
