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
            src="https://snazzymaps.com/style/116734/sg-test-exercise"
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
