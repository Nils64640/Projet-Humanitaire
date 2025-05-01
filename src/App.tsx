import { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Association from './components/Association';
import LegalStatus from './components/LegalStatus';
import Mission from './components/Mission';
import Implementation from './components/Implementation';
import PersonalChoice from './components/PersonalChoice';
import FieldActions from './components/FieldActions';
import Organization from './components/Organization';
import MaraudeProcess from './components/MaraudeProcess';
import HumanitarianActions from './components/HumanitarianActions';
import Experience from './components/Experience';
import PersonalAspect from './components/PersonalAspect';
import ProfessionalValue from './components/ProfessionalValue';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        
        if (mainRef.current) {
          const sections = mainRef.current.querySelectorAll('section[id]');
          sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              setActiveSection(section.id);
            }
          });
        }
        
        ticking.current = false;
      });
      
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="app bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar scrollY={scrollY} />
      <Hero />
      <main ref={mainRef} className="relative z-10">
        <div className="relative">
          <div 
            className="fixed inset-0 pointer-events-none z-0 transform-gpu"
            style={{
              background: `radial-gradient(circle at 50% ${50 + (scrollY * 0.02)}%, rgba(168, 85, 247, 0.1), transparent 70%)`
            }}
          ></div>

          <div className="relative z-10 perspective-1000">
            <div className="transform-gpu">
              <Presentation />
              <Association />
              <LegalStatus />
              <Mission />
              <Implementation />
              <PersonalChoice />
              <FieldActions />
              <Organization />
              <MaraudeProcess />
              <HumanitarianActions />
              <Experience />
              <PersonalAspect />
              <ProfessionalValue />
              <Testimonials />
            </div>
          </div>

          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/20 rounded-full transform-gpu"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translate3d(0, ${scrollY * 0.1 * (i % 2 ? 1 : -1)}px, 0)`,
                  transition: 'transform 0.3s ease-out',
                }}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;