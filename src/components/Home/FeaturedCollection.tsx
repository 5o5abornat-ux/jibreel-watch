import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';
import { watchesData } from '../../data/watches';
import WatchCard from '../UI/WatchCard';
import { Watch } from '../../types';

const FeaturedCollection: React.FC = () => {
  const { t } = useTranslation();
  const { setWatches } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Initialize watches data
  React.useEffect(() => {
    setWatches(watchesData);
  }, [setWatches]);

  const categories = [
    { key: 'all', label: 'All Watches' },
    { key: 'dress', label: t('dress') },
    { key: 'sports', label: t('sports') },
    { key: 'diving', label: t('diving') },
    { key: 'chronograph', label: t('chronograph') },
  ];

  const filteredWatches = selectedCategory === 'all' 
    ? watchesData.slice(0, 6) 
    : watchesData.filter(watch => watch.category === selectedCategory).slice(0, 6);

  return (
    <section id="collection" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover our meticulously crafted timepieces, each embodying the perfect fusion of Swiss precision and contemporary elegance.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category.key
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWatches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <WatchCard watch={watch} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/collection"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold"
          >
            View Complete Collection
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollection;