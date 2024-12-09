import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function Location() {
  return (
    <section id="location" className="relative h-[400px] bg-[#FFE4DC]">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-4xl font-bold mb-4">LOCATION</h2>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2" />
          <p>42 Covent Garden, London WC2E 8RF</p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full h-full"
      >
        <iframe
          src="https://snazzymaps.com/embed/116734"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}

export default Location;