import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPosts from '../components/home/FeaturedPosts';
import UpcomingEvents from '../components/home/UpcomingEvents';
import ResourcesSection from '../components/home/ResourcesSection';
import DiscussionsSection from '../components/home/DiscussionsSection';
import CTASection from '../components/home/CTASection';
import { posts, events, resources, discussions, users } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedPosts posts={posts} />
      <UpcomingEvents events={events} />
      <DiscussionsSection discussions={discussions} users={users} />
      <ResourcesSection resources={resources} />
      <CTASection />
    </div>
  );
};

export default Home;