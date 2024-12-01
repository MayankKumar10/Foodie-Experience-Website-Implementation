import React from 'react';
import { communityData } from '../../../data/community';
import CommunityHeader from './CommunityHeader';
import CommunityGrid from './CommunityGrid';

function Community() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <CommunityHeader />
        <CommunityGrid posts={communityData} />
      </div>
    </section>
  );
}

export default Community;