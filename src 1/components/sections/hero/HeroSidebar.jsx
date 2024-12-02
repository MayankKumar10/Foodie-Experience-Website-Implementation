import React from 'react';

function HeroSidebar() {
  return (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6">
      <div className="w-px h-32 bg-black opacity-20"></div>
      <span className="transform -rotate-90 whitespace-nowrap text-sm tracking-wider opacity-60 origin-center translate-y-12">
        01 —
      </span>
      <div className="w-px h-32 bg-black opacity-20"></div>
    </div>
  );
}

export default HeroSidebar;