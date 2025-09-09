import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';
import { 
  ShoppingCartIcon, 
  SunIcon, 
  MoonIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, language, setTheme, setLanguage, getTotalItems, user } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('collection'), href: '/collection' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-bold text-gray-900 dark:text-white"
            >
              Jibreel
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <LanguageIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </motion.button>

            {/* Cart */}
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ShoppingCartIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* User Account */}
            <Link to={user?.role === 'admin' ? '/admin' : '/account'}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <UserIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.div>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;