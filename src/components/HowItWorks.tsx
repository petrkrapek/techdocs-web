import React from 'react';
import { Search, Bot, Eye, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analýza',
      description: 'Provedu analýzu vašeho kódu a požadavků'
    },
    {
      icon: Bot,
      title: 'AI Generování',
      description: 'Využiji pokročilé AI nástroje pro vytvoření první verze'
    },
    {
      icon: Eye,
      title: 'Lidská kontrola',
      description: 'Zkontroluju, upravím a doplním kontext'
    },
    {
      icon: Package,
      title: 'Dodání',
      description: 'Předám finální dokumentaci ve vámi zvoleném formátu'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Jednoduchý proces ve 4 krocích
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Od analýzy po finální dodání - transparentní a efektivní postup
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 text-black mx-auto" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;