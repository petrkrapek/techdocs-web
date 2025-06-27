import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-black" />
            <span className="text-lg font-semibold text-black">
              AI-TechDocs
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Domů', id: 'hero' },
              { label: 'Služby', id: 'services' },
              { label: 'Jak to funguje', id: 'how-it-works' },
              { label: 'Ceník', id: 'pricing' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Kontakt', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Nezávazná konzultace
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col py-4">
              {[
                { label: 'Domů', id: 'hero' },
                { label: 'Služby', id: 'services' },
                { label: 'Jak to funguje', id: 'how-it-works' },
                { label: 'Ceník', id: 'pricing' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-black font-medium text-left py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors duration-200 mt-4 self-start"
              >
                Nezávazná konzultace
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;