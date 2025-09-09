import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { watchesData } from '../data/watches';
import WatchCard from '../components/UI/WatchCard';
import { FunnelIcon } from '@heroicons/react/24/outline';

const CollectionPage: React.FC = () => {
  const { t } = useTranslation();
  const { setWatches } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setWatches(watchesData);
  }, [setWatches]);

  const categories = [
    { key: 'all', label: 'All Watches' },
    { key: 'dress', label: t('dress') },
    { key: 'sports', label: t('sports') },
    { key: 'diving', label: t('diving') },
    { key: 'chronograph', label: t('chronograph') },
  ];

  const sortOptions = [
    { key: 'name', label: 'Name' },
    { key: 'price-low', label: 'Price: Low to High' },
    { key: 'price-high', label: 'Price: High to Low' },
    { key: 'newest', label: 'Newest First' },
  ];

  let filteredWatches = selectedCategory === 'all' 
    ? watchesData 
    : watchesData.filter(watch => watch.category === selectedCategory);

  // Sort watches
  filteredWatches = [...filteredWatches].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('collection')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our complete collection of luxury timepieces, each crafted with precision and passion.
          </motion.p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 rtl:space-x-reverse bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md"
          >
            <FunnelIcon className="h-5 w-5" />
            <span>Filters</span>
          </button>

          {/* Category Filters */}
          <div className={`flex flex-wrap gap-2 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category.key
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            {sortOptions.map((option) => (
              <option key={option.key} value={option.key}>
                Sort by {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredWatches.length} timepiece{filteredWatches.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredWatches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <WatchCard watch={watch} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWatches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">⌚</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No watches found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters to see more results.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;