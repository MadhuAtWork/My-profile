import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PersonalProjectsSection } from './components/PersonalProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeQRModal } from './components/ResumeQRModal';
import { ATSResumePrintView } from './components/ATSResumePrintView';
import { CreativeCardResume } from './components/CreativeCardResume';
import { ParticleBackground } from './components/ParticleBackground';
import './App.css';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'portfolio' | 'card'>('portfolio');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Check URL hash or search params for #resume or ?view=card (QR Code scan landing)
  useEffect(() => {
    const checkHash = () => {
      if (
        window.location.hash === '#resume' ||
        window.location.hash === '#card' ||
        window.location.search.includes('view=card') ||
        window.location.search.includes('view=resume')
      ) {
        setViewMode('card');
      } else {
        setViewMode('portfolio');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenCardResume = () => {
    window.location.hash = '#resume';
    setViewMode('card');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFullPortfolio = () => {
    window.location.hash = '#home';
    setViewMode('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Interactive Constellation Particle Canvas */}
      <ParticleBackground />

      {/* Main Interactive Website */}
      {viewMode === 'card' ? (
        /* Creative Card Resume Mode (QR Code Landing Screen) */
        <div className="no-print" style={{ position: 'relative', zIndex: 1 }}>
          <CreativeCardResume onBackToFullPortfolio={handleBackToFullPortfolio} />
        </div>
      ) : (
        /* Full Cosmic 3D & Interactive Portfolio Mode */
        <div className="no-print" style={{ position: 'relative', zIndex: 1 }}>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            openResumeModal={() => setIsResumeModalOpen(true)}
            onOpenCardResume={handleOpenCardResume}
          />

          <main>
            <Hero openResumeModal={() => setIsResumeModalOpen(true)} />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <PersonalProjectsSection />
            <EducationSection />
            <ContactSection />
          </main>

          <Footer />

          {/* Modal for QR Code generation & ATS Resume */}
          <ResumeQRModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
            onOpenCardResume={handleOpenCardResume}
          />
        </div>
      )}

      {/* Dedicated ATS Resume View for @media print */}
      <ATSResumePrintView />
    </>
  );
}

export default App;
