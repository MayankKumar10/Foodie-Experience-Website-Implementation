import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { communityData } from '../../../data/community';
import CommunityHeader from './CommunityHeader';
import CommunityPost from './CommunityPost';
import { detail01, detail02, detail03 } from '../../../assets/images';

function Community() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} id="community" className="py-20 px-8 bg-[#F8F8F8] h-screen" style={{ height: "64rem" , overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <CommunityHeader />


        {/* Community Section */}
        <div className="space-y-16 relative">
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
                ),
              }}
              className={`flex ${index % 2 === 0 ? 'justify-end -mt-20' : 'justify-start mt-10 mb-10'} relative`}
            >
              {index === 0 && (
                <>
                  {/* Card 1 Backgrounds */}
                  <img
                    src={detail02}
                    alt="Detail Background 2"
                    className=" z-5 bottom-0  w-20 opacity-1 "
                    style={{ marginRight: "13rem", marginTop: "8rem", height: "4rem" }}
                  />
                  <img
                    src={detail01}
                    alt="Detail Background 1"
                    className=" z-10 bottom-0 opacity-1"
                    style={{ marginRight: "-14rem", marginTop: "7rem", height: "4rem" }}
                  />
                </>
              )}
              {index === 1 && (
                <>
                  {/* Card 2 Background */}
                  <img
                    src={detail03}
                    alt="Detail Background 3"
                    className="z-5 left-40 top-40 opacity-1"
                    style={{ marginLeft: "2rem", width: "8rem" , marginTop: "7rem", height: "6rem" }}
                  />
                </>
              )}
              {/* Community Post */}
              <CommunityPost {...post} />

              {/* Additional Lorem Text Sections */}
              {index === 0 && (
                <div className=" bold bg:[#333] top-0 left-0 mt-20 mr-5 w-48 text-gray-600 text-sm">
                  <p>
                  LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO
                  </p>
                </div>
              )}
              {index === 2 && (
                <div className="text-gray-60 text-sm transform -translate-y-1/2" style={{ width: "15rem", marginRight: "55rem", marginTop: "5rem", fontFamily: "Gill Sans, Regular", fontSize: "16px",}}
                >
                  <p className="bold bg:[#333] top-0 left-0 mt-20 mr-5 w-48 text-gray-600 text-lg" style={{width: "15rem"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;
