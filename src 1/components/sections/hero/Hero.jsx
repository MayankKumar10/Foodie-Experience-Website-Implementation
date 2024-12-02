import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroLogo from './HeroLogo';
import HeroNavigation from './HeroNavigation';
import HeroSidebar from './HeroSidebar';

function Hero() {
  return (
    <section className="relative h-screen bg-[#FFE8E0] overflow-hidden">
      <div className="absolute top-8 left-8 right-8">
        <HeroNavigation />
      </div>
      <HeroLogo />
      <HeroContent />
      <HeroImage />
      <HeroSidebar />
    </section>
  );
}

export default Hero;