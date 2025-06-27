import React from 'react';
import { Code, Database, Server, Smartphone, Globe, Cpu } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { name: 'Python', icon: Code },
    { name: 'JavaScript/TypeScript', icon: Globe },
    { name: 'Java', icon: Cpu },
    { name: 'C/C++', icon: Server },
    { name: 'Rust', icon: Database },
    { name: 'Go', icon: Smartphone },
    { name: 'PHP', icon: Code }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Specializuji se na nejžádanější technologie
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rozumím specifickým požadavkům každého programovacího jazyka 
            a jeho dokumentačním standardům
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-white border border-gray-200 p-6 text-center hover:border-black transition-colors duration-200"
              >
                <IconComponent className="h-8 w-8 text-black mx-auto mb-3" />
                <h3 className="font-medium text-black text-sm">
                  {tech.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <span className="text-gray-600 font-medium">
            A mnoho dalších technologií na vyžádání
          </span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;