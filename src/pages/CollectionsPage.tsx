import React from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../types";


type MenuItem = Product & {
  tags: string[];
  bgColor: string;
};


export const CollectionsPage: React.FC = () => {
  const { addToCart } = useCart();

  const menuItems: MenuItem[] = [
    {
      id: "matcha-cheesecake",
      name: "DOUBLE CHOCO CAKE",
      category: "Celebration Cakes",
      price: 1400,
      tags: ["Omber flavoured sponge cake with fresh cream and splendid toppings"],

      images: [
        "https://liliyum.com/cdn/shop/files/opera_cake_540x.jpg?v=1722411460",
      ],
      bgColor: "#e6f0e6",
      description:
        "Japanese ceremonial grade matcha blended with rich cream cheese.",
      rating: 4.8,
      reviewsCount: 120,
    },
    {
      id: "strawberry-cheesecake",
      name: "BUTTERSCOTCH CAKE",
      category: "Celebration Cakes",
      price: 1249,
      tags: ["Indulge in our handcrafted cakes, made with love for every celebration"],

      images: [
        "https://liliyum.com/cdn/shop/products/YellowOmbreCake_540x.jpg?v=1677495661",
      ],
      bgColor: "#fce8ea",
      description:
        "Classic cheesecake topped with fresh strawberries and sweet glaze.",
      rating: 4.9,
      reviewsCount: 145,
    },
    {
      id: "chocolate-cheesecake",
      name: "CHOCOLATE CAKE",
      category: "Celebration Cakes",
      price: 950,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://liliyum.com/cdn/shop/products/Raspberry-Chocolate-Cake-2_f5dc1a8f-d399-4a14-8367-0db1918cd79a_540x.jpg?v=1630928585",
      ],
      bgColor: "#ebe3e0",
      description:
        "Rich Belgian chocolate cheesecake with a chocolate biscuit crust.",
      rating: 4.9,
      reviewsCount: 180,
    },
    {
      id: "lemon-cake",
      name: "LEMON ZEST CAKE",
      category: "Celebration Cakes",
      price: 1956,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://liliyum.com/cdn/shop/products/Pineapple-Mousse-Cake-1_540x.jpg?v=1630928051",
      ],
      bgColor: "#fef7e0",
      description:
        "Smooth cheesecake layered with refreshing lemon curd.",
      rating: 4.7,
      reviewsCount: 96,
    },
    {
      id: "belgian-chocolate-cake",
      name: "BELGIAN CHOCOLATE CAKE",
      category: "Celebration Cakes",
      price: 2421,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://liliyum.com/cdn/shop/products/Bakedchocolatecheesecake_540x.jpg?v=1630922437",
      ],
      bgColor: "#f3d6c6",
      description:
        "Decadent Belgian chocolate cake with rich creamy layers.",
      rating: 4.9,
      reviewsCount: 210,
    },
    {
      id: "strawberry-bliss",
      name: "STRAWBERRY BLISS",
      category: "Celebration Cakes",
      price: 879,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://liliyum.com/cdn/shop/files/FreshFlowerCake_540x.jpg?v=1693115408",
      ],
      bgColor: "#f8c5ce",
      description:
        "Soft vanilla sponge layered with fresh strawberries and cream.",
      rating: 4.8,
      reviewsCount: 165,
    },
    {
      id: "red-velvet-dream",
      name: "RED VELVET DREAM",
      category: "Celebration Cakes",
      price: 2687,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://liliyum.com/cdn/shop/products/Redvelvetcake-1_540x.jpg?v=1603689375",
      ],
      bgColor: "#e9b4b4",
      description:
        "Classic red velvet sponge with smooth cream cheese frosting.",
      rating: 4.9,
      reviewsCount: 190,
    },
    {
      id: "blueberry-cake",
      name: "BLUEBERRY CAKE",
      category: "Celebration Cakes",
      price: 1899,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://images.unsplash.com/photo-1557308536-ee471ef2c390?w=600&q=80",
      ],
      bgColor: "#d9d8f2",
      description:
        "Creamy cheesecake topped with sweet blueberries.",
      rating: 4.8,
      reviewsCount: 130,
    },
    {
      id: "hazelnut-praline",
      name: "HAZELNUT PRALINE",
      category: "Celebration Cakes",
      price: 3000,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
      ],
      bgColor: "#d8b28c",
      description:
        "Chocolate cake layered with roasted hazelnut praline cream.",
      rating: 4.9,
      reviewsCount: 155,
    },
    {
      id: "mango-mousse-cake",
      name: "MANGO MOUSSE CAKE",
      category: "Celebration Cakes",
      price: 2599,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
      ],
      bgColor: "#f6d98b",
      description:
        "Light mango mousse layered with soft vanilla sponge.",
      rating: 4.7,
      reviewsCount: 110,
    },
    {
      id: "black-forest-cake",
      name: "BLACK FOREST CAKE",
      category: "Celebration Cakes",
      price: 1569,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&q=80",
      ],
      bgColor: "#c9a3a3",
      description:
        "Chocolate sponge with cherries and fresh whipped cream.",
      rating: 4.9,
      reviewsCount: 220,
    },
    {
      id: "caramel-crunch-cake",
      name: "CARAMEL CRUNCH CAKE",
      category: "Celebration Cakes",
      price: 1799,
      tags: ["Discover delicious cakes crafted to make every celebration extra special"],

      images: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
      ],
      bgColor: "#e8c28e",
      description:
        "Soft caramel cake finished with a delicious crunchy topping.",
      rating: 4.8,
      reviewsCount: 140,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#fbf4ea] text-[#222222]">
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16">
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#801818] mb-2 tracking-tight text-center">
          EXPLORE OUR CAKES
        </h2>

        <p className="text-xs sm:text-base md:text-xl text-[#666666] mb-8 md:mb-12 tracking-tight text-center max-w-2xl mx-auto">
          Find our most loved and curated creations according to your favourites
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {menuItems.map((item, index) => {
            const cardColors = [
              "bg-[#f6dce1]", // soft pink
              "bg-[#e9dfc9]", // warm cream
              "bg-[#dce8cf]", // soft green
              "bg-[#e3daf2]", // soft lavender
              "bg-[#f3dfc4]", // soft peach
              "bg-[#d5e9e3]", // soft mint
            ];

            return (
              <div
                key={item.id}
                className={`${cardColors[index % cardColors.length]} rounded-3xl p-4 sm:p-5 shadow-sm border border-[#ebd8c5] flex flex-col justify-between text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Bigger Product Image */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="h-[280px] sm:h-[320px] md:h-[350px] rounded-2xl p-2 sm:p-3 overflow-hidden mb-4 sm:mb-5"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 flex-1 flex flex-col justify-between">
                  <h3 className="font-display font-extrabold text-base sm:text-lg md:text-xl text-[#222222]">
                    {item.name}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#666666] font-semibold">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Price & Cart */}
                <div className="flex justify-between items-center gap-2 pt-3 sm:pt-4 border-t border-[#e5d5c8]">
                  <span className="font-extrabold text-base sm:text-lg text-[#801818] whitespace-nowrap">
                    ₹{item.price}
                  </span>

                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="bg-[#801818] hover:bg-[#661212] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm transition-all hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};