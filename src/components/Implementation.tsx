import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Map, Clock, BookOpen, Users, Handshake } from 'lucide-react';

const Implementation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="implementation"
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-gray-900 to-black/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mise en œuvre des actions
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-12">
            {/* Actions concrètes */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Les actions concrètes menées</h3>
              <p className="text-gray-300 mb-6">
                Pour réaliser leur mission, La Maraude du Cœur Bordeaux a mis en place plusieurs
                programmes d'action qui répondent aux besoins identifiés sur le terrain. Chaque
                programme est coordonné par une équipe dédiée de bénévoles et s'adapte
                continuellement aux réalités rencontrées.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Map className="w-6 h-6 text-pink-500" />
                    <h4 className="text-lg font-medium text-white">Maraude Hebdomadaire</h4>
                  </div>
                  <p className="text-gray-300">
                    Organisation d'une maraude par semaine dans différents quartiers pour aller à la rencontre des personnes sans-abri.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-pink-500" />
                    <h4 className="text-lg font-medium text-white">Permanences Sociales</h4>
                  </div>
                  <p className="text-gray-300">
                    Tenue de permanences bi-mensuelles où les personnes
                    peuvent venir chercher de l'aide pour leurs démarches
                    administratives.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-pink-500" />
                    <h4 className="text-lg font-medium text-white">Ateliers d'Insertion</h4>
                  </div>
                  <p className="text-gray-300">
                    Animation d'ateliers visant à développer des compétences
                    et favoriser la réinsertion sociale et professionnelle.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Méthodes utilisées */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Méthodes utilisées</h3>
              <p className="text-gray-300 mb-6">
                Une approche humaine et personnalisée est privilégiée, basée sur l'écoute active
                et le respect de la dignité de chaque personne. Les actions reposent sur trois
                piliers essentiels :
              </p>
              
              <div className="space-y-4 pl-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-white">L'aide d'urgence pour répondre aux besoins immédiats</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-white">L'accompagnement pour favoriser l'autonomie</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-white">La prévention pour agir sur les causes de l'exclusion</p>
                </div>
              </div>
            </div>
            
            {/* Partenariats */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Partenariats</h3>
              <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-start gap-4">
                  <Handshake className="w-10 h-10 text-pink-500 flex-shrink-0" />
                  <p className="text-gray-300">
                    La Maraude du Cœur Bordeaux collabore étroitement avec d'autres
                    associations, les services sociaux, les collectivités locales et des
                    entreprises partenaires afin de mutualiser les ressources et d'optimiser
                    l'impact de ses actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;