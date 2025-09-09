import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Watch, CartItem, User, Language, Theme } from '../types';

interface AppState {
  // Theme and language
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;

  // Cart
  cartItems: CartItem[];
  addToCart: (watch: Watch) => void;
  removeFromCart: (watchId: string) => void;
  updateQuantity: (watchId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;

  // User
  user: User | null;
  setUser: (user: User | null) => void;

  // Watches
  watches: Watch[];
  setWatches: (watches: Watch[]) => void;
  addWatch: (watch: Watch) => void;
  updateWatch: (watch: Watch) => void;
  deleteWatch: (watchId: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),

      cartItems: [],
      addToCart: (watch) => {
        const { cartItems } = get();
        const existingItem = cartItems.find(item => item.watch.id === watch.id);
        
        if (existingItem) {
          set({
            cartItems: cartItems.map(item =>
              item.watch.id === watch.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ cartItems: [...cartItems, { watch, quantity: 1 }] });
        }
      },
      removeFromCart: (watchId) => {
        set({
          cartItems: get().cartItems.filter(item => item.watch.id !== watchId)
        });
      },
      updateQuantity: (watchId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(watchId);
          return;
        }
        set({
          cartItems: get().cartItems.map(item =>
            item.watch.id === watchId
              ? { ...item, quantity }
              : item
          )
        });
      },
      clearCart: () => set({ cartItems: [] }),
      getTotalPrice: () => {
        return get().cartItems.reduce((total, item) => total + (item.watch.price * item.quantity), 0);
      },
      getTotalItems: () => {
        return get().cartItems.reduce((total, item) => total + item.quantity, 0);
      },

      user: null,
      setUser: (user) => set({ user }),

      watches: [],
      setWatches: (watches) => set({ watches }),
      addWatch: (watch) => set({ watches: [...get().watches, watch] }),
      updateWatch: (updatedWatch) => set({
        watches: get().watches.map(watch =>
          watch.id === updatedWatch.id ? updatedWatch : watch
        )
      }),
      deleteWatch: (watchId) => set({
        watches: get().watches.filter(watch => watch.id !== watchId)
      }),
    }),
    {
      name: 'jibreel-timepieces-store',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        cartItems: state.cartItems,
        user: state.user,
      }),
    }
  )
);