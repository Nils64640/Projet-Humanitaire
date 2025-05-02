import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, Clock, Users, Clipboard, ChevronLeft, ChevronRight } from 'lucide-react';

const FieldActions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const statsInView = useInView(statsRef, { threshold: 0.5, once: true });
  
  const [activeSlide, setActiveSlide] = useState(0);
  
  const [animatedNumbers, setAnimatedNumbers] = useState({
    people: 0,
    meals: 0,
    files: 0,
    jobs: 0
  });
  
  const images = [
   "https://imgur.com/DG91h2J",
        "https://imgur.com/SOnzac5",
        "https://imgur.com/hHq8KUG"
  ];
  
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  // Animate numbers when stats are in view
  const targetNumbers = {
    people: 120,
    meals: 7500,
    files: 200,
    jobs: 40
  };
  
  if (statsInView && animatedNumbers.people < targetNumbers.people) {
    const interval = setInterval(() => {
      setAnimatedNumbers(prev => {
        const newPeople = Math.min(prev.people + 2, targetNumbers.people);
        const newMeals = Math.min(prev.meals + 125, targetNumbers.meals);
        const newFiles = Math.min(prev.files + 4, targetNumbers.files);
        const newJobs = Math.min(prev.jobs + 1, targetNumbers.jobs);
        
        if (newPeople === targetNumbers.people && 
            newMeals === targetNumbers.meals && 
            newFiles === targetNumbers.files && 
            newJobs === targetNumbers.jobs) {
          clearInterval(interval);
        }
        
        return {
          people: newPeople,
          meals: newMeals,
          files: newFiles,
          jobs: newJobs
        };
      });
    }, 40);
  }

  const actions = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Aide d'Urgence",
      content: "Distribution de repas chauds, boissons, vêtements, couvertures et kits d'hygiène lors de nos maraudes nocturnes",
      frequency: "1 fois par semaine"
    },
    {
      icon: <Clipboard className="w-8 h-8 text-pink-500" />,
      title: "Accompagnement Social",
      content: "Permanences d'aide administrative, d'orientation vers les services de droit commun et de suivi personnalisé",
      frequency: "2 fois par mois"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Ateliers Socio-éducatifs",
      content: "Activités culturelles, cours de français, ateliers d'informatique et de recherche d'emploi pour favoriser l'inclusion",
      frequency: "Hebdomadaire"
    }
  ];

  return (
    <section
      id="actions"
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background with dark overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Les actions sur le terrain
            </span>
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"></span>
          </h2>
          
          {/* Image Carousel */}
          <div className="relative mb-16 h-[400px] rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Action ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {actions.map((action, index) => (
              <div 
                key={index}
                className={`bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-700 hover:border-pink-500/30 hover:bg-gray-800/70 hover:transform hover:scale-105 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index*200}` : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full border border-pink-500/20">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-pink-300">{action.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{action.content}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">{action.frequency}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Impact - Stats */}
          <div 
            ref={statsRef}
            className={`bg-gray-900/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl mb-10 transition-all duration-700 hover:border-purple-500/30 ${
              isInView ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 text-center">Impact de ces Actions</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{animatedNumbers.people}+</div>
                <div className="text-sm text-gray-300">Personnes aidées chaque semaine</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{animatedNumbers.meals}</div>
                <div className="text-sm text-gray-300">Repas distribués par an</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{animatedNumbers.files}</div>
                <div className="text-sm text-gray-300">Dossiers d'aide administrative</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{animatedNumbers.jobs}</div>
                <div className="text-sm text-gray-300">Retours à l'emploi facilités</div>
              </div>
            </div>
            
            <blockquote className="italic text-center text-gray-300 border-l-4 border-purple-500 pl-4 ml-4">
              "Chaque chiffre représente une personne, une histoire, un parcours de vie. Derrière les statistiques, notre priorité reste l'humain."
              <footer className="mt-2 text-sm text-purple-300">Salomé, bénévole à la Maraude du Cœur</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldActions;
