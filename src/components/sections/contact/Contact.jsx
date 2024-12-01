import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-peach-100 py-20 bg-[#FFE8E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">COLLABORATE WITH US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-lg mb-6">
              Let us get in touch at your convenience! Join our
              vibrant food community where creativity meets taste.
            </p>
            <p className="text-lg">
              We work with people who share our love of good food and
              believe in bringing joy through the art of cooking.
            </p>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}