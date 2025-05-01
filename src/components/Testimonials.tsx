import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/80 to-black/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern-waves opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
               Parole de Bénévole
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div 
            className={`bg-gray-900/40 backdrop-blur-md p-8 md:p-10 rounded-xl border border-white/10 shadow-xl transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 bg-pink-600/20 p-4 rounded-full">
                <Quote className="w-10 h-10 text-pink-500" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center italic text-gray-300 mb-6">
                "Je suis fière d'être membre de la MDCB car c'est une association a taille humaine avec des bénévoles exceptionnels qui donnent tout ce qu'ils ont pour aider les plus démunis"
              </blockquote>
              
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-600 my-6"></div>
              
              <p className="text-lg text-purple-300 font-medium">Lilou, bénévole depuis 5 ans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;