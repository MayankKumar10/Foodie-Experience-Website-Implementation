import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="relative h-[400px] bg-[#FFE4DC]">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-4xl font-bold mb-4">LOCATION</h2>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2" />
          <p>15 Gourmet St, Pleasant Lane<br />London SW1A 1AA</p>
        </div>
      </div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542367369484!2d-0.12985968422955284!3d51.50736731789825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1647881760889!5m2!1sen!2suk"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}