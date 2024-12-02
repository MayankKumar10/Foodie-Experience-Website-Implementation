import React from 'react';
import MenuItem from './MenuItem';

function MenuColumn({ items }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default MenuColumn;