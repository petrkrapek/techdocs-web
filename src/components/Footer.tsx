import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-6 w-6 text-white" />
              <span className="text-lg font-bold">AI-Enhanced<br />Tech Documentation</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesionální technická dokumentace vytvořená pomocí AI technologií 
              s lidskou expertízou pro garantovanou kvalitu.
            </p>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Dostupný pro nové projekty</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Služby</h3>
            <ul className="space-y-3">
              {[
                'API Dokumentace',
                'Uživatelské manuály',
                'README soubory',
                'Technické specifikace',
                'Onboarding dokumenty',
                'Aktualizace dokumentace'
              ].map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nástroje & Technologie</h3>
            <ul className="space-y-3">
              {[
                'Sphinx Documentation',
                'GitBook',
                'Material for MkDocs',
                'OpenAPI/Swagger',
                'Confluence',
                'Markdown/HTML'
              ].map((tool, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@ai-techdocs.cz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+420 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Brno, Česká republika</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-colors duration-200 text-sm"
              >
                Nezávazná konzultace
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AI-TechDocs. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Ochrana soukromí
              </button>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Obchodní podmínky
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;