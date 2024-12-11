import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { instagram_btn } from '../../../assets/Logos';
import { div } from 'framer-motion/client';
import { detail01, detail02 } from '../../../assets/images';

function CommunityPost({id, username, content, image, likes, comments }) {

  const imageURL = typeof image === 'object' ? Object.values(image)[0] : image;

  return (  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="absolute flex rounded-lg justify-between shadow-lg p-2"
      style={{ width: '32rem', background: 'transparent', marginTop: "-5rem", color: "#333333-Charcoal", letterSpacing: "0.15px" }} // Make the background transparent
    >
      <div className="flex flex-col font-bold justify-between" style={{ background: 'white', width: "48%"  }}>
        <div className='m-2' style={{ fontFamily: "Gill Sans, Regular", fontSize: "16px",  }}>
          <h3 className="font-bold text-md mb-2" style={{   fontFamily: "din-condensed, sans-serif" }}>{username}</h3>
          <p className="text-sm text-gray-600" style={{ fontFamily: "normal, Gill Sans, Regular" }} >{content}</p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{comments}</span>
          </div>
        </div>
      </div>
      <div className="relative" style={{ width: "48%", zIndex: "10" }}>
        <img
          src={imageURL}
          alt={`${image}`}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute top-0 right-0 shadow-md">
          <img src={instagram_btn} alt="Instagram" className="w-10 h-10 text-[#FFB7A0]" />
        </div>
      </div>
    </motion.div>
  );
}

export default CommunityPost;
