import React from 'react';
import { User, Zap, Server, ShieldCheck, Smartphone, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Zap size={24} color="var(--accent-cyan)" />,
      title: "High-Speed Performance",
      description: "Optimized bundle sizes, lightning-fast Core Web Vitals, and responsive UI built to load in milliseconds on mobile."
    },
    {
      icon: <Server size={24} color="var(--accent-purple)" />,
      title: "Scalable Architecture",
      description: "Robust REST & GraphQL APIs using NestJS, Node.js, and PostgreSQL designed for enterprise scalability."
    },
    {
      icon: <Smartphone size={24} color="var(--accent-magenta)" />,
      title: "Mobile-First Design",
      description: "Adaptive interfaces tailored for recruiters and mobile users with touch-friendly interactions."
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-emerald)" />,
      title: "Clean & Maintainable Code",
      description: "Strict TypeScript types, automated testing, clear documentation, and standard design patterns."
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Frontend and React Developer with 6+ years of experience building modern, high-performance web and mobile applications.
          </p>
        </div>

        {/* Bio & Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Detailed Bio Card */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Hello! I'm <span className="text-cyan">{PORTFOLIO_DATA.profile.name}</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              I am a passionate <strong>React & Frontend Developer</strong> with {PORTFOLIO_DATA.profile.yearsOfExperience} years of experience building modern web applications, high-performance interactive interfaces, and mobile apps.
            </p>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              My technical expertise spans modern frontend frameworks like <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>Next.js</strong>, and <strong>Flutter</strong>, combined with interactive visualizations using <strong>Three.js</strong> and <strong>React Flow</strong>. I specialize in crafting pixel-perfect, accessible, and fast enterprise applications.
            </p>

            {/* Quick Bullet Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                'React & Next.js Architecture',
                'Redux Toolkit & State Management',
                'Three.js & 3D Web Visuals',
                'React Flow & Interactive Node UI',
                'Flutter & React Native Mobile',
                'RESTful APIs & Performance Tuning'
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle size={16} color="var(--accent-cyan)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {h.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{h.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
