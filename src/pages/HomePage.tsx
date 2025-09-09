import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import Hero from '../components/Home/Hero';
import FeaturedCollection from '../components/Home/FeaturedCollection';
import BrandStory from '../components/Home/BrandStory';

const HomePage: React.FC = () => {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <FeaturedCollection />
      <BrandStory />
    </main>
  );
};

export default HomePage;