import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function CommunityPost({ username, content, image, likes, comments }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex rounded-lg shadow-lg p-2 bg-white"
      style={{ width: '32rem' }}
    >
      <div className="flex flex-col justify-between p-4 w-1/2">
        <div>
          <h3 className="font-bold text-md mb-2">{username}</h3>
          <p className="text-sm text-gray-600">{content}</p>
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
      <div className="relative w-1/2">
        <img
          src={image}
          alt="Post content"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <Instagram className="w-5 h-5 text-[#FFB7A0]" />
        </div>
      </div>
    </motion.div>
  );
}

export default CommunityPost;