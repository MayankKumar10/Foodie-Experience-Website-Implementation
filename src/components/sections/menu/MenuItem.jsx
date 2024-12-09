import React from 'react';
import { motion } from 'framer-motion';

function MenuItem({ name, price, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6"
    >
      <div className="flex flex-col justify-between items-start mb-2" style={{ color: "#333" }}>
        <h4 className="font-bold text-lg ">{name}</h4>
        <p className="bg:[#767676] text-sm mt-2 overflow-wrap: break-word" style={{ fontFamily: "Gill Sans, Regular",}}>{description}</p>
        <span className="px-3 py-1 rounded text-sm mt-2" style={{ border: "3px solid #FFE8E0"}}>£{price}</span>
      </div>

    </motion.div>
  );
}

export default MenuItem;