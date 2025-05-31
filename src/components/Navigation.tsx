
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className={`text-xl font-bold transition-all duration-300 ${
              scrolled 
                ? 'text-white' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
            }`}>Nimesh Gamage</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button (visible on desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-300 hover:text-white focus:outline-none transition-colors duration-300 ${
                isOpen ? 'bg-slate-800/50 p-2 rounded-lg' : ''
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-white border-l-2 border-blue-500'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-slate-800/50">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg font-medium"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
