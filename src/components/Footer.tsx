import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Educational Hub", href: "#educational" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "My Journey", href: "#timeline" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yusufmuze", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yussuf-muse",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur-md opacity-50" />
                  <div className="relative bg-dark-800 p-2 rounded-lg border border-neon-cyan/30">
                    <Terminal className="w-6 h-6 text-neon-cyan" />
                  </div>
                </div>
                <span className="text-2xl font-bold font-mono">
                  YM<span className="text-neon-cyan">.</span>developer
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
                Full-stack engineer and co-founder of{" "}
                <span className="text-neon-purple font-semibold">Lenzro</span>,
                crafting premium technology solutions that transform businesses
                through innovative code and strategic thinking.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a
                  href="mailto:yussuf@lenzro.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span>yussuf@lenzro.com</span>
                </a>
                <a
                  href="tel:+254722261776"
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-purple transition-colors group"
                >
                  <Phone className="w-4 h-4" />
                  <span>+254 722 261 776</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Remote & On-site Available</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://calendly.com/yussufh080/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-green to-green-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-neon-green/50"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-neon-purple to-neon-pink rounded-full" />
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-neon-purple transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lenzro Section */}
        <div className="py-12 border-b border-white/10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">Visit </span>
              <span className="gradient-text">Lenzro</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Discover premium marketing and systems development services.
              Complete technology solutions that accelerate business growth.
            </p>
            <a
              href="https://lenzro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg font-semibold text-white hover:scale-105 transition-transform shadow-lg hover:shadow-neon-purple/50"
            >
              <span>Explore Lenzro</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Yussuf Muse</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> and
                coffee
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 hover:border-neon-cyan hover:shadow-neon-cyan transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
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
