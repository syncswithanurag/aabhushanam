export type Category = 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
