import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
    'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg',
    'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Luxury Watch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [-20, -100, -180],
              x: [0, Math.sin(i) * 50, Math.sin(i) * 100]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 bg-amber-400 rounded-full`}
            style={{
              left: `${20 + (i * 15)}%`,
              bottom: '10%',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('heroTitle').split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCollection}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300"
          >
            {t('exploreCollection')}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToCollection}
            className="cursor-pointer text-white/70 hover:text-white transition-colors"
          >
            <ChevronDownIcon className="h-8 w-8 mx-auto" />
            <p className="text-sm mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-500 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;