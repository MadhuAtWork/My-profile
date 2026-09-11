import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ATSResumePrintView: React.FC = () => {
  return (
    <div
      className="print-only"
      style={{
        display: 'none',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#111827',
        lineHeight: 1.4,
        padding: '0 20px',
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: '2px solid #334155', paddingBottom: '12px', marginBottom: '16px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '0 0 4px', color: '#0f172a' }}>
          {PORTFOLIO_DATA.profile.name}
        </h1>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2563eb', marginBottom: '6px' }}>
          {PORTFOLIO_DATA.profile.role} • {PORTFOLIO_DATA.profile.subtitle}
        </div>
        <div style={{ fontSize: '11px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <span>Email: {PORTFOLIO_DATA.profile.email}</span>
          <span>Phone: {PORTFOLIO_DATA.profile.phone}</span>
          <span>Location: {PORTFOLIO_DATA.profile.location}</span>
          <span>Portfolio: {PORTFOLIO_DATA.profile.resumeUrl}</span>
        </div>
      </div>

      {/* Summary */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', color: '#1e293b' }}>
          Professional Summary
        </h2>
        <p style={{ fontSize: '11px', color: '#334155' }}>
          {PORTFOLIO_DATA.profile.shortBio}
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', color: '#1e293b' }}>
          Technical Skills
        </h2>
        <div style={{ fontSize: '11px', color: '#334155' }}>
          <div><strong>Languages & Frameworks:</strong> React, TypeScript, JavaScript, Next.js, Node.js, NestJS, Express, Flutter</div>
          <div><strong>Databases & Cloud:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM, Docker, AWS, Git, CI/CD</div>
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', color: '#1e293b' }}>
          Work Experience
        </h2>
        {PORTFOLIO_DATA.experiences.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#0f172a' }}>
                {exp.role} — <span style={{ color: '#2563eb' }}>{exp.company}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>
                {exp.period} | {exp.location}
              </div>
            </div>
            <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '11px', color: '#334155' }}>
              {exp.description.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '2px' }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', color: '#1e293b' }}>
          Key Projects
        </h2>
        {PORTFOLIO_DATA.projects.map((proj) => (
          <div key={proj.id} style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
              {proj.title} <span style={{ fontSize: '10px', fontWeight: 'normal', color: '#64748b' }}>({proj.techStack.join(', ')})</span>
            </div>
            <div style={{ fontSize: '11px', color: '#334155' }}>
              {proj.description}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', color: '#1e293b' }}>
          Education & Certifications
        </h2>
        {PORTFOLIO_DATA.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '6px', fontSize: '11px', color: '#334155' }}>
            <strong>{edu.degree}</strong> — {edu.institution} ({edu.period})
          </div>
        ))}
      </div>
    </div>
  );
};
