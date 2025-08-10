import React from 'react';
import { Code, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const resources = [
    { label: 'Educational Hub', href: '#educational' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'My Journey', href: '#timeline' },
    { label: 'Newsletter', href: '#newsletter' }
  ];

  const legal = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-8 h-8 text-yellow-500" />
                <span className="text-2xl font-bold">Yussuf Muse</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
                Full-stack developer and co-founder of Lenzro, passionate about creating 
                premium technology solutions that transform businesses and drive growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:yussuf@lenzro.com" className="hover:text-yellow-500 transition-colors">
                    yussuf@lenzro.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+254769484646" className="hover:text-yellow-500 transition-colors">
                    +254 769 484646
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Available for remote & on-site projects</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lenzro Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Visit <span className="text-yellow-500">Lenzro</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Discover premium marketing and systems development services at Lenzro. 
              We deliver complete technology solutions that accelerate business growth.
            </p>
            <a 
              href="https://lenzro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Explore Lenzro</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Yussuf Muse. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex space-x-6">
              {legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;