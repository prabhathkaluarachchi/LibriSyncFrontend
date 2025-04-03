import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="logo">LibriSync</h1>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#github" className="nav-link">
              GitHub
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
