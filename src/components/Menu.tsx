import React from 'react';

const MenuItem = ({ name, price, description }: { name: string; price: string; description: string }) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-bold text-lg">{name}</h3>
      <span className="text-lg">${price}</span>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Menu() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">OUR MENU</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">STARTERS</h3>
          <MenuItem 
            name="Bruschetta"
            price="8.95"
            description="Fresh tomatoes, basil, and garlic on toasted bread"
          />
          <MenuItem 
            name="Calamari"
            price="12.95"
            description="Crispy fried squid with lemon aioli"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">MAIN COURSES</h3>
          <MenuItem 
            name="Ribeye Steak"
            price="34.95"
            description="Prime cut with roasted vegetables"
          />
          <MenuItem 
            name="Seafood Pasta"
            price="26.95"
            description="Fresh seafood in white wine sauce"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">DESSERTS</h3>
          <MenuItem 
            name="Tiramisu"
            price="9.95"
            description="Classic Italian coffee-flavored dessert"
          />
          <MenuItem 
            name="Crème Brûlée"
            price="8.95"
            description="Rich custard with caramelized sugar"
          />
        </div>
      </div>
    </section>
  );
}