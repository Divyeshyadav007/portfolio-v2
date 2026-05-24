'use client';
import { useState } from 'react';

export default function Payment() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('divyeshyadav27-1@okicici');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payment">
      <div className="payment-grid">
        <div className="payment-left reveal">
          <div className="section-eyebrow" style={{ marginBottom: '24px' }}>
            <span className="section-num">05 /</span>
            <h2 className="section-title">Pay</h2>
          </div>
          <p className="payment-desc">Ready to kick off your project? Pay your advance directly via UPI — instant, free, and works with every UPI app.</p>
          <div className="payment-steps">
            <div className="payment-step"><span className="step-num">01</span><span>Scan the QR code with any UPI app</span></div>
            <div className="payment-step"><span className="step-num">02</span><span>Enter the agreed advance amount</span></div>
            <div className="payment-step"><span className="step-num">03</span><span>Add your name in the payment note</span></div>
          </div>
        </div>
        <div className="payment-right reveal">
          <div className="upi-card">
            <p className="upi-card-label">Scan to Pay · Any UPI App</p>
            <div className="qr-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=111111&bgcolor=ffffff&data=upi%3A%2F%2Fpay%3Fpa%3Ddivyeshyadav27-1%40okicici%26pn%3DDivyesh%20Yadav%26cu%3DINR"
                alt="UPI QR Code — divyeshyadav27-1@okicici"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <p className="upi-id-label">UPI ID</p>
            <div className="upi-id-row">
              <span className="upi-id-text">divyeshyadav27-1@okicici</span>
              <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
            </div>
            <a href="upi://pay?pa=divyeshyadav27-1@okicici&pn=Divyesh%20Yadav&cu=INR" className="upi-pay-btn">
              Pay via UPI App ↗
            </a>
            <p className="upi-apps-note">Google Pay · PhonePe · Paytm · BHIM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
