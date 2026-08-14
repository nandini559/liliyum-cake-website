import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const Navbar: React.FC = () => {
  const {
    activePage,
    navigateTo,
    cartCount,
    setIsCartOpen,

  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0);
  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-[100] w-full">

        {/* Top Ticker Announcement Bar */}
        <div className="bg-[#801818] text-white text-[10px] sm:text-[11px] font-bold py-2 px-3 sm:px-4 uppercase tracking-widest overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN
            YOUR DAY • BRINGING YOU THE BEST CHEESECAKE • FRESHLY BAKED EVERYDAY
            • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN YOUR DAY • BRINGING YOU
            THE BEST CHEESECAKE
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-[#fbf4ea] border-b border-[#ebd8c5] transition-all duration-300">
          <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 max-w-[1280px] mx-auto">

            {/* Left Header Container: Logo + Desktop Navigation Links */}
            <div className="flex items-center space-x-4 md:space-x-6 text-xs font-bold uppercase tracking-wider text-[#222225]">
              {/* Logo (Visible on all screen sizes) */}
              <button
                type="button"
                onClick={() => navigateTo("home")}
                className="flex items-center justify-center group shrink-0"
              >
                <img
                  src="https://liliyum.com/cdn/shop/files/liliyum-logos-allsizes_Instagram-profile_copy_400x.png?v=1613708813"
                  alt="Liliyum Cakes"
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-[#222225]">
                <button
                  type="button"
                  onClick={() => navigateTo("home")}
                  className={`transition-colors hover:text-[#801818] ${activePage === "home"
                    ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                    : ""
                    }`}
                >
                  HOME
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo("collections")}
                  className={`transition-colors hover:text-[#801818] ${activePage === "collections"
                    ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                    : ""
                    }`}
                >
                  COLLECTIONS
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo("about")}
                  className={`transition-colors hover:text-[#801818] ${activePage === "about"
                    ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                    : ""
                    }`}
                >
                  OUR STORY
                </button>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-bold uppercase tracking-wider text-[#222225]">

              {/* Cart */}
              <button
                type="button"
                aria-label="Cart"
                onClick={() => setIsCartOpen(true)}
                className="text-[#222225] p-1.5 hover:bg-[#fce8ea] rounded-full transition-colors relative"
              >
                <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                  shopping_bag
                </span>

                <span className="absolute -top-1 -right-1 bg-[#801818] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </button>

              {/* Order Now */}
              <button
                type="button"
                onClick={() => navigateTo("order")}
                className="hidden md:inline-block bg-[#801818] hover:bg-[#661212] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Order Now
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#222225] p-1.5 rounded-lg hover:bg-[#fce8ea] transition-colors"
                aria-label="Toggle navigation menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#fbf4ea] border-t border-[#ebd8c5] px-6 py-4 space-y-3 font-bold text-xs uppercase tracking-wider shadow-inner">

              <button
                type="button"
                onClick={() => {
                  navigateTo("home");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${activePage === "home" ? "text-[#801818] font-extrabold" : "text-[#222225]"}`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => {
                  navigateTo("collections");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${activePage === "collections" ? "text-[#801818] font-extrabold" : "text-[#222225]"}`}
              >
                Browse Collections
              </button>

              <button
                type="button"
                onClick={() => {
                  navigateTo("order");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${activePage === "order" ? "text-[#801818] font-extrabold" : "text-[#222225]"}`}
              >
                Order / Customize Cake
              </button>

              <button
                type="button"
                onClick={() => {
                  navigateTo("about");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${activePage === "about" ? "text-[#801818] font-extrabold" : "text-[#222225]"}`}
              >
                Our Story
              </button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};