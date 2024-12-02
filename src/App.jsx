import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/hero/Hero';
import Community from './components/sections/community/Community';
import Location from './components/sections/location/Location';
import Menu from './components/sections/menu/Menu';
import Recipes from './components/sections/recipes/Recipes';
import Contact from './components/sections/contact/Contact';
import { useScrollSpy } from "./components/hooks/useScrollSpy";
import Footer from './components/layout/Footer';
import SectionIndicator from "./components/sections/Navigation/SectionIndicator";


const SECTIONS = ['hero', 'community', 'menu', 'recipes', 'location', 'contact'];

function App() {
  const currentSection = useScrollSpy(SECTIONS);

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
       <SectionIndicator currentSection={currentSection} totalSections={SECTIONS.length} />

      <Hero />
      <Community />
      <Location />
      <Menu />
      <Recipes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
