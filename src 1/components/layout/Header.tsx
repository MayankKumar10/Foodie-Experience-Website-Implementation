import React from 'react';
import { Utensils } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Utensils className="w-8 h-8" />
        </div>
        <Navigation />
      </div>
    </header>
  );
}