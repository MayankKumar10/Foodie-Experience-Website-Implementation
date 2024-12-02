import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function RecipeCard({ image, title, description, servings }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 md:h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded">
          <span className="text-lg font-bold">{servings} SERVINGS</span>
        </div>
        {title.includes("CHEF'S CHOICE") && (
          <div className="absolute top-4 right-4">
            <img src="/chef-choice.svg" alt="Chef's Choice" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
        )}
      </div>
      
      <div className="p-4 md:p-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">DIFFICULTY</span>
          <h3 className="text-lg md:text-xl font-bold mt-1">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>
        <div className="flex justify-end">
          <motion.div
            className="bg-[#FFD4C8] p-2 rounded-full cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeCard;