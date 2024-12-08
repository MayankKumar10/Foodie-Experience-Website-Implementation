import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { chef_stamp, go_btn } from '../../../assets/Logos';

function RecipeCard({ image, title, description, servings, isLargeCard }) {
  return (
    <div className="relative overflow-visible">
      <motion.div
        className={`flex-shrink-0 ${
          isLargeCard ? 'w-[380px] lg:w-[450px]' : 'w-[280px] md:w-[320px]'
        } bg-white rounded-sm overflow-hidden shadow-lg`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative">
          {/* Card Image */}
          <img
            src={image}
            alt={title}
            className={`w-full ${isLargeCard ? 'h-64 md:h-80' : 'h-48 md:h-64'} object-cover`}
          />

          {/* Top Left: Servings */}
          <div className="absolute top-0 left-0 bg-white/80 px-4 py-2">
            <div
              className="flex flex-col align-center text-lg p-5 text-black font-bold break-words"
              style={{ alignItems: 'center' }}
            >
              <p>{servings}</p> SERVINGS
            </div>
          </div>

          {/* "Chef's Choice" Badge */}
          {title.includes("CHEF'S CHOICE") && (
            <div
              className="absolute z-50 w-[80px] h-[80px] md:w-[100px] md:h-[100px] -top-2 md:-top-2 right-4 rounded-full flex items-center justify-center"
            >
              <img
                src={chef_stamp}
                alt="Chef's Choice Stamp"
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
              />
            </div>
          )}

          <div className="absolute -mt-12  flex justify-between items-center" style={{ marginLeft: isLargeCard ? "25rem" : "17rem"}}>

            <motion.div
              className="bg-[#FFD4C8] p-2 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img src={go_btn} alt="go btn" />
            </motion.div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <span className="text-sm text-gray-500">DIFFICULTY</span>
            <h3 className="text-lg md:text-xl font-bold mt-1">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>

        </div>
      </motion.div>

      {/* User Full Name */}
      <div className="text-sm mt-2 text-gray-500 text-end">USER FULL NAME</div>
    </div>
  );
}

export default RecipeCard;
