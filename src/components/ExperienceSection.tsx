import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '7rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Leading frontend architecture, complex state management, and real-time visualization systems for enterprise banking and technology initiatives.
          </p>
        </div>

        {/* Timeline Layout with Glowing Beam */}
        <div
          style={{
            maxWidth: '880px',
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            position: 'relative',
          }}
        >
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel card-glow-purple"
              style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              {/* Highlight gradient ribbon on top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--gradient-brand)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(168, 85, 247, 0.2)',
                        color: 'var(--accent-purple)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Current Role
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.45rem', color: '#ffffff' }}>
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Building2 size={16} />
                      {exp.company}
                    </span>
                    <span style={{ color: 'var(--text-dim)' }}>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 500 }}>
                      <MapPin size={15} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.18)',
                    border: '1px solid rgba(16, 185, 129, 0.45)',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <Calendar size={15} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Impact Bullet Points */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  marginBottom: '2rem',
                }}
              >
                {exp.description.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--accent-purple)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags Used in Role */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-purple)';
                      e.currentTarget.style.color = 'var(--accent-purple)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
