import React from 'react';

function CommunityHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-2">MEET OUR</h2>
      <div className="relative">
        <h2 className="text-4xl font-bold mb-2">COMMUNITY</h2>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          <div className="bg-[#FFD4C8] px-6 py-2 rounded-sm">
            <span className="text-sm font-medium">KNOW MORE</span>
          </div>
        </div>
      </div>
      <p className="text-lg max-w-xl mx-auto">
        LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO
      </p>
    </div>
  );
}

export default CommunityHeader;