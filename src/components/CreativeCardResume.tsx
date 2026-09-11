import React from 'react';
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Link as LinkIcon, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  ExternalLink, 
  Sparkles,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { TechIcon } from './TechIcons';
import avatarImg from '../assets/developer-avatar.jpg';

interface CreativeCardResumeProps {
  onBackToFullPortfolio: () => void;
}

export const CreativeCardResume: React.FC<CreativeCardResumeProps> = ({ onBackToFullPortfolio }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b0f19 0%, #111827 50%, #1e1b4b 100%)',
        padding: '2rem 1rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Top Floating Control Bar */}
      <div
        className="no-print"
        style={{
          width: '100%',
          maxWidth: '820px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <button
          type="button"
          onClick={onBackToFullPortfolio}
          className="btn btn-secondary"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem', display: 'inline-flex', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} />
          <span>Full Interactive Portfolio</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              padding: '0.35rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(168, 85, 247, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#d8b4fe',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Sparkles size={13} />
            <span>Mobile QR Resume View</span>
          </span>

          <button
            type="button"
            onClick={handlePrint}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
          >
            <Printer size={15} />
            <span>Print PDF</span>
          </button>
        </div>
      </div>

      {/* Main Creative Resume Card (Matches User's Reference Template) */}
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
          overflow: 'hidden',
          position: 'relative',
          color: '#1e293b',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {/* Wavy Gradient Header Banner */}
        <div
          style={{
            position: 'relative',
            height: '160px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 40%, #8b5cf6 75%, #a855f7 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Wave SVG */}
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              bottom: 0,
              opacity: 0.25,
            }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.81,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: 'none', fill: '#ffffff' }}
            />
          </svg>
        </div>

        {/* Profile Card Header Info (Avatar & Social Icons) */}
        <div
          style={{
            padding: '0 2rem',
            marginTop: '-65px',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          {/* Left Avatar & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid #ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                backgroundColor: '#f1f5f9',
                flexShrink: 0,
              }}
            >
              <img
                src={avatarImg}
                alt={PORTFOLIO_DATA.profile.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>

            <div style={{ paddingTop: '10px' }}>
              <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.1 }}>
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <div style={{ color: '#4f46e5', fontWeight: 700, fontSize: '1rem', marginTop: '0.25rem' }}>
                {PORTFOLIO_DATA.profile.role}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                {PORTFOLIO_DATA.profile.location} • {PORTFOLIO_DATA.profile.yearsOfExperience} Years Experience
              </div>
            </div>
          </div>

          {/* Social Media Circular Action Buttons (Matching Screenshot) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.5rem' }}>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#1e293b',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#0a66c2',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <button
              type="button"
              onClick={onBackToFullPortfolio}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#06b6d4',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              title="Full Portfolio"
            >
              <Sparkles size={18} />
            </button>

            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#10b981',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              title="Call"
            >
              <Phone size={18} />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#8b5cf6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* 2-Column Content Grid (Matching Reference Screenshot) */}
        <div
          style={{
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* LEFT COLUMN: About Me, Skills, Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* About Me */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.75rem',
                }}
              >
                <User size={20} />
                <span>About Me</span>
              </div>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {PORTFOLIO_DATA.profile.shortBio}
              </p>
            </div>

            {/* Skills Pills Cloud */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.85rem',
                }}
              >
                <Code size={20} />
                <span>Skills</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'React.js',
                  'JavaScript (ES6+)',
                  'Next.js',
                  'Redux Toolkit',
                  'Three.js (3D)',
                  'React Flow',
                  'ECharts',
                  'Flutter',
                  'React Native',
                  'Tailwind CSS',
                  'HTML5 & CSS3',
                  'SCSS / SASS',
                  'REST APIs',
                  'Context API',
                  'Zustand',
                  'Postman',
                  'Git & GitHub',
                  'Jest Testing'
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      border: '1px solid #e2e8f0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <TechIcon name={skill} size={15} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.75rem',
                }}
              >
                <GraduationCap size={20} />
                <span>Education</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                  B.Tech in Computer Science & Engineering
                </div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                  Samskruthi College of Engg and Technology (JNTUH), Hyderabad
                </div>
              </div>

              {/* Certifications Quick List */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#475569', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Award size={16} color="#7c3aed" />
                  <span>Verified Certifications</span>
                </div>
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      color: '#2563eb',
                      textDecoration: 'none',
                      padding: '0.3rem 0',
                    }}
                  >
                    <span>• {cert.title}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience & Quick Links Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Experience */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.75rem',
                }}
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                  React & Frontend Developer
                </div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.65rem' }}>
                  Credentek Software & Consultancy • Sep 2022 – Present
                </div>

                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Built responsive React & Flutter AI chatbot apps (<strong>Kitty & Tenali</strong>) with voice calling integration.</li>
                  <li>Engineered interactive <strong>Three.js 3D dashboard</strong> and <strong>React Flow</strong> diagrams for banking clients (Yes Bank, IDFC, IDBI).</li>
                  <li>Implemented state management with <strong>Redux Toolkit</strong> and data visualization with <strong>ECharts</strong>.</li>
                  <li>Developed loan processing portal with document upload/download and advanced customer search for <strong>Jana Bank</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Quick Links Card (Matching Bottom Right in Screenshot) */}
            <div
              style={{
                background: '#f0f7ff',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #dbeafe',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  marginBottom: '1rem',
                }}
              >
                <LinkIcon size={18} />
                <span>Quick Links</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {/* GitHub */}
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem',
                    background: '#ffffff',
                    borderRadius: '10px',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <GithubIcon size={16} color="#0f172a" />
                    <span>GitHub</span>
                  </div>
                  <ArrowRight size={15} color="#64748b" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem',
                    background: '#ffffff',
                    borderRadius: '10px',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <LinkedinIcon size={16} color="#0a66c2" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowRight size={15} color="#64748b" />
                </a>

                {/* Interactive Portfolio */}
                <button
                  type="button"
                  onClick={onBackToFullPortfolio}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem',
                    background: '#ffffff',
                    borderRadius: '10px',
                    color: '#1e293b',
                    border: '1px solid #e2e8f0',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Sparkles size={16} color="#06b6d4" />
                    <span>Interactive 3D Portfolio</span>
                  </div>
                  <ArrowRight size={15} color="#64748b" />
                </button>

                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem',
                    background: '#ffffff',
                    borderRadius: '10px',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Mail size={16} color="#8b5cf6" />
                    <span>Email ({PORTFOLIO_DATA.profile.email})</span>
                  </div>
                  <ArrowRight size={15} color="#64748b" />
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem',
                    background: '#ffffff',
                    borderRadius: '10px',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Phone size={16} color="#10b981" />
                    <span>Call ({PORTFOLIO_DATA.profile.phone})</span>
                  </div>
                  <ArrowRight size={15} color="#64748b" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
