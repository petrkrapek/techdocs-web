import React from 'react';
import { Brain, Clock, Award, Wrench, Heart } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Brain,
      title: 'Odbornost',
      description: 'Rozumím kontextu technických projektů a specifickým požadavkům každého programovacího jazyka.'
    },
    {
      icon: Clock,
      title: 'Šetření času',
      description: 'Převezmu celý proces od A do Z, abyste se mohli soustředit na to, co umíte nejlépe.'
    },
    {
      icon: Award,
      title: 'Kvalita',
      description: 'Garantuji konzistentní a přesné výsledky díky kombinaci AI technologií a lidské expertízy.'
    },
    {
      icon: Wrench,
      title: 'Přizpůsobení',
      description: 'Dokumentace podle vašich specifických potřeb, formátů a firemních standardů.'
    },
    {
      icon: Heart,
      title: 'Podpora',
      description: 'Osobní přístup a následná podpora. Nejste jen číslo v systému, ale partner.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Proč nepotřebujete ChatGPT, ale potřebujete mě
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI nástroje jsou skvělé, ale bez lidské expertízy mohou vytvořit nekvalitní nebo neúplnou dokumentaci. 
            Já kombinuji to nejlepší z obou světů.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="text-center border border-gray-200 p-6 hover:border-black transition-colors duration-200"
              >
                <IconComponent className="h-8 w-8 text-black mx-auto mb-4" />
                <h3 className="text-lg font-bold text-black mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-black mb-6 text-center">
            ChatGPT vs. AI-TechDocs
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-black">Platforma</th>
                  <th className="text-center py-3 px-4 font-semibold text-black">ChatGPT</th>
                  <th className="text-center py-3 px-4 font-semibold text-black">AI-TechDocs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: 'Kontext projektu',
                    chatgpt: 'Nerozumí specifickému kontextu',
                    myApproach: 'Detailní analýza a porozumění'
                  },
                  {
                    aspect: 'Konzistentnost',
                    chatgpt: 'Může být nekonzistentní',
                    myApproach: 'Garantovaná konzistence'
                  },
                  {
                    aspect: 'Lidská kontrola',
                    chatgpt: 'Žádná',
                    myApproach: 'Kompletní review a úpravy'
                  },
                  {
                    aspect: 'Následná podpora',
                    chatgpt: 'Omezená',
                    myApproach: 'Dlouhodobá podpora'
                  },
                  {
                    aspect: 'Přizpůsobení',
                    chatgpt: 'Generické výstupy',
                    myApproach: 'Customizované řešení'
                  }
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium text-black">{item.aspect}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{item.chatgpt}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{item.myApproach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;