import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const AboutPage: React.FC = () => {
  const { navigateTo, showToast } = useCart();
  const [email, setEmail] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast("Thank you! 15% discount code sent to your email.");
      setEmail("");
    }
  };

  return (
    <main className="w-full font-sans bg-[#fbf4ea] text-[#222225] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-6 pb-2 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto text-center">
        <div className="inline-block bg-[#801818] text-white text-[9px] sm:text-[10px] font-extrabold px-3.5 sm:px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
          ★ LILIYUM PATISSERIE & CAFE EST. 2024 ★
        </div>

        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#801818] uppercase tracking-tight">
          Crafted Simply, Loved Deeply.
        </h1>

        <p className="text-xs sm:text-sm text-[#666666] mx-auto mb-2 max-w-2xl">
          Welcome to Liliyum Patisserie & Cafe, where every cheesecake is a celebration
          of artisanal craftsmanship, pure cream cheese, and sweet perfection.
        </p>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Deep Red Hero Card */}
          <div className="lg:col-span-6 bg-[#801818] text-white p-6 sm:p-8 md:p-12 rounded-3xl flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                HEY, YOUR CAKE IS ALMOST READY!
              </h1>
              <p className="text-xs sm:text-sm text-[#f5d5d8] leading-relaxed max-w-md">
                A rich and creamy cheesecake made with smooth cream cheese, set
                on a crunchy biscuit crust and topped with fresh strawberries
                and sweet strawberry glaze. A rich and creamy cheesecake made with smooth cream cheese, set
                on a crunchy biscuit crust and topped with fresh strawberries
                and sweet strawberry glaze.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigateTo("collections")}
                className="bg-white text-[#801818] hover:bg-[#fce8ea] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                ORDER NOW
              </button>
            </div>
          </div>

          {/* Right Photographic Banner Image */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-lg h-[240px] sm:h-[320px] lg:h-full min-h-[240px]">
            <img
              src="https://liliyum.com/cdn/shop/files/Assorted_Brownie_Box_540x.jpg?v=1767839012"
              alt="Cheesecake slices with berries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="bg-[#596613] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-[#718020] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              Our Journey Began with a Simple Dream
            </h2>

            <p className="text-xs text-white/80 leading-relaxed">
              Founded on the belief that everyday moments deserve a slice of
              pure joy, Cravie Patisserie started with a commitment to
              uncompromised quality, fresh strawberries, and authentic European
              cheesecake recipes.
            </p>

            <p className="text-xs text-white/80 leading-relaxed">
              We set out to create a sanctuary for dessert lovers—a place where
              simple ingredients meet passion, resulting in cheesecakes that
              melt in every single bite.
            </p>

            <div className="pt-2">
              <span className="bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full font-bold text-xs inline-block">
                🌿 100% Quality Guaranteed
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md h-[220px] sm:h-[280px] lg:h-full min-h-[220px]">
            <img
              src="https://liliyum.com/cdn/shop/files/PineappleCake_540x.jpg?v=1711023738"
              alt="Cheesecake craft"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* "The Art of the Bake" Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#801818] mb-6 sm:mb-8 uppercase tracking-tight">
          THE ART OF THE BAKE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative overflow-hidden rounded-3xl text-center shadow-md">

            {/* Background Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6jzM2toBnEflDcS_3a9mY1jrLIKipEbx-E85-lzvEQ&s=10"
              alt="Cream cheese cake"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Maroon Overlay */}
            <div className="absolute inset-0 bg-[#801818]/45" />

            {/* Content */}
            <div className="relative z-10 text-white p-6 sm:p-8 space-y-3">
              <div className="text-3xl">🧀</div>

              <h3 className="font-display font-extrabold text-base sm:text-lg">
                Pure Cream Cheese
              </h3>

              <p className="text-xs text-[#f5d5d8]">
                We source only authentic high-grade cream cheese for a rich, silky
                texture.
              </p>
            </div>

          </div>

          <div className="relative overflow-hidden rounded-3xl text-center shadow-md">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=1000&q=85"
              alt="Freshly baked cake"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Green Overlay */}
            <div className="absolute inset-0 bg-[#596613]/45" />

            {/* Content */}
            <div className="relative z-10 text-white p-6 sm:p-8 space-y-3">
              <div className="text-3xl">🍰</div>

              <h3 className="font-display font-extrabold text-base sm:text-lg">
                Freshly Baked Daily
              </h3>

              <p className="text-xs text-white/90">
                Every slice is baked fresh each morning in our artisanal kitchen.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl text-center shadow-md">
            {/* Background Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAm44iVmJtI2ZV1NcZdS4pGBP5eYAvBkEN5mYPucFRrQ&s=10"
              alt="Fresh organic strawberries"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Maroon Overlay */}
            <div className="absolute inset-0 bg-[#801818]/5" />

            {/* Content */}
            <div className="relative z-10 text-white p-6 sm:p-8 space-y-3">
              <div className="text-3xl">🍓</div>

              <h3 className="font-display font-extrabold text-base sm:text-lg">
                Fresh Organic Fruit
              </h3>

              <p className="text-xs text-white/90">
                Topped with handpicked organic berries and natural strawberry glaze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location & Hours Banner */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="bg-[#801818] rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-lg">

          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              Visit Our Bakery & Cafe
            </h3>

            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
              Step into our sweet little world and enjoy freshly baked cakes,
              delightful desserts, and beautiful moments.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-bold">

              <div className="bg-white/15 border border-white/20 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-white">
                🕒 Open Everyday: 10:00 AM – 11:00 PM
              </div>

              <div className="bg-white/15 border border-white/20 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-white">
                📍 1234 Oakwood Avenue, Springfield
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Olive Green Newsletter Callout */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">

          {/* Background Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8tie0iTTCVeGj0un587lRuSjMOyPEF_YsJhglGsd2Q&s=10"
            alt="Delicious cakes"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#596613]/55" />

          {/* Content */}
          <div className="relative z-10 text-white p-6 sm:p-8 md:p-12 text-center space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
              Get special offers and all the latest products to your doorstep!
            </h2>

            <p className="font-display text-xs sm:text-sm md:text-base max-w-xl mx-auto text-white/90">
              Send us your preferences and we will send you a 15% discount code for your first order!
            </p>

            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto space-y-3 pt-2"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email Address..."
                required
                className="w-full bg-white text-[#222] px-5 py-3 rounded-full text-xs font-semibold focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#801818] hover:bg-black text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Submit ➔
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
