import React from 'react';
import { Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#FFE8E0] overflow-hidden">
      <div className="absolute top-8 left-8">
        <Utensils className="w-12 h-12" />
      </div>
      
      <div className="absolute right-0 top-0 w-3/5 h-screen">
        <img 
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80"
          alt="Food arrangement"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="absolute left-8 top-1/3 max-w-xl z-10">
        <h1 className="text-6xl font-bold leading-tight mb-4">
          THE BEST FOODIE
          <br />
          EXPERIENCE
        </h1>
        <p className="text-xl mb-8">NOW IN LONDON</p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Explore Menu
        </button>
      </div>
    </section>
  );
}