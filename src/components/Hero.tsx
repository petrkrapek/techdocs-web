import React from 'react';
import { Zap, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Technická dokumentace vytvořená{' '}
            <span className="text-gray-600">AI za zlomek času</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Kombinuji sílu umělé inteligence s lidskou expertízou pro vytvoření přesné, 
            konzistentní a profesionální dokumentace vašich projektů
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center border border-gray-200 p-6">
              <Zap className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Rychlost</h3>
              <p className="text-gray-600">Hotovo za 24-48 hodin</p>
            </div>
            
            <div className="text-center border border-gray-200 p-6">
              <DollarSign className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Úspora</h3>
              <p className="text-gray-600">Od 0,15 EUR za řádek</p>
            </div>
            
            <div className="text-center border border-gray-200 p-6">
              <CheckCircle className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Kvalita</h3>
              <p className="text-gray-600">Lidská kontrola každého výstupu</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Získat cenovou nabídku</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="border border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors duration-200"
            >
              Prohlédnout ukázky práce
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;