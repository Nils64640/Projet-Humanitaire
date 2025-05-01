import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroRef.current.style.opacity = `${1 - scrollY / 700}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show content immediately
    setShowContent(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url(https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00026.jpeg?raw=true)',
          filter: 'brightness(0.6)' 
        }}
      ></div>
      
      {/* Content */}
      <div ref={heroRef} className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Main title with gradient and animation */}
            <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 transform-none' : 'opacity-0'}`}>
              <h1 className="relative inline-block">
                <span className="block text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-300% animate-gradient">
                  La Maraude du Cœur
                </span>
                <span className="block text-white text-xl md:text-2xl mt-2 font-light tracking-wide">
                  Bordeaux
                </span>
              </h1>
              
              {/* Subtitle with fade-in animation */}
              <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-2xl mx-auto transition-all duration-1000 delay-300">
                Au service des personnes en situation de précarité depuis 2017
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;