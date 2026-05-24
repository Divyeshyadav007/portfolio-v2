export default function Services() {
  return (
    <section id="services">
      <div className="section-eyebrow reveal">
        <span className="section-num">02 /</span>
        <h2 className="section-title">Services</h2>
      </div>
      <div className="services-list">
        <div className="service-row reveal">
          <span className="svc-num">01</span>
          <div className="svc-body">
            <h3>Website Design</h3>
            <p>A beautiful, fast website your customers will trust. Built to look great on every screen and load in a flash.</p>
          </div>
          <div className="svc-tags">
            <span className="svc-tag">Mobile-first</span>
            <span className="svc-tag">SEO-ready</span>
            <span className="svc-tag">Fast loading</span>
          </div>
        </div>
        <div className="service-row reveal">
          <span className="svc-num">02</span>
          <div className="svc-body">
            <h3>Landing Pages</h3>
            <p>One page. One goal. Turn ad clicks into real leads with forms, WhatsApp CTAs, and copy that converts.</p>
          </div>
          <div className="svc-tags">
            <span className="svc-tag">Conversion-focused</span>
            <span className="svc-tag">WhatsApp CTA</span>
            <span className="svc-tag">Google Ads ready</span>
          </div>
        </div>
        <div className="service-row reveal">
          <span className="svc-num">03</span>
          <div className="svc-body">
            <h3>E-commerce Stores</h3>
            <p>Sell your products 24/7 without lifting a finger. Full store with payments, catalog, and mobile shopping.</p>
          </div>
          <div className="svc-tags">
            <span className="svc-tag">Razorpay</span>
            <span className="svc-tag">Product catalog</span>
            <span className="svc-tag">Mobile shopping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
