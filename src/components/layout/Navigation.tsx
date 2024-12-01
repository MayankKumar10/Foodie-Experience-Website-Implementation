import React from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Location', href: '#location' },
  { label: 'Menu', href: '#menu' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}