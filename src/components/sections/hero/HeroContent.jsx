import React from 'react';

function HeroContent() {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10" style={{ color: "#FFF"}}>
      <h1 className="text-7xl font-bold leading-tight mb-4 whitespace-nowrap">
        THE BEST FOODIE
        <br />
        EXPERIENCE
      </h1>
      <p className="text-xl tracking-wider">NOW IN LONDON</p>
    </div>
  );
}

export default HeroContent;