import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { selectedProductId, navigateTo, addToCart, wishlist, toggleWishlist, setIsCartOpen } = useCart();
  
  const product: Product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Strawberry Glaze');
  const [selectedSize, setSelectedSize] = useState<string>('Single Slice');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('ingredients');

  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
  }, [selectedProductId]);

  const isWishlisted = wishlist.includes(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedFlavor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedFlavor, selectedSize);
    setIsCartOpen(true);
  };

  return (
    <main className="w-full bg-[#fbf4ea] text-[#222225] pt-6 pb-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold text-[#666666] uppercase tracking-wider mb-6">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-[#801818]">Home</a>
          <span>/</span>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('collections'); }} className="hover:text-[#801818]">Shop</a>
          <span>/</span>
          <span className="text-[#801818]">{product.name}</span>
        </nav>

        {/* Bento Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Image & Gallery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-3xl overflow-hidden shadow-md border border-[#ebd8c5] p-4 flex items-center justify-center">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6 bg-[#801818] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ★ CRAVIE SIGNATURE
              </div>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-6 right-6 p-2 rounded-full shadow-md transition-colors ${
                  isWishlisted ? 'bg-[#801818] text-white' : 'bg-white text-[#801818] hover:bg-[#fce8ea]'
                }`}
              >
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-24 rounded-2xl overflow-hidden border-2 transition-all shadow-sm ${
                    activeImageIndex === idx
                      ? 'border-[#801818] scale-95 shadow-md'
                      : 'border-[#ebd8c5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-3xl border border-[#ebd8c5] shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧀</span>
                <div>
                  <h4 className="font-extrabold text-xs text-[#801818]">100% Cream Cheese</h4>
                  <p className="text-[10px] text-[#666666]">Pure natural dairy cream cheese.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍰</span>
                <div>
                  <h4 className="font-extrabold text-xs text-[#801818]">Freshly Baked Daily</h4>
                  <p className="text-[10px] text-[#666666]">Artisanal baking every morning.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <h4 className="font-extrabold text-xs text-[#801818]">Express Delivery</h4>
                  <p className="text-[10px] text-[#666666]">Temperature-controlled box.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Details & Controls (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#801818] block mb-1">
                CHEESECAKE SELECTION
              </span>
              <h1 className="font-display text-3xl font-extrabold text-[#222225] mb-2">
                {product.name}
              </h1>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-extrabold text-[#801818]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#888888] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <hr className="border-[#ebd8c5]" />

            {/* Flavor Selection */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase text-[#222225] block">
                Select Flavor:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Strawberry Glaze', 'Matcha Velvet', 'Dark Chocolate', 'Lemon Zest'].map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                      selectedFlavor === flavor
                        ? 'border-[#801818] bg-[#fce8ea] text-[#801818]'
                        : 'border-[#ebd8c5] text-[#444] hover:border-[#801818]'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase text-[#222225] block">
                Select Portion:
              </label>
              <div className="flex gap-2">
                {['Single Slice', 'Half Cake (4)', 'Whole Cake (8)'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                      selectedSize === size
                        ? 'border-[#801818] bg-[#801818] text-white'
                        : 'border-[#ebd8c5] text-[#444] hover:border-[#801818]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stepper & Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs font-extrabold uppercase text-[#222225]">Quantity:</span>
                <div className="flex items-center border border-[#ebd8c5] rounded-xl overflow-hidden bg-[#fbf4ea]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 font-bold text-sm text-[#801818]"
                  >
                    -
                  </button>
                  <span className="px-3 font-bold text-xs">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 font-bold text-sm text-[#801818]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#801818] hover:bg-[#661212] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Add to Order
                </button>
                <button
                  onClick={handleBuyNow}
                  className="bg-[#222225] hover:bg-[#801818] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#ebd8c5] pt-4 space-y-2">
              <div className="border border-[#ebd8c5] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'ingredients' ? null : 'ingredients')}
                  className="w-full p-3 flex justify-between items-center bg-[#fbf4ea] font-extrabold text-xs text-[#801818]"
                >
                  <span>Ingredients & Allergens</span>
                  <span>{activeAccordion === 'ingredients' ? '-' : '+'}</span>
                </button>
                {activeAccordion === 'ingredients' && (
                  <div className="p-3 text-[11px] text-[#666666] bg-white space-y-1">
                    <p>• Premium Spanish Cream Cheese</p>
                    <p>• Fresh Organic Strawberry Puree & Glaze</p>
                    <p>• Butter Graham Cracker Crust</p>
                    <p className="text-[#801818] font-bold mt-1">Allergens: Milk, Wheat, Eggs</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-extrabold text-[#801818] mb-6 uppercase">
            More Cravie Slices You Will Love
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigateTo('product-detail', rel.id)}
                className="bg-white rounded-3xl p-4 shadow-sm border border-[#ebd8c5] cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                  <img
                    src={rel.images[0]}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-display font-extrabold text-sm text-[#222225] mb-1">
                  {rel.name}
                </h4>
                <p className="font-extrabold text-xs text-[#801818]">${rel.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
