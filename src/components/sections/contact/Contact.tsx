import React from 'react';
import SectionTitle from '../../ui/SectionTitle';
import Button from '../../ui/Button';

export default function Contact() {
  return (
    <section className="py-20 px-8 bg-[#FFE8E0]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>COLLABORATE WITH US</SectionTitle>
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
            <Button>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}