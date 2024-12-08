import React from 'react';
import { motion } from 'framer-motion';

function CommunityHeader() {
  return (
    <motion.div 
      className="text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold ">MEET OUR</h2>

      <div className="relative inline-block flex items-center">
        <span className="inline-block mt-4 h-1 bg-[#FFDAC9]" style={{ width: "16rem", marginLeft: "-1rem" }} />
        <h2 className="absolute z-10 mt-4 text-start text-4xl font-bold" style={{ marginLeft: "0rem"}}>COMMUNITY</h2>
        <motion.div 
          className="absolute -right-4 transform -translate-y-1/2"
          whileHover={{ scale: 1.05 }}
        >
        </motion.div>
      </div>
      <div className="bg-[#FFD4C8] w-40 m-6 px-6 py-2 rounded-sm cursor-pointer">
            <span className="text-sm font-medium">KNOW MORE</span>
          </div>
      <p className="text-lg max-w-xl overflow-wrap: break-word" style={{ width: "15rem" }} >
        LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO
      </p>
    </motion.div>
  );
}

export default CommunityHeader;