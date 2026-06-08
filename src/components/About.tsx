import React from 'react';
import { Award, Calendar, CheckCircle, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    title: '10+ Years In Diagnostics',
    description:
      'Hands-on troubleshooting across European vehicles, dealership workflows, and modern EV systems.',
    stats: 'Mercedes-Benz, EV systems, European multi-brand experience',
  },
  {
    icon: Award,
    title: 'Current Technical Direction',
    description:
      'Building practical software, data tooling, and product prototypes grounded in real operational problems.',
    stats: 'Python, FastAPI, PostgreSQL, React, Next.js',
  },
  {
    icon: Cpu,
    title: 'Diploma In ICT',
    description:
      'Completing a Diploma of Information Technology with a focus on advanced programming and delivery-ready skills.',
    stats: 'Programming, databases, web development, documentation',
  },
];

const achievements = [
  'Current EV diagnostics and workshop coordination experience',
  'Mercedes-Benz dealership diagnostics and OEM tooling',
  'IBM AI Developer and EV technical credentials',
  'Diploma of Information Technology (Advanced Programming)',
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Real-world technical depth across diagnostics, software, and data
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-20">
          <div className="relative self-start lg:sticky lg:top-28">
            <div className="group relative mx-auto w-full max-w-sm md:max-w-md">
              <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 animate-gradient-x"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl transform -rotate-3 group-hover:rotate-6 transition-transform duration-700 animate-pulse opacity-70"></div>

              <div className="relative bg-slate-700 rounded-3xl overflow-hidden border-4 border-slate-600 h-full group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <img
                  src="/images/ProfilePicture.jpg"
                  width="auto"
                  height="384"
                  alt="Nimesh Gamage Profile"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Nimesh Gamage</p>
                  <p className="text-blue-400 text-sm font-medium">Automotive Diagnostics, Software & Data Projects</p>
                </div>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-6 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-32 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  ></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-70"></div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                <strong className="text-white text-xl">Nimesh Gamage</strong> is a technical problem-solver with over
                <span className="text-blue-400 font-semibold"> 10 years</span> of automotive diagnostics experience and
                a growing software delivery track across web apps, data platforms, and automation tools.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                His background spans modern EV diagnostics, Mercedes-Benz dealership work, European vehicle
                troubleshooting, structured technical documentation, and workshop coordination. That same
                diagnostic thinking now drives product prototypes, Python systems, database-backed apps, and
                customer-facing digital tools.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Key Profile Signals
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Award className="w-7 h-7 text-blue-400 mr-3" />
                Selected Profile Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-300 mt-1 leading-relaxed">{highlight.description}</p>
                        <p className="text-blue-400 text-sm font-medium mt-2">{highlight.stats}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
