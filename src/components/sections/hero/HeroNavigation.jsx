import React from 'react';

function HeroNavigation() {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'COMMUNITY', href: '#community' },
    { label: 'LOCATION', href: '#location' },
    { label: 'OUR MENU', href: '#menu' },
    { label: 'RECIPES', href: '#recipes' },
  ];

  return (
    <nav className="flex justify-between items-center">
      <div className="flex space-x-12">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex space-x-8">
        <a
          href="#contact"
          className="text-sm font-medium hover:text-gray-600 transition-colors"
        >
          CONTACT
        </a>
        <a
          href="#login"
          className="text-sm font-medium hover:text-gray-600 transition-colors"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
}

export default HeroNavigation;
