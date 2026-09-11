import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Banking & 3D Web' },
    { id: 'ai', label: 'Voice & AI Systems' },
    { id: 'frontend', label: 'Fintech & Loan' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '7rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Projects</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of web applications, interactive 3D dashboards, and voice AI systems I've built.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? '1px solid var(--accent-magenta)' : '1px solid var(--border-color)',
                  background: isActive ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)' : 'var(--bg-surface)',
                  color: isActive ? '#f472b6' : 'var(--text-muted)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 20px rgba(236, 72, 153, 0.3)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.borderColor = 'var(--border-highlight)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Interactive Card Glows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-panel ${idx % 3 === 0 ? 'card-glow-purple' : idx % 3 === 1 ? 'card-glow-cyan' : 'card-glow-magenta'}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
              }}
            >
              {/* Project Preview Banner */}
              <div
                style={{
                  height: '190px',
                  background: project.imageBgColor || 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle Animated Mesh Grid */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    opacity: 0.4,
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                  {project.client ? (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.55)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {project.client}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.4)',
                        color: '#ffffff',
                      }}
                    >
                      {project.category}
                    </span>
                  )}

                  {project.metrics && (
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(16, 185, 129, 0.25)',
                        border: '1px solid rgba(16, 185, 129, 0.45)',
                        color: '#6ee7b7',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <Sparkles size={12} />
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title inside banner */}
                <div style={{ zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div
                style={{
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  gap: '1.35rem',
                }}
              >
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-color)',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                        e.currentTarget.style.color = 'var(--accent-cyan)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-main)';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', gap: '0.4rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>Inspect Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
