import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      collection: 'Collection',
      about: 'About',
      contact: 'Contact',
      cart: 'Cart',
      account: 'Account',
      
      // Hero
      heroTitle: 'Time, Perfected.',
      heroSubtitle: 'Discover our exclusive collection of handcrafted Swiss timepieces, where centuries of horological mastery meet contemporary elegance.',
      exploreCollection: 'Explore Collection',
      
      // Products
      newArrival: 'New Arrival',
      limitedEdition: 'Limited Edition',
      soldOut: 'Sold Out',
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      price: 'Price',
      movement: 'Movement',
      caseMaterial: 'Case Material',
      strap: 'Strap',
      waterResistance: 'Water Resistance',
      diameter: 'Diameter',
      
      // Cart
      yourCart: 'Your Cart',
      emptyCart: 'Your cart is empty',
      total: 'Total',
      checkout: 'Checkout',
      continueShopping: 'Continue Shopping',
      
      // Categories
      dress: 'Dress',
      sports: 'Sports',
      diving: 'Diving',
      chronograph: 'Chronograph',
      
      // Admin
      adminPanel: 'Admin Panel',
      addWatch: 'Add Watch',
      editWatch: 'Edit Watch',
      deleteWatch: 'Delete Watch',
      
      // Story
      ourStory: 'Our Story',
      heritage: 'Heritage',
      craftsmanship: 'Craftsmanship',
      storyText: 'For over a century, Jibreel Timepieces has embodied the pinnacle of Swiss horological excellence. Each watch is a testament to our unwavering commitment to precision, artistry, and timeless elegance.',
      
      // Boutique
      visitBoutique: 'Visit Our Boutique',
      findUs: 'Find Us',
      
      // Footer
      warranty: '2-Year Warranty',
      authentic: 'Authentic Swiss Movement',
      shipping: 'Free Global Shipping',
      
      // Common
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      loading: 'Loading...',
      error: 'An error occurred',
    }
  },
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      collection: 'المجموعة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      cart: 'السلة',
      account: 'الحساب',
      
      // Hero
      heroTitle: 'الوقت، مُتقن.',
      heroSubtitle: 'اكتشف مجموعتنا الحصرية من الساعات السويسرية المصنوعة يدوياً، حيث تلتقي قرون من الإتقان الزمني بالأناقة المعاصرة.',
      exploreCollection: 'استكشف المجموعة',
      
      // Products
      newArrival: 'وصول جديد',
      limitedEdition: 'إصدار محدود',
      soldOut: 'نفد المخزون',
      addToCart: 'أضف إلى السلة',
      buyNow: 'اشتري الآن',
      price: 'السعر',
      movement: 'الحركة',
      caseMaterial: 'مادة العلبة',
      strap: 'السوار',
      waterResistance: 'مقاومة الماء',
      diameter: 'القطر',
      
      // Cart
      yourCart: 'سلتك',
      emptyCart: 'سلتك فارغة',
      total: 'المجموع',
      checkout: 'الدفع',
      continueShopping: 'متابعة التسوق',
      
      // Categories
      dress: 'كلاسيكية',
      sports: 'رياضية',
      diving: 'غوص',
      chronograph: 'كرونوغراف',
      
      // Admin
      adminPanel: 'لوحة الإدارة',
      addWatch: 'إضافة ساعة',
      editWatch: 'تعديل الساعة',
      deleteWatch: 'حذف الساعة',
      
      // Story
      ourStory: 'قصتنا',
      heritage: 'التراث',
      craftsmanship: 'الحرفية',
      storyText: 'لأكثر من قرن، جسدت ساعات جبريل قمة التميز السويسري في صناعة الساعات. كل ساعة هي شاهد على التزامنا الثابت بالدقة والفنية والأناقة الخالدة.',
      
      // Boutique
      visitBoutique: 'زر متجرنا',
      findUs: 'ابحث عنا',
      
      // Footer
      warranty: 'ضمان سنتان',
      authentic: 'حركة سويسرية أصلية',
      shipping: 'شحن مجاني عالمياً',
      
      // Common
      close: 'إغلاق',
      save: 'حفظ',
      cancel: 'إلغاء',
      loading: 'جارٍ التحميل...',
      error: 'حدث خطأ',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;