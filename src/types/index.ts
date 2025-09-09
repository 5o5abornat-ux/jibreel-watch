export interface Watch {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  descriptionAr: string;
  movement: string;
  caseMaterial: string;
  strap: string;
  waterResistance: string;
  diameter: string;
  category: 'dress' | 'sports' | 'diving' | 'chronograph';
  isLimitedEdition: boolean;
  isNewArrival: boolean;
  isSoldOut: boolean;
  inStock: number;
}

export interface CartItem {
  watch: Watch;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'customer';
}

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';