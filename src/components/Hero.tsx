import React from 'react';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Yussuf Muse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & Co-Founder of 
            <span className="text-yellow-500 font-semibold"> Lenzro</span>
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting premium technology solutions and marketing systems that transform businesses. 
            Specializing in Java, modern web development, and entrepreneurial innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>View Portfolio</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Work With Me</span>
          </button>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;