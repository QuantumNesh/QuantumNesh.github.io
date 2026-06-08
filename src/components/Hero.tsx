import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const particlePositions = [
  { left: '12%', top: '22%' },
  { left: '24%', top: '70%' },
  { left: '42%', top: '18%' },
  { left: '63%', top: '74%' },
  { left: '82%', top: '28%' },
  { left: '90%', top: '58%' },
];

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-0 pb-32 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="absolute inset-0">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-8 pb-12 sm:pb-16">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 animate-fade-in">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <p className="text-blue-400 text-lg font-semibold tracking-wide uppercase">
                Automotive Diagnostics + Software Delivery
              </p>
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
              Nimesh
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient-x">
                Gamage
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              I build practical systems across
              <span className="text-blue-400 font-semibold"> EV diagnostics</span>,
              <span className="text-cyan-400 font-semibold"> data platforms</span>, and
              <span className="text-blue-300 font-semibold"> modern web products</span>.
            </p>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed">
              With 10+ years in automotive diagnostics, dealership EV systems experience, and a Diploma
              of Information Technology in progress, I bring workshop-level troubleshooting into software,
              automation, and product-building work.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { name: 'EV Diagnostics & Delivery', color: 'from-emerald-500 to-teal-600' },
                { name: 'Python & Automation', color: 'from-blue-500 to-indigo-600' },
                { name: 'FastAPI & PostgreSQL', color: 'from-cyan-500 to-sky-600' },
                { name: 'React & Next.js', color: 'from-slate-600 to-slate-500' },
                { name: 'Technical Documentation', color: 'from-amber-500 to-orange-600' },
              ].map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-6 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToPortfolio}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Projects
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-7">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative">
          <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-gray-400 text-xs mt-2 font-medium">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
