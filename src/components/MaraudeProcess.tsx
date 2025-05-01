import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ClipboardList, Truck, Users, AlertTriangle, Home } from 'lucide-react';

const MaraudeProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-pink-500" />,
      title: "Préparation (16h-18h)",
      content: "Les bénévoles se retrouvent au local pour préparer les repas chauds, constituer les kits d'hygiène et vêtements. Le coordinateur de maraude fait un briefing sur le parcours prévu et répartit les rôles.",
      highlights: ["Briefing", "Préparation", "Organisation"]
    },
    {
      icon: <Truck className="w-8 h-8 text-pink-500" />,
      title: "Départ (18h30)",
      content: "Chargement du matériel dans les véhicules et départ vers les lieux d'intervention. Les équipes, composées de 4 à 6 bénévoles, sont réparties selon les secteurs géographiques à couvrir.",
      highlights: ["Logistique", "Équipes", "Secteurs"]
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "La Rencontre (19h-21h)",
      content: "Les équipes vont à la rencontre des personnes sans-abri. Elles distribuent repas chauds, boissons, couvertures selon les besoins. Au-delà de l'aide matérielle, l'équipe prend le temps d'échanger, d'écouter et de créer du lien social.",
      highlights: ["Distribution", "Écoute", "Lien social"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-pink-500" />,
      title: "Signalements et Urgences",
      content: "Si des situations d'urgence sont identifiées (problème de santé, grand froid), l'équipe contacte les services compétents (SAMU social, pompiers) et reste présente jusqu'à leur arrivée.",
      highlights: ["Urgences", "Coordination", "Suivi"]
    },
    {
      icon: <Home className="w-8 h-8 text-pink-500" />,
      title: "Retour et Debriefing (21h30)",
      content: "Retour au local, rangement du matériel et partage des observations. Le coordinateur note les personnes rencontrées, les besoins identifiés et les actions à prévoir pour les prochaines maraudes.",
      highlights: ["Bilan", "Observations", "Planification"]
    }
  ];

  const attentionPoints = [
    {
      title: "Approche Respectueuse",
      content: "Ils abordent toujours les personnes avec respect, en demandant si elles souhaitent recevoir leur aide, sans imposer leur présence."
    },
    {
      title: "Écoute Active",
      content: "Les bénévoles sont formés à l'écoute active, afin de créer un espace où les personnes peuvent s'exprimer librement."
    },
    {
      title: "Régularité",
      content: "Les maraudes suivent des parcours réguliers pour établir une relation de confiance avec les personnes rencontrées."
    },
    {
      title: "Sécurité",
      content: "Les équipes sont toujours composées d'au moins trois personnes et restent en contact permanent avec le coordinateur."
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
              background: `rgba(236, 72, 153, ${0.2 + Math.random() * 0.3})`,
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
              Déroulement concret des maraudes
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-16">
            {/* Timeline steps */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-pink-600/20 transform -translate-x-1/2"></div>
              
              {/* Timeline steps */}
              <div className="space-y-20">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:grid md:grid-cols-2 md:gap-8 items-start transition-all duration-700 ${
                      isInView ? `opacity-100 translate-y-0 delay-${index*150}` : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 top-8 w-8 h-8 bg-pink-600/30 rounded-full border-4 border-pink-600 transform -translate-x-1/2 z-10"></div>
                    
                    {/* Content positioning based on even/odd */}
                    <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className="group bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-gray-800/40 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center gap-4 mb-4 md:hidden">
                          <div className="flex-shrink-0 bg-gray-800/80 p-3 rounded-lg border border-pink-500/20">
                            {step.icon}
                          </div>
                          <h4 className="text-xl font-semibold text-pink-300">{step.title}</h4>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-pink-300 mb-4 hidden md:block">{step.title}</h4>
                        
                        {/* Highlight tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {step.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-pink-500/10 rounded-full text-sm text-pink-300 border border-pink-500/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-gray-300">{step.content}</p>
                      </div>
                    </div>
                    
                    {/* Icon for desktop */}
                    <div className={`hidden md:flex md:col-span-1 ${index % 2 === 1 ? 'md:justify-end md:pr-12' : 'md:order-1 md:justify-start md:pl-12'}`}>
                      <div className="relative group">
                        <div className="relative bg-gray-800/80 p-4 rounded-xl border border-pink-500/20 transform group-hover:rotate-6 transition-transform duration-500">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Points d'attention */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-800' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-purple-300">Points d'attention sur le terrain</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attentionPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="group bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-500 hover:border-pink-500/30 hover:bg-gray-800/40 transform hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold mb-3 text-pink-300 group-hover:text-pink-200">{point.title}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200">{point.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaraudeProcess;