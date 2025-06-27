import React from 'react';
import { ExternalLink, Calendar, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce API Dokumentace',
      description: 'Kompletní dokumentace REST API pro online obchod s více než 50 endpointy.',
      technology: 'Node.js + Express',
      scope: '1,200 řádků dokumentace',
      duration: '2 dny',
      features: ['OpenAPI 3.0 specifikace', 'Interaktivní Swagger UI', 'Autentizace dokumentace']
    },
    {
      title: 'Machine Learning Library',
      description: 'Uživatelská příručka a API reference pro Python knihovnu strojového učení.',
      technology: 'Python + Sphinx',
      scope: '800 řádků dokumentace',
      duration: '1,5 dne',
      features: ['Jupyter notebook příklady', 'Mathematical formulas', 'Performance benchmarks']
    },
    {
      title: 'DevOps Onboarding Guide',
      description: 'Komplexní průvodce pro nové vývojáře s CI/CD pipeline dokumentací.',
      technology: 'Docker + Kubernetes',
      scope: '600 řádků dokumentace',
      duration: '1 den',
      features: ['Setup instructions', 'Troubleshooting guide', 'Best practices']
    },
    {
      title: 'Mobile SDK Documentation',
      description: 'Technická dokumentace a developer guide pro React Native SDK.',
      technology: 'React Native + TypeScript',
      scope: '950 řádků dokumentace',
      duration: '2 dny',
      features: ['Integration examples', 'Platform-specific guides', 'Migration documentation']
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ukázky mé práce
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reálné projekty, které jsem úspěšně dokončil pro spokojené klienty
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 hover:border-black transition-colors duration-200"
            >
              <h3 className="text-lg font-bold text-black mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{project.technology}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{project.scope}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{project.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black mb-2">Klíčové vlastnosti:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1 h-1 bg-black mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white border border-gray-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-black mb-4">
              Chcete vidět více ukázek?
            </h3>
            <p className="text-gray-600 mb-4">
              Mám portfolio s více než 50 dokončenými projekty. Rád vám ukážu ukázky relevantní pro váš obor.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Zobrazit další ukázky
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;