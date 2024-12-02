import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { communityData } from '../../../data/community';
import CommunityHeader from './CommunityHeader';
import CommunityPost from './CommunityPost';

function Community() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} id="community" className="py-20 px-8 bg-[#FFE8E0]">
      <div className="max-w-6xl mx-auto">
        <CommunityHeader />
        <div className="space-y-16">
          {communityData.map((post, index) => (
            <motion.div
              key={index}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2 + index * 0.1, 0.8 + index * 0.1, 1],
                  [0, 1, 1, 0]
                ),
                y: useTransform(
                  scrollYProgress,
                  [0, 0.2 + index * 0.1, 0.8 + index * 0.1, 1],
                  [100, 0, 0, -100]
                )
              }}
              className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              <CommunityPost {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;