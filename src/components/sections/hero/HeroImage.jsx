import React from 'react';
import { hero } from '../../../assets/images';

function HeroImage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src={hero}
        alt="Food arrangement"
        className="w-full h-full object-cover opacity-1"
      />
      <div className="absolute inset-0 bg-[#FFE8E0] opacity-90 mix-blend-multiply"></div>
    </div>
  );
}

export default HeroImage;