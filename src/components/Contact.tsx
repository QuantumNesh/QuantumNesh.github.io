
import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Github, Download, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_1hsc1tg',
      'template_jj4npfo',
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_name: 'Nimesh Gamage'
      },
      'cVZbC6jIXLW-8A9gN'
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out.",
        variant: "default",
      });
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
    })
    .catch(() => {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
      setSending(false);
    });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+61 494 154 944",
      href: "tel:+61494154944"
    },
    {
      icon: Mail,
      label: "Email",
      value: "77nimesh@gmail.com",
      href: "mailto:77nimesh@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nimeshgamage",
      href: "https://linkedin.com/in/nimeshgamage"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/77nimesh",
      href: "https://github.com/77nimesh"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            Ready to discuss your next AI or automotive project? Let's connect and explore possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Enhanced */}
          <div className="space-y-8">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-400" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-blue-500/25 overflow-hidden group hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Enhanced */}
          <div className="space-y-8">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-blue-400" />
                Contact Information
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                    rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-5 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group transform hover:-translate-y-1"
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-400">{info.label}</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors duration-300 font-medium mt-1">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CV Download - Enhanced */}
              <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-900/30">
                <div className="flex items-start">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-white mb-2">Download CV</h4>
                    <p className="text-gray-300 mb-4">
                      Get a detailed overview of my experience, skills, and certifications.
                    </p>
                    <a
                        href="files/NimeshGamageResume.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-blue-600/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-600/40 transition-colors duration-300 border border-blue-600/30 hover:border-blue-500/50 group"
                      >
                        <Download className="w-5 h-5 mr-2 group-hover:translate-y-[2px] transition-transform duration-300" />
                        Download CV (PDF)
                      </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional feature - availability */}
            <div className="p-6 bg-gradient-to-r from-green-900/20 to-green-800/10 backdrop-blur-sm rounded-xl border border-green-900/20 flex items-center">
              <div className="p-3 bg-gradient-to-r from-green-600 to-green-500 rounded-lg mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Currently Available</h4>
                <p className="text-gray-300">Open to discussing new projects and opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
