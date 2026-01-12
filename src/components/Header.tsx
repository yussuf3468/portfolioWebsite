import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const navItems = ["about", "lenzro", "services", "portfolio", "educational"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-dark-800 p-2 rounded-lg border border-neon-cyan/30">
                <Terminal className="w-6 h-6 text-neon-cyan" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white font-mono">
                YM<span className="text-neon-cyan">.</span>
              </span>
              <span className="text-xs text-gray-500 font-mono">developer</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative nav-link group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative z-10">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="relative px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neon-cyan" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6 border-t border-white/10 mt-4">
                {navItems.map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-gray-300 hover:text-neon-cyan transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
