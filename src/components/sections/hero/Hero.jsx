import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroLogo from './HeroLogo';
import HeroSidebar from './HeroSidebar';

function Hero() {
  return (
    <section className="relative h-screen bg-[#FFE8E0] overflow-hidden">
      <HeroLogo />
      <HeroContent />
      <HeroImage />
      <HeroSidebar />
    </section>
  );
}

export default Hero;