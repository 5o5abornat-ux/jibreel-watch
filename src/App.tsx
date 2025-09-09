import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useStore } from './store/useStore';
import './i18n';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import CartPage from './pages/CartPage';

function App() {
  const { theme, language } = useStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [theme, language]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<div className="pt-16 p-8 text-center"><h1 className="text-4xl font-serif">About Us - Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="pt-16 p-8 text-center"><h1 className="text-4xl font-serif">Contact - Coming Soon</h1></div>} />
          <Route path="/account" element={<div className="pt-16 p-8 text-center"><h1 className="text-4xl font-serif">Account - Coming Soon</h1></div>} />
          <Route path="/admin" element={<div className="pt-16 p-8 text-center"><h1 className="text-4xl font-serif">Admin Panel - Coming Soon</h1></div>} />
        </Routes>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: theme === 'dark' ? '#1F2937' : '#FFFFFF',
              color: theme === 'dark' ? '#FFFFFF' : '#1F2937',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;