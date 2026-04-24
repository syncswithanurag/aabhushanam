export type OrderStatus = 'Delivered' | 'Shipped' | 'Out for delivery' | 'Packed' | 'Confirmed' | 'Placed';

export interface OrderTimelineStep {
  label: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface OrderDetail {
  id: string;
  item: string;
  sku: string;
  date: string;
  placedAt: string;
  status: OrderStatus;
  amount: number;
  payment: string;
  deliveryAddress: string;
  courier: string;
  trackingId: string;
  estimatedDelivery: string;
  timeline: OrderTimelineStep[];
}

export const mockOrders: OrderDetail[] = [
  {
    id: 'ORD-1024',
    item: 'Twilight Diamond Ring',
    sku: 'RG-101-925',
    date: '21 Apr 2026',
    placedAt: '21 Apr 2026, 2:14 PM',
    status: 'Delivered',
    amount: 4999,
    payment: 'Paid via UPI',
    deliveryAddress: 'A-42, Saket, New Delhi — 110017',
    courier: 'BlueDart Express',
    trackingId: 'BD782934156IN',
    estimatedDelivery: 'Delivered 23 Apr 2026',
    timeline: [
      { label: 'Order placed', description: 'We received your order', date: '21 Apr, 2:14 PM', completed: true },
      { label: 'Payment confirmed', description: 'UPI payment successful', date: '21 Apr, 2:15 PM', completed: true },
      { label: 'Packed', description: 'Quality check passed, ready to ship', date: '21 Apr, 6:40 PM', completed: true },
      { label: 'Shipped', description: 'Handed to courier', date: '22 Apr, 10:05 AM', completed: true },
      { label: 'Out for delivery', description: 'Arriving today', date: '23 Apr, 8:20 AM', completed: true },
      { label: 'Delivered', description: 'Signed by recipient', date: '23 Apr, 4:35 PM', completed: true }
    ]
  },
  {
    id: 'ORD-0972',
    item: 'Aurora Drop Earrings',
    sku: 'ER-301-DIA',
    date: '09 Apr 2026',
    placedAt: '09 Apr 2026, 11:02 AM',
    status: 'Shipped',
    amount: 2199,
    payment: 'Paid via Card',
    deliveryAddress: '12/B, Banjara Hills, Hyderabad — 500034',
    courier: 'Delhivery',
    trackingId: 'DLV9981204456',
    estimatedDelivery: 'Expected by 26 Apr 2026',
    timeline: [
      { label: 'Order placed', description: 'We received your order', date: '09 Apr, 11:02 AM', completed: true },
      { label: 'Payment confirmed', description: 'Card payment successful', date: '09 Apr, 11:03 AM', completed: true },
      { label: 'Packed', description: 'Quality check passed', date: '09 Apr, 5:12 PM', completed: true },
      { label: 'Shipped', description: 'Dispatched from warehouse', date: '10 Apr, 9:30 AM', completed: true },
      { label: 'Out for delivery', description: 'With delivery partner', date: '', completed: false },
      { label: 'Delivered', description: 'Awaiting delivery', date: '', completed: false }
    ]
  }
];

export function getOrderById(orderId: string): OrderDetail | undefined {
  return mockOrders.find((o) => o.id === orderId);
}
