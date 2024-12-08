import { motion } from 'framer-motion';
import { detail02 } from '../../../assets/images';

export default function Contact() {
  return (
    <section className="bg-[#FFDAC9] py-20">
      <div className=" container mx-auto px-4">
        {/* Section Title */}
        <div className=" text-start text-4xl font-bold mb-6 relative inline-block">
          COLLABORATE
          <span className="block relative">
          <div className="top-1/2 border-t-4 mt-4 inset-x-0 bg-[#FFF]" style={{ height: "0.3rem", width: "11rem"}}></div>
            <span className="absolute inline-block z-100 px-2 -mt-6">WITH US</span>

          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 relative"
          >
            {/* Pattern Above Form */}
            <div className="absolute grid grid-cols-5 gap-2 " style={{ top: "-12.5rem", left: "5rem" }} >
              <img src={detail02} alt={detail02} />
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: "-4rem"}}>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Experience
                </label>
                <select
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black transition-colors"
                >
                  <option>Experience</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Where did you hear about us?
                </label>
                <select
                  className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-black transition-colors"
                >
                  <option>Social Media</option>
                  <option>Friend</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
