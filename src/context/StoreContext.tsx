import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { products } from '../data/products';
import type { CartItem, Product } from '../types/store';

interface StoreState {
  products: Product[];
  cartItems: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  markRecentlyViewed: (productId: string) => void;
  cartCount: number;
  subtotal: number;
}

const StoreContext = createContext<StoreState | null>(null);
const CART_KEY = 'aabhushanam_cart';
const WISHLIST_KEY = 'aabhushanam_wishlist';
const RECENTLY_VIEWED_KEY = 'aabhushanam_recently_viewed';

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const savedWishlist = localStorage.getItem(WISHLIST_KEY);
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    const savedRecentlyViewed = localStorage.getItem(RECENTLY_VIEWED_KEY);
    return savedRecentlyViewed ? JSON.parse(savedRecentlyViewed) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToCart = (productId: string, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { productId, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) => prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
  };

  const markRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, 12));
  };

  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        return acc;
      }
      return acc + product.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const value = {
    products,
    cartItems,
    wishlist,
    recentlyViewed,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    toggleWishlist,
    markRecentlyViewed,
    cartCount,
    subtotal
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore must be used inside StoreProvider');
  }
  return ctx;
}
