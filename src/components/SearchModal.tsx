import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-[#222225]/50 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative max-w-2xl mx-auto bg-[#fbf4ea] rounded-3xl shadow-2xl overflow-hidden border border-[#ebd8c5] z-10">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-[#ebd8c5] flex items-center gap-3 bg-[#801818] text-white">
          <span className="material-symbols-outlined text-2xl">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Cravie cheesecakes, slices, gift boxes..."
            autoFocus
            className="w-full bg-transparent font-sans text-white placeholder-white/70 focus:outline-none text-base font-semibold"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-white hover:text-[#fce8ea] rounded-full"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#ebd8c5]">
          {searchTerm.trim() === '' ? (
            <div className="p-6 text-center text-[#666666]">
              <p className="font-bold text-xs text-[#801818] uppercase tracking-wider mb-2">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['Matcha', 'Strawberry', 'Chocolate', 'Lemon', 'Cheesecake'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-white text-[#801818] border border-[#ebd8c5] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#801818] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#666666]">
              No Cravie delicacies found matching "{searchTerm}".
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  navigateTo('product-detail', product.id);
                  setIsSearchOpen(false);
                }}
                className="flex items-center gap-4 p-3 hover:bg-white rounded-2xl cursor-pointer transition-colors"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-xl shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-display font-extrabold text-sm text-[#222225]">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-[#666666]">{product.category}</p>
                </div>
                <span className="font-extrabold text-[#801818] text-xs">${product.price}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
