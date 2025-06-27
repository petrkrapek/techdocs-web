import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jan Novák',
      position: 'Lead Developer',
      company: 'TechStart s.r.o.',
      content: 'Dokumentace našeho API byla hotová za 36 hodin a kvalita předčila naše očekávání. Konečně máme profesionální dokumentaci, která našim klientům skutečně pomáhá.',
      rating: 5
    },
    {
      name: 'Marie Svobodová',
      position: 'CTO',
      company: 'DataFlow Solutions',
      content: 'Úžasný přístup k dokumentaci. Kombinace AI a lidské expertízy vytvořila přesně to, co jsme potřebovali. Ušetřilo nám to týdny práce.',
      rating: 5
    },
    {
      name: 'Tomáš Krejčí',
      position: 'Product Manager',
      company: 'InnovateLab',
      content: 'Profesionální komunikace, dodržení termínů a výsledek, který můžeme hrdě prezentovat našim klientům. Určitě budeme spolupracovat i na dalších projektech.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Dokončených projektů' },
    { number: '100%', label: 'Spokojených klientů' },
    { number: '24h', label: 'Průměrná doba odezvy' },
    { number: '4.2/5', label: 'Průměrné hodnocení' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Co říkají klienti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spokojení klienti jsou naším nejlepším doporučením
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white border border-gray-200 p-4">
              <div className="text-2xl font-bold text-black mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 hover:border-black transition-colors duration-200"
            >
              {/* Quote Icon */}
              <Quote className="h-6 w-6 text-black mb-4" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 text-black fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-4 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-black">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.position}
                </div>
                <div className="text-sm text-black font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-black text-white p-8">
            <h3 className="text-xl font-bold mb-4">
              Připojte se k našim spokojeným klientům
            </h3>
            <p className="text-gray-300 mb-6">
              Začněme pracovat na vaší dokumentaci ještě dnes
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Získat cenovou nabídku
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;