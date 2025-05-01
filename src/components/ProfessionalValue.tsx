import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { FileText, Users, BarChart3, Zap } from 'lucide-react';

const ProfessionalValue = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skills = [
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Gestion de Projet",
      description: "Planification, organisation d'événements, gestion de ressources"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Travail d'Équipe",
      description: "Collaboration, communication, résolution de problèmes collectifs"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Leadership",
      description: "Animation d'équipe, prise de décision, motivation d'un groupe"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "Adaptabilité",
      description: "Gestion de l'imprévu, flexibilité, créativité dans la recherche de solutions"
    }
  ];

  return (
    <section
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
          backgroundImage: 'url(https://github.com/Nils64640/photo-humanitaire/blob/main/6.jpg?raw=true)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Valorisation professionnelle
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-12">
            {/* Compétences transférables */}
            <div 
              className={`bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Compétences transférables</h3>
              <p className="text-gray-300 mb-8">
                L'engagement bénévole, loin d'être déconnecté du monde professionnel, constitue
                une expérience riche que l'on peut valoriser dans son parcours:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/60 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Sur un CV</h4>
                  <p className="text-gray-300">
                    Les responsabilités assumées et compétences développées peuvent être
                    mentionnées comme une expérience à part entière.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Lors d'entretiens</h4>
                  <p className="text-gray-300">
                    Les situations vécues dans le cadre du bénévolat offrent des exemples concrets de capacités d'adaptation, de gestion d'équipe, de résolution de problèmes.
                  </p>
                </div>
                
                <div className="bg-gray-800/60 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Dans la pratique professionnelle</h4>
                  <p className="text-gray-300">
                    Les savoir-être et savoir-faire acquis enrichissent l'approche professionnelle, notamment dans les métiers de relation à l'autre, de travail en équipes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Compétences en détail */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-8 text-purple-300">Compétences Transférables</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-500 hover:border-purple-500/30 hover:bg-gray-800/60 transform hover:scale-105 ${
                      isInView ? `opacity-100 translate-y-0 delay-${300 + index*100}` : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-purple-900/40 p-3 rounded-lg">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-purple-300">{skill.title}</h4>
                        <p className="text-gray-300">{skill.description}</p>
                      </div>
                    </div>
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

export default ProfessionalValue;