import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const CollectionsPage: React.FC = () => {
  const { navigateTo, addToCart, setIsCartOpen, showToast } = useCart();
  const [activeTab, setActiveTab] = useState<string>('Most Popular');
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Sample cheesecake menu items matching the design cards
  const menuItems = [
    {
      id: 'matcha-cheesecake',
      name: 'MATCHA CHEESECAKE',
      category: 'Nutty',
      price: 18,
      tags: ['Authentic', 'Creamy', 'Premium'],
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
      bgColor: '#e6f0e6',
      description: 'Japanese ceremonial grade matcha blended with rich cream cheese.'
    },
    {
      id: 'strawberry-cheesecake',
      name: 'STRAWBERRY CHEESECAKE',
      category: 'Fruit-packed',
      price: 20,
      tags: ['Fresh', 'Fruity', 'Sweet'],
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80',
      bgColor: '#fce8ea',
      description: 'Classic NY cheesecake topped with fresh organic strawberries and sweet glaze.'
    },
    {
      id: 'chocolate-cheesecake',
      name: 'CHOCOLATE CHEESECAKE',
      category: 'Mousse',
      price: 22,
      tags: ['Rich', 'Dense', 'Indulgent'],
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
      bgColor: '#ebe3e0',
      description: '70% Belgian dark chocolate ganache cheesecake with chocolate biscuit crust.'
    },
    {
      id: 'lemon-cheesecake',
      name: 'LEMON ZEST CHEESECAKE',
      category: 'Fruity',
      price: 19,
      tags: ['Tart', 'Zesty', 'Citrus'],
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
      bgColor: '#fef7e0',
      description: 'Meyer lemon curd layered over silky smooth cheesecake filling.'
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    if (activeTab === 'Most Popular') return true;
    return item.category.toLowerCase() === activeTab.toLowerCase();
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      showToast('Thank you! 15% discount code sent to your email.');
      setNewsletterName('');
      setNewsletterEmail('');
    }
  };

  return (
    <main className="w-full font-sans bg-[#fbf4ea] text-[#222222] overflow-hidden">
      
      {/* 1. TOP TICKER TAPE BAR */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2 px-4 uppercase tracking-widest overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN YOUR DAY • BRINGING YOU THE BEST CHEESECAKE • FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN YOUR DAY • BRINGING YOU THE BEST CHEESECAKE
        </div>
      </div>

      {/* 2. HERO SPLIT OFFER SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Deep Red Hero Card */}
          <div className="lg:col-span-6 bg-[#801818] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                HEY, YOUR CHEESECAKE IS ALMOST READY!
              </h1>
              <p className="text-xs sm:text-sm text-[#f5d5d8] leading-relaxed max-w-md">
                A rich and creamy cheesecake made with smooth cream cheese, set on a crunchy biscuit crust and topped with fresh strawberries and sweet strawberry glaze.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(PRODUCTS[0]);
                  setIsCartOpen(true);
                }}
                className="bg-white text-[#801818] hover:bg-[#fce8ea] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                ORDER NOW
              </button>
            </div>
          </div>

          {/* Right Photographic Banner Image */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-lg h-[350px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1000&q=80"
              alt="Cheesecake slices with berries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. TICKER BAR 2 */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2.5 px-4 uppercase tracking-widest text-center">
        • FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN YOUR DAY • BRINGING YOU THE BEST CHEESECAKE
      </div>

      {/* 4. MENU SHOWCASE SECTION ("BAKING ENDLESS HAPPINESS FOR EVERY HEART") */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-8 uppercase tracking-tight">
          BAKING ENDLESS HAPPINESS FOR EVERY HEART
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {[
            { label: 'Most Popular', color: 'bg-black text-white' },
            { label: 'Mousse', color: 'bg-[#e0b89b] text-[#222]' },
            { label: 'Fruit-packed', color: 'bg-[#e08090] text-white' },
            { label: 'Fruity', color: 'bg-[#e05050] text-white' },
            { label: 'Nutty', color: 'bg-[#5c7a40] text-white' }
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                activeTab === tab.label
                  ? 'bg-[#801818] text-white ring-2 ring-[#801818]'
                  : 'bg-white text-[#444] hover:bg-[#f5e6d6]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(filteredItems.length > 0 ? filteredItems : menuItems).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-[#ebd8c5] flex flex-col justify-between text-center group hover:shadow-md transition-all"
            >
              {/* Scalloped Card Top Badge Image */}
              <div
                style={{ backgroundColor: item.bgColor }}
                className="relative aspect-square rounded-2xl p-4 overflow-hidden mb-4 flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Tags */}
              <div className="space-y-2 mb-4">
                <h3 className="font-display font-extrabold text-base text-[#222222] tracking-tight">
                  {item.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-1 text-[10px] text-[#666666] font-semibold">
                  {item.tags.map((tag, idx) => (
                    <span key={idx}>
                      ● {tag} {idx < item.tags.length - 1 ? '' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex justify-between items-center pt-2 border-t border-[#f3e3d3]">
                <span className="font-extrabold text-base text-[#801818]">${item.price}</span>
                <button
                  onClick={() => {
                    addToCart(PRODUCTS[0]);
                  }}
                  className="bg-[#801818] hover:bg-[#661212] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Pill Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <div className="bg-[#222225] text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-3 shadow-sm">
            <button className="hover:text-[#e08b26]">&lt;</button>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-[#801818]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
            <button className="hover:text-[#e08b26]">&gt;</button>
          </div>

          <button
            onClick={() => setActiveTab('Most Popular')}
            className="bg-white border border-[#ebd8c5] text-[#222225] hover:bg-[#801818] hover:text-white px-5 py-2 rounded-full text-xs font-bold transition-colors shadow-sm"
          >
            View All [8]
          </button>
        </div>
      </section>

      {/* 5. FEATURE CALLOUT BANNER ("Freshly crafted cheesecake in every box...") */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-6">
        <div className="bg-[#801818] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Freshly crafted cheesecake in every box, made to melt in every bite
            </h2>
            <p className="text-xs sm:text-sm text-[#f5d5d8] leading-relaxed max-w-md">
              Freshly made with the finest ingredients and carefully packed to preserve quality, each box delivers a rich, satisfying taste with guaranteed freshness in every bite, perfect for sharing, gifting, or enjoying anytime you crave a delightful treat.
            </p>
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <button
                onClick={() => {
                  addToCart(PRODUCTS[0]);
                  setIsCartOpen(true);
                }}
                className="bg-white text-[#801818] hover:bg-[#fce8ea] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                ORDER NOW
              </button>

              {/* Starburst Badge */}
              <div className="bg-[#e08b26] text-white text-[10px] font-extrabold px-4 py-2 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                <span>★★★</span> Unwrap a slice of pure joy!
              </div>
            </div>
          </div>

          {/* Right Image Column with 100% Quality Stamp */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md h-[300px] lg:h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80"
              alt="Cheesecake in box"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#596613] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              🌿 100% QUALITY GUARANTEED
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANATOMY DIAGRAM ("CRAFTED SIMPLY, LOVED DEEPLY") */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
          CRAFTED SIMPLY, LOVED DEEPLY
        </h2>
        <p className="text-xs text-[#666666] mb-12 max-w-lg mx-auto">
          Made with simple ingredients, loved for its rich and cakey texture.
        </p>

        {/* Exploded Diagram Box */}
        <div className="max-w-4xl mx-auto relative grid grid-cols-1 md:grid-cols-3 items-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5]">
          
          {/* Left 2 Callout Badges */}
          <div className="space-y-6 text-left">
            <div className="bg-[#fce8ea] p-4 rounded-2xl border border-[#f3c0c5]">
              <h4 className="font-extrabold text-sm text-[#801818] mb-1">Strawberry Fruit</h4>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Made with fresh strawberries, offering a natural sweetness with a slight tart, adding a refreshing and vibrant flavor.
              </p>
            </div>

            <div className="bg-[#fce8ea] p-4 rounded-2xl border border-[#f3c0c5]">
              <h4 className="font-extrabold text-sm text-[#801818] mb-1">Cheesecake Filling</h4>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Rich and creamy filling crafted from high quality ingredients, delivering a smooth texture and indulgent flavor.
              </p>
            </div>
          </div>

          {/* Center Cheesecake Slice Image */}
          <div className="flex justify-center relative py-4">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80"
              alt="Cheesecake slice diagram"
              className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-[#fce8ea]"
            />
          </div>

          {/* Right 2 Callout Badges */}
          <div className="space-y-6 text-left">
            <div className="bg-[#fce8ea] p-4 rounded-2xl border border-[#f3c0c5]">
              <h4 className="font-extrabold text-sm text-[#801818] mb-1">Strawberry Glaze</h4>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                A smooth, glossy layer that brings extra fruit sweetness while enhancing the rich strawberry taste in every bite.
              </p>
            </div>

            <div className="bg-[#fce8ea] p-4 rounded-2xl border border-[#f3c0c5]">
              <h4 className="font-extrabold text-sm text-[#801818] mb-1">Biscuit Crust</h4>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                A smooth, buttery base that adds a perfect texture contrast and complements the soft cheesecake filling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "THE QUALITY BEHIND EVERY SLICE OF CHEESECAKE" (3 Color Cards) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
          THE QUALITY BEHIND EVERY SLICE OF CHEESECAKE
        </h2>
        <p className="text-xs text-[#666666] mb-10 max-w-xl mx-auto">
          Every slice is made with premium ingredients and careful baking, delivering a rich, creamy taste with consistent quality in every bite.
        </p>

        {/* 3 Color Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Deep Red */}
          <div className="bg-[#801818] text-white p-8 rounded-3xl shadow-md text-center space-y-4 flex flex-col justify-between">
            <div className="w-16 h-16 rounded-2xl bg-[#9c2222] mx-auto flex items-center justify-center text-3xl">
              🧀
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-lg">Premium Quality Ingredients</h3>
              <p className="text-xs text-[#f5d5d8] leading-relaxed">
                We use only high-quality cream cheese and fine ingredients to create a richer taste and a finer texture.
              </p>
            </div>
          </div>

          {/* Card 2: Warm Orange */}
          <div className="bg-[#e08b26] text-white p-8 rounded-3xl shadow-md text-center space-y-4 flex flex-col justify-between">
            <div className="w-16 h-16 rounded-2xl bg-[#f09a35] mx-auto flex items-center justify-center text-3xl">
              🍰
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-lg">Freshly Baked Daily</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Each cheesecake is freshly baked every day to maintain its quality, softness, and signature homemade taste.
              </p>
            </div>
          </div>

          {/* Card 3: Deep Red */}
          <div className="bg-[#801818] text-white p-8 rounded-3xl shadow-md text-center space-y-4 flex flex-col justify-between">
            <div className="w-16 h-16 rounded-2xl bg-[#9c2222] mx-auto flex items-center justify-center text-3xl">
              ✨
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-lg">Premium Quality Ingredients</h3>
              <p className="text-xs text-[#f5d5d8] leading-relaxed">
                We use only high-quality cream cheese and fine ingredients to create a richer taste and a finer texture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Rich Cheesecake Flavors Made with Love" (Store & Location Banner) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#ebd8c5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Table Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80"
              alt="Cheesecake table spread"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#801818] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
              EST. 2024 CRAVIE PATISSERIE
            </div>
          </div>

          {/* Right Store Info Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="font-display text-3xl font-extrabold text-[#801818] leading-tight">
              Rich Cheesecake Flavors Made with Love
            </h2>
            <p className="text-xs text-[#666666] leading-relaxed max-w-lg">
              Explore our curated selection of cheesecakes, crafted to be shared and enjoyed together.
            </p>

            <div className="space-y-2 text-xs font-semibold text-[#444444] pt-2">
              <div className="flex items-center gap-2">
                <span>🕒</span> <span>Open everyday: 10.00 am - 11.00 pm</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span> <span>1234 Oakwood Avenue, Apartment 12B, Springfield, IL 62704, United States</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="bg-[#222225] hover:bg-[#801818] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-colors shadow-sm"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER CALLOUT (Olive Green Container `#596613`) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-6">
        <div className="bg-[#596613] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg text-center space-y-6">
          
          {/* Top Starburst Badge */}
          <div className="inline-block bg-[#e08b26] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            ★ 15% OFF YOUR FIRST ORDER ★
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
            Get special offers and all the latest products to your inbox! + 15% off your first order
          </h2>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3 pt-2">
            <input
              type="text"
              value={newsletterName}
              onChange={(e) => setNewsletterName(e.target.value)}
              placeholder="Full Name..."
              className="w-full bg-white text-[#222] px-5 py-3 rounded-full text-xs font-semibold focus:outline-none shadow-inner"
            />
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email Address..."
              required
              className="w-full bg-white text-[#222] px-5 py-3 rounded-full text-xs font-semibold focus:outline-none shadow-inner"
            />
            <button
              type="submit"
              className="w-full bg-[#222225] hover:bg-[#801818] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Submit ➔
            </button>
          </form>

          {/* Stamp Badges */}
          <div className="absolute bottom-4 right-6 text-[10px] font-bold text-white/70">
            CRAVIE PATISSERIE EST 2024
          </div>
        </div>
      </section>

      {/* 10. TICKER BAR 3 */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2.5 px-4 uppercase tracking-widest text-center my-6">
        CRAVIE PICKS • SIGNATURE • FRESH • WHOLE CAKES • SPECIAL • SWEET SLICES • MINISITES • SAVORY
      </div>

      {/* 11. CRAVIE MENU FOOTER */}
      <footer className="bg-[#801818] text-white pt-12 pb-8 px-4 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/20 pb-10">
          
          {/* Massive Display Logo */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter text-white">
              Cravie
            </h1>
          </div>

          {/* Multi-Column Links */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 text-xs text-[#f5d5d8]">
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Discover</h5>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Catalog</a></li>
                <li><a href="#" className="hover:text-white">Featured</a></li>
                <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white">Custom Order</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Connect</h5>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Socials</a></li>
                <li><a href="#" className="hover:text-white">Corporate Gifts</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Guide</h5>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white">Sustainable Sourcing</a></li>
                <li><a href="#" className="hover:text-white">Product Care Guide</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto pt-6 text-center md:text-left text-[11px] text-[#f5d5d8]/80">
          © 2024 Cravie Inc. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
};
