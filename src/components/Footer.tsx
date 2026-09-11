import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '4rem 0 2.5rem',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                DV
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                {PORTFOLIO_DATA.profile.name}
              </span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {PORTFOLIO_DATA.profile.role} • {PORTFOLIO_DATA.profile.subtitle}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label="GitHub"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label="LinkedIn"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-secondary btn-icon"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--text-dim)',
            fontSize: '0.85rem',
            gap: '1rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
