import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { menuData } from '../../../data/menu';
import MenuColumn from './MenuColumn';

function Menu() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="menu" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">OUR MENU</h2>
        <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm cursor-pointer mx-auto w-fit mb-12">
          <span className="text-sm font-medium">KNOW MORE</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Vertical lines */}
          <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-200"></div>

          {Object.entries(menuData).map(([category, items], index) => (
            <motion.div
              key={category}
              style={{
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, index % 2 === 0 ? -100 : 100]
                )
              }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <MenuColumn items={items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;