import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-8 bg-[#FFE8E0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">COLLABORATE WITH US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Let us know about your next event or collaboration opportunity.
              We'd love to be part of your culinary journey!
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}