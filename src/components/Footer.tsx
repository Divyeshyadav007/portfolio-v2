export default function Footer() {
  return (
    <footer>
      <span className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="DY" className="logo-img logo-img--footer" />
      </span>
      <ul className="footer-links">
        <li><a href="#projects">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className="footer-copy">&copy; 2025 DIVYESH YADAV</span>
    </footer>
  );
}
