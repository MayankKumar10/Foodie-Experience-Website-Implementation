import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">LOGO</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="hover:text-gray-600 transition-colors">ABOUT</Link>
          <Link to="/community" className="hover:text-gray-600 transition-colors">COMMUNITY</Link>
          <Link to="/location" className="hover:text-gray-600 transition-colors">LOCATION</Link>
          <Link to="/menu" className="hover:text-gray-600 transition-colors">OUR MENU</Link>
          <Link to="/recipes" className="hover:text-gray-600 transition-colors">RECIPES</Link>
          <Link to="/contact" className="hover:text-gray-600 transition-colors">CONTACT</Link>
        </div>
        
        <Link to="/login" className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
          LOGIN
        </Link>
      </div>
    </motion.nav>
  );
}