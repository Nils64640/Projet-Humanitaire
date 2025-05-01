import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart } from 'lucide-react';

const PersonalChoice = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="personal-choice"
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
          backgroundImage: 'url(https://asset-prod.france.fr/Place_de_la_Bourse_Bordeaux_Adobe_Stock_Roo_M_The_Agency_98625131_a77364cfed.jpeg)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Un choix personnel
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          <div className="space-y-12">
            <div 
              className={`bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-600/20 border border-pink-600/30">
                    <Heart className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Pourquoi cette association ?</h3>
                  <p className="text-gray-300">
                    L'engagement au sein de La Maraude du Cœur Bordeaux est avant tout un choix
                    personnel, motivé par la volonté d'agir concrètement face aux injustices sociales et
                    de contribuer à une société plus solidaire.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className={`bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Valeurs partagées</h3>
              <p className="text-gray-300">
                Tous les bénévoles de cette Maraude partagent des valeurs essentielles : la
                solidarité, le respect de la dignité humaine, la bienveillance, et la conviction profonde
                que chacun a un rôle à jouer pour bâtir un monde plus juste.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Solidarité', 'Dignité', 'Bienveillance', 'Justice'].map((value, index) => (
                  <div 
                    key={index}
                    className={`bg-gray-800/60 p-4 rounded-lg border border-pink-500/20 text-center transition-all duration-500 hover:bg-gray-700/60 hover:border-pink-500/40 ${
                      isInView ? `opacity-100 scale-100 delay-${400 + index*100}` : 'opacity-0 scale-95'
                    }`}
                  >
                    <span className="text-pink-300 font-medium">{value}</span>
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

export default PersonalChoice;