import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const AboutPage: React.FC = () => {
  const { navigateTo, showToast } = useCart();
  const [email, setEmail] = useState("");

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
      <section className="relative pt-12 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto text-center">
        <div className="inline-block bg-[#801818] text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
          ★ CRAVIE PATISSERIE EST. 2024 ★
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#801818] mb-4 uppercase tracking-tight">
          Crafted Simply, Loved Deeply.
        </h1>

        <p className="text-xs sm:text-sm text-[#666666] max-w-xl mx-auto mb-8 leading-relaxed">
          Welcome to Cravie Patisserie, where every cheesecake is a celebration
          of artisanal craftsmanship, pure cream cheese, and sweet perfection.
        </p>

        <div>
          <button
            onClick={() => navigateTo("collections")}
            className="bg-[#801818] hover:bg-[#661212] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#ebd8c5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#801818] uppercase tracking-tight">
              Our Journey Began with a Simple Dream
            </h2>
            <p className="text-xs text-[#666666] leading-relaxed">
              Founded on the belief that everyday moments deserve a slice of
              pure joy, Cravie Patisserie started with a commitment to
              uncompromised quality, fresh strawberries, and authentic European
              cheesecake recipes.
            </p>
            <p className="text-xs text-[#666666] leading-relaxed">
              We set out to create a sanctuary for dessert lovers—a place where
              simple ingredients meet passion, resulting in cheesecakes that
              melt in every single bite.
            </p>
            <div className="pt-2">
              <span className="bg-[#fce8ea] text-[#801818] px-4 py-2 rounded-full font-bold text-xs">
                🌿 100% Quality Guaranteed
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80"
              alt="Cheesecake craft"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* "The Art of the Bake" Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-8 uppercase tracking-tight">
          THE ART OF THE BAKE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#801818] text-white p-8 rounded-3xl text-center space-y-3 shadow-md">
            <div className="text-3xl">🧀</div>
            <h3 className="font-display font-extrabold text-lg">
              Pure Cream Cheese
            </h3>
            <p className="text-xs text-[#f5d5d8]">
              We source only authentic high-grade cream cheese for a rich, silky
              texture.
            </p>
          </div>

          <div className="bg-[#e08b26] text-white p-8 rounded-3xl text-center space-y-3 shadow-md">
            <div className="text-3xl">🍰</div>
            <h3 className="font-display font-extrabold text-lg">
              Freshly Baked Daily
            </h3>
            <p className="text-xs text-white/90">
              Every slice is baked fresh each morning in our artisanal kitchen.
            </p>
          </div>

          <div className="bg-[#801818] text-white p-8 rounded-3xl text-center space-y-3 shadow-md">
            <div className="text-3xl">🍓</div>
            <h3 className="font-display font-extrabold text-lg">
              Fresh Organic Fruit
            </h3>
            <p className="text-xs text-[#f5d5d8]">
              Topped with handpicked organic berries and natural strawberry
              glaze.
            </p>
          </div>
        </div>
      </section>

      {/* Store Location & Hours Banner */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#ebd8c5] text-center space-y-4">
          <h3 className="font-display text-2xl font-extrabold text-[#801818]">
            Visit Our Bakery & Cafe
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-[#444444]">
            <span>🕒 Open everyday: 10.00 am - 11.00 pm</span>
            <span>
              📍 1234 Oakwood Avenue, Apartment 12B, Springfield, IL 62704
            </span>
          </div>
        </div>
      </section>

      {/* Olive Green Newsletter Callout */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
        <div className="bg-[#596613] text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg">
          <div className="inline-block bg-[#e08b26] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            ★ 15% OFF YOUR FIRST ORDER ★
          </div>
          <h2 className="font-display text-3xl font-extrabold max-w-xl mx-auto">
            Get special offers and all the latest products to your inbox!
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto space-y-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address..."
              required
              className="w-full bg-white text-[#222] px-5 py-3 rounded-full text-xs font-semibold focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#222225] hover:bg-[#801818] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider"
            >
              Submit ➔
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
