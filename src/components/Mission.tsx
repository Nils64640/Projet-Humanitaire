import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, Utensils, Clipboard, Users, Volume2 } from 'lucide-react';

const Mission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const missions = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Lutte contre l'exclusion",
      content: "La mission première est de lutter contre toutes les formes d'exclusion sociale en apportant une aide concrète et directe aux personnes en situation de précarité. Les interventions sont principalement auprès des personnes sans-abri, mais également auprès de familles en difficulté, de migrants et de personnes isolées."
    },
    {
      icon: <Utensils className="w-8 h-8 text-pink-500" />,
      title: "Aide alimentaire",
      content: "Distribution de repas chauds, de paniers alimentaires et de produits de première nécessité lors des maraudes hebdomadaires."
    },
    {
      icon: <Clipboard className="w-8 h-8 text-pink-500" />,
      title: "Soutien social",
      content: "Accompagnement administratif, orientation vers les services sociaux et aide à l'insertion pour favoriser le retour à l'autonomie."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Création de lien humain",
      content: "Création de liens sociaux et d'espaces d'écoute pour rompre l'isolement et redonner confiance et dignité aux personnes accompagnées."
    },
    {
      icon: <Volume2 className="w-8 h-8 text-pink-500" />,
      title: "Sensibilisation et mobilisation",
      content: "Au-delà des actions directes, la Maraude du Cœur s'engage à sensibiliser le grand public aux problématiques de la précarité et de l'exclusion. Par des interventions en milieu scolaire, des événements publics et des campagnes de communication, ils cherchent à changer le regard sur ces réalités et à mobiliser de nouvelles énergies au service de la solidarité."
    }
  ];

  return (
    <section 
      id="mission" 
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: 'url(https://github.com/Nils64640/photo-humanitaire/blob/main/9.jpg?raw=true)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mission de l'association
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <div 
                key={index}
                className={`bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-500 hover:border-pink-500/30 hover:bg-gray-800/70 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index*100}` : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg border border-pink-500/20">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-pink-300">{mission.title}</h3>
                    <p className="text-gray-300">{mission.content}</p>
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

export default Mission;