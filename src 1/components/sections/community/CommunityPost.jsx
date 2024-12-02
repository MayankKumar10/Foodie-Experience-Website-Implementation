import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

function CommunityPost({ username, content, image, likes, comments }) {
  return (
    <div
      className="flex rounded-lg shadow-lg p-2 overflow-hidden"
      style={{
        width: '32rem',
        height: '15rem', // Uniform height for both sections
        backgroundColor: 'transparent', // Transparent background
      }}
    >
      {/* Left Section: Details */}
      <div
        className="flex flex-col justify-between p-4 mr-2"
        style={{
          width: '50%',
          height: '100%', // Ensure it fills the container's height
        }}
      >
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

      {/* Right Section: Image with Instagram Icon */}
      <div
        className="relative flex items-center justify-center ml-2 p-2"
        style={{
          width: '50%',
          height: '100%', // Ensure it fills the entire container height
        }}
      >
        <img
          src={image}
          alt="Post content"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <Instagram className="w-5 h-5 text-[#FFB7A0]" />
        </div>
      </div>
    </div>
  );
}

export default CommunityPost;
