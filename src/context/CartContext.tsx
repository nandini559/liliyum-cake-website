import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react"; import { Product, CartItem } from "../types";
// import { PRODUCTS } from "../data/products";

export type PageType =
  "home" | "collections" | "product-detail" | "order" | "about";

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  activePage: PageType;
  selectedProductId: string;
  toastMessage: string | null;
  addToCart: (
    product: Product,
    quantity?: number,
    selectedFlavor?: string,
    selectedSize?: string,
    customMessage?: string
  ) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  navigateTo: (page: PageType, productId?: string) => void;
  showToast: (msg: string) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([

  ]);
  const [wishlist, setWishlist] = useState<string[]>([
    "eclair-raspberry",
    "rose-pistachio-dream",
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<PageType>("home");
  const [selectedProductId, setSelectedProductId] =
    useState<string>("eclair-raspberry");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (
    product: Product,
    quantity = 1,
    selectedFlavor?: string,
    selectedSize?: string,
    customMessage?: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedFlavor === selectedFlavor
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        if (customMessage) next[existingIndex].customMessage = customMessage;
        return next;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedFlavor: selectedFlavor || product.flavors?.[0],
          selectedSize: selectedSize || product.sizes?.[0],
          customMessage,
        },
      ];
    });
    showToast(`Added ${product.name} to your order!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(
      (prev) =>
        prev
          .map((item) => {
            if (item.product.id === productId) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to wishlist");
        return [...prev, productId];
      }
    });
  };

  const navigateTo = (page: PageType, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );


  const contextValue = useMemo(
    () => ({
      cart,
      wishlist,
      isCartOpen,
      isSearchOpen,
      activePage,
      selectedProductId,
      toastMessage,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      setIsCartOpen,
      setIsSearchOpen,
      navigateTo,
      showToast,
      cartCount,
      cartTotal,
    }),
    [
      cart,
      wishlist,
      isCartOpen,
      isSearchOpen,
      activePage,
      selectedProductId,
      toastMessage,
      cartCount,
      cartTotal,
    ]
  );

  return (
    <CartContext.Provider
      value={contextValue}>

      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
