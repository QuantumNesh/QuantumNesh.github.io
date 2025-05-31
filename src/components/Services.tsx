
import React from 'react';
import { Brain, Eye, Globe, Database, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom AI algorithms for automotive applications with focus on performance optimization.",
      features: ["Automotive AI systems", "Damage detection algorithms", "ADAS development", "Predictive maintenance"]
    },
    {
      icon: Eye,
      title: "Computer Vision Development", 
      description: "Advanced image and video processing using cutting-edge techniques and frameworks.",
      features: ["Object detection", "Image classification", "Video analysis", "Real-time processing"]
    },
    {
      icon: Globe,
      title: "Web Scraping Projects",
      description: "Automated data collection systems designed for maximum efficiency and reliability.",
      features: ["Automated data collection", "API development", "Data structuring", "CSV/JSON output"]
    },
    {
      icon: Database,
      title: "Dataset Preparation",
      description: "Specialized automotive datasets created and curated for machine learning applications.",
      features: ["Data cleaning", "Annotation services", "Dataset structuring", "Quality assurance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold mb-4">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            Specialized AI and machine learning solutions with automotive industry expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-800 to-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Service Header */}
              <div className="flex items-center mb-8 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-600/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              {/* Description with improved typography */}
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features with enhanced styling */}
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Read More Link */}
              <div className="mt-10 flex justify-end">
                <button className="flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                  <span className="font-medium">Learn more</span>
                  <ChevronRight className="ml-1 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
