import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { recipesData } from '../../../data/recipes';
import RecipeCard from './RecipeCard';

function Recipes() {
  const containerRef = useRef(null);

  return (
    <section id="recipes" className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-bold">POPULAR RECIPES</h2>
            <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer w-fit mt-4">
              <span className="text-sm font-medium">SEE ALL</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-lg">DO YOU WANT TO SHARE YOUR OWN RECIPE?</span>
            <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer">
              <span className="text-sm font-medium">SEND IT NOW</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {recipesData.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;