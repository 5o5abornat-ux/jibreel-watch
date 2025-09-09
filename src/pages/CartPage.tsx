import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice,
    language 
  } = useStore();

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
    // Here you would integrate with Stripe or PayPal
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-8xl mb-8">🛒</div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t('emptyCart')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Discover our exquisite collection of luxury timepieces.
          </p>
          <Link
            to="/collection"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t('continueShopping')}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white"
          >
            {t('yourCart')}
          </motion.h1>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Clear Cart
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.watch.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  {/* Watch Image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={item.watch.images[0]}
                      alt={language === 'ar' ? item.watch.nameAr : item.watch.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Watch Details */}
                  <div className="flex-1 ml-6 rtl:ml-0 rtl:mr-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {language === 'ar' ? item.watch.nameAr : item.watch.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {item.watch.movement} • {item.watch.caseMaterial}
                    </p>
                    <p className="text-xl font-bold text-amber-600">
                      {formatPrice(item.watch.price)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button
                      onClick={() => updateQuantity(item.watch.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.watch.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.watch.id)}
                    className="ml-4 rtl:ml-0 rtl:mr-4 p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h3>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-medium">{formatPrice(getTotalPrice() * 0.08)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">{t('total')}</span>
                    <span className="text-lg font-bold text-amber-600">
                      {formatPrice(getTotalPrice() * 1.08)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors mb-4"
              >
                {t('checkout')}
              </motion.button>

              <Link
                to="/collection"
                className="block text-center text-amber-600 hover:text-amber-700 font-medium"
              >
                {t('continueShopping')}
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Free Shipping Worldwide
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    2-Year Warranty
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;