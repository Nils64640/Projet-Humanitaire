import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">La Maraude du Cœur</h3>
              <p className="text-gray-400 mb-6">
                Association d'aide aux personnes en situation de précarité à Bordeaux depuis 2020.
              </p>
              <div className="flex items-center gap-1">
                <p className="text-gray-400">Fait avec</p>
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <p className="text-gray-400">par Nils Attallah</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>nils.attallah@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>07 87 88 13 55</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Bordeaux, France</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Réseaux Sociaux</h3>
              <p className="text-gray-400 mb-4">
               Pour suivre les événements et initiatives de l'association.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} La Maraude du Cœur Bordeaux. Projet Humanitaire de Nils Attallah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;