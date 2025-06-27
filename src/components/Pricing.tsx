import React from 'react';
import { Check, Zap, Globe, Building } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Základní balíček',
      price: '0,15',
      range: 'do 500 řádků',
      icon: Zap,
      features: [
        'Automatické generování dokumentace',
        'Základní lidská kontrola',
        'Dodání do 48 hodin',
        'Markdown/HTML formát',
        'Email podpora'
      ]
    },
    {
      name: 'Pokročilý balíček',
      price: '0,12',
      range: '500-1000 řádků',
      icon: Globe,
      popular: true,
      features: [
        'Pokročilé AI generování',
        'Detailní lidská kontrola',
        'Dodání do 36 hodin',
        'Vícero výstupních formátů',
        'Prioritní podpora',
        'Jeden cyklus revizí zdarma'
      ]
    },
    {
      name: 'Firemní balíček',
      price: '0,10',
      range: 'nad 1000 řádků',
      icon: Building,
      features: [
        'Enterprise AI nástroje',
        'Kompletní lidský review',
        'Dodání do 24 hodin',
        'Vlastní formáty a šablony',
        'Dedikovaná podpora',
        'Neomezené revize',
        'SLA garance'
      ]
    }
  ];

  const additionalServices = [
    { name: 'Urgentní dodání (24h)', price: '+50%' },
    { name: 'Lokalizace do češtiny/angličtiny', price: '+0,05 EUR/řádek' },
    { name: 'Integrace do vašeho systému', price: 'od 500 EUR' }
  ];

  return (
    <section id="pricing" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Transparentní cenotvorba
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jasné ceny bez skrytých poplatků. Platíte jen za to, co skutečně potřebujete.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`bg-white border-2 p-6 ${
                  pkg.popular ? 'border-black' : 'border-gray-200 hover:border-black'
                } transition-colors duration-200`}
              >
                {pkg.popular && (
                  <div className="bg-black text-white px-3 py-1 text-sm font-medium mb-4 inline-block">
                    Nejpopulárnější
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <IconComponent className="h-8 w-8 text-black mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-black mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-black">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">EUR/řádek</span>
                  </div>
                  <p className="text-gray-600">{pkg.range}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-black mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Získat nabídku
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-black mb-6 text-center">
            Dodatečné služby
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 text-center">
                <h4 className="font-semibold text-black mb-2">{service.name}</h4>
                <p className="text-xl font-bold text-black">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8">
          <div className="bg-white border border-gray-200 px-6 py-3 inline-block">
            <span className="text-black font-semibold">
              100% záruka spokojenosti nebo vrácení peněz
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;