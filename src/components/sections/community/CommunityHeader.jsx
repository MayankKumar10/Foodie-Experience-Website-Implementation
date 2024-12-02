import React from 'react';
import { motion } from 'framer-motion';

function CommunityHeader() {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-2">MEET OUR</h2>
      <div className="relative inline-block">
        <h2 className="text-4xl font-bold mb-2">COMMUNITY</h2>
        <motion.div 
          className="absolute -right-4 top-1/2 transform -translate-y-1/2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer">
            <span className="text-sm font-medium">KNOW MORE</span>
          </div>
        </motion.div>
      </div>
      <p className="text-lg max-w-xl mx-auto mt-4">
        LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO
      </p>
    </motion.div>
  );
}

export default CommunityHeader;