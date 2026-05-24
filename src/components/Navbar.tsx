'use client';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.padding = window.scrollY > 50 ? '12px 5%' : '18px 5%';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="navbar" ref={navRef}>
      <a href="#hero" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="DY" className="logo-img" />
      </a>
      <ul className={`nav-links${isOpen ? ' open' : ''}`} id="navLinks">
        <li><a href="#projects" onClick={closeMenu}>Work</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#process" onClick={closeMenu}>Process</a></li>
        <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#payment" onClick={closeMenu}>Pay</a></li>
        <li><a href="#contact" className="nav-hire" onClick={closeMenu}>Hire Me ↗</a></li>
      </ul>
      <button
        className="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
