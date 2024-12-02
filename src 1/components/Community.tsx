import React from 'react';
import { motion } from 'framer-motion'; // For animations
import './Community.css'; // Import custom styles

const CommunityPost = ({ image, username, content }) => (
  <motion.div
    className="community-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ y: 50, opacity: 0 }} // Start slightly below
    animate={{ y: 0, opacity: 1 }} // Move upward
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="flex items-start mb-4">
      <img
        src={image}
        alt={username}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
      />
      <div className="ml-4">
        <h3 className="font-bold text-lg">@{username}</h3>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{content}</p>
  </motion.div>
);

export default function Community() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
      username: 'love_food',
      content:
        'Waffle sticks in Copenhagen! Milk chocolate with sprinkles, dark chocolate with coconut, and milk chocolate with peanuts! 🍫',
    },
    {
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80',
      username: 'buzzfeedfood',
      content:
        'It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮.',
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80',
      username: 'tastehunter',
      content: 'Fresh, colorful, and absolutely delicious! 🥗',
    },
  ];

  return (
    <section className="py-20 px-8 bg-[#FFE8E0]">
      <h2 className="text-4xl font-bold mb-12 text-center">MEET OUR COMMUNITY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <CommunityPost key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
