import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'eclair-raspberry',
    name: 'Signature Raspberry Eclair',
    category: 'Luxury Indulgence',
    price: 18,
    originalPrice: 22,
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
    description: "A little slice of summer joy. Our perfectly crisp choux pastry is piped full of a light, tart raspberry mascarpone cream, finished with a mirror glaze and fresh berries.",
    longDescription: "Treat yourself to a moment of lil' yum. Handcrafted daily with French choux dough, fresh organic raspberry reduction, and silky mascarpone. Each eclair is finished with edible 24k gold leaf and fresh raspberries.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6CzmM5FRhKRqE6QEuIcKIM_O7g3djdKjIVBCOxzSSRJL03nKKj8_WzkmvT-5EYCCZNr0oL_P8O-RY0heEzdPliBmPuOR-iBynIJhb2mEBnB0O3Be1rlDycaAFQMP8Cw-N0V9TlkCuwVWcOVNSBVd3QipsLCTAnnjBT_kRgbhhojwtSIkO-Z8Kx2iKb_rtGahDvI0mGWJt__QO35bAUnHQutrftiaC6_h9Z2jwoDz20jaIaOAwsmpWow",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDtSnXaXul8Wf746rCHmGAyjnUQXNDI4RoLZ3kPCXli24nPQ-TbyK3k6ZnYCccTh4NV3uuxjp59TRL5l4wYfhX3LTb8xO78FOHicBZ6PKqW-bo3FgxdSIhhzCEcjuTlAWwbrSjwne_XnRLkm9WqsXGM3FtwkZePYRLE6c44GirBCx-BHdEeloFT0BV5J6dIEvskujTn9xmWPqZ8tzNM8qdcN--QECwXca7gtsunBmcRDk67rpYG4_u8A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBynagwxGZMHQPfV3dMmoWo5GeAv9UWDWXIbVPVnaNO3K4L0Uo1CUItac6NIMnOvPsJUu7_mD1w_vXOdqboxQCCGAxxGGDObP05tmx3iWaX-OT5S0NzXHonnmrZywtlYZlhQZbB9mkiNtDnl5B9dWP7qevCXddz-Lc7iRtJdhiTnVMySo6MrdM72kBGPj4FDIqjKQJTQEbl_EJuwigZP_cq4y3bj85L2qLrKs1twmICIcuVtQV0R1e6Rw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg5KA8i27ycWLb5CIg_3JdBq7Cx2sGoiQ-BBhZBFy-hgAJ2gnYUAG9ax2ORxXv5sMZ46srr5pSwodxrt96cXRWUAAVA5WugyPmz7qbJK9ghN5ZZlEoJA3nQw5Eb7K9BYWRCbuz3tT3sSDrBhxDHPsrzaH0llGEkTzZGcbDC9TsRsAVkWGOLLldtoqb1fgTLRbgZrchp0LxF8sF2zyijvKhrWRw2eAOJY18_r8auq-HJKoWh6c4HP8_gw"
    ],
    flavors: ['Raspberry Dream', 'Classic Vanilla', 'Pistachio Velvet', 'Dark Truffle'],
    sizes: ['Single (1 pc)', 'Box of 4', 'Party Box (12 pcs)'],
    bgColor: '#e0f2fe',
    ingredients: [
      "French Choux Pastry (Butter, Flour, Eggs, Salt)",
      "Raspberry Mascarpone Cream (Organic Raspberries, Mascarpone, Heavy Cream, Pure Cane Sugar)",
      "Glossy Raspberry Mirror Glaze",
      "Edible 24k Gold Leaf & Fresh Raspberries"
    ],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage: "Keep refrigerated between 2°C – 5°C. Consume within 24 hours for best crispness."
  },
  {
    id: 'rose-pistachio-dream',
    name: 'Rose & Pistachio Dream',
    category: 'Celebration Cakes',
    price: 65,
    originalPrice: 75,
    rating: 5.0,
    reviewsCount: 94,
    isBestseller: true,
    description: "Layered sponge cake infused with organic rose water, filled with crushed Sicilian pistachio praline cream and adorned with edible flower petals.",
    longDescription: "A masterpiece of delicate floral and nutty notes. Light rose-scented chiffon cake layered with roasted pistachio cream and finished with pastel pink Swiss buttercream.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXfiegZilIAKEhjtLNYEPEU8Pn04mZ-QtHmOYkMK0o32KNIHOFbaeXNxrC6GvaWBqSRi8qPgJhHHSX-z1BLdPJrB8a-NkReK3Tv6xg0Y0TMP2N-EppWA-cUWuimCc3UjSmK0X4_9DOy2x4SPiVtECh0-k73AHL7nM8HrhDeEz0BMd499E8zGB96doKe4Sw95G6M4Lvm-Q_hHWoXac-PJ8KYeMktA5RvqG1tsFVUEF11KBOE_ZcWDFUw"
    ],
    flavors: ['Rose & Pistachio', 'Cardamom Vanilla'],
    sizes: ['0.5 kg (Serves 4-6)', '1 kg (Serves 8-10)', '2 kg (Serves 15-20)'],
    bgColor: '#fce7f3',
    ingredients: ["Rose Chiffon Sponge", "Sicilian Pistachio Paste", "Organic Rose Petals", "Swiss Buttercream"],
    allergens: ["Contains Tree Nuts (Pistachio)", "Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage: "Refrigerate upon arrival. Bring to room temperature 20 minutes before serving."
  },
  {
    id: 'belgian-dark-truffle',
    name: 'Belgian Dark Truffle',
    category: 'Belgian Chocolates',
    price: 70,
    rating: 4.9,
    reviewsCount: 88,
    isBestseller: true,
    description: "Rich 70% dark Belgian chocolate ganache layered with moist cocoa cake and finished with hand-rolled artisan truffles.",
    longDescription: "For true chocolate connoisseurs. Made exclusively with 70% Callebaut dark chocolate from Belgium, layered with velvety cocoa ganache.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLvPR8LLvJ_pp7xVL-jzgZxglw1qaKRoloCCQHYQJ895N17WGIKqhOJcDSGWG1swoHU95KDrCMhagpBFf8SODMiAvmj9S0W1NL9BqpOJtzZxWqcOipMYPJQIW8hqCi5NfnLruuT9lc24vGnhdT9BPUcpuwFHVI666IGxfTLGVIl7PxMnZQwKZuHxL-eMKD1Omhr0GpzHNjm2l8wOQ8N3kfdLeTgiBPxg5WBzivas_jUfFi4ScX1Y71jw"
    ],
    flavors: ['70% Dark Chocolate', 'Dark Orange Truffle'],
    sizes: ['0.5 kg', '1 kg', '1.5 kg'],
    bgColor: '#f5f5f4',
    ingredients: ["70% Belgian Dark Chocolate", "Pure Cocoa Powder", "Organic Butter", "Vanilla Extract"],
    allergens: ["Contains Dairy", "Contains Gluten"],
    storage: "Store in a cool dry place or refrigerate."
  },
  {
    id: 'classic-vanilla-bean',
    name: 'Classic Vanilla Bean',
    category: 'Celebration Cakes',
    price: 52,
    rating: 4.8,
    reviewsCount: 62,
    isBestseller: false,
    isNew: true,
    description: "Madagascar bourbon vanilla sponge layered with fluffy vanilla bean mousse and fresh berry compote.",
    longDescription: "Timeless elegance in every slice. Fragrant with natural speckles of real Madagascar vanilla pod, complemented by a light whipped cream frosting.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcfVxvD63nOb6ddCz9-03Gk29-XTL4talZQVswIF_7IgSm0EswmbdbNzEez9zj5zI04i7rBvPhX6FS5CsWPp40haqcRSXkI1qAXMUvzmRiB7YssRqM88OTTgh5ffLhFbhArCCCR8Uiw7aUcfF0u8-6Lyntv3kzY_7ISdiNNpcL0nNgzgCgBvOfoJXkq1W4FlPsdNbVViGWqJDnq83yjTHVF9tAKigqzfvAHQ_h9OVHgEG55Ias9-6BOQ"
    ],
    flavors: ['Madagascar Vanilla', 'Vanilla Raspberry'],
    sizes: ['0.5 kg', '1 kg'],
    bgColor: '#fef3c7',
    ingredients: ["Madagascar Vanilla Bean", "Organic Flour", "Fresh Cream", "Wild Berry Compote"],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage: "Keep chilled."
  },
  {
    id: 'wedding-anniversary-grand',
    name: 'Grand Wedding & Anniversary Tier',
    category: 'Celebration Cakes',
    price: 180,
    rating: 5.0,
    reviewsCount: 45,
    isBestseller: true,
    description: "Multi-tiered showstopper adorned with handcrafted sugar flowers, delicate gold leaf work, and customizable gourmet fillings.",
    longDescription: "Designed for extraordinary moments. Crafted custom for your event with choices of champagne sponge, rose pistachio, or chocolate hazelnut praline.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqlo_bt3Uj52NUK36a5-Y2hBm3DbUiZLcKbIJaU7ius_iTlJ9WwiJv8frIVxuf8fBCg9wCN0aTTd1D7FtWwDbExU-Ak01yMbSbZ9Jl6DUFB_xUQHkPr615Y3pCuPEcitlJ7-_znLMUVNOOD3dXo-QllTlbhXjS88ryIYYE135ETIoPNZuEJOjLe0QZT_nl00O6xcRA9XVFlQluzUky9AMmASMBs3ft9K7v5LinJJRTk7Y06ZRVmRt6tg"
    ],
    flavors: ['Champagne & Strawberry', 'Belgian Chocolate Hazelnut', 'Rose Pistachio'],
    sizes: ['2 Tier (Serves 25-30)', '3 Tier (Serves 50+)'],
    bgColor: '#fef2f2',
    ingredients: ["Custom Gourmet Fillings", "Swiss Fondant", "Sugar Flowers", "Gold Leaf"],
    allergens: ["Contains Dairy", "Contains Eggs", "Contains Tree Nuts"],
    storage: "Delivered in temperature-controlled display boxes."
  },
  {
    id: 'artisan-gifting-hamper',
    name: 'Artisan Celebration Hamper',
    category: 'Hampers',
    price: 95,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 78,
    isBestseller: true,
    description: "Curated collection of Belgian pralines, butter sablé cookies, macarons, and artisanal roasted cocoa nibs in a velvet box.",
    longDescription: "The ultimate gift box for celebrations. Packed with handpicked Liliyum favorites including 12 hand-decorated chocolates and freshly baked sablés.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7bz0dSDS8Z3e6LqqNrkk3CCrxc68LD2XZ5-x371Y-FMROxkqSxuV-9xkbVDBCNPeBCznW_mbwoFcGGWSnrIg9AXciZik_iADS0K7doVy0Wrb_h5wIk3IWZRClNXVTZU-bij2kIUrSsyOJ1dv4wFlR5PU1Co9J-A2xDQ5KXzYykwvCyyulDB7a8gE27Jou-5ISgvo9C0P4cse6rVgIkhUO7ez5ichPfjznVKwFs06vJx_EOGG9g8RQQw"
    ],
    flavors: ['Grand Assortment'],
    sizes: ['Standard Hamper', 'Deluxe Velvet Hamper'],
    bgColor: '#ecfdf5',
    ingredients: ["Belgian Pralines", "Butter Sablé", "Macarons", "Roasted Cocoa Nibs"],
    allergens: ["Contains Tree Nuts", "Contains Dairy", "Contains Gluten"],
    storage: "Store in a cool dry place."
  },
  {
    id: 'basque-burnt-cheesecake',
    name: 'San Sebastián Burnt Cheesecake',
    category: 'Cheesecakes',
    price: 58,
    rating: 4.9,
    reviewsCount: 110,
    isBestseller: true,
    description: "Caramelized deeply on top with a silky, ultra-creamy molten center. Made with Spanish cream cheese and vanilla bean.",
    longDescription: "Our iconic Basque cheesecake with its signature caramelized crust and insanely gooey interior. Perfectly balanced with a pinch of sea salt.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCv_ETh6N6M4Y2pkvVDa2rJchw0cYqYGcPXdsy1NjelL3bcwl-jhe37WWM_MoGbR8HOaE29RitgBzBniu1Gnbj1k-uOEfMTzMjti7KGkgWh2y7gcxA3gYdNq5_Iszg7Noy1CkwK2QnjZR2i-6nJsXHQ6WJVdD3MLvW-Sz2XwMGJgxqPnlbT1q3XOiUgQRHcGfZD9pAt3cPzBQWnCHG29ZkZ50i9jYI6RxdPUEyzuS5yz9jBrCfbQzl_rg"
    ],
    flavors: ['Original Cream Cheese', 'Nutella Swirl', 'Matcha Lava'],
    sizes: ['6 inch (Serves 4-6)', '8 inch (Serves 8-10)'],
    bgColor: '#fff7ed',
    ingredients: ["Spanish Cream Cheese", "Heavy Cream", "Eggs", "Organic Sugar", "Vanilla"],
    allergens: ["Contains Dairy", "Contains Eggs"],
    storage: "Keep refrigerated."
  },
  {
    id: 'pistachio-raspberry-trio',
    name: 'Pistachio & Raspberry Tart Trio',
    category: 'Luxury Indulgence',
    price: 36,
    rating: 4.8,
    reviewsCount: 52,
    isNew: true,
    description: "Crisp almond sable tart shells filled with pistachio frangipane, tart raspberry jam, and topped with fresh raspberries.",
    longDescription: "An exquisite balance of textures. Butter pastry filled with almond pistachio frangipane and fresh seasonal berries.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsKBB9Tn7e8Q8sY93K6N9734Ex-coBiUSTXcAk6GusMFyVoyMq5ugWe4-HgGCrXrVwM7MCOO9firIQZ47CnOsTGMFcQo1LysBGB1prH2TXRgsc7P2hOHOx1IawGRSgSovw-6Bo2WZARLRHXk0X5dxK5gpZbBep09Qe1GijY9HBa55uz0ZgoYSdtuIkj9q4HNbSdK-LmNb3jZ4x-yruF_vcS996qiAPrN_4y993sUNFlYEID5JX8zKuZw"
    ],
    flavors: ['Raspberry Pistachio'],
    sizes: ['Box of 3', 'Box of 6'],
    bgColor: '#edf2f7',
    ingredients: ["Butter Sablé Crust", "Pistachio Frangipane", "Fresh Raspberries"],
    allergens: ["Contains Tree Nuts", "Contains Dairy", "Contains Eggs", "Contains Gluten"],
    storage: "Refrigerate."
  }
];
