import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const Navbar: React.FC = () => {
  const {
    activePage,
    navigateTo,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Ticker Announcement Bar */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2 px-4 uppercase tracking-widest overflow-hidden whitespace-nowrap z-50 relative">
        <div className="inline-block animate-marquee">
          FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN
          YOUR DAY • BRINGING YOU THE BEST CHEESECAKE • FRESHLY BAKED EVERYDAY
          • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN YOUR DAY • BRINGING YOU
          THE BEST CHEESECAKE
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-[#fbf4ea] border-b border-[#ebd8c5] transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 md:px-12 py-3.5 max-w-[1280px] mx-auto">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-[#222225]">
           <button
  type="button"
  onClick={() => navigateTo("home")}
  className={`transition-colors hover:text-[#801818] ${
    activePage === "home"
      ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
      : ""
  }`}
>
  HOME
</button>

           <button
  type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("collections");
              }}
              className={`transition-colors hover:text-[#801818] ${
                activePage === "collections"
                  ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                  : ""
              }`}
            >
              COLLECTIONS
            </button>

            <button
  type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("order");
              }}
              className={`transition-colors hover:text-[#801818] ${
                activePage === "collections"
                  ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                  : ""
              }`}
            >
              Order Cake
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("about");
              }}
              className={`transition-colors hover:text-[#801818] ${
                activePage === "about"
                  ? "text-[#801818] font-extrabold border-b-2 border-[#801818] pb-0.5"
                  : ""
              }`}
            >
              OUR STORY
            </button>
          </div>

          {/* Center Logo */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("home");
            }}
            className="flex items-center justify-center group"
          >
            <div className="bg-[#801818] text-white px-6 py-2 rounded-full shadow-md border-2 border-[#661212] group-hover:bg-[#661212] transition-colors flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
                Cravie
              </span>
            </div>
          </button>

          {/* Right Navigation & Action Icons */}
          <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-[#222225]">
            {/* Search */}
            <button
            type="button"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-[#222225] p-1.5 hover:bg-[#fce8ea] rounded-full transition-colors"
              title="Search menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                search
              </span>
            </button>

            {/* Cart */}
            <button
            type="button"
              aria-label="Cart"
              onClick={() => setIsCartOpen(true)}
              className="text-[#222225] p-1.5 hover:bg-[#fce8ea] rounded-full transition-colors relative"
              title="View cart"
            >
              <span className="material-symbols-outlined text-[22px]">
                shopping_bag
              </span>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#801818] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now CTA */}
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
              className="md:hidden text-[#222225] p-1"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#fbf4ea] border-t border-[#ebd8c5] px-6 py-4 space-y-3 font-bold text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-[#801818]"
            >
              Home
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("collections");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-[#222225]"
            >
              Browse Collections
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("order");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-[#222225]"
            >
              Order / Customize Cake
            </button>

           <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("about");
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-[#222225]"
            >
              Our Story
            </button>
          </div>
        )}
      </nav>
    </>
  );
};