import { MessageSquare, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCta: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink px-6 py-4 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
          style={{ backgroundSize: "200% 100%" }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline font-mono">Book a Session</span>
          <span className="sm:hidden">Book</span>
        </span>
      </button>
    </motion.div>
  );
};

export default FloatingCta;
