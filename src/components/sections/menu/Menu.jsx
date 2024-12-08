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
    <section ref={containerRef} id="menu" className="py-20 px-4 md:px-8 bg:[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
      <span className="inline-block w-60 -mt-10 h-1 bg-[#FFDAC9]" style={{ marginLeft: "33rem"}} />
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#333", marginTop: "-1.5rem", marginLeft: "0.7rem"}}>OUR MENU</h2>
        <div className="bg-[#FFD4C8] px-6 py-2 -mt-10 rounded-sm cursor-pointer mx-auto w-fit mb-12">
          <span className="text-sm font-medium">KNOW MORE</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Vertical lines */}
          <div className="hidden lg:block absolute left-1/4 bottom-0 w-px bg-gray-200" style={{ height: "61rem", top: "-13rem" }}></div>
          <div className="hidden lg:block absolute left-1/2 bottom-0 w-px bg-gray-200" style={{ height: "61rem", top: "-13rem" }}></div>
          <div className="hidden lg:block absolute left-3/4 bottom-0 w-px bg-gray-200" style={{ height: "61rem", top: "-13rem" }}></div>

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
              <h3 className={`text-4xl font-bold mb-6 ${category === "MAIN COURSES" ? "-ml-3" : category === "DESSERTS" ? " -ml-6" : "-ml-4"}  -z-10 overflow-wrap: break-word`} style={{ color: "#333" , width: ".2rem"}}>{category}</h3>
              <MenuColumn items={items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;