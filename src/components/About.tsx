
import React from 'react';
import { Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "10+ Years Experience",
      description: "Automotive diagnostic technician specializing in European vehicles",
      stats: "Mercedes-Benz, BMW, Volvo"
    },
    {
      icon: Award,
      title: "AI Transition",
      description: "Certified in machine learning and computer vision",
      stats: "IBM, Coursera, Udemy"
    },
    {
      icon: MapPin,
      title: "Current Focus",
      description: "Developing AI solutions for autonomous and ADAS automotive systems",
      stats: "Computer Vision & ML"
    }
  ];

  const achievements = [
    "Certified AI & Computer Vision Specialist",
    "10+ Years European Vehicle Expertise",
    "Python & Deep Learning Proficiency",
    "Automotive Systems Integration"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Bridging mechanical expertise with artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image with actual photo */}
          <div className="relative group">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Animated border rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 animate-gradient-x"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl transform -rotate-3 group-hover:rotate-6 transition-transform duration-700 animate-pulse opacity-70"></div>
              
              {/* Main image container */}
              <div className="relative bg-slate-700 rounded-3xl overflow-hidden border-4 border-slate-600 h-full group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <img 
                  src="/images/ProfilePicture.jpg" width="auto" height="384" 
                  alt="Nimesh Gamage Profile" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Profile info overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Nimesh Gamage</p>
                  <p className="text-blue-400 text-sm font-medium">AI & Automotive Expert</p>
                </div>
                
                {/* Animated particles effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-6 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-32 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Hover overlay with tech grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
              
              {/* Floating animation circles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-70"></div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-10">
            {/* Bio with better typography */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                <strong className="text-white text-xl">Nimesh Gamage</strong> is a certified AI & Computer Vision Trainee 
                and an experienced Automotive Diagnostic Technician with over 
                <span className="text-blue-400 font-semibold"> 10 years</span> of hands-on expertise 
                in European vehicles including Mercedes-Benz, BMW, and Volvo.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Currently pivoting into AI development and machine learning with a specialization in 
                <span className="text-cyan-400 font-semibold"> computer vision</span>, 
                combining mechanical skill with Python, deep learning, and embedded systems knowledge.
              </p>
            </div>

            {/* Achievements List */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Key Achievements
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

            {/* Enhanced Career Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Award className="w-7 h-7 text-blue-400 mr-3" />
                Career Highlights
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
