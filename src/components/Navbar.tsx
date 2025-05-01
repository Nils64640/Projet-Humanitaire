import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { id: 'presentation', label: 'Présentation' },
    { id: 'association', label: 'L\'Association' },
    { id: 'mission', label: 'Mission' },
    { id: 'actions', label: 'Actions' },
    { id: 'humanitarian-actions', label: 'Actions humanitaires' },
    { id: 'experience', label: 'Expérience' }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const checkActiveSection = () => {
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    checkActiveSection();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('presentation')}
          >
            <div className="relative flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                La Maraude
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative">
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-px transform origin-left transition-transform duration-300 ${
                    activeSection === link.id
                      ? 'scale-x-100 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'scale-x-0 bg-white/50 group-hover:scale-x-100'
                  }`}></span>
                </span>
              </button>
            ))}
          </div>

          {/* Right side - can be used for additional elements */}
          <div className="w-20 md:flex items-center justify-end">
            {/* Mobile menu button */}
            <button 
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen 
                ? <X size={20} className="text-white/80 hover:text-white transition-colors" />
                : <Menu size={20} className="text-white/80 hover:text-white transition-colors" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;