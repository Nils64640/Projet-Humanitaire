import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, MessageSquare, Briefcase } from 'lucide-react';

const PersonalAspect = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900 to-black/60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-purple-600/5 animate-gradient bg-300%"></div>
      
      {/* Rotating gradient circles */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-600/10 rounded-full blur-3xl animate-rotate origin-center"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-600/10 rounded-full blur-3xl animate-rotate origin-center" style={{ animationDirection: 'reverse' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aspect personnel
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-12">
            {/* Impact sur les Bénévoles */}
            <div 
              className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Impact sur les Bénévoles</h3>
                  <p className="text-gray-300">
                    L'engagement au sein de cette association a un impact profond sur les
                    bénévoles. Beaucoup témoignent d'une véritable transformation personnelle à
                    travers cette expérience de solidarité.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Compétences développées */}
            <div 
              className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Compétences développées</h3>
                  <p className="text-gray-300 mb-6">
                    Au-delà de l'enrichissement humain, les bénévoles acquièrent des compétences
                    précieuses :
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-purple-300 mb-2">Compétences relationnelles</h4>
                      <p className="text-gray-300">
                        Écoute active, communication bienveillante, gestion de situations sensibles
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-purple-300 mb-2">Compétences organisationnelles</h4>
                      <p className="text-gray-300">
                        Coordination en équipe, planification d'actions, capacité d'adaptation
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-purple-300 mb-2">Connaissances</h4>
                      <p className="text-gray-300">
                        Compréhension des mécanismes d'exclusion sociale et du fonctionnement des dispositifs d'aide existants
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <p className="text-gray-300">
                      Les actions réalisées m'ont montré l'importance de la constance : la régularité
                      de leur engagement est fondamentale pour établir une relation de confiance,
                      première étape vers tout changement positif.
                    </p>
                    <p className="text-gray-300">
                      J'ai réalisé aussi l'importance de la valeur du travail en réseau : la
                      collaboration avec d'autres acteurs (associations, services sociaux,
                      professionnels de santé) est indispensable pour apporter des réponses
                      complètes.
                    </p>
                    <p className="text-gray-300">
                      L'adaptation aux besoins réels est également primordiale : les actions doivent
                      constamment s'ajuster aux besoins exprimés par les personnes, plutôt que de
                      proposer des réponses standardisées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalAspect;