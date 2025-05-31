
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const Portfolio = () => {
  const [currentTab, setCurrentTab] = useState('projects');
  
  const projects = [
    {
      title: "Grays.com Vehicle Data Scraper",
      description: "Built an automated web scraper to collect and structure sold vehicle auction data. Used Playwright, Python, JSON structuring, and data filtering for CSV output. Designed for automotive resale analytics.",
      technologies: ["Python", "Playwright", "tqdm", "CSV", "JSON"],
      status: "completed",
      features: [
        "Automated data collection from auction sites",
        "Structured JSON data processing",
        "CSV export functionality",
        "Data filtering and validation",
        "Scalable scraping architecture"
      ]
    }
  ];

  const comingSoonProjects = [
    {
      title: "AI-Powered Vehicle Damage Assessment",
      description: "Computer vision system to analyze and categorize vehicle damage from images.",
      technologies: ["PyTorch", "Computer Vision", "React"],
      progress: 40
    },
    {
      title: "Computer Vision ADAS System",
      description: "Advanced driver assistance system using object detection algorithms.",
      technologies: ["TensorFlow", "OpenCV", "Edge AI"],
      progress: 30
    },
    {
      title: "Automotive Maintenance Predictor",
      description: "ML system to predict vehicle maintenance needs from sensor data.",
      technologies: ["Scikit-learn", "Time Series", "IoT"],
      progress: 20
    },
    {
      title: "Real-time Object Detection Dashboard",
      description: "Visualization tool for real-time object detection in automotive scenarios.",
      technologies: ["React", "D3.js", "WebSockets"],
      progress: 15
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_60%)]"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-4">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            Showcasing innovative projects that merge automotive expertise with AI technology
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50">
            <button
              onClick={() => setCurrentTab('projects')}
              className={`px-6 py-3 text-sm rounded-lg font-medium transition-all ${
                currentTab === 'projects' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setCurrentTab('upcoming')}
              className={`px-6 py-3 text-sm rounded-lg font-medium transition-all ${
                currentTab === 'upcoming' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming Projects
            </button>
          </div>
        </div>

        {/* Projects Tab Content */}
        {currentTab === 'projects' && (
          <div className="mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900/90 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Project Info */}
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                          <div className="flex items-center text-green-400 text-sm font-medium mt-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            Completed Project
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies - enhanced */}
                      <div>
                        <h5 className="text-white font-semibold text-lg mb-4">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features - enhanced */}
                      <div>
                        <h5 className="text-white font-semibold text-lg mb-4">Key Features:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons - enhanced */}
                      <div className="flex flex-wrap gap-4 pt-6">
                        <a
                          href="https://github.com/77nimesh/GraysWebScraping_v2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-blue-500/25 group"
                        >
                          <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                          View Code
                        </a>

                        <a
                          href="https://soldcartracker.github.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors duration-300 transform hover:translate-y-[-2px] border border-slate-600 hover:border-slate-500 group"
                        >
                          <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                          Visit Scraped Data
                        </a>
                      </div>

                    </div>

                    {/* Project Visual - enhanced */}
                    <div className="lg:w-1/3 mt-10 lg:mt-0">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 shadow-lg transform group-hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="bg-slate-900 rounded-lg p-4 shadow-inner">
                          <div className="text-center text-gray-400">
                            <img
                              src="/images/ProjectScreenshot.png"
                              alt="Grays.com Vehicle Data Scraper"
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                            
                            {/* Mock terminal/code display */}
                            <div className="mt-6 bg-black/30 rounded-lg p-4 text-left">
                              <div className="flex items-center mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                              <p className="text-green-400 text-xs">
                                <span className="text-blue-400">{'>'}</span> python main.py<br/>
                                <span className="text-gray-500">Collecting data... [====] 100%</span><br/>
                                <span className="text-gray-300">Data exported to sold_cars.csv</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Projects Tab Content */}
        {currentTab === 'upcoming' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 text-center flex items-center justify-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-400" />
              In Development
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {comingSoonProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800 to-slate-900/90 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <div className="px-3 py-1 bg-blue-900/30 rounded-full border border-blue-800/30">
                      <span className="text-blue-400 text-sm">{project.progress}% Complete</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-slate-700 rounded-full mb-6">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="flex items-center px-6 py-3 bg-slate-800/80 text-blue-400 font-medium rounded-xl hover:bg-slate-700/80 transition-colors duration-300 border border-slate-700 hover:border-blue-500/50 group">
                <span>View More Upcoming Projects</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
