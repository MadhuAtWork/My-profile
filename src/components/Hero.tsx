import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, QrCode, Heart, Star, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import avatarImg from '../assets/developer-avatar.jpg';

interface HeroProps {
  openResumeModal: () => void;
}

const ROTATING_TITLES = [
  "Senior React Developer",
  "Frontend Architect",
  "Three.js & 3D Web Visualizer",
  "Flutter & React Native Builder",
  "Redux Toolkit & UI Engineer"
];

export const Hero: React.FC<HeroProps> = ({ openResumeModal }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % ROTATING_TITLES.length;
      const fullText = ROTATING_TITLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(250);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Status Banner */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.25rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1.75rem',
            backdropFilter: 'blur(16px)',
            boxShadow: 'var(--shadow-sm), 0 0 20px rgba(16, 185, 129, 0.15)',
            maxWidth: '100%',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-emerald)',
              boxShadow: '0 0 12px var(--accent-emerald)',
              display: 'inline-block',
              animation: 'pulseAura 2s infinite',
            }}
          />
          <span style={{ color: 'var(--accent-emerald)', fontSize: '0.88rem', fontWeight: 700 }}>
            {PORTFOLIO_DATA.profile.statusBadge}
          </span>
        </div>

        {/* Hero Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* Left Column - Content */}
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Hey there! I'm</span>
              <span style={{ display: 'inline-block', animation: 'floatSubtle 2s infinite' }}>👋</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              {PORTFOLIO_DATA.profile.name}
            </h1>

            {/* Dynamic Animated Subtitle with Live Typing Effect */}
            <div
              style={{
                fontSize: 'clamp(1.25rem, 2.7vw, 1.85rem)',
                fontWeight: 700,
                marginBottom: '1.35rem',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: 'var(--text-main)' }}>I'm a</span>
              <span className="text-gradient" style={{ fontWeight: 800 }}>
                {text}
              </span>
              <span
                className="animate-cursor"
                style={{
                  width: '3px',
                  height: '1.5em',
                  background: 'var(--accent-cyan)',
                  display: 'inline-block',
                  marginLeft: '2px',
                  boxShadow: '0 0 10px var(--accent-cyan)',
                }}
              />
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
              }}
            >
              {PORTFOLIO_DATA.profile.shortBio}
            </p>

            {/* Tech Badges / Pills with Interactive Hover Shimmer */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                { name: 'React.js', color: 'var(--accent-cyan)', bg: 'rgba(6, 182, 212, 0.15)' },
                { name: 'Next.js', color: '#ffffff', bg: 'rgba(255, 255, 255, 0.12)' },
                { name: 'Redux Toolkit', color: 'var(--accent-purple)', bg: 'rgba(168, 85, 247, 0.15)' },
                { name: 'Three.js (3D)', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' },
                { name: 'React Flow', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
                { name: 'Flutter', color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.15)' },
                { name: 'Tailwind CSS', color: '#22d3ee', bg: 'rgba(34, 211, 238, 0.15)' },
                { name: 'REST APIs', color: 'var(--accent-emerald)', bg: 'rgba(16, 185, 129, 0.15)' }
              ].map((tech) => (
                <span
                  key={tech.name}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    background: tech.bg,
                    border: '1px solid var(--border-color)',
                    color: tech.color,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.borderColor = tech.color;
                    e.currentTarget.style.boxShadow = `0 6px 20px ${tech.bg}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: tech.color,
                      boxShadow: `0 0 8px ${tech.color}`,
                    }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 1.85rem' }}>
                <span>View Featured Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.9rem 1.7rem' }}>
                <MessageSquare size={18} color="var(--accent-cyan)" />
                <span>Let's Talk</span>
              </a>

              {/* Resume & QR Code Button */}
              <button
                type="button"
                onClick={openResumeModal}
                className="btn btn-outline"
                style={{ padding: '0.9rem 1.6rem', display: 'inline-flex', gap: '0.5rem' }}
                title="Generate Resume QR Code & ATS PDF"
              >
                <QrCode size={18} color="var(--accent-purple)" />
                <span>QR Hub</span>
              </button>
            </div>

            {/* Social Link Quick Icons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginTop: '2.75rem',
                color: 'var(--text-dim)',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Connect:</span>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'all 0.2s ease', display: 'inline-flex' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'all 0.2s ease', display: 'inline-flex' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>

          {/* Right Column - Avatar with Dual Orbiting Rings & Floating Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '460px',
            }}
          >
            {/* Ambient Background Aura behind Avatar */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #a855f7 0%, #06b6d4 50%, #ec4899 80%, transparent 100%)',
                opacity: 0.4,
                filter: 'blur(60px)',
                zIndex: 0,
                animation: 'pulseAura 6s infinite alternate',
              }}
            />

            {/* Orbiting Ring 1 (Clockwise) */}
            <div
              style={{
                position: 'absolute',
                width: '370px',
                height: '370px',
                borderRadius: '50%',
                border: '1px dashed rgba(6, 182, 212, 0.35)',
                zIndex: 1,
                pointerEvents: 'none',
                animation: 'rotateOrbit 22s linear infinite',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-7px',
                  left: '50%',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 15px var(--accent-cyan)',
                }}
              />
            </div>

            {/* Orbiting Ring 2 (Counter-Clockwise) */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                zIndex: 1,
                pointerEvents: 'none',
                animation: 'rotateOrbitReverse 28s linear infinite',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '50%',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#ec4899',
                  boxShadow: '0 0 15px #ec4899',
                }}
              />
            </div>

            {/* Glowing Ring Frame with Choppari Madhu's Photo */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: 'clamp(270px, 33vw, 340px)',
                height: 'clamp(270px, 33vw, 340px)',
                borderRadius: '50%',
                padding: '8px',
                background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #06b6d4 100%)',
                boxShadow: '0 0 45px rgba(168, 85, 247, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={avatarImg}
                alt={PORTFOLIO_DATA.profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  borderRadius: '50%',
                  border: '4px solid var(--bg-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              />
            </div>

            {/* Floating Top-Right Code Terminal Card */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                zIndex: 3,
                background: 'rgba(10, 13, 22, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'var(--radius-md)',
                padding: '0.9rem 1.25rem',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(168, 85, 247, 0.2)',
                maxWidth: '255px',
              }}
            >
              {/* Window Dots */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div className="mono" style={{ fontSize: '0.78rem', lineHeight: 1.5, color: '#94a3b8' }}>
                <div><span style={{ color: '#ec4899' }}>const</span> dev = &#123;</div>
                <div style={{ paddingLeft: '10px' }}>name: <span style={{ color: '#38bdf8' }}>"Choppari Madhu"</span>,</div>
                <div style={{ paddingLeft: '10px' }}>role: <span style={{ color: '#a855f7' }}>"React Developer"</span>,</div>
                <div style={{ paddingLeft: '10px' }}>exp: <span style={{ color: '#10b981' }}>"{PORTFOLIO_DATA.profile.yearsOfExperience} Years"</span>,</div>
                <div style={{ paddingLeft: '10px' }}>clients: <span style={{ color: '#f59e0b' }}>"Yes Bank, IDFC..."</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Floating Metric: 6+ Years Experience */}
            <div
              className="animate-float card-glow-purple"
              style={{
                position: 'absolute',
                bottom: '25px',
                right: '-15px',
                zIndex: 3,
                background: 'rgba(16, 20, 34, 0.92)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.85rem 1.35rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
                }}
              >
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.1 }}>
                  {PORTFOLIO_DATA.profile.yearsOfExperience} Years
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>React Experience</div>
              </div>
            </div>

            {/* Orbiting Reactions */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '-8px',
                zIndex: 3,
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#ec4899',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(236, 72, 153, 0.6)',
              }}
            >
              <Heart size={18} fill="currentColor" />
            </div>

            <div
              style={{
                position: 'absolute',
                top: '28%',
                right: '12px',
                zIndex: 3,
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.6)',
              }}
            >
              <Star size={18} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
