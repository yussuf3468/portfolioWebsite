import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Zap,
  Rocket,
  Star,
  Code,
  Blocks,
} from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Rocket, label: "Projects", value: "50+" },
    { icon: Star, label: "Clients", value: "30+" },
    { icon: Code, label: "Technologies", value: "20+" },
  ];

  const techIcons = [
    { name: "Java", color: "from-orange-500 to-red-500" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Node", color: "from-green-400 to-emerald-600" },
    { name: "SQL", color: "from-blue-400 to-indigo-600" },
    { name: "AWS", color: "from-yellow-400 to-orange-500" },
    { name: "Docker", color: "from-blue-500 to-cyan-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-br from-neon-cyan/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-gradient-to-tr from-neon-purple/30 to-transparent rounded-full blur-3xl"
      />

      {/* Interactive spotlight effect */}
      <div
        className="hidden md:block absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.3), transparent 40%)`,
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div className="grid grid-cols-4 md:grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`border-r border-neon-cyan/20 ${
                i > 3 ? "hidden md:block" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-medium text-white">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white">Building</span>
                <br />
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient">
                  Digital Excellence
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              <span className="text-white font-semibold">Yussuf Muse</span> —
              Software Engineer & Co-Founder of{" "}
              <span className="text-neon-purple font-semibold">Lenzro</span>.
              Crafting scalable solutions with cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start a Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto px-8 py-4 border-2 border-neon-cyan/50 rounded-xl font-semibold text-white hover:bg-neon-cyan/10 transition-all duration-300 hover:border-neon-cyan hover:scale-105"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-500 text-sm">Connect:</span>
              <a
                href="https://github.com/yussuf3468"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-gray-700 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/yussufmuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-gray-700 hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-neon-purple transition-colors" />
              </a>
              <a
                href="mailto:yussufh080@gmail.com"
                className="p-3 rounded-xl border border-gray-700 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-neon-pink transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card - Stats */}
            <div className="glass-card p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Blocks className="w-6 h-6 text-neon-cyan" />
                Impact in Numbers
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg sm:rounded-xl inline-flex mb-2 sm:mb-3">
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neon-cyan" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="glass-card p-2 sm:p-3 md:p-4 text-center cursor-pointer group"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 bg-gradient-to-br ${tech.color} rounded-md sm:rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-sm group-hover:scale-110 transition-transform`}
                  >
                    {tech.name.slice(0, 2)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-neon-pink/30 to-neon-purple/30 rounded-full blur-2xl"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full border border-neon-cyan/30 animate-pulse">
              <ChevronDown className="w-5 h-5 text-neon-cyan" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
