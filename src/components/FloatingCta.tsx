import { MessageSquare } from "lucide-react";
import React from "react";

const FloatingCta: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 1000,
      }}
      className="block"
    >
      <button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden sm:inline">Book a Tutoring Session</span>
        <span className="sm:hidden">Book Session</span>
      </button>
    </div>
  );
};

export default FloatingCta;
