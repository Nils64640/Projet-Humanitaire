import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { AlertTriangle, Trophy, Lightbulb } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/90 to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5 animate-gradient bg-300%"></div>
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle-drift"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: `rgba(${
                Math.random() > 0.5 ? '147, 51, 234' : '79, 70, 229'
              }, ${0.3 + Math.random() * 0.4})`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--drift-x': `${-150 + Math.random() * 300}px`,
              '--drift-y': `${-150 + Math.random() * 300}px`,
              '--duration': `${20 + Math.random() * 20}s`,
            } as any}
          ></div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-96 h-96 rounded-full animate-pulse-glow"
            style={{
              background: `radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${1 + Math.random() * 0.5})`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-[150px] h-[1px] animate-shooting-star"
            style={{
              background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.5), transparent)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s',
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              Retour d'expérience
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Défis rencontrés */}
            <div 
              className={`group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-700 hover:bg-gray-800/60 hover:border-indigo-500/30 ${
                isInView ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 bg-red-900/30 p-3 rounded-lg group-hover:bg-red-900/40 transition-colors duration-300">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-300 group-hover:text-red-200 transition-colors duration-300">Défis rencontrés</h3>
                </div>
                
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Une telle action sur le terrain met face à diverses difficultés :
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-900/40 text-white text-sm font-bold group-hover:bg-red-900/50 transition-colors duration-300">
                      1
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      La complexité des situations: chaque personne rencontrée présente une
                      situation unique, souvent imbriquée dans des problématiques multiples.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-900/40 text-white text-sm font-bold group-hover:bg-red-900/50 transition-colors duration-300">
                      2
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Les limites de l'action: face à certaines situations, nous devons reconnaître les
                      limites de cette intervention et orienter vers des services spécialisés.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-900/40 text-white text-sm font-bold group-hover:bg-red-900/50 transition-colors duration-300">
                      3
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      La charge émotionnelle: l'engagement auprès de personnes en grande
                      précarité peut être émotionnellement éprouvant pour les bénévoles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-500/2 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
            
            {/* Réussites */}
            <div 
              className={`group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-700 hover:bg-gray-800/60 hover:border-green-500/30 ${
                isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 bg-green-900/30 p-3 rounded-lg group-hover:bg-green-900/40 transition-colors duration-300">
                    <Trophy className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-200 transition-colors duration-300">Réussites</h3>
                </div>
                
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Malgré ces défis, la maraude peut revendiquer des résultats encourageants:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-900/40 text-white text-sm font-bold group-hover:bg-green-900/50 transition-colors duration-300">
                      1
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Parcours de réinsertion: chaque année, plusieurs personnes
                      accompagnées retrouvent un logement ou un emploi grâce à son soutien.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-900/40 text-white text-sm font-bold group-hover:bg-green-900/50 transition-colors duration-300">
                      2
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Lien social restauré: des personnes isolées retrouvent confiance et dignité à
                      travers les relations nouées avec les bénévoles.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-900/40 text-white text-sm font-bold group-hover:bg-green-900/50 transition-colors duration-300">
                      3
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Prévention: une présence régulière permet de détecter et d'intervenir
                      précocement dans des situations qui pourraient se dégrader.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-green-500/2 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
            
            {/* Leçons apprises */}
            <div 
              className={`group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-700 hover:bg-gray-800/60 hover:border-blue-500/30 ${
                isInView ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-900/40 transition-colors duration-300">
                    <Lightbulb className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">Leçons apprises</h3>
                </div>
                
                <div className="text-gray-300 space-y-4 h-[360px] overflow-y-auto pr-2 styled-scrollbar">
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    La maraude a parfaitement répondu à mon besoin : agir concrètement, sur le long
                    terme, sans se contenter de satisfaire sa conscience de façon illusoire.
                  </p>
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                   Et ce n'est pas un échange à sens unique loin de là ! A partager avec les bénéficiaires, ce sont tout un tas d'histoires personnelles, souvent dramatiques, des leçons d'humilité que j'ai reçues. De quoi largement relativiser nos petits tracas quotidiens face à leur détresse réelle. Avec en prime, la sensation unique de faire quelque chose de juste sans en attendre une quelconque récompense. 
                  </p>
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    On dit souvent que "les jeunes ne s'engagent plus". Par le biais de ce projet
                    humanitaire, j'ai eu l'opportunité de prouver le contraire.  Il est normal d'être choqué en voyant à la télé tous les drames qui se produisent aux quatre coins du monde. Mais parfois, la détresse est juste au coin de notre rue. Et celle-là peut beaucoup plus facilement être soulagée.
                  </p>
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    Participer à une maraude, c'est comprendre que la pauvreté, l'exclusion et
                    l'isolement ne sont pas des phénomènes lointains, mais des réalités qui se
                    manifestent à chaque coin de rue, dans chaque ville, dans chaque quartier. C'est prendre conscience qu'il existe des personnes qui, malgré tous leurs efforts, n'ont plus les moyens d'être entendues, d'être vues. Mais c'est aussi comprendre qu'un simple geste, une écoute bienveillante, une parole rassurante, peuvent parfois constituer un véritable changement dans leur quotidien.
                  </p>
                  <p className="group-hover:text-gray-200 transition-colors duration-300">
                    Pour moi, cet engagement représente bien plus qu'un acte ponctuel. C'est une
                    expérience qui transforme quelqu'un. Ce n'est pas seulement une action sociale,
                    mais un apprentissage profond de l'humilité et de l'empathie.
                  </p>
                </div>
              </div>

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-500/2 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
          
          {/* Évolution de l'approche */}
          <div 
            className={`mt-12 relative overflow-hidden bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl transition-all duration-700 group hover:border-indigo-500/30 hover:bg-gray-800/40 ${
              isInView ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">Évolution de l'approche</h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                Au fil des années, leur méthodologie s'est affinée :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/60 p-5 rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/30 transition-colors duration-300">
                  <h4 className="text-lg font-medium text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors duration-300">De l'aide ponctuelle à l'accompagnement</h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Les bénévoles sont passés d'une logique d'assistance immédiate à une démarche d'accompagnement sur le long terme.</p>
                </div>
                <div className="bg-gray-800/60 p-5 rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/30 transition-colors duration-300">
                  <h4 className="text-lg font-medium text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors duration-300">Implication des bénéficiaires</h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Ils cherchent désormais à impliquer les personnes aidées dans la conception même de leurs actions.</p>
                </div>
                <div className="bg-gray-800/60 p-5 rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/30 transition-colors duration-300">
                  <h4 className="text-lg font-medium text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors duration-300">Formation continue</h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">La formation des bénévoles a été renforcée pour mieux répondre aux situations complexes rencontrées.</p>
                </div>
              </div>
            </div>

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/2 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-32 translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
