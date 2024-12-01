import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-peach-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">LOCATION</h2>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <motion.iframe
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.288908919427!2d-0.12985968422955659!3d51.51481697963631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x546c6056645b8f6d!2sCovent%20Garden%2C%20London!5e0!3m2!1sen!2suk!4v1645567128735!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <p className="font-bold">42 Covent Garden, London WC2E 8RF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}