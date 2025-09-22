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
    >
      <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book a Tutoring Session</span>
            </button>
    </div>
  );
};

export default FloatingCta;
