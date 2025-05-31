
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
