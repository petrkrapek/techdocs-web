import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    scope: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white border border-gray-200 p-12">
              <CheckCircle className="h-12 w-12 text-black mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-black mb-4">
                Děkuji za vaši zprávu!
              </h2>
              <p className="text-gray-600 mb-8">
                Vaša poptávka byla úspěšně odeslána. Odpovím vám do 24 hodin s detailní cenovou nabídkou a dalšími kroky.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Odeslat další zprávu
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Začněme spolupráci
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pošlete mi detaily o vašem projektu a já vám do 24 hodin pošlu cenovou nabídku
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-black mb-6">
                Kontaktní údaje
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black">E-mail</h4>
                    <p className="text-gray-600">info@ai-techdocs.cz</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black">Telefon</h4>
                    <p className="text-gray-600">+420 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black">Lokalita</h4>
                    <p className="text-gray-600">Brno, Česká republika</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 border border-gray-200 p-4">
                <h4 className="font-semibold text-black mb-2">
                  Rychlá odezva garantována
                </h4>
                <p className="text-gray-600 text-sm">
                  Odpovídám na všechny dotazy do 24 hodin, 
                  většinou však mnohem rychleji.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                      placeholder="jan@firma.cz"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                    Název firmy
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                    placeholder="Moje firma s.r.o."
                  />
                </div>

                {/* Project Type and Scope */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-black mb-2">
                      Typ projektu
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Vyberte typ projektu</option>
                      <option value="api-documentation">API Dokumentace</option>
                      <option value="user-manual">Uživatelský manuál</option>
                      <option value="readme">README soubor</option>
                      <option value="technical-spec">Technická specifikace</option>
                      <option value="onboarding">Onboarding dokumenty</option>
                      <option value="update">Aktualizace dokumentace</option>
                      <option value="other">Jiné</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="scope" className="block text-sm font-semibold text-black mb-2">
                      Předpokládaný rozsah
                    </label>
                    <select
                      id="scope"
                      name="scope"
                      value={formData.scope}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Vyberte rozsah</option>
                      <option value="small">Malý (do 500 řádků)</option>
                      <option value="medium">Střední (500-1000 řádků)</option>
                      <option value="large">Velký (nad 1000 řádků)</option>
                      <option value="unknown">Nejsem si jistý</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 resize-vertical"
                    placeholder="Popište váš projekt, specifické požadavky nebo jakékoli otázky..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Odeslat nezávaznou poptávku</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;