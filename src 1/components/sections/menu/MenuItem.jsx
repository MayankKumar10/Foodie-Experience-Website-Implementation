import React from 'react';

function MenuItem({ name, price, description }) {
  return (
    <div
      className="flex flex-col justify-between p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-2"
      style={{
        width: '12.1875rem',
        minHeight: '7.875rem',
        backgroundColor: '#ffffff',
      }}
    >
      <h3
        className="mb-2 text-xl font-bold text-gray-800"
        style={{
          fontFamily: 'DIN Condensed, sans-serif',
        }}
      >
        {name}
      </h3>
      <p
        className="text-gray-600 text-sm mb-4"
        style={{
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        {description}
      </p>
      <div
        className="flex items-center justify-center mt-4 border border-[#FFDAC9] rounded-md p-1"
      >
        <span className="text-sm font-medium">${price}</span>
      </div>
    </div>

  );
}

export default MenuItem;
