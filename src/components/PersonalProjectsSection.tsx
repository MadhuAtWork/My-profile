import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  Gamepad2,
  PieChart,
  Utensils,
  HardDrive,
  ShieldCheck,
  Music,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Code2,
  Pause,
  Play
} from 'lucide-react';
import { PORTFOLIO_DATA, type PersonalProject } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const PersonalProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projects = PORTFOLIO_DATA.personalProjects || [];
  const cardWidth = 360; // Approximate card width + gap in px

  // Map icon strings to Lucide components
  const renderIcon = (name: string, color: string) => {
    const size = 22;
    switch (name) {
      case 'Mic':
        return <Mic size={size} color={color} />;
      case 'Gamepad2':
        return <Gamepad2 size={size} color={color} />;
      case 'PieChart':
        return <PieChart size={size} color={color} />;
      case 'Utensils':
        return <Utensils size={size} color={color} />;
      case 'HardDrive':
        return <HardDrive size={size} color={color} />;
      case 'ShieldCheck':
        return <ShieldCheck size={size} color={color} />;
      case 'Music':
        return <Music size={size} color={color} />;
      default:
        return <Code2 size={size} color={color} />;
    }
  };

  // Scroll to index
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetScroll = index * (cardWidth + 24);
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  // Next & Prev buttons
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    scrollToIndex(prevIdx);
  };

  // 2-second automatic scrolling interval
  useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % projects.length;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const targetScroll = nextIndex * (cardWidth + 24);
          container.scrollTo({
            left: targetScroll,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 2000); // 2-second automatic scroll duration requested

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  // Sync index on manual user scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const activeIdx = Math.round(container.scrollLeft / (cardWidth + 24));
    if (activeIdx !== currentIndex && activeIdx >= 0 && activeIdx < projects.length) {
      setCurrentIndex(activeIdx);
    }
  };

  return (
    <section
      id="personal-projects"
      style={{
        padding: '5rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.7) 100%)',
      }}
    >
      <div className="container">
        {/* Header with Navigation Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div className="section-tag" style={{ marginBottom: '0.75rem' }}>
              <Code2 size={15} />
              <span>Personal Projects & Creations</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem', fontSize: '2.2rem' }}>
              Personal <span className="text-gradient">Creations & Apps</span>
            </h2>
            <p className="section-subtitle" style={{ margin: 0, maxWidth: '600px' }}>
              Independent web apps, interactive canvas games, audio streaming visualizers, and personal utility tools built with modern React.
            </p>
          </div>

          {/* Autoplay status & Navigation Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: isPaused ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
              <span>{isPaused ? 'Paused' : 'Auto 2s'}</span>
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="btn btn-secondary btn-icon"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="btn btn-secondary btn-icon"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Auto-Scrolling Carousel Row */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '1rem 0.5rem 2rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {projects.map((project: PersonalProject, idx: number) => {
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  flex: '0 0 350px',
                  maxWidth: '350px',
                  scrollSnapAlign: 'start',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isCurrent
                    ? `1px solid ${project.accentColor}`
                    : '1px solid var(--border-color)',
                  boxShadow: isCurrent
                    ? `0 12px 35px -5px ${project.accentColor}33, 0 0 15px ${project.accentColor}22`
                    : 'var(--shadow-md)',
                  transform: isCurrent ? 'translateY(-6px) scale(1.01)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  background: 'var(--bg-surface)',
                }}
              >
                {/* Card Top Banner with Gradient & Icon */}
                <div
                  style={{
                    padding: '1.5rem',
                    background: project.gradient,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Grid Effect */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                      opacity: 0.3,
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    {/* Icon container with pulsing glow */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(15, 23, 42, 0.75)',
                        border: `1px solid ${project.accentColor}66`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 20px ${project.accentColor}44`,
                      }}
                    >
                      {renderIcon(project.iconName, project.accentColor)}
                    </div>

                    {/* Metric pill */}
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: `1px solid ${project.accentColor}55`,
                        color: project.accentColor,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div style={{ marginTop: '1.25rem', position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.3rem 0' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      margin: '0 0 1.25rem 0',
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights / Metric */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      marginBottom: '1.25rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                    }}
                  >
                    <Sparkles size={13} color={project.accentColor} />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-main)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '0.55rem 0.75rem',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        borderRadius: '10px',
                      }}
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: '0.55rem 0.75rem',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        borderRadius: '10px',
                        background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}cc 100%)`,
                        border: 'none',
                        color: '#ffffff',
                      }}
                    >
                      <span>Live App</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          {projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to project ${p.title}`}
              style={{
                width: idx === currentIndex ? '28px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                background: idx === currentIndex ? p.accentColor : 'var(--border-color)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: idx === currentIndex ? `0 0 10px ${p.accentColor}` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
