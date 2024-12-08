import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { recipesData } from '../../../data/recipes';
import RecipeCard from './RecipeCard';
import { back, next } from '../../../assets/Logos';

function Recipes() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="recipes" className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">POPULAR</h2>
            <div className="inline-block bg-[#FFE8E0]  z-100 px-2" style={{ height: "0.3rem", width: "12rem", marginLeft: "-1rem"}}></div>
            <h2 className="absolute text-4xl font-bold -mt-6"> RECIPES</h2>

            <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer w-fit mt-4">
              <span className="text-sm font-medium">SEE ALL</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-col items-end md:items-end space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-lg">DO YOU WANT TO SHARE YOUR OWN RECIPE?</span>
            <div className="flex flex-col bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer">
              <div className="text-sm font-medium">SEND IT NOW</div>
            </div>
          </div>
        </div>

        <div className="relative">


          {/* Horizontal Scrollable Section */}
          <motion.div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
          >
            {recipesData.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} isLargeCard={index === 0} />
            ))}
          </motion.div>

          {/* Horizontal Scroll Buttons */}

            <div className='flex justify-between align-center cursor-pointer'>
              <div onClick={scrollLeft}>
                <img src={back} alt={back} />
              </div>

              <div onClick={scrollRight}>
                <img src={next} alt={next} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
