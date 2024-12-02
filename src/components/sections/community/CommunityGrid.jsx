import React from 'react';
import CommunityPost from './CommunityPost';

function CommunityGrid({ posts }) {
  return (
    <div className="space-y-12">
      {' '}
      {/* Adds vertical space between rows */}
      {posts.map((post, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? 'justify-end' : 'justify-start'
          }`}
        >
          <CommunityPost {...post} />
        </div>
      ))}
    </div>
  );
}

export default CommunityGrid;
