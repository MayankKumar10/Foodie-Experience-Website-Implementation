import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>Catering</li>
              <li>Private Events</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>+44 20 1234 5678</li>
              <li>info@foodie.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Foodie Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}