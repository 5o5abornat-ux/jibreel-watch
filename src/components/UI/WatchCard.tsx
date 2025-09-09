import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';
import { Watch } from '../../types';
import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface WatchCardProps {
  watch: Watch;
  onViewDetails?: (watch: Watch) => void;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch, onViewDetails }) => {
  const { t, i18n } = useTranslation();
  const { addToCart, language } = useStore();

  const handleAddToCart = () => {
    if (watch.isSoldOut) {
      toast.error(t('soldOut'));
      return;
    }
    addToCart(watch);
    toast.success(`${language === 'ar' ? watch.nameAr : watch.name} added to cart`);
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  const watchName = language === 'ar' ? watch.nameAr : watch.name;
  const watchDescription = language === 'ar' ? watch.descriptionAr : watch.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
        <img
          src={watch.images[0]}
          alt={watchName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {watch.isNewArrival && (
            <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              {t('newArrival')}
            </span>
          )}
          {watch.isLimitedEdition && (
            <span className="bg-amber-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              {t('limitedEdition')}
            </span>
          )}
          {watch.isSoldOut && (
            <span className="bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              {t('soldOut')}
            </span>
          )}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 rtl:space-x-reverse">
          {onViewDetails && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewDetails(watch)}
              className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <EyeIcon className="h-5 w-5" />
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={watch.isSoldOut}
            className="bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
          {watchName}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {watchDescription}
        </p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="text-gray-500 dark:text-gray-400">
            <span className="font-medium">{t('movement')}:</span> {watch.movement}
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <span className="font-medium">{t('diameter')}:</span> {watch.diameter}
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <span className="font-medium">{t('caseMaterial')}:</span> {watch.caseMaterial}
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <span className="font-medium">{t('waterResistance')}:</span> {watch.waterResistance}
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatPrice(watch.price)}
              </span>
              {watch.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(watch.originalPrice)}
                </span>
              )}
            </div>
            {watch.inStock <= 5 && watch.inStock > 0 && (
              <p className="text-xs text-amber-600 font-medium">
                Only {watch.inStock} left
              </p>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={watch.isSoldOut}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium"
          >
            {watch.isSoldOut ? t('soldOut') : t('addToCart')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WatchCard;