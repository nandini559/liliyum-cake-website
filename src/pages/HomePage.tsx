import React, { useState, useRef } from "react";
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




  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const scrollAmount = 350;

    if (direction === "right") {
      // If near the end, jump back to the beginning
      if (
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 10
      ) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }

    if (direction === "left") {
      // If at the beginning, go to the end
      if (carousel.scrollLeft <= 10) {
        carousel.scrollTo({
          left: carousel.scrollWidth,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };


  return (
    <main className="w-full font-sans bg-[#fbf4ea] text-[#222225] overflow-hidden">
      {/* 1. HERO  SECTION */}
      <section className="max-w-[1280px] mx-auto px-2 md:px-4 py-4">
        <div className="relative min-h-[500px] md:min-h-[550px] rounded-3xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src="https://liliyum.com/cdn/shop/files/Newyork-Cheese-Cake-1_720x.jpg?v=1613720945"
            alt="Cheesecake slices with berries"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-[#801818]/40" />

          {/* Content */}
          {/* Content */}
          <div className="relative z-10 min-h-[500px] md:min-h-[550px] px-6 md:px-16 flex items-center justify-center text-center text-white">
            <div className="w-full max-w-5xl space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                CAKES CRAFTED WITH PASSION & PANACHE
              </h1>

              <p className="mx-auto text-sm sm:text-base md:text-md text-[#fff4f4] leading-relaxed max-w-3xl">
                Bangalore's artisanal patisserie for celebration cakes, Belgian chocolates &
                desserts — baked fresh, delivered the same day
              </p>

              <button
                type="button"
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
        </div>
      </section>



      {/* 3. ASSORTMENT SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-8 uppercase tracking-tight">
          SHOP BY OCCATIONS
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-64 md:h-72 rounded-2xl overflow-hidden mb-4">              <img
              src="https://liliyum.com/cdn/shop/files/wifesbirthdaycake_540x.jpg?v=1684321259"
              alt="Celebration Cakes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            </div>
            <div className="py-2 font-display font-extrabold text-2xl text-[#222225]">
              Celebration Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-64 md:h-72 rounded-2xl overflow-hidden mb-4">              <img
              src="https://liliyum.com/cdn/shop/products/FloralCakeWithMacarons_540x.jpg?v=1679312807"
              alt="Wedding Cakes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            </div>
            <div className="py-2 font-display font-extrabold text-2xl text-[#222225]">
              Wedding Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-64 md:h-72 rounded-2xl overflow-hidden mb-4">              <img
              src="https://liliyum.com/cdn/shop/products/blueombrecake_540x.jpg?v=1638533280"
              alt="Birthday Cakess"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            </div>
            <div className="py-2 font-display font-extrabold text-2xl text-[#222225]">
              Birthday Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-64 md:h-72 rounded-2xl overflow-hidden mb-4">              <img
              src="https://liliyum.com/cdn/shop/files/CascadingButterflyCake_540x.jpg?v=1702617471"
              alt="Festive Cakes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            </div>
            <div className="py-2 font-display font-extrabold text-2xl text-[#222225]">
              Festive Cakes
            </div>
          </button>
        </div>



      </section>

      {/* 4. BEST SERVICES */}
      <section className="bg-white py-16 border-y border-[#ebd8c5]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">

          {/* Heading */}
          <div className="relative flex justify-center mb-10">
            {/* Center Heading */}
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] uppercase tracking-tight">
                BEST SELLERS
              </h2>

              <p className="text-xs text-[#666666] max-w-lg mt-2 mx-auto">
                Our most loved cakes and desserts, baked fresh for every celebration.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden sm:flex gap-3 absolute right-0 bottom-0">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="w-10 h-10 rounded-full border border-[#ebd8c5] text-[#596613] hover:bg-[#596613] hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous products"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="w-10 h-10 rounded-full bg-[#596613] text-white hover:bg-[#596613] transition-all flex items-center justify-center"
                aria-label="Next products"
              >
                →
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            id="bestseller-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {[...PRODUCTS.slice(0, 6), ...PRODUCTS.slice(0, 6)].map(
              (product, index) => (
                <div
                  key={`${product.id}-${index}`} className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-[#fffaf5] rounded-3xl overflow-hidden border border-[#ebd8c5] group snap-start"
                >
                  {/* Product Image */}
                  <button
                    type="button"
                    onClick={() =>
                      navigateTo("product-detail", product.id)
                    }
                    className="relative w-full h-72 overflow-hidden"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Bestseller Badge */}
                    <span className="absolute top-4 left-4 bg-[#596613] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      Bestseller
                    </span>
                  </button>

                  {/* Product Details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display font-extrabold text-lg text-[#222225]">
                          {product.name}
                        </h3>

                        <p className="text-xs text-[#777] mt-1 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <span className="font-extrabold text-[#801818] whitespace-nowrap">
                        ₹{product.price}
                      </span>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-[#596613] hover:bg-[#596613] text-white py-3 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all"
                      >
                        Add to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          navigateTo("product-detail", product.id)
                        }
                        className="px-4 py-3 rounded-full border border-[#596613] text-[#596613] hover:bg-[#fce8ea] transition-all text-[11px] font-bold"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* View All */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => navigateTo("collections")}
              className="border-2 border-[#596613] text-[#596613] hover:bg-[#801818] hover:text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              View All Cakes
            </button>
          </div>


        </div>
      </section>

      {/* 5. CLIENT SAY */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
          WORDS FROM OUR CUSTOMERS
        </h2>
        <p className="text-xs text-[#666666] max-w-lg mx-auto mb-10">
          Real stories from our sweet community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#596613] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "The Cravie Strawberry Cheesecake is out of this world! Rich,
              creamy, and ridiculously fresh.I am alwaya a big fan of their customized options."
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">
                Lili Williams.
              </h5>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#596613] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "Best cakes in town.
              The make the best fresh cream cakes. Got my wedding cake from them and I was very happy with my choice."
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">Arup Malakar</h5>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
            <div className="text-[#596613] font-display text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              "Ordered a whole three stack theme cake for our family dinner. Delivered fresh
              in minutes!Their cakes are moist and perfectly sweet.
              "
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-[#222225]">
                David Levior
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OLIVE GREEN NEWSLETTER BOX */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8">
        <div className="bg-[#596613] text-white rounded-3xl p-8 md:p-12 text-center space-y-2 shadow-lg">
          {/* <div className="inline-block bg-[#e08b26] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            ★ 15% OFF YOUR FIRST ORDER ★
          </div> */}
          <h2 className=" text-3xl font-extrabold  ">
            Get special offers and all the latest products to your doorstep!

          </h2>
          <h2 className="font-display text-md max-w-xl mx-auto">
            Send us your preferrences and we will send you a 15% discount code for your first order!

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
              className="w-full bg-[#801818] hover:bg-black text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider"
            >
              Submit ➔
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
