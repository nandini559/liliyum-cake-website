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
      <section className="max-w-[1280px] mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src="https://liliyum.com/cdn/shop/files/Newyork-Cheese-Cake-1_720x.jpg?v=1613720945"
            alt="Cheesecake slices with berries"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-[#801818]/40" />

          {/* Content */}
          <div className="relative z-10 min-h-[380px] sm:min-h-[460px] md:min-h-[550px] px-4 sm:px-8 md:px-16 flex items-center justify-center text-center text-white py-8">
            <div className="w-full max-w-5xl space-y-4 sm:space-y-6">
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                CAKES CRAFTED WITH PASSION & PANACHE
              </h1>

              <p className="mx-auto text-xs sm:text-base md:text-md text-[#fff4f4] leading-relaxed max-w-3xl">
                Bangalore's artisanal patisserie for celebration cakes, Belgian chocolates &
                desserts — baked fresh, delivered the same day
              </p>

              <button
                type="button"
                onClick={() => {
                  addToCart(PRODUCTS[0]);
                  setIsCartOpen(true);
                }}
                className="bg-white text-[#801818] hover:bg-[#fce8ea] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASSORTMENT SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#801818] mb-6 md:mb-8 uppercase tracking-tight">
          SHOP BY OCCATIONS
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden mb-3 sm:mb-4">
              <img
                src="https://liliyum.com/cdn/shop/files/wifesbirthdaycake_540x.jpg?v=1684321259"
                alt="Celebration Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-1.5 font-display font-extrabold text-md text-[#222225]">
              Celebration Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden mb-3 sm:mb-4">
              <img
                src="https://liliyum.com/cdn/shop/products/FloralCakeWithMacarons_540x.jpg?v=1679312807"
                alt="Wedding Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-1.5 font-display font-extrabold text-md text-[#222225]">
              Wedding Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden mb-3 sm:mb-4">
              <img
                src="https://liliyum.com/cdn/shop/products/blueombrecake_540x.jpg?v=1638533280"
                alt="Birthday Cakess"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-1.5 font-display font-extrabold text-md text-[#222225]">
              Birthday Cakes
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigateTo("collections")}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group p-3 border border-[#ebd8c5]"
          >
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden mb-3 sm:mb-4">
              <img
                src="https://liliyum.com/cdn/shop/files/CascadingButterflyCake_540x.jpg?v=1702617471"
                alt="Festive Cakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-1.5 font-display font-extrabold text-md text-[#222225]">
              Festive Cakes
            </div>
          </button>
        </div>
      </section>

      {/* 4. BEST SERVICES */}
      <section className="bg-white py-10 md:py-16 border-y border-[#ebd8c5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">

          {/* Heading */}
          <div className="relative flex justify-center mb-8 md:mb-10">
            {/* Center Heading */}
            <div className="text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#801818] uppercase tracking-tight">
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
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {[...PRODUCTS.slice(0, 6), ...PRODUCTS.slice(0, 6)].map(
              (product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-[#fffaf5] rounded-3xl overflow-hidden border border-[#ebd8c5] group snap-start flex flex-col justify-between"
                >
                  {/* Product Image */}
                  <button
                    type="button"
                    onClick={() =>
                      navigateTo("product-detail", product.id)
                    }
                    className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Bestseller Badge */}
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#596613] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      Bestseller
                    </span>
                  </button>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-[#222225]">
                          {product.name}
                        </h3>

                        <p className="text-xs text-[#777] mt-1 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <span className="font-extrabold text-[#801818] whitespace-nowrap text-sm sm:text-base">
                        ₹{product.price}
                      </span>
                    </div>

                    <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-[#596613] hover:bg-[#48530f] text-white py-2.5 sm:py-3 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all"
                      >
                        Add to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          navigateTo("product-detail", product.id)
                        }
                        className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full border border-[#596613] text-[#596613] hover:bg-[#fce8ea] transition-all text-[10px] sm:text-[11px] font-bold"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* View All */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() => navigateTo("collections")}
              className="border-2 border-[#596613] text-[#596613] hover:bg-[#801818] hover:border-[#801818] hover:text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              View All Cakes
            </button>
          </div>
        </div>
      </section>

      {/* 5. CLIENT SAY */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#801818] mb-2 uppercase tracking-tight">
          WORDS FROM OUR CUSTOMERS
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] max-w-lg mx-auto mb-8 sm:mb-10">
          Real stories from our sweet community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto ">
          <div className="bg-[#801818] p-5 sm:p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-3 sm:space-y-4">
            <div className="text-white font-display text-3xl sm:text-4xl font-extrabold">
              ““
            </div>

            <p className="text-xs text-white/90 leading-relaxed">
              "The Cravie Strawberry Cheesecake is out of this world! Rich,
              creamy, and ridiculously fresh. I am always a big fan of their
              customized options."
            </p>

            <div>
              <h5 className="font-extrabold text-xs text-white">
                Lili Williams.
              </h5>
            </div>
          </div>

          <div className="bg-[#596613] p-5 sm:p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-3 sm:space-y-4">
            <div className="text-white/90 font-display text-3xl sm:text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-white/90 leading-relaxed">
              "Best cakes in town.
              The make the best fresh cream cakes. Got my wedding cake from them and I was very happy with my choice."
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-white/90">Arup Malakar</h5>
            </div>
          </div>

          <div className="bg-[#801818] p-5 sm:p-6 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-3 sm:space-y-4">
            <div className="text-white/90 font-display text-3xl sm:text-4xl font-extrabold">
              ““
            </div>
            <p className="text-xs text-white/90 leading-relaxed">
              "Ordered a whole three stack theme cake for our family dinner. Delivered fresh
              in minutes!Their cakes are moist and perfectly sweet.
              "
            </p>
            <div>
              <h5 className="font-extrabold text-xs text-white/90">
                David Levior
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OLIVE GREEN NEWSLETTER BOX */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">

          {/* Background Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAm44iVmJtI2ZV1NcZdS4pGBP5eYAvBkEN5mYPucFRrQ&s=10"
            alt="Delicious cakes"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#596613]/65" />

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
