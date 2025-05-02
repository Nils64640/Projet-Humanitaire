import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Users,
  Heart,
  MessageSquare,
  Lightbulb,
  HandHeart,
  Smile
} from 'lucide-react';

interface SoftSkill {
  name: string;
  rating: number;
  icon: JSX.Element;
}

const Presentation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const softSkills: SoftSkill[] = [
    { name: "Empathie et écoute", rating: 5, icon: <Heart className="w-5 h-5" /> },
    { name: "Travail d'équipe", rating: 5, icon: <Users className="w-5 h-5" /> },
    { name: "Communication bienveillante", rating: 4, icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Adaptabilité", rating: 4, icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Engagement social", rating: 5, icon: <HandHeart className="w-5 h-5" /> },
    { name: "Relationnel", rating: 5, icon: <Smile className="w-5 h-5" /> }
  ];

  return (
    <section 
      id="presentation" 
      ref={sectionRef}
      className={`py-20 md:py-28 relative min-h-screen transition-opacity duration-1000 overflow-hidden ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      
      {/* Enhanced animated particles with more movement */}
      <div className="particle-container absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle-drift"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `rgba(168, 85, 247, ${0.2 + Math.random() * 0.4})`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--drift-x': `${-200 + Math.random() * 400}px`,
              '--drift-y': `${-200 + Math.random() * 400}px`,
              '--duration': `${10 + Math.random() * 10}s`,
            } as any}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            {/* Profile Photo with enhanced styling */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 transform transition-transform duration-500 hover:scale-105">
                <img
                  src="https://github.com/Nils64640/photo-humanitaire/blob/main/photo/P1151967.jpg?raw=true"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Nils Attallah
              </span>
              <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
            </h2>
            <p className="text-gray-300 mt-4">Etudiant Engagé</p>
          </div>

          {/* Introduction with enhanced glass effect */}
          <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl mb-8 hover:border-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
               Passionné par le domaine de la cybersécurité, j'ai un goût pour la précision des détails
              et mon esprit analytique m'aide à travailler dans un environnement complexe.
              </p>
              <p className="text-gray-300 leading-relaxed">
               Discret et autonome, je suis capable de m'approprier un nouvel environnement
              rapidement. La pratique de sports d'équipe (rugby, handball) m'a appris à respecter l'avis
              des autres, à travailler en équipe sur un même objectif et doté d'un bon relationnel.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Curieux et toujours en quête de nouvelles expériences, j'aime relever des défis et apprendre
                constamment.
              </p>
            </div>
          </div>

          {/* Soft Skills with enhanced animations */}
          <div className={`bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 transition-all duration-500 hover:border-purple-500/20 ${
            isInView ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-semibold text-purple-300 mb-6">Qualités Humaines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-800/50 p-6 rounded-lg border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                              i < skill.rating 
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-400 group-hover:to-pink-400'
                                : 'bg-gray-700 group-hover:bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
