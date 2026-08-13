import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export const HomePage: React.FC = () => {
  const { navigateTo, addToCart, setIsCartOpen, showToast } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      showToast("Thank you! 15% discount code sent to your email.");
      setNewsletterEmail("");
    }
  };

  return (
    <main className="w-full font-sans bg-[#fbf4ea] text-[#222225] overflow-hidden">
      {/* 1. HERO SPLIT OFFER SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Deep Red Hero Card */}
          <div className="lg:col-span-6 bg-[#801818] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between space-y-6 shadow-lg">
            <div className="space-y-4">
              <span className="bg-[#e08b26] text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm inline-block">
                ★ FRESHLY BAKED DAILY ★
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                HEY, YOUR CHEESECAKE IS ALMOST READY!
              </h1>
              <p className="text-xs sm:text-sm text-[#f5d5d8] leading-relaxed max-w-md">
                A rich and creamy cheesecake made with smooth cream cheese, set
                on a crunchy biscuit crust and topped with fresh strawberries
                and sweet strawberry glaze.
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

      {/* 2. TICKER BAR */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2.5 px-4 uppercase tracking-widest text-center">
        • FRESHLY BAKED EVERYDAY • DREAMY, FRESH & DELICIOUS • MADE TO SWEETEN
        YOUR DAY • BRINGING YOU THE BEST CHEESECAKE
      </div>

      {/* 3. ASSORTMENT SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-8 uppercase tracking-tight">
          ASSORTMENT
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80"
                alt="Cheese Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2 font-display font-extrabold text-sm text-[#222225]">
              Cheese Cakes
            </div>
          </div>

          <div
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80"
                alt="Wedding Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2 font-display font-extrabold text-sm text-[#222225]">
              Wedding Cakes
            </div>
          </div>

          <div
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80"
                alt="Cup Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2 font-display font-extrabold text-sm text-[#222225]">
              Cup Cakes
            </div>
          </div>

          <div
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80"
                alt="Brownies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2 font-display font-extrabold text-sm text-[#222225]">
              Brownies
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-[#ebd8c5]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#801818]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ebd8c5]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ebd8c5]"></span>
        </div>
      </section>

      {/* 4. BEST SERVICES */}
      <section className="bg-white py-16 border-y border-[#ebd8c5]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
            BEST SERVICES
          </h2>
          <p className="text-xs text-[#666666] max-w-lg mx-auto mb-10">
            Every slice is prepared with love and premium natural ingredients.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[#fce8ea] p-5 rounded-2xl border border-[#f3c0c5] text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#801818] text-white flex items-center justify-center text-lg shrink-0">
                  🎨
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#801818]">
                    Customize Cakes
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Crafted tailored for your special moments.
                  </p>
                </div>
              </div>

              <div className="bg-[#fce8ea] p-5 rounded-2xl border border-[#f3c0c5] text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#801818] text-white flex items-center justify-center text-lg shrink-0">
                  🚚
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#801818]">
                    Free Shipping
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Delivered in temperature-controlled boxes.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-[#fce8ea]">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&q=80"
                  alt="Floral Cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#fce8ea] p-5 rounded-2xl border border-[#f3c0c5] text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#801818] text-white flex items-center justify-center text-lg shrink-0">
                  ✨
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#801818]">
                    New Design
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Contemporary artisanal aesthetics.
                  </p>
                </div>
              </div>

              <div className="bg-[#fce8ea] p-5 rounded-2xl border border-[#f3c0c5] text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#801818] text-white flex items-center justify-center text-lg shrink-0">
                  👑
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#801818]">
                    High Quality Service
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Satisfaction guaranteed in every slice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT SAY */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
          CLIENT SAY
        </h2>
        <p className="text-xs text-[#666666] max-w-lg mx-auto mb-10">
          Real stories from our sweet community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#801818] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "The Cravie Strawberry Cheesecake is out of this world! Rich,
              creamy, and ridiculously fresh."
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">
                Laura W.
              </h5>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#801818] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "Best cheesecake patisserie in town. The crust texture and glaze
              pairing are perfection."
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">Anna R.</h5>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#801818] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "Ordered a whole cheesecake for our family dinner. Delivered fresh
              and disappeared in minutes!"
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">
                David L.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OLIVE GREEN NEWSLETTER BOX */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8">
        <div className="bg-[#596613] text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg">
          <div className="inline-block bg-[#e08b26] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            ★ 15% OFF YOUR FIRST ORDER ★
          </div>
          <h2 className="font-display text-3xl font-extrabold max-w-xl mx-auto">
            Get special offers and all the latest products to your inbox! + 15%
            off your first order
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto space-y-3"
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
