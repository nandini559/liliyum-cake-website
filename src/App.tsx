import React from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { SearchModal } from "./components/SearchModal";
import { Toast } from "./components/Toast";
import { HomePage } from "./pages/HomePage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { OrderPage } from "./pages/OrderPage";
import { AboutPage } from "./pages/AboutPage";

const MainContent: React.FC = () => {
  const { activePage } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar />

      <div className="flex-1">
        {activePage === "home" && <HomePage />}
        {activePage === "collections" && <CollectionsPage />}
        {activePage === "product-detail" && <ProductDetailPage />}
        {activePage === "order" && <OrderPage />}
        {activePage === "about" && <AboutPage />}
      </div>

      <Footer />
      <CartDrawer />
      <SearchModal />
      <Toast />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
};

export default App;
