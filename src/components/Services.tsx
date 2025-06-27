import React from 'react';
import { FileText, Users, Github, Settings, BookOpen, RefreshCw } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'API Dokumentace',
      description: 'Automatické generování z kódu s popisem endpointů',
      features: ['OpenAPI/Swagger dokumentace', 'Interaktivní příklady', 'Versioning podpora']
    },
    {
      icon: Users,
      title: 'Uživatelské manuály',
      description: 'Srozumitelné návody pro koncové uživatele',
      features: ['Krok za krokem návody', 'Screenshots a diagramy', 'FAQ sekce']
    },
    {
      icon: Github,
      title: 'README soubory',
      description: 'Profesionální prezentace projektů na GitHubu',
      features: ['Instalační instrukce', 'Příklady použití', 'Contribution guidelines']
    },
    {
      icon: Settings,
      title: 'Technické specifikace',
      description: 'Detailní popis architektury a funkcionalit',
      features: ['Architekturní diagramy', 'Database schémata', 'API specifikace']
    },
    {
      icon: BookOpen,
      title: 'Onboarding dokumenty',
      description: 'Rychlé zapracování nových vývojářů',
      features: ['Development setup', 'Coding standards', 'Workflow dokumentace']
    },
    {
      icon: RefreshCw,
      title: 'Aktualizace dokumentace',
      description: 'Pravidelná údržba stávajících dokumentů',
      features: ['Automatická detekce změn', 'Pravidelné revize', 'Version control']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Co pro vás mohu vytvořit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kompletní portfolio dokumentačních služeb přizpůsobených vašim potřebám
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 hover:border-black transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-black mr-3" />
                  <h3 className="text-lg font-semibold text-black">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1 h-1 bg-black mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border border-gray-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-black mb-2">
              Nevidíte zde to, co potřebujete?
            </h3>
            <p className="text-gray-600 mb-4">
              Každý projekt je jedinečný. Rád si promluvíme o vašich specifických požadavcích.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Kontaktujte mě
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;