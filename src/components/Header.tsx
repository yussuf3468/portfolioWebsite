import React, { useState, useEffect } from "react";
import { Menu, X, Code, Briefcase } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-yellow-500" />
            <span className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>Yussuf</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } nav-link`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("lenzro")}
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } nav-link`}
            >
              Lenzro
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } nav-link`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } nav-link`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("educational")}
              className={`${
                isScrolled ? "text-gray-900" : "text-white"
              } nav-link`}
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("lenzro")}
                className="nav-link text-left"
              >
                Lenzro
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-link text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("educational")}
                className="nav-link text-left"
              >
                Learn
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
