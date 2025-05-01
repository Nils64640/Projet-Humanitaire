import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Scale as Scales, Award, Users } from 'lucide-react';

const LegalStatus = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const statusItems = [
    {
      icon: <Scales className="w-10 h-10 text-purple-400" />,
      title: "Association Loi 1901",
      content: "La Maraude du Cœur Bordeaux est une association à but non lucratif régie par la loi du 1er juillet 1901. Fondée en 2020, elle est déclarée en préfecture et agit en toute légalité pour mener ses actions solidaires sur le terrain. L'association fonctionne de manière transparente et indépendante, avec une gouvernance bénévole basée sur l'engagement collectif."
    },
    {
      icon: <Award className="w-10 h-10 text-purple-400" />,
      title: "Reconnaissance d'utilité publique",
      content: "Bien que La Maraude du Cœur Bordeaux ne soit pas, à ce jour, reconnue d'utilité publique, elle agit dans l'intérêt général en venant en aide aux personnes en grande précarité. L'association peut néanmoins recevoir des dons et s'appuie sur la générosité de ses soutiens pour poursuivre ses actions sur le terrain."
    },
    {
      icon: <Users className="w-10 h-10 text-purple-400" />,
      title: "Gouvernance et mode de fonctionnement",
      content: "La Maraude du Cœur Bordeaux repose sur un fonctionnement associatif simple et participatif. L'organisation est gérée collectivement par les membres actifs, sans structure hiérarchique formelle. Les décisions importantes sont prises lors de réunions régulières où chacun peut proposer, débattre et agir. Cette gouvernance souple permet à l'association de rester réactive et fidèle à ses valeurs de proximité et d'écoute. Cet organisme est référencé par le site \"Jeveuxaider.gouv.fr\" dans le cadre de l'opération \"missions de bénévolat\".\n\nLes bénévoles communiquent et tiennent informés de leurs actions par leur site internet et sur des réseaux comme Facebook, Instagram et LinkedIn. Les publications régulières qui y sont faites incitent de nombreuses personnes à s'investir dans cette mission, qu'il s'agisse d'un soutien financier, technique, logistique ou sur le terrain.\n\nLa création récente de \"Goodies\", c'est-à-dire d'objets publicitaires, disponibles à l'achat (avec adhésion ou non) a contribué à faire connaître cette association et à augmenter le nombre de bénévoles y contribuant."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900 to-black/40 pointer-events-none"></div>
      
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

      {/* Animated gradient circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Statut légal
          </span>
          <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            {statusItems.map((item, index) => (
              <div 
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-700 hover:bg-gray-800/50 hover:border-purple-500/30 ${
                  isInView ? `opacity-100 translate-x-0 delay-${index*150}` : index % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="relative bg-gray-800/80 p-4 rounded-lg border border-purple-500/20 transform group-hover:scale-105 transition-transform duration-500">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300 whitespace-pre-line group-hover:text-gray-200 transition-colors duration-300">{item.content}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalStatus;