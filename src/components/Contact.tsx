'use client';
import { useState, FormEvent } from 'react';

type BtnState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [btnState, setBtnState] = useState<BtnState>('idle');

  const btnText = { idle: 'Send Message →', sending: 'Sending…', sent: 'Message Sent ✓', error: 'Failed — Try Again' }[btnState];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnState('sending');
    try {
      const res = await fetch('https://formspree.io/f/mdajzqrg', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setBtnState('sent');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setBtnState('idle'), 3000);
      } else throw new Error();
    } catch {
      setBtnState('error');
      setTimeout(() => setBtnState('idle'), 3000);
    }
  };

  return (
    <section id="contact">
      <div className="contact-left reveal">
        <h2>Let&apos;s build<br />something<br /><em>good.↗</em></h2>
        <p>Have a project in mind? Drop me a message and I&apos;ll get back to you within 24 hours. No jargon, no fluff — just a straight conversation about your business.</p>
        <div className="contact-links">
          <a href="mailto:divyeshyadav27@gmail.com" className="contact-link">
            <span className="contact-link-icon">✉</span>
            <div>
              <span className="contact-link-label">Email</span>
              divyeshyadav27@gmail.com
            </div>
          </a>
          <a href="https://wa.me/918529160552" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">💬</span>
            <div>
              <span className="contact-link-label">WhatsApp</span>
              Chat with me directly
            </div>
          </a>
          <div className="contact-link" style={{ cursor: 'default' }}>
            <span className="contact-link-icon">📍</span>
            <div>
              <span className="contact-link-label">Location</span>
              India — Working worldwide
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-wrap reveal">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_name">Your Name</label>
              <input id="from_name" type="text" name="from_name" placeholder="Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input id="from_email" type="email" name="from_email" placeholder="rahul@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">What do you need?</label>
            <select id="service" name="service">
              <option value="">Pick a service...</option>
              <option>Website Design</option>
              <option>Landing Page</option>
              <option>E-commerce Store</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell me about your project</label>
            <textarea id="message" name="message" placeholder="What's the project? What's your timeline?" />
          </div>
          <button
            type="submit"
            className="btn-submit"
            disabled={btnState === 'sending'}
            style={btnState === 'sent' ? { background: '#16a34a' } : btnState === 'error' ? { background: '#333' } : {}}
          >
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
}
