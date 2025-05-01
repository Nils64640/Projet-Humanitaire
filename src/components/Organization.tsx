import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, Box, GraduationCap, Network, Handshake } from 'lucide-react';

const Organization = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const orgSections = [
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: "Planification des maraudes",
      content: "La réussite de leurs interventions repose sur une organisation soignée en amont. Chaque action est soigneusement planifiée lors de réunions mensuelles regroupant les coordinateurs et les bénévoles référents.",
      highlights: ["Réunions mensuelles", "Coordination efficace", "Planning détaillé"]
    },
    {
      icon: <Box className="w-8 h-8 text-purple-400" />,
      title: "Logistique",
      content: "Une équipe dédiée à la logistique s'occupe de :\n- Gérer les approvisionnements (denrées alimentaires, vêtements, produits d'hygiène)\n- Préparer les repas et colis à distribuer\n- Organiser le transport du matériel et des équipes\n- Gérer les stocks et identifier les besoins",
      highlights: ["Gestion des stocks", "Distribution", "Transport"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: "Formation des bénévoles",
      content: "Chaque nouveau bénévole suit un parcours d'intégration qui comprend:\n- Une journée de sensibilisation aux réalités de la précarité\n- Une formation aux premiers secours\n- Une formation à l'écoute active et à la relation d'aide\n- Un accompagnement par un bénévole expérimenté lors des premières interventions",
      highlights: ["Sensibilisation", "Premiers secours", "Accompagnement"]
    },
    {
      icon: <Network className="w-8 h-8 text-purple-400" />,
      title: "Coordination des équipes",
      content: "L'organisation repose sur une structure en pôles, chacun ayant ses missions spécifiques:\n\nPôle Maraudes\nIl organise les parcours, gère les équipes et coordonne les interventions sur le terrain.\n\nPôle Accompagnement\nIl assure le suivi des personnes, l'aide administrative et les relations avec les partenaires sociaux.\n\nPôle Logistique\nCe pôle gère les approvisionnements, la préparation et le stockage du matériel.\n\nPôle Communication\nL'équipe s'occupe de la visibilité de l'association, des relations presse et de la collecte de fonds.",
      highlights: ["4 pôles distincts", "Missions spécifiques", "Coordination globale"]
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-400" />,
      title: "Ressources et partenariats",
      content: "Pour mener à bien leurs actions, La Maraude du Cœur Bordeaux développe activement :\n- Des partenariats avec des entreprises alimentaires pour les denrées\n- Des collaborations avec des services sociaux et structures d'hébergement\n- Des actions de collecte de dons (matériels et financiers)\n- Des demandes de subventions auprès des collectivités locale",
      highlights: ["Partenariats", "Collaborations", "Collecte de fonds"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Simple dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Animated particles */}
      <div className="particle-container absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle-drift"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              background: `rgba(168, 85, 247, ${0.2 + Math.random() * 0.3})`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--drift-x': `${-100 + Math.random() * 200}px`,
              '--drift-y': `${-100 + Math.random() * 200}px`,
              '--duration': `${15 + Math.random() * 10}s`,
            } as any}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Organisation en amont
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-12">
            {orgSections.map((section, index) => (
              <div 
                key={index}
                className={`group bg-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-700 hover:bg-gray-800/30 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index*150}` : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative p-8">
                  <div className="relative flex flex-col md:flex-row gap-8">
                    {/* Icon container with enhanced animation */}
                    <div className="flex-shrink-0">
                      <div className="relative group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative bg-gray-800/80 p-6 rounded-xl border border-purple-500/20 transform group-hover:rotate-6 transition-transform duration-500">
                          {section.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content with enhanced layout */}
                    <div className="flex-grow space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                          {section.title}
                        </h3>
                        
                        {/* Highlights tags */}
                        <div className="flex flex-wrap gap-2">
                          {section.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300 border border-purple-500/20 transform group-hover:scale-105 transition-all duration-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-gray-300 whitespace-pre-line group-hover:text-gray-200 transition-colors duration-300">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;