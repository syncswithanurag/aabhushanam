import type { Product } from '../types/store';

export const products: Product[] = [
  {
    id: 'rg-101',
    name: 'Twilight Diamond Ring',
    category: 'Rings',
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    description: 'A timeless ring with a brilliant-cut center stone and handcrafted silver finish.',
    features: ['925 sterling silver', 'Hypoallergenic', 'Gift box included'],
    inStock: true
  },
  {
    id: 'nk-201',
    name: 'Royal Pearl Necklace',
    category: 'Necklaces',
    price: 3599,
    rating: 4.6,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant freshwater pearls arranged on a durable chain for classic occasions.',
    features: ['Freshwater pearls', 'Adjustable chain', 'Tarnish resistant'],
    inStock: true
  },
  {
    id: 'er-301',
    name: 'Aurora Drop Earrings',
    category: 'Earrings',
    price: 2199,
    originalPrice: 2899,
    rating: 4.7,
    reviews: 211,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80',
    description: 'Statement earrings designed to elevate both traditional and modern outfits.',
    features: ['Lightweight build', 'Secure clasp', 'Premium polish'],
    inStock: true
  },
  {
    id: 'br-401',
    name: 'Celeste Charm Bracelet',
    category: 'Bracelets',
    price: 2799,
    rating: 4.5,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    description: 'A charming bracelet with subtle detailing and a comfortable everyday fit.',
    features: ['Adjustable fit', 'Skin-friendly finish', 'Handcrafted'],
    inStock: true
  },
  {
    id: 'rg-102',
    name: 'Lotus Halo Ring',
    category: 'Rings',
    price: 5399,
    rating: 4.9,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    description: 'Halo design inspired by lotus petals for a bold yet graceful silhouette.',
    features: ['High-shine finish', 'Comfort fit band', 'Luxury gift packaging'],
    inStock: true
  },
  {
    id: 'nk-202',
    name: 'Sunbeam Layered Necklace',
    category: 'Necklaces',
    price: 3199,
    rating: 4.4,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    description: 'Layered chains with a modern pendant, ideal for everyday styling.',
    features: ['Dual-layer chain', 'Lightweight', 'Long-lasting plating'],
    inStock: false
  }
];
