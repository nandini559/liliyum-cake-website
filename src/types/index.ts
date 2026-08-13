export interface Product {
  id: string;
  name: string;
  category:
    | "Celebration Cakes"
    | "Luxury Indulgence"
    | "Cheesecakes"
    | "Belgian Chocolates"
    | "Hampers";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  description: string;
  longDescription?: string;
  images: string[];
  flavors?: string[];
  sizes?: string[];
  bgColor?: string;
  ingredients?: string[];
  allergens?: string[];
  storage?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor?: string;
  selectedSize?: string;
  customMessage?: string;
}

export interface OrderDetails {
  customerName: string;
  email: string;
  phone: string;
  deliveryType: "delivery" | "pickup";
  address?: string;
  city?: string;
  zipCode?: string;
  deliveryDate: string;
  deliveryTime: string;
  cakeMessage: string;
  specialInstructions: string;
  paymentMethod: "card" | "upi" | "cod";
}
