import React from 'react';
import SectionTitle from '../../ui/SectionTitle';
import RecipeCard from './RecipeCard';
import { recipesData } from '../../../data/recipes';
import { ArrowRight } from 'lucide-react';

function Recipes() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle className="mb-0">POPULAR RECIPES</SectionTitle>
          <div className="flex items-center text-sm">
            <span>DO YOU WANT TO SHARE YOUR OWN RECIPE?</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipesData.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              {...recipe} 
              isBigCard={index === 0}  // Example logic to make the first card big
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recipes;
