import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, FileText, Award } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Rotating roles
  const roles = [
    "Software Developer",
    "Data Analyst",
    "Founder",
    "Java Expert",
    "Mentor",
    "Entrepreneur",
    "Tech Strategist",
    "Marketing Architect",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
      />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-24">
        {/* Rotating Role Title */}
        <div className="h-20 flex flex-col items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl"
            >
              {roles[currentRole]}
            </motion.h1>
          </AnimatePresence>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-200 mt-3 font-semibold"
          >
            & Co-Founder of{" "}
            <span className="text-yellow-400 font-bold">Lenzro</span>
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6"
        >
          Crafting premium technology solutions, marketing systems, and
          data-driven insights that transform businesses. Specializing in
          Java, modern web development, analytics, and entrepreneurial
          innovation.
        </motion.p>

        {/* Certificate Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex items-center justify-center mt-8"
        >
          <a
            href="https://coursera.org/share/c968907f2cb0d4db4611bc6a219ed132"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-yellow-400/30 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
          >
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-sm text-gray-200">
              Earned the{" "}
              <span className="text-yellow-400 font-semibold">
                Google Data Analytics Foundations
              </span>{" "}
              certificate
            </span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-16">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>View Portfolio</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Work With Me</span>
          </button>
        </div>

        {/* Scroll Down Icon */}
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <ChevronDown className="w-9 h-9 text-gray-400 hover:text-yellow-400 transition-colors" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
