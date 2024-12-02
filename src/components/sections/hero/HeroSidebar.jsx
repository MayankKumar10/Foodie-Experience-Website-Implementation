import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HeroSidebar() {
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 6; // Total number of sections in the page

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-40">
      {Array.from({ length: totalSections }, (_, i) => {
        const isActive = i + 1 === activeSection;
        return (
          <motion.div
            key={i}
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div 
              className={`w-px h-${isActive ? '32' : '16'} bg-black transition-all duration-300 ${
                isActive ? 'opacity-60' : 'opacity-20'
              }`}
            />
            {isActive && (
              <span className="transform -rotate-90 whitespace-nowrap text-sm tracking-wider opacity-60 origin-center translate-y-12 ml-2">
                {String(i + 1).padStart(2, '0')} —
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default HeroSidebar;