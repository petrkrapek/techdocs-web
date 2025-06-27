import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Technologies />
      <HowItWorks />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseMe />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;