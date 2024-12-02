import React from 'react';

function HeroImage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80"
        alt="Food arrangement"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-[#FFE8E0] opacity-90 mix-blend-multiply"></div>
    </div>
  );
}

export default HeroImage;