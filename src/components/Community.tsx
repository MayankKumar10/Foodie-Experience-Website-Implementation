import React from 'react';

const CommunityPost = ({ image, username, content }: { image: string; username: string; content: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center mb-4">
      <img src={image} alt={username} className="w-16 h-16 rounded-full object-cover" />
      <div className="ml-4">
        <h3 className="font-bold">@{username}</h3>
      </div>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default function Community() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
      username: "foodielover",
      content: "Had the most amazing brunch experience! The avocado toast was simply divine 🥑✨"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
      username: "chefsecret",
      content: "Perfect weekend vibes with our signature pizza 🍕"
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
      username: "tastehunter",
      content: "Fresh, colorful, and absolutely delicious! 🥗"
    }
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