import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MenuItem from './MenuItem';
import { menuData } from '../../../data/menu';

export default function Menu() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="py-20 px-8 text-left">
      {/* OUR MENU Title */}
      <div className="relative">
        <h2
          className="text-charcoal font-bold"
          style={{
            fontFamily: 'DIN Condensed, sans-serif',
            fontSize: '2.875rem', // 62px
            lineHeight: '3.25rem', // 52px
            color: '#333333',
          }}
        >
          OUR MENU
        </h2>
        <div
          className="mx-auto mt-2"
          style={{
            width: '14.75rem', // 236px
            height: '0.375rem', // 6px
            backgroundColor: '#FFDAC9',
          }}
        />
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-12 relative">
        {Object.entries(menuData).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Vertical Line */}
            {index > 0 && (
              <div
                className="absolute top-0 -left-4 h-full"
                style={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: '#CECECE',
                }}
              />
            )}

            <h3
              className="uppercase"
              style={{
                fontFamily: 'DIN Condensed, sans-serif bold',
                fontSize: '2.875rem', // 62px
                color: '#333333',
              }}
            >
              {category}
            </h3>

            {items.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
