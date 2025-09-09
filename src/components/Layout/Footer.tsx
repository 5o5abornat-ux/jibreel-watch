import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  CheckBadgeIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: ShieldCheckIcon,
      title: t('warranty'),
    },
    {
      icon: CheckBadgeIcon,
      title: t('authentic'),
    },
    {
      icon: TruckIcon,
      title: t('shipping'),
    },
  ];

  const openGoogleMaps = () => {
    const destination = "Luxury Watch Boutique, Dubai Mall, Dubai, UAE";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Trust badges */}
      <div className="border-b border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
              >
                <feature.icon className="h-8 w-8 text-amber-400" />
                <span className="text-lg font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Jibreel Timepieces</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('storyText')}
            </p>
            
            {/* Visit Boutique Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openGoogleMaps}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <MapPinIcon className="h-5 w-5" />
              <span className="font-medium">{t('visitBoutique')}</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-amber-400 transition-colors">{t('home')}</a></li>
              <li><a href="/collection" className="hover:text-amber-400 transition-colors">{t('collection')}</a></li>
              <li><a href="/about" className="hover:text-amber-400 transition-colors">{t('about')}</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+971 4 123 4567</li>
              <li>info@jibreeltimepieces.com</li>
              <li>Dubai Mall, Fashion Avenue</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Jibreel Timepieces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;