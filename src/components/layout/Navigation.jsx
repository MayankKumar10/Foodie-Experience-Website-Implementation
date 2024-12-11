import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '#about', section: 'about' },
    { label: 'COMMUNITY', href: '#community', section: 'community' },
    { label: 'LOCATION', href: '#location', section: 'location' },
    { label: 'OUR MENU', href: '#menu', section: 'menu' },
    { label: 'RECIPES', href: '#recipes', section: 'recipes' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = navItems.map(item => item.section);
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 bold space-y-4 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ color: "#333333"}}
    >
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* Left Section: LOGO + Navigation */}
        <div className="flex items-center space-x-8">
          <span className="text-xl font-bold">LOGO</span>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold font-medium transition-colors ${
                  activeSection === item.section
                    ? 'text-black'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Contact + Login */}
        <div className="flex items-center space-x-8">
          <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
            CONTACT
          </a>
          <a href="#login" className="text-sm font-medium hover:text-gray-600 transition-colors">
            LOGIN
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;
