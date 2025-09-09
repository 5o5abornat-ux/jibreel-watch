import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BrandStory: React.FC = () => {
  const { t } = useTranslation();

  const storyPoints = [
    {
      title: 'Since 1925',
      subtitle: 'A Century of Excellence',
      description: 'Founded in the heart of Switzerland, our legacy spans nearly a century of horological innovation and precision craftsmanship.',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
    },
    {
      title: 'Master Craftsmen',
      subtitle: 'Handcrafted Perfection',
      description: 'Each timepiece is meticulously assembled by master watchmakers who dedicate years to perfecting their craft.',
      image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg',
    },
    {
      title: 'Swiss Movement',
      subtitle: 'Precision Engineering',
      description: 'Our in-house movements represent the pinnacle of Swiss watchmaking, ensuring accuracy that lasts generations.',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('ourStory')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t('storyText')}
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="space-y-20">
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-amber-600 mb-4">
                    {point.title}
                  </h3>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {point.subtitle}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heritage Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '100+', label: 'Years of Excellence' },
            { number: '50,000+', label: 'Timepieces Crafted' },
            { number: '25+', label: 'Countries Worldwide' },
            { number: '5+', label: 'Master Craftsmen' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;