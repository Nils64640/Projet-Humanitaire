import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Utensils, Route, ShoppingBag, Clock, Users, Heart, 
  ShieldCheck, Soup, Package, HandHeart, CheckCircle2,
  Calendar, MapPin, UserCheck, AlertTriangle, Briefcase,
  ClipboardCheck, Coffee, Truck, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HumanitarianActions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const actions = [
    {
      title: "Action humanitaire 1",
      subtitle: "Préparation de repas au local de l'association",
      icon: <Utensils className="w-12 h-12 text-pink-500" />,
      images: [
        "https://github.com/Nils64640/photo-humanitaire/blob/main/1.jpg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00023.jpeg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/2.jpg?raw=true"
      ],
      keyPoints: [
        { icon: <ShieldCheck />, text: "Organisation rigoureuse" },
        { icon: <Users />, text: "Rôles précis pour chaque bénévole" },
        { icon: <Package />, text: "Conditionnement adapté" }
      ],
      timeline: [
        { icon: <ClipboardCheck />, text: "Briefing et répartition des tâches" },
        { icon: <Utensils />, text: "Préparation des ingrédients" },
        { icon: <Package />, text: "Conditionnement des repas" },
        { icon: <CheckCircle2 />, text: "Vérification finale" }
      ],
      content: [
        "Avant toutes autres actions, il faut préparer les repas en vue de la distribution aux personnes nécessiteuses.",
        "Nous les avons préparés directement dans les locaux de l'association. L'organisation était très rigoureuse et l'hygiène primordiale : lavage de mains et utilisation de gants et tabliers pour les préparateurs. Chaque bénévole avait un rôle précis : découper les légumes, cuire les féculents, assembler les sandwichs, conditionner les repas dans des contenants adaptés, etc.",
        "Le but était de préparer des dizaines de repas à distribuer. Le fait de voir toutes ces barquettes alignées, prêtes à être distribuées, a donné une véritable satisfaction collective. Cela m'a également fait prendre conscience que derrière une distribution réussie, il y a énormément de travail en amont."
      ]
    },
    {
      title: "Action humanitaire 2",
      subtitle: "Participation à une maraude dominicale",
      icon: <Route className="w-12 h-12 text-pink-500" />,
      images: [
        "https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00005.jpeg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/4.jpg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00018.jpeg?raw=true"
      ],
      keyPoints: [
        { icon: <Calendar />, text: "Maraude du dimanche après-midi" },
        { icon: <Users />, text: "Équipes de 4-5 personnes" },
        { icon: <Heart />, text: "Approche bienveillante" }
      ],
      timeline: [
        { icon: <Briefcase />, text: "Briefing initial" },
        { icon: <UserCheck />, text: "Formation des équipes" },
        { icon: <Truck />, text: "Distribution sur le terrain" },
        { icon: <AlertTriangle />, text: "Gestion des cas sensibles" }
      ],
      content: [
        "Pour cette deuxieme action, j'ai choisi de participer à une maraude du dimanche après-midi.",
        "La première étape a été un briefing général dans les locaux de l'association : les \"bénévoles-référents\" ont rappelé les objectifs de la maraude, les règles de sécurité à respecter, et surtout, la bonne attitude à adopter : toujours être respectueux, bienveillant, sans jugement.",
        "Nous nous sommes ensuite répartis en petits groupes de 4 à 5 personnes, chacun avec des sacs contenant des boissons chaudes, des repas, des couvertures, des produits d'hygiène et des vêtements.",
        "Pendant notre distribution, nous avons rencontré plusieurs profils de personnes : des sans-abri de longue date, des jeunes en rupture familiale, mais aussi des personnes récemment tombées dans la misère suite à une perte d'emploi ou un divorce. Certaines présentaient également des problèmes de santé physique, comme des blessures ou des maladies non traitées, ainsi que des troubles psychologiques.",
        "Nous avons certes distribué des repas, des boissons chaudes, des kits d'hygiène, mais surtout pris le temps d'échanger quelques mots, de poser des questions simples pour montrer notre intérêt et notre respect. Il y a eu aussi des situations particulières plus délicates nécessitant un signalement aux services sociaux.",
        "Tout au long de la maraude, j'ai appris à travailler en équipe avec les référents-maraude, à faire attention à la sécurité, à prioriser les besoins des personnes rencontrées, et à réagir face à des imprévus."
      ]
    },
    {
      title: "Action humanitaire 3",
      subtitle: "Collecte de denrées et accessoires d'hygiène",
      icon: <ShoppingBag className="w-12 h-12 text-pink-500" />,
      images: [
        "https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00027.jpeg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/photo/image00013.jpeg?raw=true",
        "https://github.com/Nils64640/photo-humanitaire/blob/main/5.jpg?raw=true"
      ],
      keyPoints: [
        { icon: <MapPin />, text: "Présence en magasins" },
        { icon: <HandHeart />, text: "Sensibilisation clients" },
        { icon: <Package />, text: "Collecte de produits" }
      ],
      timeline: [
        { icon: <ClipboardCheck />, text: "Préparation des équipes" },
        { icon: <MapPin />, text: "Installation en magasin" },
        { icon: <Users />, text: "Interaction avec les clients" },
        { icon: <Truck />, text: "Transport des dons" }
      ],
      content: [
        "Pour cette troisième action nous avons utilisé une liste d'enseignes (supermarchés, pharmacies, grandes surfaces) qui sont déjà engagées dans ce partenariat solidaire.",
        "Ensuite, nous avons organisé des permanences dans les magasins : postés à l'entrée, avec des caddies de collecte et des flyers explicatifs, nous avons incité les clients à acheter des produits supplémentaires (pâtes, conserves, savons, brosses à dents...) et à les déposer dans nos contenants. J'ai été frappé par la générosité de nombreuses personnes.",
        "Grâce à cette collecte, nous avons réuni une quantité importante de produits de première nécessité pour étoffer nos distributions."
      ]
    }
  ];

  return (
    <section
      id="humanitarian-actions"
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Enhanced dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Animated particles with more movement */}
      <div className="particle-container absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle-drift"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--drift-x': `${-200 + Math.random() * 400}px`,
              '--drift-y': `${-200 + Math.random() * 400}px`,
              '--duration': `${10 + Math.random() * 15}s`,
            } as any}
          ></div>
        ))}
      </div>

      {/* Constellation effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          return (
            <div
              key={`constellation-${i}`}
              className="absolute w-1 h-1 bg-white/20"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
                animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Mes trois actions humanitaires
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
            <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
              Découvrez en détail les différentes actions humanitaires auxquelles j'ai participé
              avec La Maraude du Cœur Bordeaux.
            </p>
          </div>

          <div className="space-y-24">
            {actions.map((action, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 hover:bg-gray-800/40 hover:border-purple-500/30 ${
                  isInView ? `opacity-100 translate-y-0 delay-${index * 200}` : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative bg-gray-800/80 p-6 rounded-2xl border border-purple-500/20 transform group-hover:rotate-6 transition-transform duration-500">
                          {action.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title and subtitle */}
                    <div>
                      <h3 className="text-3xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                        {action.title}
                      </h3>
                      <p className="text-xl text-gray-400 mt-2">{action.subtitle}</p>
                    </div>
                  </div>

                  {/* Image Carousel */}
                  <div className="mb-12 relative rounded-xl overflow-hidden h-[400px]">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                      }}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000 }}
                      loop={true}
                      className="h-full rounded-xl"
                    >
                      {action.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`${action.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-black/50 !rounded-full after:!text-2xl hover:!bg-black/70 transition-colors"></div>
                      <div className="swiper-button-next !text-white !w-12 !h-12 !bg-black/50 !rounded-full after:!text-2xl hover:!bg-black/70 transition-colors"></div>
                    </Swiper>
                  </div>

                  {/* Key points */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {action.keyPoints.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="bg-gray-800/40 p-4 rounded-xl border border-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-purple-400">{point.icon}</div>
                          <p className="text-gray-300">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="relative mb-12">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/20"></div>
                    <div className="space-y-6">
                      {action.timeline.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="relative pl-16"
                        >
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500/20 rounded-full border-2 border-purple-500"></div>
                          <div className="bg-gray-800/40 p-4 rounded-xl border border-purple-500/10">
                            <div className="flex items-center gap-3">
                              <div className="text-purple-400">{step.icon}</div>
                              <p className="text-gray-300">{step.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {action.content.map((paragraph, paraIndex) => (
                      <p
                        key={paraIndex}
                        className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                      >
                        {paragraph}
                      </p>
                    ))}
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

export default HumanitarianActions;