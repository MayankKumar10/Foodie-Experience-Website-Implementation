import React from 'react';
import { ArrowRight } from 'lucide-react';

function RecipeCard({ image, title, description, isBigCard }) {
  const cardStyles = isBigCard
    ? {
        imageWidth: '23.125rem', // 370px
        imageHeight: '23.125rem', // 370px
        bottomWidth: '23.125rem', // 370px
        bottomHeight: '11.875rem', // 190px
        serving: '6.875rem',
      }
    : {
        imageWidth: '15rem', // 240px
        imageHeight: '15rem', // 240px
        bottomWidth: '15rem', // 240px
        bottomHeight: '13.125rem', // 210px
        serving: '4.5rem',
      };

  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 overflow-hidden rounded-sm"
        style={{
        width: cardStyles.imageWidth,
        height: cardStyles.imageHeight,
        }}
      >
        <img
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-white bg-opacity-70 p-2">
          <div className="text-xs font-semibold text-gray-800"
          style={{
            width: cardStyles.serving,
            height: cardStyles.serving,
          }}
          >Servings</div>
        </div>
        <div className="absolute bottom-0 right-0 bg-white p-2 shadow-md">
          <ArrowRight className="w-4 h-4 text-gray-800" />
        </div>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default RecipeCard;
