import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function HeroLogo() {
  return (
    <div className="absolute left-1/2 top-32 transform -translate-x-1/2 z-10">
      <div className="relative w-40 h-40">
        {/* Outer Circular Text with Motion */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }} // Full rotation
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Infinite smooth rotation
        >
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path
              d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
              id="curve"
              fill="none"
            />
            <text className="uppercase fill-white" style={{ fontSize: "0.867rem" }}>
              <textPath href="#curve" startOffset="0%">
                Gourmet Experience • Gourmet Experience •
              </textPath>
            </text>
          </svg>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">LOGO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLogo;
