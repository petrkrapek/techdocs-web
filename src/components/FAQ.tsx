import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Jak dlouho trvá vytvoření dokumentace?',
      answer: 'Standardní doba dodání je 24-48 hodin v závislosti na rozsahu projektu. Pro urgentní zakázky nabízím expresní dodání do 24 hodin za příplatek 50%. Složitější projekty nad 1000 řádků mohou trvat 2-3 dny.'
    },
    {
      question: 'Jaké formáty výstupů nabízíte?',
      answer: 'Nabízím širokou škálu formátů: Markdown, HTML, PDF, Word dokumenty, Sphinx dokumentaci, GitBook, Confluence stránky, nebo jakýkoli jiný formát dle vašich potřeb. Mohu také vytvořit vlastní šablony podle vašeho corporate designu.'
    },
    {
      question: 'Můžete aktualizovat existující dokumentaci?',
      answer: 'Ano, specializuji se i na aktualizace a vylepšení stávající dokumentace. Provedu audit současného stavu, identifikuji nedostatky a vytvořím aktualizovanou verzi. Nabízím také pravidelné údržbové služby.'
    },
    {
      question: 'Pracujete s konfidenciálními projekty?',
      answer: 'Absolutně ano. Všechny projekty považuji za důvěrné a na vyžádání podepisuji NDA. Používám zabezpečené nástroje a postupy pro práci s citlivými daty. Vaše zdrojové kódy a obchodní informace jsou v bezpečí.'
    },
    {
      question: 'Jak probíhá platba za služby?',
      answer: 'Fakturuji po dokončení projektu s 14denní splatností. Pro větší projekty nad 2000 řádků je možná platba v etapách (50% záloha, 50% po dokončení). Přijímám bankovní převody i platby kartou.'
    },
    {
      question: 'Co když nebudu spokojen s výsledkem?',
      answer: 'Nabízím 100% záruku spokojenosti. Pokud výsledek nebude odpovídat vašim požadavkům, provedu revize zdarma nebo vrátím peníze. Většinu připomínek však řeším už během procesu díky průběžné komunikaci.'
    },
    {
      question: 'Poskytujete schulení týmu?',
      answer: 'Ano, jako dodatečnou službu nabízím školení vašeho týmu v oblasti tvorby a údržby dokumentace, používání dokumentačních nástrojů nebo best practices. Školení lze provést online nebo osobně.'
    },
    {
      question: 'Podporujete integraci s vývojářskými nástroji?',
      answer: 'Určitě. Mohu integrovat dokumentaci s vašimi stávajícími nástroji jako Git, CI/CD pipeline, Jira, nebo jakýmikoli jinými systémy. Automatizace aktualizace dokumentace je mou specialitou.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Často kladené otázky
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Odpovědi na nejčastější dotazy o mých službách
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 mb-2"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-semibold text-black">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-black flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-black flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 border border-gray-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-black mb-2">
              Nevidíte zde odpověď na vaši otázku?
            </h3>
            <p className="text-gray-600 mb-4">
              Neváhejte se zeptat. Rád odpovím na jakékoli dotazy ohledně dokumentačních služeb.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Položit otázku
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;