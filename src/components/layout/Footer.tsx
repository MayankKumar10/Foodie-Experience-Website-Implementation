import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        {/* Grid for Sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">SECTION {index + 1}</h3>
              <ul className="space-y-2">
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Logo Section */}
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold tracking-wide">THIS IS THE LOGO</h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <Facebook className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          <Twitter className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          <Instagram className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          <Linkedin className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
          <Dribbble className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>
    </footer>
  );
}
