import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/nimeshgamage',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/77nimesh',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:nimesh.gamage@outlook.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.03),transparent_30%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left space-y-4">
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/ng-logo.png"
                  alt="NG Logo"
                  className="w-24 h-24 object-contain bg-slate-950 p-2 rounded-xl shadow-inner opacity-100"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-300 inline-flex items-center">Nimesh Gamage</h3>
                  <p className="text-gray-400 text-sm">Automotive diagnostics, software, and data-driven product work</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex space-x-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-4 bg-slate-800/70 text-gray-400 rounded-xl hover:bg-slate-700/70 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 group border border-slate-700/50 hover:border-blue-500/30 shadow-lg"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Nimesh Gamage. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, TypeScript, and a strong respect for practical systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
