import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { History, Users, Heart } from 'lucide-react';

const Association = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const cards = [
    {
      icon: <History className="w-12 h-12 text-pink-500" />,
      title: "Historique de l'association",
      content: "La Maraude du Cœur a été créée en 2017 à Bordeaux par Estelle MORIZOT. Après avoir vécu la rue, la solitude et la précarité, elle a décidé de transformer son expérience en force pour aider les autres. Avec quelques amis, elle a commencé par distribuer des repas et écouter ceux qui en avaient besoin, apportant chaleur et réconfort. Peu à peu, l’association s’est construite autour d’une idée essentielle : chacun mérite d’être vu, écouté et soutenu. Elle a grandi, tout en restant fidèle à ses valeurs de respect et de bienveillance.Aujourd’hui, La Maraude du Cœur est devenue un acteur important à Bordeaux, montrant qu’une épreuve difficile peut donner naissance à une grande chaîne de solidarité."
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: "L'équipe",
      content: "La Maraude du Cœur repose sur une équipe entièrement bénévole, composée de profils variés : étudiants, actifs, retraités, chacun apportant son énergie et ses compétences au service des plus démunis. L'association fonctionne sans hiérarchie rigide, dans un esprit d'entraide et de cohésion. Les membres se réunissent régulièrement pour organiser les maraudes, partager leurs expériences et renforcer la dynamique collective. Cette diversité humaine fait la richesse de l'équipe et garantit un engagement sincère et durable sur le terrain."
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "La vision et les valeurs",
      content: "Si vous questionnez les bénévoles de la Maraude, ils vous répondront qu'ils croient en un monde où chacun mérite de vivre dans la dignité, avec un accès réel aux besoins essentiels comme la nourriture, l'hygiène, et surtout, le lien humain. À travers les échanges et les actions, chacun peut ainsi contribuer efficacement à construire une société plus juste, plus humaine, et plus solidaire."
    }
  ];

  return (
    <section 
      id="association" 
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-black/90 pointer-events-none"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none transform scale-110"
        style={{ 
          backgroundImage: 'url(https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00008.jpeg?raw=true)',
          transform: isInView ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 1.5s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="text-white">
                Présentation de l'association
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                L'association la Maraude du Cœur Bordeaux, vient en aide aux personnes en
                situation de précarité. Elle distribue principalement des repas, des produits de
                première nécessité et d'hygiène.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Afin de lutter contre l'isolement, elle apporte également du soutien et de l'écoute
                afin de maintenir le lien social.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:border-purple-500/30 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index*200}` : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Card content */}
                <div className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center border border-white/10">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {card.content}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Association;