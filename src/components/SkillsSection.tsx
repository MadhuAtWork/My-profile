import React, { useState } from 'react';
import { Cpu, Layers, Layout, Database, Boxes, Smartphone, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: <Layers size={14} /> },
    { id: 'frontend', label: 'Frontend & UI', icon: <Layout size={14} /> },
    { id: 'state', label: 'State Management', icon: <Database size={14} /> },
    { id: 'visualization', label: '3D & Charts', icon: <Boxes size={14} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={14} /> },
    { id: 'tools', label: 'Tools & APIs', icon: <Terminal size={14} /> },
  ];

  const filteredSkills = activeCategory === 'all'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '7rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={15} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Enterprise frontend frameworks, real-time 3D Three.js visualizers, and state architectures leveraged across banking and fintech projects.
          </p>
        </div>

        {/* Category Filter Tabs with Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  background: isActive ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)' : 'var(--bg-surface)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 20px rgba(6, 182, 212, 0.3)' : 'none',
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
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Real Brand Logos / Icons & Dynamic Hover Glow Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.35rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.borderColor = skill.pillColor || 'var(--accent-purple)';
                e.currentTarget.style.boxShadow = `0 12px 30px rgba(0, 0, 0, 0.4), 0 0 25px ${skill.pillColor ? skill.pillColor + '44' : 'rgba(168,85,247,0.3)'}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                {/* Tech Brand Icon Container */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: `1px solid ${skill.pillColor ? skill.pillColor + '55' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: `0 0 14px ${skill.pillColor ? skill.pillColor + '33' : 'transparent'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <TechIcon name={skill.name} size={24} color={skill.pillColor} />
                </div>

                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.02rem', color: 'var(--text-main)', lineHeight: 1.2 }}>
                    {skill.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', textTransform: 'capitalize', fontWeight: 600, marginTop: '0.2rem' }}>
                    {skill.category}
                  </div>
                </div>
              </div>

              {/* Skill Proficiency Badge */}
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  color: skill.level === 'Expert' ? '#6ee7b7' : 'var(--text-muted)',
                  border: skill.level === 'Expert' ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid var(--border-color)',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  flexShrink: 0,
                }}
              >
                {skill.level === 'Expert' && <Sparkles size={11} color="#10b981" />}
                <span>{skill.level}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
