import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Credentials</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering foundation backed by industry-recognized Meta and Coursera certifications in Flutter and Backend development.
          </p>
        </div>

        {/* Education & Certification Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            marginInline: 'auto',
          }}
        >
          {/* Education Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} color="var(--accent-cyan)" />
              <span>Education</span>
            </h3>

            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-color)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem' }}>
                    {edu.institution}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {edu.details.map((detail, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle size={14} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--accent-purple)" />
              <span>Professional Certifications</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-purple)',
                        flexShrink: 0,
                      }}
                    >
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                        {cert.title}
                      </h4>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flexShrink: 0, padding: '0.4rem 0.75rem' }}
                    title="Verify Certificate"
                  >
                    <span>Verify</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
