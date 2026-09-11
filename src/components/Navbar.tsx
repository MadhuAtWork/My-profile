import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, QrCode, ArrowUpRight, Sparkles, CreditCard } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  openResumeModal: () => void;
  onOpenCardResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, openResumeModal, onOpenCardResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'personal-projects', 'education', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
            }}
          >
            MC
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Madhu Ch
              <Sparkles size={12} color="var(--accent-cyan)" />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              React & Frontend Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--gradient-brand)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme toggle, Card Resume, QR Modal, Hire Me CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Card Resume Quick Switcher */}
          <button
            type="button"
            onClick={onOpenCardResume}
            className="btn btn-secondary desktop-resume-btn"
            style={{ display: 'none', gap: '0.4rem', fontSize: '0.85rem', padding: '0.55rem 0.9rem' }}
            title="Switch to Creative Card Resume (QR Code Style)"
          >
            <CreditCard size={15} color="var(--accent-cyan)" />
            <span>Card Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-secondary btn-icon"
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume QR Modal Trigger Button */}
          <button
            type="button"
            onClick={openResumeModal}
            className="btn btn-secondary desktop-resume-btn"
            style={{ display: 'none', gap: '0.4rem', fontSize: '0.85rem', padding: '0.55rem 0.9rem' }}
            title="Resume & QR Code Tools"
          >
            <QrCode size={15} color="var(--accent-purple)" />
            <span>QR Tools</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.9rem' }}
          >
            <span>Hire Me</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-icon mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-surface-solid)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-main)',
                  background: activeSection === link.href.substring(1) ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {activeSection === link.href.substring(1) && <Sparkles size={16} color="var(--accent-cyan)" />}
              </a>
            ))}
          </div>

          <hr style={{ borderColor: 'var(--border-color)', opacity: 0.5 }} />

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCardResume();
            }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <CreditCard size={18} />
            <span>Open Creative Card Resume</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openResumeModal();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <QrCode size={18} color="var(--accent-purple)" />
            <span>View Resume QR Code Generator</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-resume-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
