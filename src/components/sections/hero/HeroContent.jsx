import React from 'react';

function HeroContent() {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 mt-8 -translate-y-1/2 text-center z-10" style={{ color: "#FFF"}}>
      <div className="font-bold leading-tight mb-4 whitespace-nowrap" >

        <div style={{ fontSize: "3.125rem"}}>THE BEST FOODIE</div>
        <div style={{ fontSize: "5.1875rem", marginTop: "-1rem"}}>EXPERIENCE</div>
        
      </div>
      <p className="text-xl tracking-wider" style={{ fontSize: "2.125rem"}} >NOW IN LONDON</p>
    </div>
  );
}

export default HeroContent;