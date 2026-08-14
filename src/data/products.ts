import { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "eclair-raspberry",
    name: "Signature Raspberry Eclair",
    category: "Luxury Indulgence",
    price: 18,
    originalPrice: 22,
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
    description:
      "A little slice of summer joy. Our perfectly crisp choux pastry is piped full of a light, tart raspberry mascarpone cream, finished with a mirror glaze and fresh berries.",
    longDescription:
      "Treat yourself to a moment of lil' yum. Handcrafted daily with French choux dough, fresh organic raspberry reduction, and silky mascarpone. Each eclair is finished with edible 24k gold leaf and fresh raspberries.",
    images: [
      "https://liliyum.com/cdn/shop/files/OmbreButterflycake_540x.jpg?v=1684319267",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDtSnXaXul8Wf746rCHmGAyjnUQXNDI4RoLZ3kPCXli24nPQ-TbyK3k6ZnYCccTh4NV3uuxjp59TRL5l4wYfhX3LTb8xO78FOHicBZ6PKqW-bo3FgxdSIhhzCEcjuTlAWwbrSjwne_XnRLkm9WqsXGM3FtwkZePYRLE6c44GirBCx-BHdEeloFT0BV5J6dIEvskujTn9xmWPqZ8tzNM8qdcN--QECwXca7gtsunBmcRDk67rpYG4_u8A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBynagwxGZMHQPfV3dMmoWo5GeAv9UWDWXIbVPVnaNO3K4L0Uo1CUItac6NIMnOvPsJUu7_mD1w_vXOdqboxQCCGAxxGGDObP05tmx3iWaX-OT5S0NzXHonnmrZywtlYZlhQZbB9mkiNtDnl5B9dWP7qevCXddz-Lc7iRtJdhiTnVMySo6MrdM72kBGPj4FDIqjKQJTQEbl_EJuwigZP_cq4y3bj85L2qLrKs1twmICIcuVtQV0R1e6Rw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg5KA8i27ycWLb5CIg_3JdBq7Cx2sGoiQ-BBhZBFy-hgAJ2gnYUAG9ax2ORxXv5sMZ46srr5pSwodxrt96cXRWUAAVA5WugyPmz7qbJK9ghN5ZZlEoJA3nQw5Eb7K9BYWRCbuz3tT3sSDrBhxDHPsrzaH0llGEkTzZGcbDC9TsRsAVkWGOLLldtoqb1fgTLRbgZrchp0LxF8sF2zyijvKhrWRw2eAOJY18_r8auq-HJKoWh6c4HP8_gw",
    ],
    flavors: [
      "Raspberry Dream",
      "Classic Vanilla",
      "Pistachio Velvet",
      "Dark Truffle",
    ],
    sizes: ["Single (1 pc)", "Box of 4", "Party Box (12 pcs)"],
    bgColor: "#e0f2fe",
    ingredients: [
      "French Choux Pastry (Butter, Flour, Eggs, Salt)",
      "Raspberry Mascarpone Cream (Organic Raspberries, Mascarpone, Heavy Cream, Pure Cane Sugar)",
      "Glossy Raspberry Mirror Glaze",
      "Edible 24k Gold Leaf & Fresh Raspberries",
    ],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage:
      "Keep refrigerated between 2°C – 5°C. Consume within 24 hours for best crispness.",
  },
  {
    id: "rose-pistachio-dream",
    name: "Rose & Pistachio Dream",
    category: "Celebration Cakes",
    price: 65,
    originalPrice: 75,
    rating: 5.0,
    reviewsCount: 94,
    isBestseller: true,
    description:
      "Layered sponge cake infused with organic rose water, filled with crushed Sicilian pistachio praline cream and adorned with edible flower petals.",
    longDescription:
      "A masterpiece of delicate floral and nutty notes. Light rose-scented chiffon cake layered with roasted pistachio cream and finished with pastel pink Swiss buttercream.",
    images: [
      "https://liliyum.com/cdn/shop/files/Blueberry_cake_540x.jpg?v=1774103245"],
    flavors: ["Rose & Pistachio", "Cardamom Vanilla"],
    sizes: ["0.5 kg (Serves 4-6)", "1 kg (Serves 8-10)", "2 kg (Serves 15-20)"],
    bgColor: "#fce7f3",
    ingredients: [
      "Rose Chiffon Sponge",
      "Sicilian Pistachio Paste",
      "Organic Rose Petals",
      "Swiss Buttercream",
    ],
    allergens: [
      "Contains Tree Nuts (Pistachio)",
      "Contains Dairy",
      "Contains Eggs",
      "Contains Gluten",
    ],
    storage:
      "Refrigerate upon arrival. Bring to room temperature 20 minutes before serving.",
  },
  {
    id: "belgian-dark-truffle",
    name: "Belgian Dark Truffle",
    category: "Belgian Chocolates",
    price: 70,
    rating: 4.9,
    reviewsCount: 88,
    isBestseller: true,
    description:
      "Rich 70% dark Belgian chocolate ganache layered with moist cocoa cake and finished with hand-rolled artisan truffles.",
    longDescription:
      "For true chocolate connoisseurs. Made exclusively with 70% Callebaut dark chocolate from Belgium, layered with velvety cocoa ganache.",
    images: [
      "https://liliyum.com/cdn/shop/files/Mango_Tres_Leches_540x.jpg?v=1776248681"],
    flavors: ["70% Dark Chocolate", "Dark Orange Truffle"],
    sizes: ["0.5 kg", "1 kg", "1.5 kg"],
    bgColor: "#f5f5f4",
    ingredients: [
      "70% Belgian Dark Chocolate",
      "Pure Cocoa Powder",
      "Organic Butter",
      "Vanilla Extract",
    ],
    allergens: ["Contains Dairy", "Contains Gluten"],
    storage: "Store in a cool dry place or refrigerate.",
  },
  {
    id: "classic-vanilla-bean",
    name: "Classic Vanilla Bean",
    category: "Celebration Cakes",
    price: 52,
    rating: 4.8,
    reviewsCount: 62,
    isBestseller: false,
    isNew: true,
    description:
      "Madagascar bourbon vanilla sponge layered with fluffy vanilla bean mousse and fresh berry compote.",
    longDescription:
      "Timeless elegance in every slice. Fragrant with natural speckles of real Madagascar vanilla pod, complemented by a light whipped cream frosting.",
    images: [
      "https://liliyum.com/cdn/shop/files/BlueandGoldBirthdayCake_540x.jpg?v=1687825140"],
    flavors: ["Madagascar Vanilla", "Vanilla Raspberry"],
    sizes: ["0.5 kg", "1 kg"],
    bgColor: "#fef3c7",
    ingredients: [
      "Madagascar Vanilla Bean",
      "Organic Flour",
      "Fresh Cream",
      "Wild Berry Compote",
    ],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage: "Keep chilled.",
  },
  {
    id: "wedding-anniversary-grand",
    name: "Grand Wedding & Anniversary Tier",
    category: "Celebration Cakes",
    price: 180,
    rating: 5.0,
    reviewsCount: 45,
    isBestseller: true,
    description:
      "Multi-tiered showstopper adorned with handcrafted sugar flowers, delicate gold leaf work, and customizable gourmet fillings.",
    longDescription:
      "Designed for extraordinary moments. Crafted custom for your event with choices of champagne sponge, rose pistachio, or chocolate hazelnut praline.",
    images: [
      "https://liliyum.com/cdn/shop/products/Birthdaycakebrownies_540x.jpg?v=1630921524"],
    flavors: [
      "Champagne & Strawberry",
      "Belgian Chocolate Hazelnut",
      "Rose Pistachio",
    ],
    sizes: ["2 Tier (Serves 25-30)", "3 Tier (Serves 50+)"],
    bgColor: "#fef2f2",
    ingredients: [
      "Custom Gourmet Fillings",
      "Swiss Fondant",
      "Sugar Flowers",
      "Gold Leaf",
    ],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Tree Nuts"],
    storage: "Delivered in temperature-controlled display boxes.",
  },
  {
    id: "artisan-gifting-hamper",
    name: "Artisan Celebration Hamper",
    category: "Hampers",
    price: 95,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 78,
    isBestseller: true,
    description:
      "Curated collection of Belgian pralines, butter sablé cookies, macarons, and artisanal roasted cocoa nibs in a velvet box.",
    longDescription:
      "The ultimate gift box for celebrations. Packed with handpicked Liliyum favorites including 12 hand-decorated chocolates and freshly baked sablés.",
    images: [
      "https://liliyum.com/cdn/shop/files/lineartbirthdaycake_540x.jpg?v=1715160029"],
    flavors: ["Grand Assortment"],
    sizes: ["Standard Hamper", "Deluxe Velvet Hamper"],
    bgColor: "#ecfdf5",
    ingredients: [
      "Belgian Pralines",
      "Butter Sablé",
      "Macarons",
      "Roasted Cocoa Nibs",
    ],
    allergens: ["Contains Tree Nuts", "Contains Dairy", "Contains Gluten"],
    storage: "Store in a cool dry place.",
  },
  {
    id: "basque-burnt-cheesecake",
    name: "San Sebastián Burnt Cheesecake",
    category: "Cheesecakes",
    price: 58,
    rating: 4.9,
    reviewsCount: 110,
    isBestseller: true,
    description:
      "Caramelized deeply on top with a silky, ultra-creamy molten center. Made with Spanish cream cheese and vanilla bean.",
    longDescription:
      "Our iconic Basque cheesecake with its signature caramelized crust and insanely gooey interior. Perfectly balanced with a pinch of sea salt.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCv_ETh6N6M4Y2pkvVDa2rJchw0cYqYGcPXdsy1NjelL3bcwl-jhe37WWM_MoGbR8HOaE29RitgBzBniu1Gnbj1k-uOEfMTzMjti7KGkgWh2y7gcxA3gYdNq5_Iszg7Noy1CkwK2QnjZR2i-6nJsXHQ6WJVdD3MLvW-Sz2XwMGJgxqPnlbT1q3XOiUgQRHcGfZD9pAt3cPzBQWnCHG29ZkZ50i9jYI6RxdPUEyzuS5yz9jBrCfbQzl_rg",
    ],
    flavors: ["Original Cream Cheese", "Nutella Swirl", "Matcha Lava"],
    sizes: ["6 inch (Serves 4-6)", "8 inch (Serves 8-10)"],
    bgColor: "#fff7ed",
    ingredients: [
      "Spanish Cream Cheese",
      "Heavy Cream",
      "Eggs",
      "Organic Sugar",
      "Vanilla",
    ],
    allergens: ["Contains Dairy", "Contains Eggs"],
    storage: "Keep refrigerated.",
  },
  {
    id: "pistachio-raspberry-trio",
    name: "Pistachio & Raspberry Tart Trio",
    category: "Luxury Indulgence",
    price: 36,
    rating: 4.8,
    reviewsCount: 52,
    isNew: true,
    description:
      "Crisp almond sable tart shells filled with pistachio frangipane, tart raspberry jam, and topped with fresh raspberries.",
    longDescription:
      "An exquisite balance of textures. Butter pastry filled with almond pistachio frangipane and fresh seasonal berries.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsKBB9Tn7e8Q8sY93K6N9734Ex-coBiUSTXcAk6GusMFyVoyMq5ugWe4-HgGCrXrVwM7MCOO9firIQZ47CnOsTGMFcQo1LysBGB1prH2TXRgsc7P2hOHOx1IawGRSgSovw-6Bo2WZARLRHXk0X5dxK5gpZbBep09Qe1GijY9HBa55uz0ZgoYSdtuIkj9q4HNbSdK-LmNb3jZ4x-yruF_vcS996qiAPrN_4y993sUNFlYEID5JX8zKuZw",
    ],
    flavors: ["Raspberry Pistachio"],
    sizes: ["Box of 3", "Box of 6"],
    bgColor: "#edf2f7",
    ingredients: [
      "Butter Sablé Crust",
      "Pistachio Frangipane",
      "Fresh Raspberries",
    ],
    allergens: [
      "Contains Tree Nuts",
      "Contains Dairy",
      "Contains Eggs",
      "Contains Gluten",
    ],
    storage: "Refrigerate.",
  },
];
