import React from 'react';
import { motion } from 'framer-motion';

function MenuItem({ name, price, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-lg">{name}</h4>
        <span className="bg-[#FFE8E0] px-3 py-1 rounded text-sm">£{price}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

export default MenuItem;