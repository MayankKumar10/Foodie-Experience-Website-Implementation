import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroSidebar() {
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 6; // Total number of sections in the page

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-50"
      style={{ color: "#333333" }}
    >
      {Array.from({ length: totalSections }, (_, i) => {
        const isActive = i + 1 === activeSection;
        return (
          <motion.div
            key={i}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Horizontal Line */}
            <div
              className={`absolute ${isActive ? "w-12 ml-3" : "w-8"} h-0.5 bg-gray-800 ${
                isActive ? "opacity-100" : "opacity-50"
              } transition-all duration-300`}
            ></div>

            {/* Section Number */}
            <span
              className={`text-2xl mr-1 font-bold ${
              isActive ? "text-gray-800" : "text-gray-400"
              } transition-colors duration-300`}
            >
              {isActive && String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default HeroSidebar;
