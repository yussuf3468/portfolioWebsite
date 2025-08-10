import React, { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // wait for route change
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
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Code className="w-8 h-8 text-yellow-500" />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Yussuf
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "lenzro", "services", "portfolio", "educational"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${
                    isScrolled ? "text-gray-900" : "text-white"
                  } nav-link`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 transition-colors duration-300 ${
              isScrolled
                ? "bg-white/95 text-gray-900 border-b border-gray-100"
                : "bg-black/90 text-white"
            } backdrop-blur-md shadow-lg`}
          >
            <div className="flex flex-col space-y-4 p-6">
              {["about", "lenzro", "services", "portfolio", "educational"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link text-left ${
                      isScrolled ? "text-gray-900" : "text-white"
                    } hover:text-yellow-500 transition-colors duration-300`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
