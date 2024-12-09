import React from 'react';
import { motion } from 'framer-motion';

function SectionIndicator({ currentSection, totalSections }) {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-100">
      {Array.from({ length: totalSections }, (_, i) => {
        const isActive = i + 1 === currentSection;
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

export default SectionIndicator;